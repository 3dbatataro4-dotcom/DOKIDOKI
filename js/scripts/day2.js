window.day2_script = {
    // --- Day 2: 校慶準備的熱鬧氣氛 ---
    day2_intro: [
        { bg: "home", bgm: "peace", text: "早晨的陽光很明亮，空氣中帶著一點初夏的味道。", name: "我" },
        { text: "今天是轉學過來的第二天，心情也稍微放鬆了一些。", name: "我" },
        { bg: "gate", text: "走進紙校的大門，看到走廊上掛起了「校慶準備中」的布條。", name: "我" },
        { text: "校園裡比昨天熱鬧了許多，到處都能看到搬運材料的學生。", name: "我" }
    ],

    // --- Day 2: Morning Class (早晨) ---
    day2_morning_encounter: [
        { bg: "classroom", text: "走進教室，那三個人正圍在公佈欄前討論著什麼。", name: "我" },
        { char: "peter", name: "彼得", emotion: "normal", text: "（拿著一份精確到毫米的設計圖）不行，這攤位的邊框必須完美垂直。Shit，這批木材的切割工藝也太粗糙了！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "哎呀彼得，那種小事就交給專業的裝潢公司嘛。我已經叫人在後門卸貨了，全部都是從國外運來的裝飾品呀！", effect: "jump" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（推眼鏡）根據我的動線運算，蘭蘭推薦的裝飾品會造成 15% 的人流阻塞，這對提升社團知名度毫無益處。", effect: "breathe" },
        { text: "看來他們也在為校慶的事情忙碌著。", name: "我" }
    ],
    // Day 2 Morning - Lynn Route
    day2_morning_encounter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "happy", text: "貓貓！你來了！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "你看，我正在親自監督校慶的佈置。為了讓你待得舒服，我打算把整個走廊都鋪上防塵地毯。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "這樣你就算赤腳走路也不會弄髒腳踝了。喜歡嗎？" },
        {
            type: "choice", options: [
                { text: "（開心點頭）喜歡，彼得對我最好了。", next: "lynn_day2_morn_ge", ge: 1, char: "peter" },
                { text: "防塵地毯也太誇張了吧...", next: "lynn_day2_morn_normal1" },
                { text: "可是這樣其他人搬東西不方便吧？", next: "lynn_day2_morn_normal2" }
            ]
        }
    ],
    lynn_day2_morn_ge: [
        { char: "peter", name: "彼得", emotion: "smile", text: "只要你喜歡，這點算什麼。我會讓這裡成為無菌的樂園。" }
    ],
    lynn_day2_morn_normal1: [
        { char: "peter", name: "彼得", emotion: "confused", text: "一點都不誇張，外面的灰塵和細菌多得令人髮指！" }
    ],
    lynn_day2_morn_normal2: [
        { char: "peter", name: "彼得", emotion: "angry", text: "別人的死活與我無關！我只在乎你！", effect: "shake" }
    ],
    // Day 2 Morning - Jornona Route
    day2_morning_encounter_jornona: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆早安呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "你看！我為校慶準備了純金的攤位招牌呀！雖然彼得說太重了會把地板壓壞...", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "但只要老婆喜歡，就算整棟教學樓塌了我也會再蓋一棟新的呀！" },
        {
            type: "choice", options: [
                { text: "（摸摸他的頭）蘭蘭真乖。", next: "jornona_day2_morn_ge", ge: 1, char: "lanlan" },
                { text: "太重的話真的會壓壞地板啦...", next: "jornona_day2_morn_normal1" },
                { text: "用純金做招牌太招搖了吧？", next: "jornona_day2_morn_normal2" }
            ]
        }
    ],
    jornona_day2_morn_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "嘿嘿，為了老婆，蘭蘭什麼都願意做呀！", effect: "jump" }
    ],
    jornona_day2_morn_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "confused", text: "壓壞就壓壞嘛，大不了我把地板也換成純金的呀！", effect: "breathe" }
    ],
    jornona_day2_morn_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "哪裡招搖了呀？這才是符合我們身份的裝飾嘛！" }
    ],
    // Day 2 Morning - Melas Route
    day2_morning_encounter_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "早安，蜜拉思。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "我正在優化校慶當天的訪客路徑。如果按照我的方案，你跟我一起負責的攤位將會是全校效率最高的。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這樣我們就有更多的時間私下相處了，這是我計算出的最優解。" },
        {
            type: "choice", options: [
                { text: "奧拉的計算總是最完美的。", next: "melas_day2_morn_ge", ge: 1, char: "ora" },
                { text: "效率最高的話，我們會不會很忙？", next: "melas_day2_morn_normal1" },
                { text: "可是校慶好玩比較重要吧...", next: "melas_day2_morn_normal2" }
            ]
        }
    ],
    melas_day2_morn_ge: [
        { char: "ora", name: "奧拉", emotion: "happy", text: "沒錯。只要我們按照計畫行事，一切都會在掌控之中。", effect: "breathe" }
    ],
    melas_day2_morn_normal1: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "我的算法已經排除了所有無效的勞動時間。跟著我就好。" }
    ],
    melas_day2_morn_normal2: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "『好玩』是無法量化的模糊概念。但如果你堅持，我會把它加入變量中。" }
    ],

    // --- Day 2: Break Choice (課間) ---
    day2_break_prompt: {
        text: "第一節課結束了，走廊上傳來了大家討論攤位的聲音。",
        options: [
            { location: "走廊", action: "問彼得關於裝飾的標準", target: "day2_break_peter", char: "peter", affection: 5, color: "var(--peter-color)" },
            { location: "後門", action: "去看看蘭蘭運來的材料", target: "day2_break_lanlan", char: "lanlan", affection: 5, color: "var(--lanlan-color)" },
            { location: "座位", action: "詢問奧拉的動線設計", target: "day2_break_ora", char: "ora", affection: 5, color: "var(--ora-color)" }
        ]
    },

    day2_break_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "normal", text: "裝飾？那不只是好看，更是一種紀律的展現。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "confused", text: "Shit，如果是那種隨便貼上去的海報，我絕對不允許。每張海報的間距必須精確到公分。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "既然你是社員，這份監督整潔的工作就交給你了。別讓我看到一絲灰塵，明白嗎？" },
        { text: "他一臉嚴肅地遞給我一塊潔白的抹布。", name: "我" }
    ],
    day2_break_peter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "smile", text: "貓貓不需要做這些雜活。", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "happy", text: "你就坐在那裡，看著我就好。我會為你打造一個最完美的城堡。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "smile", text: "你是城堡的主人，而我是你最忠誠的守衛。" },
        {
            type: "choice", options: [
                { text: "（輕笑）那我的守衛可要好好表現喔。", next: "lynn_peter_day2_break_ge", ge: 1, char: "peter" },
                { text: "城堡聽起來好誇張喔...", next: "lynn_peter_day2_break_normal1" },
                { text: "我也可以幫忙佈置呀。", next: "lynn_peter_day2_break_normal2" }
            ]
        }
    ],
    lynn_peter_day2_break_ge: [
        { char: "peter", name: "彼得", emotion: "happy", text: "遵命。我會把它變成任何人（特別是細菌）都無法侵犯的聖地。", effect: "jump" }
    ],
    lynn_peter_day2_break_normal1: [
        { char: "peter", name: "彼得", emotion: "confused", text: "這只是基本的防護標準，外面的世界太骯髒了。" }
    ],
    lynn_peter_day2_break_normal2: [
        { char: "peter", name: "彼得", emotion: "angry", text: "不行！這些材料充滿了未知的病原體，你絕對不能碰！", effect: "shake" }
    ],
    // Peter (Jornona Route - Jealousy)
    day2_break_peter_jornona: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "你這個暴發戶來找我幹嘛？你的鑽石反光嚴重干擾了我的視線。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（衝過來）喂！神棍！不准你這樣說我老婆！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（挽住蘭蘭）蘭蘭我們走，別理他。", next: "jornona_peter_day2_break_ge", ge: 1, char: "lanlan" },
                { text: "彼得，你這樣說話太沒禮貌了。", next: "jornona_peter_day2_break_normal1" },
                { text: "我想幫忙佈置嘛...", next: "jornona_peter_day2_break_normal2" }
            ]
        }
    ],
    jornona_peter_day2_break_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆最好了！我們去吃頂級魚子醬！", effect: "jump" }
    ],
    jornona_peter_day2_break_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "老婆說得對！神棍快點道歉呀！" }
    ],
    jornona_peter_day2_break_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "老婆不需要做這種粗活，我買十個機器人來幫他！" }
    ],
    // Peter (Melas Route - Jealousy)
    day2_break_peter_melas: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "......你還站在這裡幹嘛？你的存在會增加空氣中的懸浮微粒。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（出現在身後）根據觀測，彼得的敵意來源於他無法控制的反社會傾向。蜜拉思，我們走。" },
        {
            type: "choice", options: [
                { text: "好的，奧拉，這裡的數據已經收集夠了。", next: "melas_peter_day2_break_ge", ge: 1, char: "ora" },
                { text: "奧拉，這樣說有點太過分了吧？", next: "melas_peter_day2_break_normal1" },
                { text: "可是佈置不用幫忙嗎？", next: "melas_peter_day2_break_normal2" }
            ]
        }
    ],
    melas_peter_day2_break_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "明智的判斷。他的情緒不具有研究價值。", effect: "breathe" }
    ],
    melas_peter_day2_break_normal1: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "我只是陳述客觀事實。走吧。" }
    ],
    melas_peter_day2_break_normal2: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "這種低效的勞動不適合我們。讓他自己處理他的強迫症。" }
    ],

    day2_break_lanlan: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "你看這顆巨大的紅寶石！我要把它裝在我們的攤位門口呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "彼得說這太顯眼了會引來小偷，真是好笑，誰敢偷我蘭蘭的東西呀？", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "新同學你覺得呢？如果不夠亮的話，我再叫人運兩箱鑽石過來呀！" }
    ],
    day2_break_lanlan_jornona: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆你看！這是我為你特別定製的校慶禮服呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "雖然我們社團只是做心理測驗，但穿得漂亮才是最重要的事情呀！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "來試穿看看嘛，不合適的話我馬上叫設計師坐直升機飛過來改呀！" },
        {
            type: "choice", options: [
                { text: "（換上禮服轉圈）蘭蘭眼光真好，尺寸剛剛好喔。", next: "jornona_lanlan_day2_break_ge", ge: 1, char: "lanlan" },
                { text: "可是做心理測驗穿禮服很奇怪吧？", next: "jornona_lanlan_day2_break_normal1" },
                { text: "這件衣服看起來好貴...", next: "jornona_lanlan_day2_break_normal2" }
            ]
        }
    ],
    jornona_lanlan_day2_break_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆最美了！我要拍下來洗成等身大海報掛在校門口呀！", effect: "jump" }
    ],
    jornona_lanlan_day2_break_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "哪裡奇怪了呀！老婆在蘭蘭心裡就是要打扮得像公主呀！" }
    ],
    jornona_lanlan_day2_break_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "不會啦！這只是蘭蘭一個月零用錢的零頭而已呀！" }
    ],
    // Lanlan (Lynn Route - Jealousy)
    day2_break_lanlan_lynn: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "貓貓！來看蘭蘭的鑽石呀！閃亮亮的很漂亮喔！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "angry", text: "（衝過來）離她遠點！你身上的暴發戶氣息會污染她的靈魂！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（抱住彼得）彼得別生氣，我只喜歡看你。", next: "lynn_lanlan_day2_break_ge", ge: 1, char: "peter" },
                { text: "鑽石確實很漂亮啊...", next: "lynn_lanlan_day2_break_normal1" },
                { text: "你們不要為了我吵架啦...", next: "lynn_lanlan_day2_break_normal2" }
            ]
        }
    ],
    lynn_lanlan_day2_break_ge: [
        { char: "peter", name: "彼得", emotion: "happy", text: "真的嗎？貓貓真乖。這顆被俗氣沾染的石頭根本配不上你。", effect: "breathe" }
    ],
    lynn_lanlan_day2_break_normal1: [
        { char: "peter", name: "彼得", emotion: "confused", text: "那種無用的石頭只會弄髒你的手！快去洗手！" }
    ],
    lynn_lanlan_day2_break_normal2: [
        { char: "peter", name: "彼得", emotion: "angry", text: "這是防禦機制！我必須保護你不受這傢伙的毒害！", effect: "shake" }
    ],
    // Lanlan (Melas Route - Jealousy)
    day2_break_lanlan_melas: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "蜜拉思？你一直盯著我的鑽石做什麼呀？想偷嗎？", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "（介入）她只是在計算你那些碳元素結晶的折射率，因為它們太過刺眼且無用。我們走，蜜拉思。" },
        {
            type: "choice", options: [
                { text: "沒錯，它的實際價值遠低於你的購入價。", next: "melas_lanlan_day2_break_ge", ge: 1, char: "ora" },
                { text: "其實還滿漂亮的啊...", next: "melas_lanlan_day2_break_normal1" },
                { text: "奧拉，這樣講有點傷人吧？", next: "melas_lanlan_day2_break_normal2" }
            ]
        }
    ],
    melas_lanlan_day2_break_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "非常精確的評估。走吧，去處理更有效率的事務。", effect: "breathe" }
    ],
    melas_lanlan_day2_break_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "那是被視覺神經誤導產生的假象。你需要校準你的審美數據了。" }
    ],
    melas_lanlan_day2_break_normal2: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "我只陳述事實，無法處理非理性的情感回饋。" }
    ],

    day2_break_ora: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "動線設計是機率學的一種應用。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "如果我們能引導訪客在特定位置停留，就能極大化我們的社團影響力。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "但蘭蘭那個發光的珠寶會造成嚴重的干擾，我在考慮要不要偷偷把它丟掉。" }
    ],
    day2_break_ora_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，我為你預留了觀察位。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "當那些愚蠢的人類在迷茫時，只有我們能從高處俯瞰這一切。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "這種掌握全局的感覺，才是校慶最有趣的地方，對吧？" },
        {
            type: "choice", options: [
                { text: "只要能和你一起觀測，就是最有趣的了。", next: "melas_ora_day2_break_ge", ge: 1, char: "ora" },
                { text: "可是我比較想去逛其他攤位...", next: "melas_ora_day2_break_normal1" },
                { text: "俯瞰一切聽起來好中二喔...", next: "melas_ora_day2_break_normal2" }
            ]
        }
    ],
    melas_ora_day2_break_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "（推眼鏡）你的回答，完美符合我的預期數據。", effect: "breathe" }
    ],
    melas_ora_day2_break_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "那些效率低下的活動不值得浪費時間。留在我這裡。" }
    ],
    melas_ora_day2_break_normal2: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "這是基於信息優勢的冷靜分析，與俗稱的『中二病』有著本質的區別。" }
    ],
    // Ora (Lynn Route - Jealousy)
    day2_break_ora_lynn: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......林恩？你為什麼跑到我的演算區域？", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（拿著消毒噴霧衝過來）貓貓！快點離開那個有輻射危險的機器人！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（乖乖回到彼得身邊）好，我不打擾他了。", next: "lynn_ora_day2_break_ge", ge: 1, char: "peter" },
                { text: "奧拉又沒有危險...", next: "lynn_ora_day2_break_normal1" },
                { text: "彼得你太誇張了啦。", next: "lynn_ora_day2_break_normal2" }
            ]
        }
    ],
    lynn_ora_day2_break_ge: [
        { char: "peter", name: "彼得", emotion: "happy", text: "這才對，來，我幫你全身消毒一次。", effect: "jump" }
    ],
    lynn_ora_day2_break_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "他身上充滿了未知的電磁波干擾，絕對有危險！", effect: "shake" }
    ],
    lynn_ora_day2_break_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "我是為了保護你！你這個沒有危機意識的貓！" }
    ],
    // Ora (Jornona Route - Jealousy)
    day2_break_ora_jornona: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "ignore", text: "......喬諾娜，你的鑽石反光干擾了我的光學讀取。請離開。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（拿著鈔票出現）喂！書呆子！你敢趕我老婆走？我現在就把你連同圖書館一起買下來拆掉呀！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（親一下蘭蘭的臉頰）蘭蘭別生氣，我們去別的地方玩。", next: "jornona_ora_day2_break_ge", ge: 1, char: "lanlan" },
                { text: "蘭蘭，不要隨便買下學校啦。", next: "jornona_ora_day2_break_normal1" },
                { text: "我們還是早點回家吧。", next: "jornona_ora_day2_break_normal2" }
            ]
        }
    ],
    jornona_ora_day2_break_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "好耶！老婆親我了！書呆子算什麼，我們去坐直升機呀！", effect: "jump" }
    ],
    jornona_ora_day2_break_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "可是他讓老婆不開心，蘭蘭想教訓他呀！" }
    ],
    jornona_ora_day2_break_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "好呀老婆！蘭蘭帶你回家吃我親自請人空運的頂級布丁！" }
    ],

    // --- Day 2: Lunch (午休) ---
    day2_trans_lunch: [
        { bg: "corridor", text: "午休時間。校園裡的廣播正放著輕快的校慶宣傳曲。", name: "我" },
        { text: "空氣中充滿了節慶前的興奮感。", name: "我" }
    ],
    day2_lunch_prompt: {
        text: "午飯時間到了，要和誰一起過呢？",
        options: [
            { location: "學生會辦", action: "和彼得討論佈置進度", target: "day2_lunch_peter", char: "peter", affection: 15, color: "var(--peter-color)" },
            { location: "高級餐廳", action: "接受蘭蘭的慶祝午餐", target: "day2_lunch_lanlan", char: "lanlan", affection: 15, color: "var(--lanlan-color)" },
            { location: "實驗室", action: "觀察奧拉的計算", target: "day2_lunch_ora", char: "ora", affection: 15, color: "var(--ora-color)" }
        ]
    },

    day2_lunch_peter: [
        { bg: "club_room", char: "peter", name: "彼得", emotion: "normal", text: "校慶的安全性是我的首要任務。", effect: "breathe" },
        { text: "他正對著一疊攤位申請表進行嚴格審核。", name: "我" },
        { char: "peter", name: "彼得", emotion: "confused", text: "Shit，熱舞社居然想在走廊上噴漆？這絕對會破壞牆面的整潔！", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "只有我們的社團...必須保持最優雅的形象。你能理解我的堅持吧？" }
    ],
    day2_lunch_peter_lynn: [
        { bg: "club_room", char: "peter", name: "彼得", emotion: "happy", text: "貓貓，我為你準備了校慶特供的無菌點心。", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "外面的那些路邊攤太髒了，我不允許你吃那些東西。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "只要有我在，我會給你最乾淨、最完美的校慶體驗。" },
        {
            type: "choice", options: [
                { text: "謝謝彼得，還是你最貼心了。", next: "lynn_peter_day2_lunch_ge", ge: 1, char: "peter" },
                { text: "可是偶爾也想吃點路邊攤...", next: "lynn_peter_day2_lunch_normal1" },
                { text: "無菌點心聽起來好像在醫院吃飯一樣。", next: "lynn_peter_day2_lunch_normal2" }
            ]
        }
    ],
    lynn_peter_day2_lunch_ge: [
        { char: "peter", name: "彼得", emotion: "smile", text: "這是我應該做的，保護你是我的神聖職責。" }
    ],
    lynn_peter_day2_lunch_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "你瘋了嗎？那些東西裡不知道有大腸桿菌和多少寄生蟲！", effect: "shake" }
    ],
    lynn_peter_day2_lunch_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "這叫對生活品質的極致要求，你必須慢慢習慣。" }
    ],
    // Peter (Jornona Route - Jealousy)
    day2_lunch_peter_jornona: [
        { bg: "club_room", char: "peter", name: "彼得", emotion: "confused", text: "你來學生會辦公室做什麼？這裡不需要多餘的裝飾品。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（推門而入）神棍！你竟敢用這種看窮人的眼神看我老婆！蘭蘭要咬死你呀！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（摸摸蘭蘭的頭）乖，別亂咬人。", next: "jornona_peter_day2_lunch_ge", ge: 1, char: "lanlan" },
                { text: "彼得，你講話太刻薄了。", next: "jornona_peter_day2_lunch_normal1" },
                { text: "我是來看佈置進度的啦...", next: "jornona_peter_day2_lunch_normal2" }
            ]
        }
    ],
    jornona_peter_day2_lunch_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "既然老婆都這麼說了，那我就大發慈悲放過你啦！", effect: "jump" }
    ],
    jornona_peter_day2_lunch_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "聽見沒有！老婆叫你乖乖閉上你的臭嘴呀！" }
    ],
    jornona_peter_day2_lunch_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "看他做什麼，他只會弄一些無聊的白布條而已呀！" }
    ],
    // Peter (Melas Route - Jealousy)
    day2_lunch_peter_melas: [
        { bg: "club_room", char: "peter", name: "彼得", emotion: "confused", text: "快出去！你身上的氣場嚴重擾亂了這裡的磁場平衡。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這是因為他自身的偏執狂傾向產生了認知失調。蜜拉思，跟這種人對話只會降低智商。" },
        {
            type: "choice", options: [
                { text: "奧拉說得對，我們去整理數據吧。", next: "melas_peter_day2_lunch_ge", ge: 1, char: "ora" },
                { text: "奧拉，這樣分析別人不太好吧？", next: "melas_peter_day2_lunch_normal1" },
                { text: "彼得真的很迷信耶。", next: "melas_peter_day2_lunch_normal2" }
            ]
        }
    ],
    melas_peter_day2_lunch_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "很好的決策能力。你的效率提升了 5%。", effect: "breathe" }
    ],
    melas_peter_day2_lunch_normal1: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "這不是分析，這是確診。" }
    ],
    melas_peter_day2_lunch_normal2: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "他的迷信是他無法面對現實的防禦機制。走吧。" }
    ],

    day2_lunch_lanlan: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "校慶就是要大口吃肉呀！", effect: "jump" },
        { text: "蘭蘭帶我來到了一家裝潢得閃閃發亮的燒肉店。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "我已經買下了這家店今天所有的頂級和牛，我們隨便吃呀！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "吃飽了才有力氣去校慶大玩特玩呀！新同學你多吃點！" }
    ],
    day2_lunch_lanlan_jornona: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆老婆！快看！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "我讓廚師把肉切成心形的了呀！是不是很有校慶的甜蜜感？", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "只要跟你在一起，每一天都像在過校慶呀！" },
        {
            type: "choice", options: [
                { text: "（笑）蘭蘭好用心，我喜歡。", next: "jornona_lanlan_day2_lunch_ge", ge: 1, char: "lanlan" },
                { text: "這樣廚師會不會覺得很麻煩？", next: "jornona_lanlan_day2_lunch_normal1" },
                { text: "切成心形感覺有點恥耶...", next: "jornona_lanlan_day2_lunch_normal2" }
            ]
        }
    ],
    jornona_lanlan_day2_lunch_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆喜歡就好！我明天讓他切成老婆名字的形狀呀！", effect: "jump" }
    ],
    jornona_lanlan_day2_lunch_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "confused", text: "麻煩什麼？我可是付了平時十倍的小費呀！" }
    ],
    jornona_lanlan_day2_lunch_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "才不會呢，這是對老婆滿滿的愛呀！" }
    ],
    // Lanlan (Lynn Route - Jealousy)
    day2_lunch_lanlan_lynn: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "哇！貓貓你終於受不了那個神棍，來找蘭蘭吃肉了嗎？", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "angry", text: "（拿著除臭噴劑出現）休想用你的油脂氣味污染她的衣服！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（躲到彼得身後）彼得救我，這裡油煙味好重。", next: "lynn_lanlan_day2_lunch_ge", ge: 1, char: "peter" },
                { text: "可是高級和牛看起來很好吃...", next: "lynn_lanlan_day2_lunch_normal1" },
                { text: "彼得你怎麼找過來的？", next: "lynn_lanlan_day2_lunch_normal2" }
            ]
        }
    ],
    lynn_lanlan_day2_lunch_ge: [
        { char: "peter", name: "彼得", emotion: "smile", text: "沒事了。我馬上帶你回無菌室，幫你進行全身消毒。", effect: "breathe" }
    ],
    lynn_lanlan_day2_lunch_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "那是用一堆生鮮細菌堆出來的垃圾！你絕對不能吃！" }
    ],
    lynn_lanlan_day2_lunch_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "這不重要！重點是我不能讓你處於危險之中！" }
    ],
    // Lanlan (Melas Route - Jealousy)
    day2_lunch_lanlan_melas: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "蜜拉思？你不跟那個書呆子去吃營養口糧，來這裡做什麼呀？", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "（推眼鏡）我只是陪同她來觀察過度攝取飽和脂肪酸對腦部發展的負面影響。而你，是完美的觀察對象。" },
        {
            type: "choice", options: [
                { text: "確實，這餐的熱量已經超出正常攝取範圍了。", next: "melas_lanlan_day2_lunch_ge", ge: 1, char: "ora" },
                { text: "可是真的很香耶...", next: "melas_lanlan_day2_lunch_normal1" },
                { text: "奧拉，這樣說有點沒禮貌喔。", next: "melas_lanlan_day2_lunch_normal2" }
            ]
        }
    ],
    melas_lanlan_day2_lunch_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "保持理性的判斷力。我們走吧，去吃合成營養棒。", effect: "breathe" }
    ],
    melas_lanlan_day2_lunch_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "嗅覺的刺激無法掩蓋低效能營養轉換率的事實。" }
    ],
    melas_lanlan_day2_lunch_normal2: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "我只是提供正確的飲食數據分析。" }
    ],

    day2_lunch_ora: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "我在計算校慶當天的營業額預測。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "如果我們的「心理測驗」能結合大數據，就能精準捕獲目標群眾。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這比那些賣炒麵的社團有意義多了。雖然蘭蘭可能會覺得很無聊。" }
    ],
    day2_lunch_ora_melas: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，你覺得哪種背景音樂最能引發人類的潛意識共鳴？", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "我已經調試出了幾組頻率，能讓訪客在進入我們攤位時產生愉悅感。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "這就是科技的浪漫。只有我們能懂。" },
        {
            type: "choice", options: [
                { text: "這真是完美的數據應用，我開始期待了。", next: "melas_ora_day2_lunch_ge", ge: 1, char: "ora" },
                { text: "這樣做會不會有道德問題啊？", next: "melas_ora_day2_lunch_normal1" },
                { text: "音樂好聽就好了吧？", next: "melas_ora_day2_lunch_normal2" }
            ]
        }
    ],
    melas_ora_day2_lunch_ge: [
        { char: "ora", name: "奧拉", emotion: "happy", text: "很好，你的頻率跟我完美同步了。", effect: "breathe" }
    ],
    melas_ora_day2_lunch_normal1: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "『道德』是弱者為了限制強者而創造的虛擬框架。我不在乎。" }
    ],
    melas_ora_day2_lunch_normal2: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "你忽視了聲波對神經系統的深層影響力。" }
    ],
    // Ora (Lynn Route - Jealousy)
    day2_lunch_ora_lynn: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "林恩？你來圖書館有何貴幹？這裡沒有給你的書。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（衝進來）貓貓！快點離開！這裡的舊書充滿了塵蟎和霉菌，還有他的中二病毒！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（牽著彼得的手）我們這就走，我去洗手。", next: "lynn_ora_day2_lunch_ge", ge: 1, char: "peter" },
                { text: "圖書館的書應該有消毒吧？", next: "lynn_ora_day2_lunch_normal1" },
                { text: "彼得你連圖書館都管喔...", next: "lynn_ora_day2_lunch_normal2" }
            ]
        }
    ],
    lynn_ora_day2_lunch_ge: [
        { char: "peter", name: "彼得", emotion: "smile", text: "對，馬上走！我準備了最高級的抗菌洗手乳。", effect: "jump" }
    ],
    lynn_ora_day2_lunch_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "那些根本不夠！學校的消毒措施敷衍得令人作嘔！", effect: "shake" }
    ],
    lynn_ora_day2_lunch_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "只要是你可能接觸到的地方，我都要管！" }
    ],
    // Ora (Jornona Route - Jealousy)
    day2_lunch_ora_jornona: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "ignore", text: "喬諾娜，圖書館禁止攜帶高熱量的奢侈餐盒。你違反了三項規定。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（拿著滿漢全席出現）喂！你敢管我老婆吃飯？我明天就把圖書館改成高級烤肉店呀！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（摸摸蘭蘭的臉）蘭蘭好帥，我們去別的地方吃。", next: "jornona_ora_day2_lunch_ge", ge: 1, char: "lanlan" },
                { text: "蘭蘭，圖書館本來就不能吃東西啦...", next: "jornona_ora_day2_lunch_normal1" },
                { text: "奧拉，通融一下不行嗎？", next: "jornona_ora_day2_lunch_normal2" }
            ]
        }
    ],
    jornona_ora_day2_lunch_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "好耶！老婆誇我了！書呆子再見呀！", effect: "jump" }
    ],
    jornona_ora_day2_lunch_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "規則是給窮人守的，蘭蘭的規則就是沒有規則呀！" }
    ],
    jornona_ora_day2_lunch_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "老婆不需要求他！蘭蘭這就叫人把圖書館買下來！" }
    ],

    // --- Day 2: Club (社團活動 - 小遊戲) ---
    day2_trans_club: [
        { bg: "club_room", bgm: "club", text: "放學後，我們在社辦集合，正式開始佈置攤位。", name: "" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "今天的課題是「詞彙與感官」。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "為了讓校慶的測驗更有趣，我們需要豐富我們的關鍵字庫。", effect: "breathe" },
        { text: "（小遊戲詞彙已更新：甜蜜, 煙火, 氣球, 禮物, 遊行, 彩帶...）", name: "系統" }
    ],
    day2_club_minigame_start: [
        { text: "開始合成...", name: "系統" }
    ],

    // --- Day 2: After School (放學) ---
    day2_trans_sns: [
        { bg: "club_room", text: "社團活動結束了。雖然佈置很累，但看著成果，大家都很有成就感。", name: "" }
    ],
    day2_afterschool_prompt: {
        text: "社團佈置告一段落，接下來該去哪裡好呢？",
        options: [
            { location: "學生會辦", action: "幫彼得檢查標語貼紙", target: "day2_after_peter", char: "peter", affection: 10, color: "var(--peter-color)" },
            { location: "校門口", action: "和蘭蘭去採購剩下的裝飾", target: "day2_after_lanlan", char: "lanlan", affection: 10, color: "var(--lanlan-color)" },
            { location: "自習室", action: "幫奧拉整理訪客問卷", target: "day2_after_ora", char: "ora", affection: 10, color: "var(--ora-color)" }
        ]
    },

    day2_after_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "Shit，這張貼紙歪了 0.5 毫米。絕對不能接受！", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "雖然只是小事，但細節決定成敗。這就是學生會的格調。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "smile", text: "謝謝你留下來幫我。果然，只有你做事最讓我放心。" }
    ],
    day2_after_peter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "happy", text: "貓貓，看著我。", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "不管外面有多少雜音，這間房間現在只屬於我們兩個人。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "我會為你掃清所有的障礙，讓你永遠生活在最純淨的光芒下。" },
        {
            type: "choice", options: [
                { text: "嗯，我相信彼得。", next: "lynn_peter_day2_after_ge", ge: 1, char: "peter" },
                { text: "房間裡只有我們兩個有點害羞...", next: "lynn_peter_day2_after_normal1" },
                { text: "外面也沒有很吵啦。", next: "lynn_peter_day2_after_normal2" }
            ]
        }
    ],
    lynn_peter_day2_after_ge: [
        { char: "peter", name: "彼得", emotion: "smile", text: "你只需要看著我，這就足夠了。", effect: "breathe" }
    ],
    lynn_peter_day2_after_normal1: [
        { char: "peter", name: "彼得", emotion: "happy", text: "害羞？貓貓真可愛，讓我幫你檢查一下體溫有沒有升高。", effect: "jump" }
    ],
    lynn_peter_day2_after_normal2: [
        { char: "peter", name: "彼得", emotion: "angry", text: "那是因為你聽不到他們靈魂裡的惡意噪音！", effect: "shake" }
    ],
    // Peter (Jornona Route - Jealousy)
    day2_after_peter_jornona: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "為什麼你放學後還不去用你的鈔票鋪路，要在這裡浪費我的時間？", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（衝進來）神棍！你竟敢用這種態度對我老婆說話！是不是想被做成純金雕像沉入東京灣呀！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（牽起蘭蘭）蘭蘭，我們去逛街吧，別理他了。", next: "jornona_peter_day2_after_ge", ge: 1, char: "lanlan" },
                { text: "這樣威脅別人不太好吧...", next: "jornona_peter_day2_after_normal1" },
                { text: "彼得真的很沒禮貌。", next: "jornona_peter_day2_after_normal2" }
            ]
        }
    ],
    jornona_peter_day2_after_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "聽老婆的！我們去包下整座遊樂園呀！", effect: "jump" }
    ],
    jornona_peter_day2_after_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "這才不是威脅，這是蘭蘭的日常呀！" }
    ],
    jornona_peter_day2_after_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "對呀，他就是個沒救的窮酸神棍！" }
    ],
    // Peter (Melas Route - Jealousy)
    day2_after_peter_melas: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "你的出現讓房間裡的灰塵微粒濃度上升了。趕快出去。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "彼得，你的潔癖已經嚴重影響了你的大腦灰質。蜜拉思，與他交談是無效的。" },
        {
            type: "choice", options: [
                { text: "是啊，我們走吧奧拉。", next: "melas_peter_day2_after_ge", ge: 1, char: "ora" },
                { text: "奧拉，這樣吐槽太直接了吧？", next: "melas_peter_day2_after_normal1" },
                { text: "這裡明明很乾淨啊...", next: "melas_peter_day2_after_normal2" }
            ]
        }
    ],
    melas_peter_day2_after_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "正確的選擇。我們去自習室。", effect: "breathe" }
    ],
    melas_peter_day2_after_normal1: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "我只是提供準確的醫學診斷。" }
    ],
    melas_peter_day2_after_normal2: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "他看到的是虛幻的微粒，走吧。" }
    ],

    day2_after_lanlan: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "走吧走吧！我們去百貨公司掃貨！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "只要是你看上的東西，我通通都買下來呀！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "這就是蘭蘭式的浪漫呀！" }
    ],
    day2_after_lanlan_jornona: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！快看那邊的氣球！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "我已經訂了一萬顆，校慶當天會從直升機上撒下來呀！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "到時候整個天空都是為你準備的驚喜呀！" },
        {
            type: "choice", options: [
                { text: "（摟住他的手臂）哇，一定很壯觀。謝謝蘭蘭！", next: "jornona_lanlan_day2_after_ge", ge: 1, char: "lanlan" },
                { text: "這樣會不會造成環境污染啊？", next: "jornona_lanlan_day2_after_normal1" },
                { text: "一萬顆氣球太多了吧...", next: "jornona_lanlan_day2_after_normal2" }
            ]
        }
    ],
    jornona_lanlan_day2_after_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆開心，我就開心呀！就算要把滿天星都摘下來我也願意！", effect: "jump" }
    ],
    jornona_lanlan_day2_after_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "放心啦老婆，我買的是最頂級的環保可分解材質呀！" }
    ],
    jornona_lanlan_day2_after_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "confused", text: "怎麼會多？蘭蘭覺得還不夠表達我對老婆的愛呀！" }
    ],
    // Lanlan (Lynn Route - Jealousy)
    day2_after_lanlan_lynn: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "貓貓！要不要跟蘭蘭去搭私人飛機看夜景呀？", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "angry", text: "（拿著巨大消毒器衝出來）禁止你用那充滿粉塵的交通工具污染她！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（躲到彼得身後）彼得我們回家吧，外面空氣不好。", next: "lynn_lanlan_day2_after_ge", ge: 1, char: "peter" },
                { text: "私人飛機聽起來是不錯啦...", next: "lynn_lanlan_day2_after_normal1" },
                { text: "彼得你怎麼連這個都有...", next: "lynn_lanlan_day2_after_normal2" }
            ]
        }
    ],
    lynn_lanlan_day2_after_ge: [
        { char: "peter", name: "彼得", emotion: "smile", text: "沒錯，我們立刻回去進行無菌處理。乖。", effect: "breathe" }
    ],
    lynn_lanlan_day2_after_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "你想被高空中的紫外線和宇宙射線傷害嗎！？絕對不行！" }
    ],
    lynn_lanlan_day2_after_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "這是我專門為了對抗重度污染源準備的武裝。" }
    ],
    // Lanlan (Melas Route - Jealousy)
    day2_after_lanlan_melas: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "蜜拉思？你在這裡做什麼呀？要跟蘭蘭去買鑽石嗎？", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "她正在和我進行放學後的人流量統計。請不要用你極端物質主義的思維干擾我們的實驗。" },
        {
            type: "choice", options: [
                { text: "奧拉，現在的統計誤差在容許範圍內嗎？", next: "melas_lanlan_day2_after_ge", ge: 1, char: "ora" },
                { text: "其實去逛一下百貨公司也不錯...", next: "melas_lanlan_day2_after_normal1" },
                { text: "蘭蘭你真的很愛買東西耶。", next: "melas_lanlan_day2_after_normal2" }
            ]
        }
    ],
    melas_lanlan_day2_after_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "是的。只要排除掉這個隨機的干擾變數，一切都很完美。", effect: "breathe" }
    ],
    melas_lanlan_day2_after_normal1: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "那是毫無意義的消費陷阱，你的理智去哪了？" }
    ],
    melas_lanlan_day2_after_normal2: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "這是源自於無邊際空虛感的補償心理。不值得我們繼續探討。" }
    ],

    day2_after_ora: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "這份數據樣本很有代表性。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "人類在面對慶典時，大腦會分泌大量的多巴胺，這會讓邏輯分析變得困難。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "但只要有你在身邊，我的運算中樞就能保持平靜。這很不科學。" }
    ],
    day2_after_ora_melas: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，你過來看這段代碼。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "我將我們的名字寫進了校慶官網的底層數據裡。只有在特定的時間點，它們才會同時亮起。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "這是屬於我們的，不被外人察覺的聯繫。" },
        {
            type: "choice", options: [
                { text: "好浪漫，我們的名字永遠綁在一起了。", next: "melas_ora_day2_after_ge", ge: 1, char: "ora" },
                { text: "這樣隨便篡改學校網站可以嗎？", next: "melas_ora_day2_after_normal1" },
                { text: "別人如果發現了怎麼辦？", next: "melas_ora_day2_after_normal2" }
            ]
        }
    ],
    melas_ora_day2_after_ge: [
        { char: "ora", name: "奧拉", emotion: "happy", text: "沒錯，在虛擬與現實的交界處，我們是永恆的。", effect: "breathe" }
    ],
    melas_ora_day2_after_normal1: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "這只是微不足道的信息重組。別擔心。" }
    ],
    melas_ora_day2_after_normal2: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "我的加密算法是絕對安全的。沒有人能發現這個秘密。" }
    ],
    // Ora (Lynn Route - Jealousy)
    day2_after_ora_lynn: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "林恩，你在幫我整理問卷？這不符合你通常的動線邏輯。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（拿著防毒面具衝進來）貓貓！快出來！那裡的紙張都是致病菌的溫床！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（走向彼得）我這就出來，彼得牽我。", next: "lynn_ora_day2_after_ge", ge: 1, char: "peter" },
                { text: "彼得你連防毒面具都帶來了...", next: "lynn_ora_day2_after_normal1" },
                { text: "問卷其實還滿乾淨的啦。", next: "lynn_ora_day2_after_normal2" }
            ]
        }
    ],
    lynn_ora_day2_after_ge: [
        { char: "peter", name: "彼得", emotion: "happy", text: "當然，我會帶你去最乾淨的地方。永遠不放手。", effect: "jump" }
    ],
    lynn_ora_day2_after_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "這間充滿霉味的房間必須被全面封鎖！" }
    ],
    lynn_ora_day2_after_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "那是肉眼看不見的危險！你太天真了！" }
    ],
    // Ora (Jornona Route - Jealousy)
    day2_after_ora_jornona: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "ignore", text: "喬諾娜，不要在這自習室裡抖動你的寶石，反光會降低我的運算效率。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（推著金磚車出現）喂！你竟敢嫌我老婆煩？我現在就把你這破圖書館用金磚封起來呀！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（笑著拉住蘭蘭）蘭蘭我們回家吧，我不喜歡這裡。", next: "jornona_ora_day2_after_ge", ge: 1, char: "lanlan" },
                { text: "用金磚封起來太誇張了吧...", next: "jornona_ora_day2_after_normal1" },
                { text: "奧拉，這樣趕人很沒禮貌耶。", next: "jornona_ora_day2_after_normal2" }
            ]
        }
    ],
    jornona_ora_day2_after_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "好耶！老婆說什麼就是什麼呀！我們回家滾床單！", effect: "jump" }
    ],
    jornona_ora_day2_after_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "哪裡誇張了呀！這才配得上我老婆的身分！" }
    ],
    jornona_ora_day2_after_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "對呀對呀！這種窮酸的地方我們再也不來了呀！" }
    ],

    // --- Day 2: Night Chat (晚間聊天) ---
    day2_chat_start: [
        { bg: "home", bgm: "home", text: "回到家，雖然身體有些疲倦，但心裡暖暖的。", name: "我" },
        { text: "手機響了，社團群組又開始熱鬧起來。", name: "我" }
    ],
    day2_night_chat_content: [
        { type: "chat", id: "sys", text: "系統：Day 2 聊天室開啟" },
        { type: "chat", id: "lanlan", text: "大家今天辛苦啦！明天蘭蘭請大家吃最貴的便當呀！🍱" },
        { type: "chat", id: "peter", text: "別在那裡亂花錢。重點是明天的佈置細節。所有人都要檢查自己的區域。" },
        { type: "chat", id: "ora", text: "我已經把校慶當天的天氣機率算出來了。晴天機率 98.5%。" },
        { type: "chat", id: "lanlan", text: "那剩下的 1.5% 呢？" },
        { type: "chat", id: "ora", text: "那是你把金幣撒向天空造成的氣流干擾。" },
        {
            type: "choice", options: [
                { text: "大家辛苦了，早點睡吧", next: "day2_chat_sleep" },
                { text: "我很期待明天的校慶佈置", next: "day2_chat_romantic" }
            ]
        }
    ],
    day2_chat_sleep: [
        { type: "chat", id: "self", text: "大家辛苦了，早點休息，明天還要繼續努力呢。" },
        { type: "chat", id: "ora", text: "同意。睡眠是恢復生物機能的最佳方式。" },
        { type: "chat", id: "lanlan", text: "晚安呀！夢裡也要夢到蘭蘭呀！🌙" },
        { type: "chat", id: "peter", text: "晚安。記得把通訊設備擦拭乾淨。" }
    ],
    day2_chat_romantic: [
        { type: "chat", id: "self", text: "我很期待明天的校慶佈置，大家一起努力的感覺真好。" },
        { type: "chat", id: "peter", text: "哼，那是當然的。有我帶領，我們社團一定是全校最完美的。" },
        { type: "chat", id: "lanlan", text: "對呀對呀！明天蘭蘭會帶更多漂亮的東西去呀！" },
        { type: "chat", id: "ora", text: "期待...這是一種非理性的正向期待。我也並不討厭。" }
    ],

    // --- White Moonlight Night Chat: Lynn (Peter) ---
    day2_night_chat_content_lynn: [
        { type: "chat", id: "sys", text: "系統：您已加入群組『心理學深層邏輯探索社』。" },
        { type: "chat", id: "peter", text: "貓貓，你的房間門窗都鎖好了嗎？有沒有開啟空氣清淨機？" },
        { type: "chat", id: "lanlan", text: "哇，神棍你乾脆搬去老婆家當保全呀！" },
        { type: "chat", id: "peter", text: "閉嘴，這是我對貓貓專屬的防護協議。" },
        {
            type: "choice", options: [
                { text: "都弄好囉，謝謝彼得關心。", next: "lynn_day2_chat_ge", ge: 1, char: "peter" },
                { text: "彼得真的防禦心很重耶。", next: "lynn_day2_chat_normal1" },
                { text: "我窗戶開著通風啦～", next: "lynn_day2_chat_normal2" }
            ]
        }
    ],
    lynn_day2_chat_ge: [
        { type: "chat", id: "self", text: "都弄好囉，門窗緊閉，清淨機開到最大了。謝謝彼得關心。" },
        { type: "chat", id: "peter", text: "很好。今晚我也可以安心入睡了。明天見，我的貓貓。" },
        { type: "chat", id: "ora", text: "彼得的心跳頻率下降到了正常範圍。" }
    ],
    lynn_day2_chat_normal1: [
        { type: "chat", id: "self", text: "彼得真的防禦心很重耶，其實外面很安全的啦。" },
        { type: "chat", id: "peter", text: "安全？你根本不知道黑暗中潛伏著多少細菌和惡意！" }
    ],
    lynn_day2_chat_normal2: [
        { type: "chat", id: "self", text: "我窗戶開著通風啦～今天晚上風滿舒服的。" },
        { type: "chat", id: "peter", text: "什麼！？快關上！懸浮微粒會跑進去的！我現在叫人過去幫你封死窗戶！" },
        { type: "chat", id: "lanlan", text: "太誇張了吧呀！" }
    ],

    // --- White Moonlight Night Chat: Jornona (Lanlan) ---
    day2_night_chat_content_jornona: [
        { type: "chat", id: "sys", text: "系統：您已加入群組『心理學深層邏輯探索社』。" },
        { type: "chat", id: "lanlan", text: "老婆老婆！我買了一座煙火工廠，明天校慶結尾我們放通宵的煙火呀！" },
        { type: "chat", id: "peter", text: "你瘋了嗎？火災怎麼辦？絕對不允許！" },
        { type: "chat", id: "ora", text: "空氣品質指數將會嚴重超標。違反環境法規機率 99%。" },
        { type: "chat", id: "lanlan", text: "才不管你們呀！老婆說好就好！" },
        {
            type: "choice", options: [
                { text: "只要能跟蘭蘭一起看，什麼煙火都好。", next: "jornona_day2_chat_ge", ge: 1, char: "lanlan" },
                { text: "放通宵會吵到別人睡覺啦...", next: "jornona_day2_chat_normal1" },
                { text: "彼得說得對，火災滿危險的。", next: "jornona_day2_chat_normal2" }
            ]
        }
    ],
    jornona_day2_chat_ge: [
        { type: "chat", id: "self", text: "不管放多久，只要能跟蘭蘭一起看，什麼煙火都好。" },
        { type: "chat", id: "lanlan", text: "老婆最棒了！！！蘭蘭愛你呀！！！" },
        { type: "chat", id: "peter", text: "Shit，真是受夠這對暴發戶情侶了。" }
    ],
    jornona_day2_chat_normal1: [
        { type: "chat", id: "self", text: "放通宵會吵到別人睡覺啦...我們放一點點就好了。" },
        { type: "chat", id: "lanlan", text: "好呀！老婆說放一點點，那就放一小時就好呀！" }
    ],
    jornona_day2_chat_normal2: [
        { type: "chat", id: "self", text: "彼得說得對，火災滿危險的，還是不要放煙火了吧。" },
        { type: "chat", id: "lanlan", text: "嗚嗚...老婆居然幫神棍說話...蘭蘭好傷心呀..." }
    ],

    // --- White Moonlight Night Chat: Melas (Ora) ---
    day2_night_chat_content_melas: [
        { type: "chat", id: "sys", text: "系統：您已加入群組『心理學深層邏輯探索社』。" },
        { type: "chat", id: "ora", text: "蜜拉思，我已將明日社團攤位的訪客動線模型發送到你的信箱。請在睡前回顧一遍。" },
        { type: "chat", id: "peter", text: "為什麼要讓她看那些無聊的圖表？會影響睡眠品質的！" },
        { type: "chat", id: "lanlan", text: "對呀！老婆睡前應該看蘭蘭的照片才對呀！" },
        {
            type: "choice", options: [
                { text: "收到了，我會仔細看完再睡的。", next: "melas_day2_chat_ge", ge: 1, char: "ora" },
                { text: "不能明天早上再看嗎？", next: "melas_day2_chat_normal1" },
                { text: "我看不太懂圖表耶...", next: "melas_day2_chat_normal2" }
            ]
        }
    ],
    melas_day2_chat_ge: [
        { type: "chat", id: "self", text: "收到了，奧拉的圖表總是很清晰，我會仔細看完再睡的。" },
        { type: "chat", id: "ora", text: "很好，期待明天與你執行完美的計劃。晚安。" }
    ],
    melas_day2_chat_normal1: [
        { type: "chat", id: "self", text: "好想睡覺喔...不能明天早上再看嗎？" },
        { type: "chat", id: "ora", text: "將任務推遲會增加變數。但也罷，今晚准許你早點進入休眠模式。" }
    ],
    melas_day2_chat_normal2: [
        { type: "chat", id: "self", text: "我看不太懂圖表耶...好多數字。" },
        { type: "chat", id: "ora", text: "我明天會當面為你解說一次。人類的視覺處理系統確實比較低效。" }
    ]
};