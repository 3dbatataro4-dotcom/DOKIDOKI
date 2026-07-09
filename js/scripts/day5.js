window.day5_script = {
    // --- Day 5: 週末約會邀請（結局前夕） ---
    day5_intro: [
        { bg: "home", bgm: "peace", text: "不知不覺，來到這所學校已經一週了。", name: "我" },
        { text: "雖然這裡的人都有些古怪，但這份熱鬧卻讓我感到前所未有的充實。", name: "我" },
        { bg: "gate", text: "今天天氣格外晴朗，微風吹過校園的櫻花樹，花瓣如雪般飄落。", name: "我" }
    ],

    // --- Day 5: Morning Encounter ---
    day5_morning_encounter: [
        { bg: "classroom", text: "走進教室，氣氛顯得比平時安靜一些，但卻有一種溫馨的感覺。", name: "我" },
        { char: "peter", name: "彼得", emotion: "normal", text: "明天就是週末了。Shit，你該不會打算在家裡宅兩天吧？那樣空氣不流通，會生病的。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "對呀對呀！週末我們出去玩吧！蘭蘭已經把遊樂園的票買好啦！", effect: "jump" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "我查過週末的展覽清單。有一個關於「多維空間與情感聯繫」的特展，很有意義。", effect: "breathe" },
        { text: "看來大家都有自己的計畫。", name: "我" }
    ],

    // --- Day 5: Break Choice (課間) ---
    day5_break_prompt: {
        text: "下課了，大家似乎都在等待我的回答。",
        options: [
            { location: "走廊", action: "聽聽彼得的「週末衛生指南」", target: "day5_break_peter", char: "peter", affection: 5, color: "var(--peter-color)" },
            { location: "後門", action: "看蘭蘭準備的遊樂園攻略", target: "day5_break_lanlan", char: "lanlan", affection: 5, color: "var(--lanlan-color)" },
            { location: "座位", action: "和奧拉討論展覽內容", target: "day5_break_ora", char: "ora", affection: 5, color: "var(--ora-color)" }
        ]
    },

    day5_break_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "smile", text: "週末...如果你沒事的話，我可以勉強陪你去公園走走。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "我會帶上全套的野餐裝備。Shit，別誤會，我只是想確保你在外面的飲食衛生而已！" }
    ],
    day5_break_lanlan: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "新同學！我們去坐摩天輪呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "在最高點的時候，我們一起看夕陽呀！蘭蘭會幫你拍很多漂亮的照片呀！" }
    ],
    day5_break_ora: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "展覽的數據量很大，我建議我們早點出發。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，我希望你能成為我的共同觀察者。這對我們未來的「研究」很重要。" }
    ],

    // --- Day 5: Lunch (午休) ---
    day5_trans_lunch: [
        { bg: "corridor", text: "午休時間，校慶的餘溫還在，週末的期待已經升起。", name: "我" }
    ],
    day5_lunch_prompt: {
        options: [
            { location: "學生會辦", action: "和彼得確認約會時間", target: "day5_lunch_peter", char: "peter", affection: 15, color: "var(--peter-color)" },
            { location: "高級餐廳", action: "和蘭蘭挑選約會服裝", target: "day5_lunch_lanlan", char: "lanlan", affection: 15, color: "var(--lanlan-color)" },
            { location: "視聽教室", action: "和奧拉預約展覽門票", target: "day5_lunch_ora", char: "ora", affection: 15, color: "var(--ora-color)" }
        ]
    },

    day5_lunch_peter: [
        { bg: "club_room", char: "peter", name: "彼得", emotion: "happy", text: "早上十點，在公園門口集合。遲到一秒鐘我就把你拉進黑名單。Shit，我是說，準時是很重要的！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "我會穿那件你說好看的白色制服。你...也穿漂亮點。" }
    ],
    day5_lunch_lanlan: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "這件衣服太適合你了呀！買了！那件也買了！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "週末我們要穿得漂亮點去遊樂園呀！讓全校的人都羨慕我們呀！" }
    ],
    day5_lunch_ora: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "門票已經存入你的手機了。QR Code 是動態加密的。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，我已經規劃好了最短的路徑。這樣我們就能在展館關門前，完成所有的數據交換。" }
    ],

    // --- Day 5: Club (社團活動 - 小遊戲) ---
    day5_trans_club: [
        { bg: "club_room", bgm: "club", text: "放學後，我們在社辦進行這一週最後一次的活動。", name: "" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "今天的課題是「承諾與未來」。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "希望這一週的學習，能讓你們對自己的心意有更清晰的認識。", effect: "breathe" },
        { text: "（小遊戲詞彙已更新：承諾, 守護, 永恆, 約定, 笑容, 幸福...）", name: "系統" }
    ],
    day5_club_minigame_start: [
        { text: "開始合成...", name: "系統" }
    ],

    // --- Day 5: After School (SNS) ---
    day5_trans_sns: [
        { bg: "club_room", text: "活動結束了。大家互相告別，約定好週末見。", name: "" },
        { text: "夕陽西下，大家都在收拾東西準備回家。", name: "我" }
    ],
    day5_afterschool_prompt: {
        options: [
            { location: "學生會辦", action: "陪彼得做最後的清掃", target: "day5_end_peter", char: "peter", affection: 10, color: "var(--peter-color)" },
            { location: "校門口", action: "和蘭蘭去買慶祝蛋糕", target: "day5_end_lanlan", char: "lanlan", affection: 10, color: "var(--lanlan-color)" },
            { location: "實驗室", action: "陪奧拉備份這週的數據", target: "day5_end_ora", char: "ora", affection: 10, color: "var(--ora-color)" }
        ]
    },
    day5_end_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "smile", text: "這一週辛苦你了。Shit，你表現得比我想像中要好得多。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "回家好好休息。週末見，新生。" },
        { text: "（放學後時光結束）", target: "day5_chat_start" }
    ],
    day5_end_lanlan: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "新同學週末見呀！蘭蘭會想你的呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "我會準時派車去接你的呀！" },
        { text: "（放學後時光結束）", target: "day5_chat_start" }
    ],
    day5_end_ora: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "smile", text: "數據備份完成。新同學，週末見。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "希望明天的情況，依然在我的掌控之中。" },
        { text: "（放學後時光結束）", target: "day5_chat_start" }
    ],


    // --- Day 5: Night Chat ---
    day5_chat_start: [
        { bg: "home", bgm: "home", text: "躺在床上，回想著這一週發生的一切。", name: "我" },
        { text: "原本平凡的生活，似乎因為這三個人而變得截然不同了。", name: "我" },
        { text: "手機提示音響起。", name: "我" }
    ],
    day5_night_chat_content: [
        { type: "chat", id: "sys", text: "系統：Day 5 聊天室開啟" },
        { type: "chat", id: "lanlan", text: "大家週末都要準時呀！不然蘭蘭會生氣呀！🔥" },
        { type: "chat", id: "peter", text: "我已經設置了五個鬧鐘。絕對不會遲到。Shit，你們也一樣。" },
        { type: "chat", id: "ora", text: "我的生物鐘已經精確到秒。不需要擔心。" },
        {
            type: "choice", options: [
                { text: "期待週末見到大家！", next: "day5_chat_finish" },
                { text: "大家晚安，週末見", next: "day5_chat_finish" }
            ]
        }
    ],
    day5_chat_finish: [
        { type: "chat", id: "self", text: "週末見，大家晚安！" },
        { type: "chat", id: "peter", text: "晚安。" },
        { type: "chat", id: "lanlan", text: "晚安呀大家！✨" },
        { type: "chat", id: "ora", text: "晚安。連線中斷。" },
        { text: "（第一週結束。下週...會發生什麼呢？）", target: "week1_ending_check" }
    ],
    week1_ending_check: [
        { bg: "home", text: "（本體驗版到此結束，感謝遊玩！）", name: "系統" },
        { text: "即將返回標題畫面...", target: "title_screen" }
    ],
    title_screen: [
        { text: "重新載入中...", action: () => location.reload() }
    ]
};