// 核心引擎
window.Game = {
    state: {
        name: "",
        route: "normal",
        currentDay: 1,
        scene: [],
        index: 0,
        waiting: false,
        chatWaiting: false,
        freeChatMode: false,
        currentChatTarget: 'group',
        chatHistory: { group: [], peter: [], lanlan: [], ora: [] },
        currentSceneId: "",
        bgm: null,
        poemScore: { peter: 0, lanlan: 0, ora: 0 },
        affection: { peter: 0, lanlan: 0, ora: 0 },
        ge: { peter: 0, lanlan: 0, ora: 0 },
        isTyping: false,
        currentText: "",
        dailyMsgCount: { peter: 0, lanlan: 0, ora: 0 },
        momentsComments: {},
        lastCraftedItem: "",
        dialogueLog: [],
        isSkipping: false,
        triggeredEvents: [], // 記錄已觸發的好感度事件
        settings: { bgmVolume: 0.5, seVolume: 1.0 }
    },

    typeInterval: null,
    skipInterval: null,

    init: function () {
        console.log("Game Core Initializing...");

        // 聚合所有劇本對象
        this.fullScript = {};
        const scripts = [
            'day1_script', 'day2_script', 'day3_script', 'day4_script', 'day5_script',
            'affection_events', 'peter_special_events', 'lanlan_special_events', 'ora_special_events'
        ];
        
        scripts.forEach(s => {
            if (window[s]) {
                Object.assign(this.fullScript, window[s]);
            } else {
                console.warn(`Script object window.${s} is missing.`);
            }
        });

        window.ChatSystem.init(this);
        window.Minigame.init(this);
        window.MapSystem.init(this);

        window.Game = this;
        
        // 確保基本 UI 狀態
        const startScreen = document.getElementById('start-screen');
        if (startScreen) {
            startScreen.classList.remove('hidden');
            startScreen.classList.add('active');
        }

        console.log("Game Core Ready. Scenes:", Object.keys(this.fullScript).length);
    },

    start: function () {
        console.log("Game.start() triggered.");
        try {
            const inputElem = document.getElementById('player-name');
            const input = inputElem ? inputElem.value.trim() : "";
            if (!input) return alert("請輸入名字！");

            this.state.name = input;
            this.state.currentDay = 1;
            this.state.dialogueLog = [];
            this.state.isSkipping = false;
            this.state.affection = { peter: 0, lanlan: 0, ora: 0 };
            this.state.ge = { peter: 0, lanlan: 0, ora: 0 };

            const se = document.getElementById('se-click');
            if (se) {
                se.play().catch(e => console.warn("SE play blocked:", e));
            }

            // 判斷路線
            if (["林恩", "Lynn"].includes(input)) {
                this.state.route = "lynn";
                this.state.affection.peter = 100;
            } else if (["喬諾娜", "Jornona", "蘇郎"].includes(input)) {
                this.state.route = "jornona";
                this.state.affection.lanlan = 100;
            } else if (["蜜拉思", "Melas"].includes(input)) {
                this.state.route = "melas";
                this.state.affection.ora = 100;
            } else {
                this.state.route = "normal";
            }

            this.applyTheme();

            // 切換 UI 層
            const layers = {
                'start-screen': { add: 'hidden', remove: 'active' },
                'ui-layer': { add: 'active', remove: 'hidden' },
                'char-layer': { remove: 'hidden' },
                'bg-layer': { add: 'active' }
            };

            for (const [id, actions] of Object.entries(layers)) {
                const el = document.getElementById(id);
                if (el) {
                    if (actions.add) el.classList.add(actions.add);
                    if (actions.remove) el.classList.remove(actions.remove);
                }
            }
            
            this.playBGM("peace");
            
            if (this.fullScript && this.fullScript["day1_intro"]) {
                this.loadScene("day1_intro");
            } else {
                throw new Error("找不到開場劇情場景 (day1_intro)。");
            }
        } catch (e) {
            console.error("CRITICAL Start Error:", e);
            alert("遊戲啟動失敗，請查看主控台錯誤訊息: " + e.message);
        }
    },

    applyTheme: function () {
        const root = document.documentElement;
        const colors = window.COLORS || { lynn: "#ff4081", jornona: "#ffeb3b", melas: "#00bcd4", normal: "#fca7d7" };
        
        if (this.state.route === "lynn") {
            root.style.setProperty('--player-color', colors.lynn);
        } else if (this.state.route === "jornona") {
            root.style.setProperty('--player-color', colors.jornona);
        } else if (this.state.route === "melas") {
            root.style.setProperty('--player-color', colors.melas);
        } else {
            root.style.setProperty('--player-color', colors.normal);
        }
    },

    updateAffection: function (char, amount) {
        if (amount === 0) return;

        if (!this.state.affection[char]) this.state.affection[char] = 0;
        this.state.affection[char] += amount;

        const notify = document.createElement("div");
        notify.className = "notify-bubble";

        const color = amount > 0 ? '#ff4081' : '#555';
        const sign = amount > 0 ? '+' : '';
        const nameMap = { peter: '彼得', lanlan: '蘭蘭', ora: '奧拉' };

        notify.style.backgroundColor = color;
        notify.innerText = `${nameMap[char] || char} 好感度 ${sign}${amount}`;

        const area = document.getElementById("notification-area");
        if (area) {
            area.appendChild(notify);
            setTimeout(() => {
                if (notify.parentNode) notify.remove();
            }, 2500);
        }
    },

    updateGe: function (char, amount) {
        if (amount === 0) return;
        if (!this.state.ge[char]) this.state.ge[char] = 0;
        this.state.ge[char] += amount;
    },

    playBGM: function (key) {
        const audio = document.getElementById('bgm-player');
        if (audio && window.ASSETS.bgm[key]) {
            audio.src = window.ASSETS.bgm[key];
            this.state.bgm = key;
            audio.volume = this.state.settings.bgmVolume;
            audio.play().catch(e => console.log("Audio play failed:", e));
        }
    },

    setBgmVolume: function (val) {
        this.state.settings.bgmVolume = val;
        const audio = document.getElementById('bgm-player');
        if (audio) audio.volume = val;
    },

    setSeVolume: function (val) {
        this.state.settings.seVolume = val;
    },

    preloadAssets: function() {
        const btn = document.getElementById("preload-btn");
        if (btn.disabled) return;
        btn.disabled = true;
        btn.innerText = "載入中 (0%)...";

        let total = 0;
        let loaded = 0;
        const urls = new Set();
        
        if (window.ASSETS) {
            if (window.ASSETS.bg) Object.values(window.ASSETS.bg).forEach(u => urls.add(u));
            if (window.ASSETS.char) {
                Object.values(window.ASSETS.char).forEach(charObj => {
                    Object.values(charObj).forEach(u => urls.add(u));
                });
            }
            if (window.ASSETS.avatar) Object.values(window.ASSETS.avatar).forEach(u => urls.add(u));
        }

        urls.add("https://file.garden/aWe99vhwaGcNwkok/DOKIDOKI/OP.mp4");

        const updateProgress = () => {
            loaded++;
            const percent = Math.floor((loaded / total) * 100);
            btn.innerText = `載入中 (${percent}%)...`;
            if (loaded >= total) {
                btn.innerText = "素材載入完成";
                setTimeout(() => { btn.style.display = 'none'; }, 2000);
            }
        };

        total = urls.size;
        if (total === 0) {
             btn.innerText = "無需載入";
             return;
        }

        urls.forEach(url => {
            if (url.endsWith(".mp4") || url.endsWith(".mp3")) {
                const media = document.createElement(url.endsWith(".mp4") ? "video" : "audio");
                media.preload = "auto";
                media.src = url;
                media.oncanplaythrough = updateProgress;
                media.onerror = updateProgress;
            } else {
                const img = new Image();
                img.onload = updateProgress;
                img.onerror = updateProgress;
                img.src = url;
            }
        });
    },

    getRouteScene: function (baseKey) {
        const route = this.state.route;
        const variantKey = `${baseKey}_${route}`;
        if (this.fullScript[variantKey]) {
            return [...this.fullScript[variantKey]];
        }
        return this.fullScript[baseKey] ? [...this.fullScript[baseKey]] : null;
    },

    loadScene: function (key, isRestore = false) {
        console.log(`Loading Scene: ${key}`);
        if (!this.fullScript) {
            console.error("fullScript is undefined during loadScene!");
            alert("系統錯誤：劇本資料庫未初始化。");
            return;
        }
        
        this.state.currentSceneId = key;

        if (key.includes("minigame") || key.includes("chat")) {
            this.stopSkip();
        }

        this.hideSprite();

        let sceneData = null;

        // 特殊場景處理
        if (key === "day1_club_entry") {
            const entryKey = this.state.route === "lynn" ? "day1_club_lynn" :
                             this.state.route === "jornona" ? "day1_club_jornona" :
                             this.state.route === "melas" ? "day1_club_melas" : "day1_club_entry";
            sceneData = this.fullScript[entryKey] ? [...this.fullScript[entryKey]] : null;
        }
        else if (key === "day1_night_chat") {
            if (this.fullScript.day1_chat_start && this.fullScript.day1_chat_content) {
                let chatContent = [...this.fullScript.day1_chat_content];
                if (this.state.route === "lynn" && this.fullScript.day1_chat_content_lynn) {
                    chatContent = [...this.fullScript.day1_chat_content_lynn];
                } else if (this.state.route === "jornona" && this.fullScript.day1_chat_content_jornona) {
                    chatContent = [...this.fullScript.day1_chat_content_jornona];
                } else if (this.state.route === "melas" && this.fullScript.day1_chat_content_melas) {
                    chatContent = [...this.fullScript.day1_chat_content_melas];
                }
                sceneData = [...this.fullScript.day1_chat_start, ...chatContent];
                window.ChatSystem.switchSnsTab('chat');
                window.ChatSystem.initContactList();
            }
        }
        else if (key === "day2_night_chat") {
            if (this.fullScript.day2_chat_start && this.fullScript.day2_night_chat_content) {
                let chatContent = [...this.fullScript.day2_night_chat_content];
                if (this.state.route === "lynn" && this.fullScript.day2_night_chat_content_lynn) {
                    chatContent = [...this.fullScript.day2_night_chat_content_lynn];
                } else if (this.state.route === "jornona" && this.fullScript.day2_night_chat_content_jornona) {
                    chatContent = [...this.fullScript.day2_night_chat_content_jornona];
                } else if (this.state.route === "melas" && this.fullScript.day2_night_chat_content_melas) {
                    chatContent = [...this.fullScript.day2_night_chat_content_melas];
                }
                sceneData = [...this.fullScript.day2_chat_start, ...chatContent];
                window.ChatSystem.switchSnsTab('chat');
                window.ChatSystem.initContactList();
            }
        }
        else if (key === "day3_night_chat") {
            if (this.fullScript.day3_chat_start && this.fullScript.day3_night_chat_content) {
                sceneData = [...this.fullScript.day3_chat_start, ...this.fullScript.day3_night_chat_content];
                window.ChatSystem.switchSnsTab('chat');
                window.ChatSystem.initContactList();
            }
        }
        else {
            sceneData = this.getRouteScene(key);
        }

        if (!sceneData) {
            console.error(`Scene not found: ${key}`);
            this.stopSkip();
            return;
        }

        this.state.scene = sceneData;
        this.state.index = isRestore ? this.state.index : -1;
        this.state.waiting = false;
        this.state.freeChatMode = false;

        if (isRestore) {
            if (this.state.scene[this.state.index]) {
                this.render(this.state.scene[this.state.index]);
            } else {
                this.next();
            }
        } else {
            this.next();
        }
    },

    hideSprite: function () {
        const charImg = document.getElementById("char-img");
        if (charImg) {
            charImg.style.display = "none";
            charImg.src = "";
        }
    },

    toggleSkip: function () {
        this.state.isSkipping = !this.state.isSkipping;
        const indicator = document.getElementById("skip-indicator");
        const status = document.getElementById("skip-status");

        if (this.state.isSkipping) {
            indicator.style.display = "block";
            status.innerText = "(ON)";
            this.next();
        } else {
            this.stopSkip();
        }
    },

    stopSkip: function () {
        this.state.isSkipping = false;
        document.getElementById("skip-indicator").style.display = "none";
        document.getElementById("skip-status").innerText = "";
    },

    toggleMenu: function () {
        const menu = document.getElementById("menu-modal");
        menu.classList.toggle("active");
    },

    toggleAffection: function () {
        const modal = document.getElementById("affection-modal");
        if (!modal.classList.contains("active")) {
            this.updateAffectionDisplay();
        }
        modal.classList.toggle("active");
    },

    updateAffectionDisplay: function () {
        document.getElementById("aff-peter").innerText = `彼得: ${this.state.affection.peter}`;
        document.getElementById("aff-lanlan").innerText = `蘭蘭: ${this.state.affection.lanlan}`;
        document.getElementById("aff-ora").innerText = `奧拉: ${this.state.affection.ora}`;
    },

    next: function () {
        if (document.getElementById("menu-modal").classList.contains("active")) {
            this.toggleMenu();
            return;
        }
        if (document.getElementById("affection-modal").classList.contains("active")) {
            this.toggleAffection();
            return;
        }
        if (document.getElementById("log-layer") && !document.getElementById("log-layer").classList.contains("hidden")) {
            return;
        }
        if (document.getElementById("map-layer") && !document.getElementById("map-layer").classList.contains("hidden")) {
            return;
        }

        if (this.state.waiting || this.state.chatWaiting || this.state.freeChatMode) {
            this.stopSkip();
            return;
        }

        if (this.state.isTyping) {
            clearInterval(this.typeInterval);
            document.getElementById("dialogue-text").innerText = this.state.currentText;
            this.state.isTyping = false;
            if (this.state.isSkipping) {
                setTimeout(() => this.next(), 100);
            }
            return;
        }

        const se = document.getElementById('se-click');
        if (se && !this.state.isSkipping) {
            se.volume = this.state.settings.seVolume;
            se.play().catch(e => { });
        }

        this.state.index++;

        const prevData = this.state.scene[this.state.index - 1];
        if (this.state.index >= this.state.scene.length) {
            if (prevData && prevData.target) {
                if (this.state.isSkipping) setTimeout(() => this.loadScene(prevData.target), 50);
                else this.loadScene(prevData.target);
                return;
            }
            this.handleSceneEnd();
            return;
        }

        const data = this.state.scene[this.state.index];
        this.render(data);

        if (this.state.isSkipping) {
            setTimeout(() => this.next(), 50);
        }
    },

    render: function (data) {
        if (!data) return;

        if (data.text) {
            const lastLog = this.state.dialogueLog[this.state.dialogueLog.length - 1];
            let speaker = data.name;
            if (!speaker && data.char) {
                if (data.char === 'peter') speaker = "彼得";
                else if (data.char === 'lanlan') speaker = "蘭蘭";
                else if (data.char === 'ora') speaker = "奧拉";
            }
            if (speaker === "我") speaker = this.state.name;

            if (data.text && (!lastLog || lastLog.text !== data.text)) {
                this.state.dialogueLog.push({ name: speaker || "", text: data.text });
            }
        }

        if (data.type === "chat") {
            this.stopSkip();
            window.ChatSystem.renderChat(data);
            return;
        }

        if (data.type === "choice") {
            this.stopSkip();
            if (this.state.currentSceneId && this.state.currentSceneId.includes("chat")) {
                window.ChatSystem.renderChat(data);
            } else {
                this.showChoices(data);
            }
            return;
        }

        document.getElementById("ui-layer").classList.remove("hidden");
        document.getElementById("sns-layer").classList.add("hidden");
        document.getElementById("sns-layer").classList.remove("active");

        if (data.bg && window.ASSETS.bg[data.bg]) {
            document.getElementById("bg-layer").style.backgroundImage = `url('${window.ASSETS.bg[data.bg]}')`;
        }
        if (data.bgm) this.playBGM(data.bgm);

        const charImg = document.getElementById("char-img");
        let charId = data.char;
        if (!charId && data.name) {
            const cleanName = data.name.split(' ')[0].trim();
            if (cleanName.includes("彼得")) charId = "peter";
            else if (cleanName.includes("蘭蘭")) charId = "lanlan";
            else if (cleanName.includes("奧拉")) charId = "ora";
        }

        if (charId && window.ASSETS.char[charId]) {
            let spriteUrl = "";
            const emotion = data.emotion || "normal";
            if (window.ASSETS.char[charId][emotion]) spriteUrl = window.ASSETS.char[charId][emotion];
            else if (window.ASSETS.char[charId]["normal"]) spriteUrl = window.ASSETS.char[charId]["normal"];
            else if (typeof window.ASSETS.char[charId] === 'string') spriteUrl = window.ASSETS.char[charId];

            if (spriteUrl) {
                charImg.src = spriteUrl;
                charImg.style.display = "block";
                charImg.className = "sprite";
                if (data.effect) charImg.classList.add(`anim-${data.effect}`);
            }
        }

        const nameTag = document.getElementById("name-tag");
        let displayName = data.name;
        if (displayName === "我") displayName = this.state.name;

        if (displayName) {
            nameTag.style.opacity = 1;
            nameTag.innerText = displayName;
            if (charId === "peter") nameTag.style.backgroundColor = window.COLORS.peter;
            else if (charId === "lanlan") nameTag.style.backgroundColor = window.COLORS.lanlan;
            else if (charId === "ora") nameTag.style.backgroundColor = window.COLORS.ora;
            else if (displayName === this.state.name) nameTag.style.backgroundColor = "var(--player-color)";
            else nameTag.style.backgroundColor = "var(--normal-color)";
        } else {
            nameTag.style.opacity = 0;
        }

        if (data.text) {
            this.state.currentText = data.text;
            this.state.isTyping = true;
            document.getElementById("dialogue-text").innerHTML = "";

            if (this.state.isSkipping) {
                document.getElementById("dialogue-text").innerText = data.text;
                this.state.isTyping = false;
            } else {
                let i = 0;
                if (this.typeInterval) clearInterval(this.typeInterval);
                this.typeInterval = setInterval(() => {
                    document.getElementById("dialogue-text").innerText += data.text.charAt(i);
                    i++;
                    if (i >= data.text.length) {
                        clearInterval(this.typeInterval);
                        this.state.isTyping = false;
                    }
                }, 30);
            }
        }
    },

    toggleLog: function () {
        const logLayer = document.getElementById("log-layer");
        const logContent = document.getElementById("log-content");
        if (logLayer.classList.contains("hidden")) {
            logLayer.classList.remove("hidden");
            logLayer.classList.add("active");
            logContent.innerHTML = "";
            this.state.dialogueLog.forEach(entry => {
                const row = document.createElement("div");
                row.className = "log-entry";
                row.innerHTML = `<div class="log-speaker">${entry.name || ""}</div><div class="log-text">${entry.text}</div>`;
                logContent.appendChild(row);
            });
            setTimeout(() => logContent.scrollTop = logContent.scrollHeight, 10);
        } else {
            logLayer.classList.add("hidden");
            logLayer.classList.remove("active");
        }
    },

    save: function () {
        try {
            const saveSlot = { state: this.state, timestamp: new Date().toLocaleString() };
            localStorage.setItem("paper_school_save", JSON.stringify(saveSlot));
            alert(`進度已保存！\n時間: ${saveSlot.timestamp}`);
        } catch (e) {
            alert("保存失敗。");
        }
    },

    load: function () {
        try {
            const json = localStorage.getItem("paper_school_save");
            if (!json) return alert("找不到存檔記錄！");
            const saveData = JSON.parse(json);
            this.state = saveData.state;
            if (this.state.freeChatMode) document.getElementById("sleep-menu-item").style.display = "block";
            else document.getElementById("sleep-menu-item").style.display = "none";
            document.getElementById('start-screen').classList.add('hidden');
            document.getElementById('start-screen').classList.remove('active');
            this.applyTheme();
            this.updateAffectionDisplay();
            if (this.state.freeChatMode || (this.state.currentSceneId && this.state.currentSceneId.includes("chat"))) {
                document.getElementById('ui-layer').classList.add('hidden');
                document.getElementById('char-layer').classList.add('hidden');
                document.getElementById('sns-layer').classList.remove('hidden');
                document.getElementById('sns-layer').classList.add('active');
                window.ChatSystem.switchSnsTab('chat');
                window.ChatSystem.initContactList();
                window.ChatSystem.renderMoments();
            } else {
                document.getElementById('ui-layer').classList.remove('hidden');
                document.getElementById('sns-layer').classList.add('hidden');
                document.getElementById('sns-layer').classList.remove('active');
                if (this.state.currentSceneId) this.loadScene(this.state.currentSceneId, true);
                else this.loadScene("day1_intro");
            }
            alert(`讀取成功！\nDay ${this.state.currentDay}`);
        } catch (e) {
            alert("讀取存檔失敗。");
        }
    },

    postComment: function (inputElem, charId, postId) {
        if (window.ChatSystem && typeof window.ChatSystem.postComment === 'function') window.ChatSystem.postComment(inputElem, charId, postId);
    },

    sendChat: function () {
        if (window.ChatSystem && typeof window.ChatSystem.sendChat === 'function') window.ChatSystem.sendChat();
    },

    showContactList: function () {
        if (window.ChatSystem && typeof window.ChatSystem.showContactList === 'function') window.ChatSystem.showContactList();
    },

    switchSnsTab: function (tab) {
        if (window.ChatSystem && typeof window.ChatSystem.switchSnsTab === 'function') window.ChatSystem.switchSnsTab(tab);
    },

    showChoices: function (data) {
        this.stopSkip();
        this.state.waiting = true;
        if (data.text) {
            document.getElementById("dialogue-text").innerText = data.text;
            document.getElementById("name-tag").style.opacity = 0;
        }
        const overlay = document.getElementById("choices-overlay");
        overlay.innerHTML = "";
        overlay.classList.remove("hidden");
        data.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.innerText = opt.text;
            btn.onclick = () => {
                overlay.classList.add("hidden");
                this.state.waiting = false;
                if (opt.affection && opt.char) this.updateAffection(opt.char, opt.affection);
                if (opt.ge && opt.char) this.updateGe(opt.char, opt.ge);
                if (opt.target) this.loadScene(opt.target);
                else if (opt.next) this.loadScene(opt.next);
                else this.next();
            };
            overlay.appendChild(btn);
        });
    },

    showChatChoices: function (options) {
        this.stopSkip();
        this.state.chatWaiting = true;
        const chatBody = document.getElementById("chat-body");
        const div = document.createElement("div");
        div.className = "chat-choices";
        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "chat-choice-btn";
            btn.innerText = opt.text;
            btn.onclick = () => {
                div.remove();
                this.state.chatWaiting = false;
                if (opt.affection && opt.char) this.updateAffection(opt.char, opt.affection);
                if (opt.ge && opt.char) this.updateGe(opt.char, opt.ge);
                window.ChatSystem.renderChat({ type: "chat", id: "self", text: opt.text });
                if (opt.next) this.loadScene(opt.next);
                else if (opt.target) this.loadScene(opt.target);
            };
            div.appendChild(btn);
        });
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    },

    triggerEscortEvent: function () {
        this.stopSkip();
        this.state.waiting = true;
        let char = "peter";
        const id = this.state.currentSceneId;
        if (id.includes("lanlan")) char = "lanlan";
        else if (id.includes("ora")) char = "ora";
        const lastLog = this.state.dialogueLog.length > 0 ? this.state.dialogueLog[this.state.dialogueLog.length - 1].text : "";
        const affection = this.state.affection[char] || 0;
        document.getElementById("dialogue-text").innerText = "......";
        window.AI.generateEscort(char, this.state.route, affection, lastLog, (reply) => {
            this.state.waiting = false;
            const escortScene = [
                { char: char, text: reply },
                { text: "就這樣，我們一邊聊著天，一邊走到了車站。", name: "我" },
                { text: "雖然有點捨不得，但還是揮手道別了。", name: "我" }
            ];
            this.state.scene = escortScene;
            this.state.index = -1;
            if (this.state.currentDay === 1) this.state.currentSceneId = "escort_event_end";
            else if (this.state.currentDay === 2) this.state.currentSceneId = "escort_event_end_day2";
            else if (this.state.currentDay === 3) this.state.currentSceneId = "escort_event_end_day3";
            else if (this.state.currentDay === 4) this.state.currentSceneId = "escort_event_end_day4";
            this.next();
        });
    },

    endDay: function () {
        if (!confirm("確定要結束這一天去睡覺嗎！")) return;
        this.stopSkip();
        document.getElementById("menu-modal").classList.remove("active");
        document.getElementById('sns-layer').classList.add('hidden');
        document.getElementById('sns-layer').classList.remove('active');
        document.getElementById("sleep-menu-item").style.display = "none";
        this.state.freeChatMode = false;
        this.state.currentDay++;
        if (this.state.currentDay === 2) this.loadScene("day1_sleep_narrative");
        else if (this.state.currentDay <= 14) this.loadScene(`day${this.state.currentDay}_intro`);
        else {
            alert("遊戲結束！感謝遊玩！");
            location.reload();
        }
        document.getElementById('ui-layer').classList.remove('hidden');
        document.getElementById('char-layer').classList.remove('hidden');
        document.getElementById("bg-layer").style.filter = "none";
    },

    playOPVideo: function() {
        const bgmPlayer = document.getElementById("bgm-player");
        const wasBgmPlaying = !bgmPlayer.paused;
        if (wasBgmPlaying) bgmPlayer.pause();
        const videoLayer = document.createElement("div");
        videoLayer.style.position = "absolute"; videoLayer.style.top = "0"; videoLayer.style.left = "0";
        videoLayer.style.width = "100%"; videoLayer.style.height = "100%"; videoLayer.style.backgroundColor = "black";
        videoLayer.style.zIndex = "300"; videoLayer.style.display = "flex"; videoLayer.style.justifyContent = "center"; videoLayer.style.alignItems = "center";
        const video = document.createElement("video");
        video.src = "https://file.garden/aWe99vhwaGcNwkok/DOKIDOKI/OP.mp4";
        video.style.maxWidth = "100%"; video.style.maxHeight = "100%"; video.style.objectFit = "contain"; video.autoplay = true;
        const skipBtn = document.createElement("button");
        skipBtn.innerText = "SKIP >>"; skipBtn.style.position = "absolute"; skipBtn.style.bottom = "20px"; skipBtn.style.right = "20px";
        skipBtn.style.padding = "10px 20px"; skipBtn.style.backgroundColor = "rgba(0,0,0,0.5)"; skipBtn.style.color = "white";
        const finishOP = () => {
             if (videoLayer.parentNode) videoLayer.parentNode.removeChild(videoLayer);
             if (wasBgmPlaying) bgmPlayer.play();
             this.loadScene(`day2_intro`);
        };
        skipBtn.onclick = (e) => { e.stopPropagation(); video.pause(); finishOP(); };
        video.onended = finishOP;
        videoLayer.appendChild(video); videoLayer.appendChild(skipBtn);
        document.getElementById("game-app").appendChild(videoLayer);
        video.play().catch(e => { skipBtn.style.display = "block"; });
    },

    checkAffectionEvents: function () {
        const aff = this.state.affection;
        const chars = ["peter", "lanlan", "ora"];
        let maxChar = chars[0];
        chars.forEach(c => { if (aff[c] > aff[maxChar]) maxChar = c; });
        const currentAff = aff[maxChar];
        let eventId = "";
        if (currentAff >= 15 && !this.state.triggeredEvents.includes(`${maxChar}_aff_1`)) eventId = `${maxChar}_aff_1`;
        else if (currentAff >= 30 && !this.state.triggeredEvents.includes(`${maxChar}_aff_2`)) eventId = `${maxChar}_aff_2`;
        else if (currentAff >= 45 && !this.state.triggeredEvents.includes(`${maxChar}_aff_3`)) eventId = `${maxChar}_aff_3`;
        if (eventId && (this.fullScript[eventId] || window[eventId])) {
            this.state.triggeredEvents.push(eventId);
            this.loadScene(eventId);
            return true;
        }
        return false;
    },

    handleSceneEnd: function () {
        const id = this.state.currentSceneId;
        const transitionTo = (nextScene) => {
            if (this.state.isSkipping) setTimeout(() => this.loadScene(nextScene), 50);
            else this.loadScene(nextScene);
        };
        try {
            // Day 1
            if (id === "day1_intro") transitionTo("day1_hallway_encounter");
            else if (["day1_hallway_encounter", "day1_hallway_encounter_lynn", "day1_hallway_encounter_jornona", "day1_hallway_encounter_melas"].includes(id)) {
                this.stopSkip(); window.MapSystem.showMap(this.fullScript.day1_class_prompt);
            }
            else if (["day1_meet_peter_class", "day1_meet_lanlan_class", "day1_meet_ora_class", "day1_meet_peter_class_lynn", "day1_meet_peter_class_jornona", "day1_meet_peter_class_melas", "day1_meet_lanlan_class_lynn", "day1_meet_lanlan_class_jornona", "day1_meet_lanlan_class_melas", "day1_meet_ora_class_lynn", "day1_meet_ora_class_jornona", "day1_meet_ora_class_melas"].includes(id)) transitionTo("day1_trans_break");
            else if (id === "day1_trans_break") { this.stopSkip(); window.MapSystem.showMap(this.fullScript.day1_break_prompt); }
            else if (["day1_break_peter", "day1_break_lanlan", "day1_break_ora", "day1_break_peter_lynn", "day1_break_peter_jornona", "day1_break_peter_melas", "day1_break_lanlan_lynn", "day1_break_lanlan_jornona", "day1_break_lanlan_melas", "day1_break_ora_lynn", "day1_break_ora_jornona", "day1_break_ora_melas"].includes(id)) transitionTo("day1_trans_lunch");
            else if (id === "day1_trans_lunch") { this.stopSkip(); window.MapSystem.showMap(this.fullScript.day1_lunch_prompt); }
            else if (["day1_lunch_peter", "day1_lunch_lanlan", "day1_lunch_ora", "day1_lunch_peter_lynn", "day1_lunch_peter_jornona", "day1_lunch_peter_melas", "day1_lunch_lanlan_lynn", "day1_lunch_lanlan_jornona", "day1_lunch_lanlan_melas", "day1_lunch_ora_lynn", "day1_lunch_ora_jornona", "day1_lunch_ora_melas"].includes(id)) transitionTo("day1_trans_club");
            else if (id === "day1_trans_club") transitionTo("day1_club_entry");
            else if (id === "day1_club_entry") transitionTo("day1_club_self_intro");
            else if (id === "day1_club_self_intro") { this.stopSkip(); window.Minigame.start(); }
            else if (id === "day1_trans_sns") transitionTo("day1_sns_exchange");
            else if (id === "day1_sns_exchange") { this.stopSkip(); window.MapSystem.showMap(this.fullScript.day1_afterschool_prompt); }
            else if (["day1_afterschool_peter", "day1_afterschool_lanlan", "day1_afterschool_ora", "day1_afterschool_peter_lynn", "day1_afterschool_peter_jornona", "day1_afterschool_lanlan_jornona", "day1_afterschool_lanlan_melas", "day1_afterschool_ora_melas"].includes(id)) {
                if (this.checkAffectionEvents()) return;
                this.triggerEscortEvent();
            }
            else if (id === "escort_event_end") transitionTo("day1_trans_home");
            else if (id === "day1_trans_home") this.loadScene("day1_night_chat");
            else if (id === "day1_night_chat" || (id.includes("chat_reply") && !id.includes("day2") && !id.includes("day3") && !id.includes("day4") && !id.includes("day5"))) { this.state.freeChatMode = true; document.getElementById("sleep-menu-item").style.display = "block"; window.ChatSystem.initContactList(); window.ChatSystem.showContactList(); }
            // Day 2
            else if (id === "day2_intro") this.loadScene("day2_morning_encounter");
            else if (id === "day2_morning_encounter" || (typeof id === 'string' && id.includes("_day2_morn_"))) { this.stopSkip(); window.MapSystem.showMap(this.fullScript.day2_break_prompt); }
            else if (["day2_break_peter", "day2_break_lanlan", "day2_break_ora"].includes(id) || (typeof id === 'string' && id.includes("_day2_break_"))) transitionTo("day2_trans_lunch");
            else if (id === "day2_trans_lunch") { this.stopSkip(); window.MapSystem.showMap(this.fullScript.day2_lunch_prompt); }
            else if (["day2_lunch_peter", "day2_lunch_lanlan", "day2_lunch_ora"].includes(id) || (typeof id === 'string' && id.includes("_day2_lunch_"))) transitionTo("day2_trans_club");
            else if (id === "day2_trans_club") { window.Minigame.loadDayConfig(2); window.Minigame.start(); }
            else if (id === "day2_trans_sns") { this.stopSkip(); window.MapSystem.showMap(this.fullScript.day2_afterschool_prompt); }
            else if (["day2_after_peter", "day2_after_lanlan", "day2_after_ora"].includes(id)) { if (this.checkAffectionEvents()) return; this.triggerEscortEvent(); }
            else if (id === "escort_event_end_day2") this.loadScene("day2_chat_start");
            else if (id === "day2_chat_start") this.loadScene("day2_night_chat");
            else if (id === "day2_night_chat" || (id.includes("day2_chat_") && !id.includes("day2_chat_start"))) { this.state.freeChatMode = true; document.getElementById("sleep-menu-item").style.display = "block"; window.ChatSystem.initContactList(); window.ChatSystem.showContactList(); }
            // Day 3
            else if (id === "day3_intro") this.loadScene("day3_morning_encounter");
            else if (id === "day3_morning_encounter") { this.stopSkip(); window.MapSystem.showMap(this.fullScript.day3_break_prompt); }
            else if (["day3_break_peter", "day3_break_lanlan", "day3_break_ora"].includes(id)) transitionTo("day3_trans_lunch");
            else if (id === "day3_trans_lunch") { this.stopSkip(); window.MapSystem.showMap(this.fullScript.day3_lunch_prompt); }
            else if (["day3_lunch_peter", "day3_lunch_lanlan", "day3_lunch_ora"].includes(id)) transitionTo("day3_trans_club");
            else if (id === "day3_trans_club") { window.Minigame.loadDayConfig(3); window.Minigame.start(); }
            else if (id === "day3_trans_sns") { this.stopSkip(); window.MapSystem.showMap(this.fullScript.day3_afterschool_prompt); }
            else if (["day3_end_peter", "day3_end_lanlan", "day3_end_ora"].includes(id)) { if (this.checkAffectionEvents()) return; this.triggerEscortEvent(); }
            else if (id === "escort_event_end_day3") this.loadScene("day3_chat_start");
            else if (id === "day3_chat_start") this.loadScene("day3_night_chat");
            else if (id === "day3_night_chat" || (id.includes("day3_chat_") && !id.includes("day3_chat_start"))) { this.state.freeChatMode = true; document.getElementById("sleep-menu-item").style.display = "block"; window.ChatSystem.initContactList(); window.ChatSystem.showContactList(); }
            // Day 4
            else if (id === "day4_intro") this.loadScene("day4_morning_encounter");
            else if (id === "day4_morning_encounter") this.showChoices({ options: [ {text: "我很期待晚上的 KTV！", target: "day4_accept_ktv"}, {text: "感覺會變得很吵鬧呢...", target: "day4_accept_ktv"} ] });
            else if (id === "day4_accept_ktv") transitionTo("day4_trans_lunch");
            else if (id === "day4_trans_lunch") { this.stopSkip(); window.MapSystem.showMap(this.fullScript.day4_lunch_prompt); }
            else if (["day4_lunch_peter", "day4_lunch_lanlan", "day4_lunch_ora"].includes(id)) transitionTo("day4_trans_ktv");
            else if (id === "day4_trans_ktv") this.showChoices({ options: [ {text: "（拿著麥克風）大家一起嗨吧！", target: "day4_ktv_happy"}, {text: "（靜靜地聽他們唱）", target: "day4_ktv_sentimental"} ] });
            else if (["day4_ktv_happy", "day4_ktv_sentimental", "day4_ktv_memory_normal", "day4_ktv_memory_lynn", "day4_ktv_memory_jornona", "day4_ktv_memory_melas"].includes(id)) transitionTo("day4_ktv_end");
            else if (id === "day4_ktv_end") transitionTo("day4_trans_club");
            else if (id === "day4_trans_club") { window.Minigame.loadDayConfig(4); window.Minigame.start(); }
            else if (id === "day4_trans_sns") { this.stopSkip(); window.MapSystem.showMap(this.fullScript.day4_afterschool_prompt); }
            else if (["day4_end_peter", "day4_end_lanlan", "day4_end_ora"].includes(id)) { if (this.checkAffectionEvents()) return; this.triggerEscortEvent(); }
            else if (id === "escort_event_end_day4") this.loadScene("day4_chat_start");
            else if (id === "day4_chat_start") this.loadScene("day4_night_chat_content");
            else if (id === "day4_night_chat_content" || (id.includes("day4_chat_") && !id.includes("day4_chat_start"))) { this.state.freeChatMode = true; document.getElementById("sleep-menu-item").style.display = "block"; window.ChatSystem.initContactList(); window.ChatSystem.showContactList(); }
            // Final
            else if (id === "aff_event_finished" || id === "_aff_end") { this.loadScene(`day${this.state.currentDay}_chat_start`); }
            else if (id === "week1_ending_check" || id === "title_screen") { alert("第一週體驗結束！感謝遊玩！"); location.reload(); }
            else if (id === "day1_sleep_narrative") this.loadScene("day1_sleep_video");
            else if (id === "day1_sleep_video") this.playOPVideo();
        } catch (e) { alert("場景切換發生錯誤: " + e.message); }
    }
};
