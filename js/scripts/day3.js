window.day3_script = {
    // --- Day 3: 社團讀書會 ---
    day3_intro: [
        { bg: "home", bgm: "peace", text: "早晨的空氣有些清涼，今天似乎是個適合靜下心來讀書的日子。", name: "我" },
        { text: "下週就要期中考了，校園裡的氣氛也變得緊張了一些。", name: "我" },
        { bg: "gate", text: "走進學校，圖書館門口已經排起了長龍。", name: "我" },
        { text: "看來大家都在為了考試衝刺呢。", name: "我" }
    ],

    // --- Day 3: Morning Class (早晨) ---
    day3_morning_encounter: [
        { bg: "classroom", text: "走進教室，那三個人正圍坐在一起，桌上堆滿了各種厚重的參考書。", name: "我" },
        { char: "peter", name: "彼得", emotion: "normal", text: "（拿著紅筆在重點上畫著筆直的線）Shit，這本教材的排版太混亂了，簡直是在挑戰我的耐心！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "好無聊呀...這些字拆開我都認識，合在一起我就想睡覺呀。彼得，我們直接買下出題老師的題庫好不好呀？", effect: "jump" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（推眼鏡）蘭蘭，那種行為會破壞學術公平性的機率是 100%。如果你們想及格，就閉嘴聽我講解這道物理題。", effect: "breathe" },
        { text: "看來今天的社團活動要變成讀書會了。", name: "我" }
    ],
    // Day 3 Morning - Lynn Route
    day3_morning_encounter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "happy", text: "貓貓！快過來！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "我已經幫你把所有的重點都整理好了，還用不同顏色的筆標記了難易度。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "你只要看我整理的這本就行了。外面的那些參考書都有細菌，別碰。" }
    ],
    // Day 3 Morning - Jornona Route
    day3_morning_encounter_jornona: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆老婆！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "我為了讀書特別買了這個鑲鑽的自動鉛筆呀！握起來手感超好的！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "給你用！只要用這枝筆，一定能考一百分呀！" }
    ],
    // Day 3 Morning - Melas Route
    day3_morning_encounter_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "蜜拉思，過來。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "我發現了一個有趣的數學悖論，我們來討論一下吧。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "至於考試那種低難度的東西，對我們來說根本不需要複習。" }
    ],

    // --- Day 3: Break Choice (課間) ---
    day3_break_prompt: {
        text: "下課了，教室裡的讀書氣氛依舊濃厚。",
        options: [
            { location: "走廊", action: "找彼得借用他的神級筆記", target: "day3_break_peter", char: "peter", affection: 5, color: "var(--peter-color)" },
            { location: "後門", action: "陪蘭蘭去透透氣", target: "day3_break_lanlan", char: "lanlan", affection: 5, color: "var(--lanlan-color)" },
            { location: "座位", action: "向奧拉請教難題", target: "day3_break_ora", char: "ora", affection: 5, color: "var(--ora-color)" }
        ]
    },

    day3_break_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "normal", text: "筆記？拿去吧，記得手要洗乾淨再翻。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "confused", text: "Shit，如果你在上面留下指紋或者摺痕，我會讓你整個暑假都留在學校補習。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "smile", text: "不過...如果你有哪裡看不懂，可以直接來問我。我允許你佔用我的休息時間。" }
    ],
    day3_break_peter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "smile", text: "貓貓，累了嗎？", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "happy", text: "讀書這種事太傷神了。我已經叫人準備了補腦的頂級魚油。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "smile", text: "來，張嘴。我餵你吃。" }
    ],

    day3_break_lanlan: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "bored", text: "啊啊啊！讀書真的好痛苦呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "老婆我們翹課去吃甜點好不好呀？我聽說吃甜的會變聰明呀！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "如果不行的話...那我把學校買下來，把考試取消掉好不好呀？" }
    ],
    day3_break_lanlan_jornona: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆老婆！你看這個！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "我幫你買了全套的櫻桃圖案文具呀！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "這樣讀書的時候也會心情很好呀！老婆你真可愛！" }
    ],

    day3_break_ora: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "這道題的解法有三種，但最有效率的是這一種。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "雖然老師教的方法也能得分，但會浪費 30 秒的運算時間。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "看好了，我只演示一遍。別分心。" }
    ],
    day3_break_ora_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，這道題的陷阱在於假設條件。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "就像這個世界一樣，很多表面上的真相其實都是邏輯漏洞。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "但只要有你在，我就能找到唯一的正確答案。" }
    ],

    // --- Day 3: Lunch (午休) ---
    day3_trans_lunch: [
        { bg: "corridor", text: "午休時間。校園廣播提醒大家要注意休息，不要過度勞累。", name: "我" },
        { text: "食堂裡也推出了特製的「考勝便當」。", name: "我" }
    ],
    day3_lunch_prompt: {
        options: [
            { location: "圖書館", action: "和彼得一起安靜讀書", target: "day3_lunch_peter", char: "peter", affection: 15, color: "var(--peter-color)" },
            { location: "高級餐廳", action: "接受蘭蘭的補腦大餐", target: "day3_lunch_lanlan", char: "lanlan", affection: 15, color: "var(--lanlan-color)" },
            { location: "實驗室", action: "看奧拉做複習資料", target: "day3_lunch_ora", char: "ora", affection: 15, color: "var(--ora-color)" }
        ]
    },

    day3_lunch_peter: [
        { bg: "library", char: "peter", name: "彼得", emotion: "normal", text: "圖書館的空氣確實比教室要安靜得多。", effect: "breathe" },
        { text: "他正專心地翻閱著一本厚厚的法律典籍。", name: "我" },
        { char: "peter", name: "彼得", emotion: "smile", text: "坐下吧，我幫你留了位置。別發出聲音，否則我會把你趕出去。" },
        { char: "peter", name: "彼得", emotion: "normal", text: "不過...如果你累了，可以靠在我的肩上休息一下。只限今天。" }
    ],
    day3_lunch_peter_lynn: [
        { bg: "library", char: "peter", name: "彼得", emotion: "happy", text: "貓貓，讀累了嗎？", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "我幫你按摩一下肩膀吧。我的力道可是經過精確計算的。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "舒服嗎？只要你開心，我做什麼都可以。" }
    ],

    day3_lunch_lanlan: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "讀書太辛苦了，一定要補充熱量呀！", effect: "jump" },
        { text: "蘭蘭叫了一桌子的高級甜點和炸雞。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "這些都是我從巴黎空運過來的呀！吃完了保證你腦力全開！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "來，新同學，這塊最大的炸雞給你呀！" }
    ],
    day3_lunch_lanlan_jornona: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆老婆！你看這個！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "我請大廚把巧克力做成你的樣子了呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "太可愛了，我都捨不得吃了呀！老婆你比巧克力還甜呀！" }
    ],

    day3_lunch_ora: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "我正在製作一份各科重點的預測模型。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "根據歷年來的考題分佈，明年的重點有 85% 的機率會出現在這幾個章節。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這份資料只給你一個人看。別讓彼得看到，不然他又要說我作弊了。" }
    ],
    day3_lunch_ora_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，這道題的邏輯跟你昨晚說的很像。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "我發現我們的思維模式越來越同步了，這對我的研究很有幫助。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "陪我再去圖書館查點資料吧，只有你在我身邊我才靜得下心。" }
    ],

    // --- Day 3: Club (社團活動 - 小遊戲) ---
    day3_trans_club: [
        { bg: "club_room", bgm: "club", text: "放學後，我們在社辦進行最後的衝刺讀書。", name: "" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "今天的課題是「邏輯與聯想」。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "良好的邏輯能幫助你們在考試時做出正確的推斷。", effect: "breathe" },
        { text: "（小遊戲詞彙已更新：邏輯, 思考, 答案, 分數, 成功, 智慧...）", name: "系統" }
    ],
    day3_club_minigame_start: [
        { text: "開始合成...", name: "系統" }
    ],

    // --- Day 3: After School (放學) ---
    day3_trans_sns: [
        { bg: "club_room", text: "讀書會圓滿結束。大家雖然很累，但對考試都充滿了信心。", name: "" }
    ],
    day3_afterschool_prompt: { // 已修正為 day3_afterschool_prompt
        options: [
            { location: "學生會辦", action: "陪彼得整理複習資料", target: "day3_end_peter", char: "peter", affection: 10, color: "var(--peter-color)" },
            { location: "校門口", action: "和蘭蘭去放鬆心情", target: "day3_end_lanlan", char: "lanlan", affection: 10, color: "var(--lanlan-color)" },
            { location: "實驗室", action: "陪奧拉做最後的數據分析", target: "day3_end_ora", char: "ora", affection: 10, color: "var(--ora-color)" }
        ]
    },

    day3_end_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "normal", text: "呼...總算整理完了。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "smile", text: "謝謝你幫我歸檔。這些資料對社員們來說非常重要。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "normal", text: "天色不早了，我送你回家吧。晚上記得早點睡，別熬夜。" }
    ],
    day3_end_peter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "happy", text: "貓貓，今天辛苦了。", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "我為你準備了特製的熱牛奶，喝了能助眠。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "夢裡別再讀書了，夢到我就好。晚安，我的貓貓。" }
    ],

    day3_end_lanlan: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "終於放學啦！走吧走吧，我們去抓娃娃呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "只要抓到那個粉紅色的熊，考試就一定能及格呀！這是蘭蘭的直覺！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "走吧新同學，我幫你抓一打回來呀！" }
    ],
    day3_end_lanlan_jornona: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆老婆！你看那邊的流星！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "快許願呀！願望一定會實現的呀！", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "我的願望就是...永遠跟老婆在一起呀！" }
    ],

    day3_end_ora: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "今天的讀書效率提升了 20%。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "這都要歸功於你在旁邊。你的存在像是一種催化劑。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "明天也要繼續保持這種狀態。走吧，我送你去車站。" }
    ],
    day3_end_ora_melas: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，這本書送給你。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "這是我寫的關於邏輯推演的心得，希望能幫到你。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "其實考試什麼的都不重要，重要的是我們一起探求真理的過程。" }
    ],

    // --- Day 3: Night Chat (晚間聊天) ---
    day3_chat_start: [
        { bg: "home", bgm: "home", text: "回到家，雖然腦袋有點沉，但感覺收穫滿滿。", name: "我" },
        { text: "社團群組又彈出了訊息。", name: "我" }
    ],
    day3_night_chat_content: [
        { type: "chat", id: "sys", text: "系統：Day 3 聊天室開啟" },
        { type: "chat", id: "lanlan", text: "大家讀書讀得怎麼樣呀？我已經把書當枕頭睡著了呀。😴" },
        { type: "chat", id: "peter", text: "蘭蘭！明天不准在社辦睡覺。你要是考不及格，我會親自監督你補習。" },
        { type: "chat", id: "ora", text: "根據預測，蘭蘭及格的機率是 50%。取決於他明早能不能準時起床。" },
        { type: "chat", id: "lanlan", text: "誒——彼得好兇呀！新人救我呀！" },
        {
            type: "choice", options: [
                { text: "大家加油，明天繼續努力", next: "day3_chat_excited" },
                { text: "我也有點累了，先睡了", next: "day3_chat_tired" }
            ]
        }
    ],
    day3_chat_excited: [
        { type: "chat", id: "self", text: "大家加油！為了及格，我們明天繼續努力！" },
        { type: "chat", id: "peter", text: "說得好。這才是紙校學生該有的樣子。" },
        { type: "chat", id: "lanlan", text: "好吧...既然大家都這麼說了，我也會努力的呀！🔥" },
        { type: "chat", id: "ora", text: "熱血是沒用的，還是多看點公式吧。晚安。" }
    ],
    day3_chat_tired: [
        { type: "chat", id: "self", text: "我也有點累了，大家也早點休息吧，晚安。" },
        { type: "chat", id: "ora", text: "合理的決定。晚安。" },
        { type: "chat", id: "peter", text: "晚安。明天別遲到。" },
        { type: "chat", id: "lanlan", text: "大家晚安呀！夢裡見！🌙" }
    ]
};