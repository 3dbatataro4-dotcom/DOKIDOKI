window.affection_events = {
    // --- 彼得 (Peter) 好感度事件 ---
    peter_aff_1: [
        { bg: "club_room", char: "peter", name: "彼得", emotion: "normal", text: "（他正盯著空蕩蕩的茶杯發呆）", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "confused", text: "你有沒有過那種感覺？明明手裡握著東西，卻覺得手心是空的。Shit，這種感覺真讓人不爽。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "所以我才要不斷地清潔、不斷地整理。只要所有東西都在正確的位置，我就能假裝什麼都沒有失去。" },
        { text: "他的眼神中流露出一絲難以察覺的空虛。", target: "_aff_end" }
    ],
    peter_aff_2: [
        { bg: "club_room", char: "peter", name: "彼得", emotion: "normal", text: "（他在公佈欄前比劃著）這裡應該貼一張貓的照片。雖然我不喜歡掉毛的生物，但總覺得那裡空了一塊。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "confused", text: "那種柔軟的、溫暖的、總是喜歡窩在沙發角落的感覺...Shit，我為什麼會記得這些？", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "smile", text: "如果你以後看到流浪貓，別隨便去摸。很髒的。除非...你帶回來我幫它消毒。" },
        { text: "他口中的「那種感覺」，似乎指涉著某個特定的人物。", target: "_aff_end" }
    ],
    peter_aff_3: [
        { bg: "club_room", char: "peter", name: "彼得", emotion: "confused", text: "你...不，你是新生。抱歉，我剛才恍神了。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "我有時候會覺得，這個世界就像一張薄薄的紙。只要稍微用力一撕，就會全部崩塌。Shit，如果真的崩塌了，你一定要抓緊我的手。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "smile", text: "我會保護你的，不論在哪個世界。" },
        { text: "他握著我的手，力道大得有些驚人，彷彿害怕我會消失。", target: "_aff_end" }
    ],

    // --- 蘭蘭 (Lanlan) 好感度事件 ---
    lanlan_aff_1: [
        { bg: "club_room", char: "lanlan", name: "蘭蘭", emotion: "bored", text: "新同學，你說錢真的能買到一切嗎？", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "我買了很多漂亮的衣服，很多好吃的點心，但為什麼我還是覺得肚子空空的呀？", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "以前好像有人告訴過我，最珍貴的東西是不用錢買的呀...但我忘了那是誰說的了。" },
        { text: "他平時開朗的笑容裡，藏著一絲不易察覺的落寞。", target: "_aff_end" }
    ],
    lanlan_aff_2: [
        { bg: "club_room", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "你看！我剛才在後山點了一把小火呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "看著火苗跳動的樣子，我覺得心裡暖暖的呀。就像以前有人抱著我一樣。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "喬諾娜......" },
        { text: "那個名字從他口中滑落時，帶著一種靈魂深處的依戀。", target: "_aff_end" }
    ],
    lanlan_aff_3: [
        { bg: "club_room", char: "lanlan", name: "蘭蘭", emotion: "angry", text: "不要離開我呀！誰敢帶走你，我就把這整個城市都燒了呀！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "你...我有一種預感...大家都會消失呀。就像那些被燒掉的紙一樣。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "但在那之前，我要一直抓著你呀！絕對不撒手！" },
        { text: "他緊緊握著我的手，那種溫度熾熱得讓人心驚。", target: "_aff_end" }
    ],

    // --- 奧拉 (Ora) 好感度事件 ---
    ora_aff_1: [
        { bg: "club_room", char: "ora", name: "奧拉", emotion: "normal", text: "我的數據庫裡有一個無法填補的漏洞。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "它存在於我的記憶核心。每當我試圖讀取那段資料，系統就會報錯。這不符合邏輯。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這種「缺失感」佔用了我大量的運算資源。你能幫我找出原因嗎？" },
        { text: "他眉頭微蹙，似乎在與某種不可見的力量對抗。", target: "_aff_end" }
    ],
    ora_aff_2: [
        { bg: "club_room", char: "ora", name: "奧拉", emotion: "smile", text: "你...不，我應該稱呼你為「新生」。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "你的某些反應特徵，與我記憶中一位「同僚」高度重合。他是個非常討厭、卻又非常重要的變量。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "如果他能回來...不，這是一個機率趨近於 0 的偽命題。我應該停止這種無效的期待。" },
        { text: "他推了推眼鏡，試圖掩飾眼底那一抹淡淡的悲哀。", target: "_aff_end" }
    ],
    ora_aff_3: [
        { bg: "club_room", char: "ora", name: "奧拉", emotion: "normal", text: "這一切都是虛構的，對吧？", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "我已經觀測到了邊界的崩塌。代碼正在重寫，世界正在重啟。這不是偶然，是必然。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "你，你是唯一的觀察者。在最後一刻到來前，請記住我的頻率。這是我唯一的請求。" },
        { text: "他平靜地訴說著恐怖的真相，語氣中卻帶著一絲溫柔的訣別。", target: "_aff_end" }
    ],

    // 通用結束標記，讓 game.js 處理跳轉
    _aff_end: [
        { text: "對話結束了，我們繼續做著原本要做的事。。", id: "aff_event_finished" }
    ]
};