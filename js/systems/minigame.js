window.Minigame = {
    // 基礎詞彙庫 - 第一天：自我介紹主題 (輕鬆日常)
    inventory: ["維持", "整潔", "追求", "規矩", "承擔", "責任", "喜歡", "甜食", "閃亮", "金屬", "盡情", "揮霍", "仔細", "觀察", "分析", "數據", "尋找", "真理"],

    // 通用配方庫
    recipes: {
        // --- Day 1 (自我介紹) ---
        "維持+整潔": { res: "維持整潔", owner: "peter", desc: "彼得：保持環境整潔是每個人的責任。" },
        "追求+規矩": { res: "追求規矩", owner: "peter", desc: "彼得：秩序是成大事的基石。" },
        "承擔+責任": { res: "承擔責任", owner: "peter", desc: "彼得：身為會長，我必須負起責任。" },
        "喜歡+甜食": { res: "熱愛甜食", owner: "lanlan", desc: "蘭蘭：甜食能治癒一切不開心呀！" },
        "閃亮+金屬": { res: "閃亮金屬", owner: "lanlan", desc: "蘭蘭：亮晶晶的東西最漂亮了呀！" },
        "盡情+揮霍": { res: "盡情揮霍", owner: "lanlan", desc: "蘭蘭：錢就是要花掉才有價值呀！" },
        "仔細+觀察": { res: "仔細觀察", owner: "ora", desc: "奧拉：收集數據是分析的第一步。" },
        "分析+數據": { res: "分析數據", owner: "ora", desc: "奧拉：數字從不撒謊。" },
        "尋找+真理": { res: "尋找真理", owner: "ora", desc: "奧拉：拋棄感性，擁抱邏輯。" },

        // --- Day 2 (校慶準備) ---
        "負責+企劃": { res: "負責企劃", owner: "peter", desc: "彼得：一切都在計畫之中。" },
        "討論+預算": { res: "討論預算", owner: "peter", desc: "彼得：經費必須用在刀口上。" },
        "確認+巡邏": { res: "確認巡邏", owner: "peter", desc: "彼得：安全是第一校規。" },
        "提供+贊助": { res: "提供贊助", owner: "lanlan", desc: "蘭蘭：錢的問題就交給我呀！" },
        "包下+場地": { res: "包下場地", owner: "lanlan", desc: "蘭蘭：我們租下整個禮堂吧！" },
        "豪華+佈置": { res: "豪華佈置", owner: "lanlan", desc: "蘭蘭：這裡要放滿金箔！" },
        "優化+流程": { res: "優化流程", owner: "ora", desc: "奧拉：將多餘的變因降至最低。" },
        "提升+效率": { res: "提升效率", owner: "ora", desc: "奧拉：時間利用率必須達到最佳化。" },
        "建立+備案": { res: "建立備案", owner: "ora", desc: "奧拉：Plan B 永遠是必要的。" },

        // --- Day 3 (讀書會) ---
        "劃出+重點": { res: "劃出重點", owner: "peter", desc: "彼得：請拿出不同顏色的螢光筆。" },
        "整理+筆記": { res: "整理筆記", owner: "peter", desc: "彼得：這是我的完美精華版。" },
        "反覆+複習": { res: "反覆複習", owner: "peter", desc: "彼得：反覆練習才不會出錯。" },
        "訂購+宵夜": { res: "訂購宵夜", owner: "lanlan", desc: "蘭蘭：讀書太累了，先吃點東西呀！" },
        "需要+休息": { res: "需要休息", owner: "lanlan", desc: "蘭蘭：我們看電影好不好？" },
        "一直+陪伴": { res: "一直陪伴", owner: "lanlan", desc: "蘭蘭：只要能跟妳在一起就好。" },
        "開始+推導": { res: "開始推導", owner: "ora", desc: "奧拉：跟我跟上這條公式的邏輯。" },
        "理解+原理": { res: "理解原理", owner: "ora", desc: "奧拉：死背是沒有效率的妥協。" },
        "掌握+題庫": { res: "掌握題庫", owner: "ora", desc: "奧拉：統計學上這題會考。" },

        // --- Day 4 (社團活動) ---
        "進行+檢測": { res: "進行檢測", owner: "peter", desc: "彼得：讓我確認這裡的衛生條件。" },
        "準備+紀錄": { res: "準備紀錄", owner: "peter", desc: "彼得：會議記錄是不能馬虎的。" },
        "完成+報告": { res: "完成報告", owner: "peter", desc: "彼得：完美無瑕的文書作業。" },
        "舉辦+遊戲": { res: "舉辦遊戲", owner: "lanlan", desc: "蘭蘭：我們來玩真心話大冒險呀！" },
        "高級+點心": { res: "高級點心", owner: "lanlan", desc: "蘭蘭：這可是米其林主廚特製的喔。" },
        "開心+聊天": { res: "開心聊天", owner: "lanlan", desc: "蘭蘭：今天也很開心呢！" },
        "精確+分析": { res: "精確分析", owner: "ora", desc: "奧拉：樣本數還是太少了。" },
        "控制+變量": { res: "控制變量", owner: "ora", desc: "奧拉：排除干擾因素。" },
        "得出+結論": { res: "得出結論", owner: "ora", desc: "奧拉：這就是最終的解答。" },

        // --- Day 5 (週末計畫) ---
        "期待+行程": { res: "期待行程", owner: "peter", desc: "彼得：記得準時赴約。" },
        "規劃+預約": { res: "規劃預約", owner: "peter", desc: "彼得：已經訂好位子了。" },
        "確保+準時": { res: "確保準時", owner: "peter", desc: "彼得：分秒不差的完美計畫。" },
        "包班+遊樂園": { res: "包下遊樂園", owner: "lanlan", desc: "蘭蘭：我把整個園區包下來了呀！" },
        "無限+購物": { res: "無限購物", owner: "lanlan", desc: "蘭蘭：看清單買太慢了，全包了！" },
        "米其林+餐廳": { res: "米其林餐廳", owner: "lanlan", desc: "蘭蘭：這家甜點超棒的！" },
        "參觀+展覽": { res: "參觀展覽", owner: "ora", desc: "奧拉：這場學術研討會有點看頭。" },
        "搜集+文獻": { res: "搜集文獻", owner: "ora", desc: "奧拉：我需要補充新的參考資料。" },
        "參加+講座": { res: "參加講座", owner: "ora", desc: "奧拉：講者的邏輯還算嚴密。" }
    },

    day2_config: { inventory: ["負責", "企劃", "討論", "預算", "確認", "巡邏", "提供", "贊助", "包下", "場地", "豪華", "佈置", "優化", "流程", "提升", "效率", "建立", "備案"] },
    day3_config: { inventory: ["劃出", "重點", "整理", "筆記", "反覆", "複習", "訂購", "宵夜", "需要", "休息", "一直", "陪伴", "開始", "推導", "理解", "原理", "掌握", "題庫"] },
    day4_config: { inventory: ["進行", "檢測", "準備", "紀錄", "完成", "報告", "舉辦", "遊戲", "高級", "點心", "開心", "聊天", "精確", "分析", "控制", "變量", "得出", "結論"] },
    day5_config: { inventory: ["期待", "行程", "規劃", "預約", "確保", "準時", "包班", "遊樂園", "無限", "購物", "米其林", "餐廳", "參觀", "展覽", "搜集", "文獻", "參加", "講座"] },

    selected: [],
    poem: [],
    gameInstance: null,

    init: function (game) {
        this.gameInstance = game;
    },

    loadDayConfig: function (day) {
        if (day === 2) {
            this.inventory = [...this.day2_config.inventory];
        } else if (day === 3) {
            this.inventory = [...this.day3_config.inventory];
        } else if (day === 4) {
            this.inventory = [...this.day4_config.inventory];
        } else if (day === 5) {
            this.inventory = [...this.day5_config.inventory];
        } else {
            this.inventory = ["維持", "整潔", "追求", "規矩", "承擔", "責任", "喜歡", "甜食", "閃亮", "金屬", "盡情", "揮霍", "仔細", "觀察", "分析", "數據", "尋找", "真理"];
        }
        this.selected = [];
        this.poem = [];
    },

    start: function () {
        document.getElementById("ui-layer").classList.add("hidden");
        document.getElementById("ui-layer").style.display = "none";
        document.getElementById("minigame-layer").classList.remove("hidden");
        
        // 隨機打亂詞彙順序
        this.inventory.sort(() => Math.random() - 0.5);

        this.selected = [];
        this.poem = [];
        document.getElementById("fragment-count").innerText = "0";
        document.getElementById("slot-1").innerText = "?";
        document.getElementById("slot-2").innerText = "?";
        document.getElementById("slot-1").className = "slot";
        document.getElementById("slot-2").className = "slot";
        document.getElementById("finish-btn").disabled = true;
        this.msg("請選擇兩個詞彙進行融合...");
        
        // Add animation entrance for Minigame Layer
        const ml = document.getElementById("minigame-layer");
        ml.style.animation = "none";
        setTimeout(() => ml.style.animation = "fadeIn 0.5s ease forwards", 10);
        
        this.renderInv();
    },

    renderInv: function () {
        const grid = document.getElementById("inventory-grid");
        grid.innerHTML = "";
        this.inventory.forEach((item, idx) => {
            const div = document.createElement("div");
            div.className = "inventory-item";
            if (this.selected.includes(idx)) div.classList.add("selected");
            div.innerText = item;
            div.onclick = () => this.select(idx);
            grid.appendChild(div);
        });
    },

    select: function (idx) {
        document.getElementById('se-click').play();
        const pos = this.selected.indexOf(idx);
        if (pos >= 0) this.selected.splice(pos, 1);
        else if (this.selected.length < 2) this.selected.push(idx);

        const s1 = document.getElementById("slot-1");
        const s2 = document.getElementById("slot-2");

        if (this.selected.length > 0) {
            s1.innerText = this.inventory[this.selected[0]];
            s1.classList.add("filled");
        } else {
            s1.innerText = "?";
            s1.classList.remove("filled");
        }

        if (this.selected.length > 1) {
            s2.innerText = this.inventory[this.selected[1]];
            s2.classList.add("filled");
        } else {
            s2.innerText = "?";
            s2.classList.remove("filled");
        }

        this.renderInv();
    },

    combine: function () {
        if (this.selected.length !== 2) return this.msg("請選擇兩個元素");

        const i1 = this.inventory[this.selected[0]];
        const i2 = this.inventory[this.selected[1]];

        let k1 = i1 + "+" + i2;
        let k2 = i2 + "+" + i1;
        let res = this.recipes[k1] || this.recipes[k2];

        if (!res) {
            // 不再隨機產生廢品，而是阻止合成並提示
            this.msg("⚠️ 無法產生共鳴，這兩個詞彙之間沒有邏輯連結。");
            document.getElementById('se-click').play(); // 播個失敗音效代替 (用click將就)

            // 閃爍紅色提示
            const s1 = document.getElementById("slot-1");
            const s2 = document.getElementById("slot-2");
            s1.style.borderColor = "red";
            s2.style.borderColor = "red";
            setTimeout(() => {
                s1.style.borderColor = "";
                s2.style.borderColor = "";
            }, 500);

            this.selected = [];
            document.getElementById("slot-1").innerText = "?";
            document.getElementById("slot-2").innerText = "?";
            document.getElementById("slot-1").classList.remove("filled");
            document.getElementById("slot-2").classList.remove("filled");
            this.renderInv();

            return;
        }

        document.getElementById('se-item').play();
        this.msg(`✨ 融合成功：${res.res} ✨ ${res.desc}`);
        
        // Trigger combine slot animation
        const s1 = document.getElementById("slot-1");
        const s2 = document.getElementById("slot-2");
        s1.style.animation = "none";
        s2.style.animation = "none";
        setTimeout(() => {
            s1.style.animation = "combineFlash 0.5s ease-out";
            s2.style.animation = "combineFlash 0.5s ease-out";
        }, 10);

        this.poem.push(res);
        document.getElementById("fragment-count").innerText = this.poem.length;

        // --- 修正重點：記錄合成物品 ---
        if (this.gameInstance) {
            this.gameInstance.state.lastCraftedItem = res.res; // 記錄下來
            if (res.owner) {
                this.gameInstance.state.poemScore[res.owner] += 5;
                this.gameInstance.updateAffection(res.owner, 2);
                
                const routeMatch = {
                    "peter": "lynn",
                    "lanlan": "jornona",
                    "ora": "melas"
                };
                if (this.gameInstance.state.route === routeMatch[res.owner]) {
                    this.gameInstance.updateGe(res.owner, 1);
                }
            }
        }

        const indices = this.selected.sort((a, b) => b - a);
        this.inventory.splice(indices[0], 1);
        this.inventory.splice(indices[1], 1);
        this.inventory.unshift(res.res);

        this.selected = [];
        document.getElementById("slot-1").innerText = "?";
        document.getElementById("slot-2").innerText = "?";
        document.getElementById("slot-1").classList.remove("filled");
        document.getElementById("slot-2").classList.remove("filled");
        this.renderInv();

        if (this.poem.length >= 3) {
            document.getElementById("finish-btn").disabled = false;
        }
    },

    finish: function () {
        if (this.gameInstance) {
            const day = this.gameInstance.state.currentDay;
            this.gameInstance.loadScene(`day${day}_trans_sns`);

            document.getElementById("minigame-layer").classList.add("hidden");
            document.getElementById("minigame-layer").style.display = "";
            document.getElementById("ui-layer").classList.remove("hidden");
            document.getElementById("ui-layer").style.display = "";
        }
    },

    msg: function (txt) {
        document.getElementById("msg-area").innerText = txt;
    }
};
