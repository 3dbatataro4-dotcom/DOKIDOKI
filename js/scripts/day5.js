window.day5_script = {
    // --- Day 5: 秩序與混亂的交會 ---
    day5_intro: [
        { bg: "home", bgm: "home", text: "今天是第五天。手機收到了一條來自學生會的緊急通知。", name: "我" },
        { text: "『請身心靈自助研究社派員參加學園祭籌備會議。缺席者社團將被強制廢除。——學生會長』", name: "手機" },
        { text: "看來不得不去了。", name: "我" },
    ],

    day5_morning_encounter: [
        { bg: "classroom", bgm: "peace", text: "來到教室，發現氣氛有點不一樣。", name: "我" },
        { char: "peter", name: "彼得", emotion: "normal", text: "既然你來了，就把那兩個傢伙帶去會議室。我是會長，我先過去消毒。", name: "彼得" },
        { text: "彼得丟下這句話就走了，背影看起來充滿了焦慮（和酒精味）。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "會議？聽起來很無聊呀。不過如果有免費點心我就去！", effect: "jump" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "根據校規第 108 條，出席會議能增加社團評分權重。符合邏輯的選擇。", name: "奧拉" },
    ],
    
    // --- 學生會辦公室：三方會談 ---
    day5_meeting_start: [
        { bg: "club_room", bgm: "club", text: "學生會辦公室出乎意料地...乾淨到令人髮指。", name: "我" }, // 暫時用社團教室背景代替
        { text: "空氣中瀰漫著濃烈的消毒水味。", name: "我" },
        { char: "peter", name: "彼得", emotion: "normal", text: "（拿著噴霧）進來前先消毒鞋底。左腳，右腳，轉身。好，勉強及格。", name: "彼得" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "哇，這個人是潔癖怪嗎？我的鞋子可是昨天剛買的限量版呀！", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "空氣中乙醇濃度超過 75%。長時間吸入可能導致神經麻痺。", name: "奧拉" },
        { char: "peter", name: "彼得", emotion: "angry", text: "閉嘴。那是聖水的味道。現在，開始會議。", effect: "shake" },
    ],

    day5_meeting_discussion: [
        { text: "會議桌上，彼得坐在主位，蘭蘭把腳翹在椅子上，奧拉則拿出了一個計算機。", name: "我" },
        { char: "peter", name: "彼得", emotion: "normal", text: "學園祭的主題是『純淨與秩序』。所有攤位必須符合衛生標準。", name: "彼得" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "反對！我要辦燒烤大會！而且我要幫喬諾娜申請一個超大的舞台！老婆唱歌最好聽了！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "confused", text: "喬諾娜？那個粉紅色頭髮的仿生人？噪音製造者二號？駁回。", name: "彼得" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "你說什麼？！你竟敢說我老婆是噪音？！我要把你這間辦公室燒了！", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "根據數據，燃燒辦公室的賠償金額將是你零用錢的 300 倍。不建議執行。", name: "奧拉" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "另外，我申請批准蜜拉思的『未知化學飲品』攤位。雖然致死率未知，但實驗數據很有價值。", name: "奧拉" },
        { char: "peter", name: "彼得", emotion: "horror", text: "蜜拉思...那個頭上長花的陰沉傢伙？絕對不行！學校會變成生化危機現場！我要去請林恩來坐鎮...只有貓貓能淨化這些汙穢...", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "林恩？那個有錢的大老闆？原來他是你的吉祥物呀？", name: "蘭蘭" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "關聯建立：彼得依賴林恩，蘭蘭依賴喬諾娜，我觀測蜜拉思。人類（與非人類）的社交網絡圖譜已更新。", name: "奧拉" },
        { text: "三個人的視線在空中交會，雖然充滿了火藥味，但也算是一種...認識吧？", name: "我" }
    ],

    day5_meeting_choice: {
        text: "場面一度混亂，你決定幫誰說話？",
        options: [
            { text: "支持彼得的衛生標準", next: "day5_support_peter", affection: { peter: 5, lanlan: -2 } },
            { text: "支持蘭蘭的燒烤與舞台", next: "day5_support_lanlan", affection: { lanlan: 5, peter: -2 } },
            { text: "支持奧拉的實驗攤位", next: "day5_support_ora", affection: { ora: 5, peter: -2 } }
        ]
    },

    day5_support_peter: [
        { char: "peter", name: "彼得", emotion: "smile", text: "看來這裡還有一個正常人。庶民，你很有前途。", name: "彼得" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "切，真無聊。轉學生你也變成了潔癖怪的走狗了呀。", name: "蘭蘭" }
    ],
    day5_support_lanlan: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "耶！轉學生最好了！到時候第一串烤肉給你吃！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "horror", text: "不可理喻...我要去喝點潔廁靈冷靜一下...", name: "彼得" }
    ],
    day5_support_ora: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "明智的判斷。你將獲得第一批實驗藥水的試飲權。", name: "奧拉" },
        { char: "peter", name: "彼得", emotion: "normal", text: "這學校沒救了。", name: "彼得" }
    ],

    day5_meeting_end: [
        { text: "會議在一片混亂中結束了。雖然什麼結論都沒達成，但至少他們記住了彼此（的缺點）。", name: "我" },
        { bg: "gate", text: "走出辦公室，大家都鬆了一口氣。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "那個彼得雖然討厭，但如果林恩真的那麼有錢，或許我可以找他贊助一下...", name: "蘭蘭" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "彼得的精神狀態異常，值得作為對照組。", name: "奧拉" },
        { text: "看來這場修羅場才剛剛開始。", name: "我" }
    ],

    // --- 放學與晚上 ---
    day5_trans_home: [
        { bg: "home", bgm: "home", text: "這一天過得比打仗還累。", name: "我" },
        { text: "不知道他們在群組裡還會不會繼續吵。", name: "我" }
    ],

    day5_chat_start: [
        { type: "chat", id: "sys", text: "--- Day 5 聊天室開啟 ---" },
        { type: "chat", id: "peter", text: "今天的會議室空氣品質指數：極差。" },
        { type: "chat", id: "lanlan", text: "潔癖怪閉嘴呀！我要去跟喬諾娜告狀！" },
        { type: "chat", id: "ora", text: "建議：下次會議改為線上進行，可提升效率 400%。" },
    ],
    
    day5_night_chat_content: [
        { type: "choice", options: [
            { text: "大家今天都辛苦了...", next: "day5_chat_tired" },
            { text: "我覺得其實挺有趣的！", next: "day5_chat_fun" }
        ]}
    ],
    
    day5_chat_tired: [
        { type: "chat", id: "self", text: "大家今天都辛苦了...早點休息吧。" },
        { type: "chat", id: "lanlan", text: "我不累！我要去找老婆！" },
        { type: "chat", id: "peter", text: "我也要去淨化我的眼睛。" }
    ],

    day5_chat_fun: [
        { type: "chat", id: "self", text: "我覺得其實挺有趣的！大家各有特色嘛。" },
        { type: "chat", id: "ora", text: "「特色」是非量化形容詞。精確來說是「異常」。" },
        { type: "chat", id: "peter", text: "哼。" }
    ]
};