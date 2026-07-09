window.day4_script = {
    // --- Day 4: 慶祝與 KTV ---
    day4_intro: [
        { bg: "home", bgm: "peace", text: "昨天熬夜讀書的疲憊還沒完全消散，但想到今天的「慶祝活動」，精神就振奮了起來。", name: "我" },
        { text: "聽說蘭蘭已經包下了市區最豪華的 KTV 包廂。", name: "我" },
        { bg: "gate", text: "校門口，彼得正一臉嚴肅地對著空氣噴灑著什麼。", name: "我" }
    ],

    // --- Day 4: Morning Encounter ---
    day4_morning_encounter: [
        { bg: "classroom", text: "走進教室，大家已經在討論放學後的行程了。", name: "我" },
        { char: "peter", name: "彼得", emotion: "normal", text: "我已經查過那家 KTV 的衛生評鑑了。雖然是 A 級，但我還是會帶自己的消毒裝備過去。Shit，麥克風上的細菌數量簡直不敢想像。", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "哎呀彼得，那可是我家開的 KTV 呀！每天都有專人打掃三次呀！", effect: "jump" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（看著手邊的頻率分析儀）我在研究如何透過聲場干擾來掩蓋蘭蘭可能的走音。這是一項艱巨的工程。", effect: "breathe" },
        { text: "大家看起來都很興奮。", name: "我" },
        {
            type: "choice", options: [
                { text: "我很期待晚上的 KTV！", next: "day4_accept_ktv" },
                { text: "感覺會變得很吵鬧呢...", next: "day4_accept_ktv" }
            ]
        }
    ],
    day4_accept_ktv: [
        { text: "大家約好了放學後在校門口集合。", name: "我" }
    ],

    // --- Day 4: Lunch (午休) ---
    day4_trans_lunch: [
        { bg: "corridor", text: "午休時間，大家在討論要唱什麼歌。", name: "我" }
    ],
    day4_lunch_prompt: {
        options: [
            { location: "學生會辦", action: "看彼得準備的「麥克風防護套」", target: "day4_lunch_peter", char: "peter", affection: 15, color: "var(--peter-color)" },
            { location: "中庭", action: "聽蘭蘭練習歌喉", target: "day4_lunch_lanlan", char: "lanlan", affection: 15, color: "var(--lanlan-color)" },
            { location: "天台", action: "和奧拉討論音律科學", target: "day4_lunch_ora", char: "ora", affection: 15, color: "var(--ora-color)" }
        ]
    },

    day4_lunch_peter: [
        { bg: "club_room", char: "peter", name: "彼得", emotion: "normal", text: "這是我定製的特種纖維防護套。能阻隔 99.99% 的飛沫傳染。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "smile", text: "我也幫你準備了一個。顏色是根據你的形象選的。拿著吧，別讓那些髒東西碰到你的嘴唇。" }
    ],
    day4_lunch_lanlan: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "喔喔喔——新同學你聽！我這句高音是不是很完美呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "我打算在 KTV 跟你合唱情歌呀！曲目我都選好了，全是講真愛的呀！" }
    ],
    day4_lunch_ora: [
        { bg: "rooftop", char: "ora", name: "奧拉", emotion: "normal", text: "聲波的共振能引發情感波動。這在科學上是有依據的。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，我整理了一份「絕對音感」清單。照著這份頻率唱，你就是今晚的歌神。" }
    ],

    // --- Day 4: Transition to KTV ---
    day4_trans_ktv: [
        { bg: "arcade", bgm: "happy", text: "放學後，我們來到了市中心最豪華的 KTV。", name: "我" },
        { text: "包廂裡裝潢得極其浮誇，巨大的水晶吊燈閃得人眼睛發花。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "歡迎來到蘭蘭的音樂殿堂呀！大家隨便點，想喝什麼隨便叫！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "confused", text: "（拿著酒精噴霧瘋狂清掃沙發）Shit，這地毯的味道也太混雜了。所有人，坐下前先噴酒精！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（拿著麥克風）大家一起嗨吧！", next: "day4_ktv_happy" },
                { text: "（靜靜地聽他們唱）", next: "day4_ktv_sentimental" }
            ]
        }
    ],
    day4_ktv_happy: [
        { text: "大家在包廂裡唱得昏天暗地。蘭蘭的歌聲雖然有些跑調，但充滿了感染力；彼得則意外地唱得很專業，只是每次唱完都要消毒麥克風；奧拉則在一旁冷靜地用平板記錄大家的音域分佈。", name: "我" },
        { text: "這真的是這幾天最開心的一刻了。", name: "我", target: "day4_ktv_end" }
    ],
    day4_ktv_sentimental: [
        { text: "我靜靜地看著他們。雖然性格各異，但現在大家圍在一起笑鬧的樣子，真的很有社團的感覺。", name: "我", target: "day4_ktv_end" }
    ],

    // --- Day 4: KTV Memory (White Moonlight Branch) ---
    day4_ktv_memory_normal: [
        { text: "歡笑過後，大家在沙發上休息。氣氛變得很溫馨。", name: "我" }
    ],
    day4_ktv_memory_lynn: [
        { char: "peter", name: "彼得", emotion: "smile", text: "林恩，這首歌...是你以前常哼的那首吧？", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "雖然這裡的音響設備很垃圾，但聽你哼出來，我感覺整個世界的噪音都消失了。" }
    ],
    day4_ktv_memory_jornona: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！這首歌是我專門寫給你的呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "雖然歌詞只有「我愛你」和「亮晶晶」，但這是我全部的心意呀！" }
    ],
    day4_ktv_memory_melas: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，這首歌的波長，和我們第一次見面時的數據流一模一樣。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "聽著它，我覺得我的邏輯模組在發熱。這是一次很有趣的實驗。" }
    ],

    day4_ktv_end: [
        { text: "慶祝活動結束了。大家走在回家的路上，星空閃爍。", name: "我" },
        { text: "（接下來準備進行社團活動）", target: "day4_trans_club" }
    ],

    // --- Day 4: After School (SNS) ---
    day4_trans_sns: [
        { bg: "club_room", text: "社團活動結束了。大家都在回味剛才在 KTV 的快樂時光，氣氛非常愉快。", name: "" },
        { text: "夕陽西下，大家都在收拾東西準備回家。", name: "我" }
    ],
    day4_afterschool_prompt: {
        options: [
            { location: "學生會辦", action: "陪彼得整理 KTV 的帳單", target: "day4_end_peter", char: "peter", affection: 10, color: "var(--peter-color)" },
            { location: "校門口", action: "和蘭蘭去吃宵夜", target: "day4_end_lanlan", char: "lanlan", affection: 10, color: "var(--lanlan-color)" },
            { location: "實驗室", action: "陪奧拉分析音頻數據", target: "day4_end_ora", char: "ora", affection: 10, color: "var(--ora-color)" }
        ]
    },
    day4_end_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "smile", text: "今天辛苦了。Shit，蘭蘭那傢伙居然點了那麼多酒水，帳單真亂。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "謝謝你幫我對帳。回家路上小心。" },
        { text: "（放學後時光結束）", target: "day4_chat_start" }
    ],
    day4_end_lanlan: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "新同學！我們去吃路邊攤呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "雖然彼得說不衛生，但搶著吃才香呀！" },
        { text: "（放學後時光結束）", target: "day4_chat_start" }
    ],
    day4_end_ora: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "smile", text: "音頻分析顯示，你的聲波對我有安神作用。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這是一個值得長期研究的課題。明天見。" },
        { text: "（放學後時光結束）", target: "day4_chat_start" }
    ],

    // --- Day 4: Night Chat ---
    day4_chat_start: [
        { bg: "home", bgm: "home", text: "回到家，耳朵裡似乎還殘留著 KTV 的鼓點聲。", name: "我" }
    ],
    day4_night_chat_content: [
        { type: "chat", id: "sys", text: "系統：Day 4 聊天室開啟" },
        { type: "chat", id: "lanlan", text: "今天超開心呀！彼得你唱那首《我的滑板鞋》簡直太帥了呀！👞" },
        { type: "chat", id: "peter", text: "那是為了舒緩壓力。還有，那不是滑板鞋，那是《貝多芬第九交響曲》的現代改編版！" },
        { type: "chat", id: "ora", text: "根據錄音分析，彼得的肺活量超出了常人 20%。懷疑他體內有輔助動力系統。" },
        { type: "chat", id: "peter", text: "Shit，奧拉你別亂說！" },
        {
            type: "choice", options: [
                { text: "今天大家表現都很棒喔！", next: "day4_chat_happy" },
                { text: "我想休息了，大家晚安", next: "day4_chat_quiet" }
            ]
        }
    ],
    day4_chat_happy: [
        { type: "chat", id: "self", text: "今天大家表現都很棒喔！特別是蘭蘭的伴舞！" },
        { type: "chat", id: "lanlan", text: "呀！老婆誇我了！明天我還要跳！💃" },
        { type: "chat", id: "peter", text: "哼，下次我會準備更專業的曲目。晚安。" },
        { type: "chat", id: "ora", text: "愉悅感數據收集完畢。晚安。" }
    ],
    day4_chat_quiet: [
        { type: "chat", id: "self", text: "我想休息了，大家晚安。" },
        { type: "chat", id: "ora", text: "明白。充足的睡眠有助於大腦修復. 晚安。" },
        { type: "chat", id: "lanlan", text: "大家晚安呀！做個好夢呀！🌙" },
        { type: "chat", id: "peter", text: "晚安。別忘了消毒手機。" }
    ],
    day4_end_day: [
        { text: "又是愉快的一天結束了。", name: "我" }
    ]
};