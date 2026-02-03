window.day4_script = {
    // --- Day 4: 迴響與歌聲 ---
    day4_intro: [
        { bg: "home", bgm: "home", text: "早晨的陽光透過窗簾縫隙灑在臉上，但今天醒來時，心裡卻多了一份莫名的悸動。", name: "我" },
        { text: "也許是因為這幾天發生的事情，讓我感覺自己已經深深地捲入了這所「紙校」的漩渦之中。", name: "我" },
        { text: "今天是第四天了。", name: "我" },
    ],

    day4_morning_encounter: [
        { bg: "classroom", bgm: "peace", text: "剛進教室，就看到社團的三個人圍在一起討論著什麼。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "聽我說聽我說！放學後我們去唱歌吧！昨天我在街上看到一家新開的 KTV，招牌閃得像要爆炸一樣，超酷的！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "confused", text: "那裡一定充滿了細菌、飛沫和沒有調準的噪音。我不去。", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "聲波震動對人體細胞的影響研究...或許能採集到有趣的數據。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "彼得你好掃興！連奧拉都答應了！轉學生，你也一定會去的對吧？", effect: "shake" },
        { text: "蘭蘭的眼睛閃閃發亮，感覺如果我拒絕，她下一秒就會拿出打火機。", name: "我" },
    ],
    
    // 選項：答應去KTV
    day4_morning_choice: {
        text: "面對蘭蘭熱切的邀請（和潛在的威脅），你的回答是？",
        options: [
            { text: "當然去，聽起來很有趣！", next: "day4_accept_ktv", affection: { lanlan: 5 } },
            { text: "雖然有點累，但還是陪你們去吧。", next: "day4_accept_ktv", affection: { peter: 2 } }, // 彼得覺得你也是被逼的，產生共鳴
            { text: "為了科學數據，我去。", next: "day4_accept_ktv", affection: { ora: 5 } }
        ]
    },

    day4_accept_ktv: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "太好了！那就這麼決定了！放學後校門口見！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "normal", text: "嘖...記得戴口罩。我會帶消毒噴霧去的。", name: "彼得" },
        { text: "就這樣，今天的行程被定下來了。", name: "我" }
    ],

    // --- 午休與課程快速帶過，聚焦放學 ---
    day4_trans_lunch: [
        { bg: "classroom", text: "上午的課程依然枯燥乏味，老師的聲音像催眠曲一樣。", name: "我" },
        { text: "轉眼間就到了午休時間。", name: "我" }
    ],
    
    day4_lunch_prompt: {
        text: "午休時間，你要去找誰？",
        options: [
            { text: "找彼得 (保健室)", target: "day4_lunch_peter", affection: { peter: 5 } },
            { text: "找蘭蘭 (頂樓)", target: "day4_lunch_lanlan", affection: { lanlan: 5 } },
            { text: "找奧拉 (圖書館)", target: "day4_lunch_ora", affection: { ora: 5 } }
        ]
    },

    day4_lunch_peter: [
        { bg: "club_room", char: "peter", emotion: "normal", text: "你來了。正在整理急救箱。KTV那種地方，隨時可能發生耳膜破裂或酒精中毒。", name: "彼得" },
        { text: "雖然嘴上抱怨，但他似乎準備得很周全。", name: "我" }
    ],
    day4_lunch_lanlan: [
        { bg: "rooftop", char: "lanlan", emotion: "smile", text: "我在練歌喔！啦啦啦～♪ 轉學生，到時候別被我的歌聲迷倒喔！", name: "蘭蘭" },
        { text: "她在頂樓邊緣轉圈圈，看起來很危險但又很開心。", name: "我" }
    ],
    day4_lunch_ora: [
        { bg: "library", char: "ora", emotion: "normal", text: "這本《聲學原理》...對於理解麥克風的回授效應很有幫助。", name: "奧拉" },
        { text: "她好像把唱歌當成了一場學術研討會。", name: "我" }
    ],

    day4_trans_ktv: [
        { bg: "corridor", text: "放學鐘聲響起。", name: "我" },
        { text: "我們一行人來到了那間新開的 KTV 包廂。", name: "我" },
        { bg: "ktv", bgm: "club", text: "包廂裡的燈光迷離，紫紅色的霓虹燈管在牆上勾勒出奇異的圖案。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "哇！這氣氛太棒了！我要點第一首！《燃燒吧！紙飛機！》", effect: "jump" },
        { text: "蘭蘭搶過麥克風，音浪瞬間炸裂。她的歌聲充滿爆發力，雖然偶爾走音，但熱情足以掩蓋一切。", name: "我" },
        { char: "peter", name: "彼得", emotion: "horror", text: "（摀住耳朵）分貝超標了...我的耳膜...細菌隨著聲波在擴散...", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "頻率 440Hz...修正，剛剛那聲尖叫達到了 2000Hz。", name: "奧拉" },
        
        { text: "接著輪到彼得。", name: "我" },
        { char: "peter", name: "彼得", emotion: "normal", text: "......如果不唱你們不會放過我對吧。", name: "彼得" },
        { text: "彼得選了一首意外低沉的搖滾樂。他唱得很投入，甚至帶著一絲憤世嫉俗的嘶吼，與平時潔癖的形象大相徑庭。", name: "我" },
        
        { text: "然後是奧拉。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "讀取歌詞資料庫...開始執行。", name: "奧拉" },
        { text: "奧拉唱了一首節奏極快、歌詞密密麻麻的說唱，完全沒有換氣，精準得像個機器人。", name: "我" },
        
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "接下來輪到轉學生了！快點快點！", name: "蘭蘭" },
        { text: "麥克風被塞到了我手裡。", name: "我" }
    ],

    day4_ktv_choice: {
        text: "你要唱什麼風格的歌？",
        options: [
            { text: "歡快的流行歌 (炒熱氣氛)", target: "day4_ktv_happy", affection: { lanlan: 5, peter: 2, ora: 2 } },
            { text: "深情的抒情歌 (表達心意)", target: "day4_ktv_sentimental" } // 進入關鍵劇情分支
        ]
    },

    day4_ktv_happy: [
        { bg: "ktv", text: "我選了一首大家都耳熟能詳的流行歌。輕快的旋律讓包廂裡的氣氛更加熱烈。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "喔喔喔！這首我會！一起唱！", effect: "jump" },
        { text: "我們四個人拿著鈴鼓和麥克風，雖然音準亂七八糟，但笑聲卻沒有停過。", name: "我" },
        { text: "這或許就是最單純的快樂吧。", name: "我" }
    ],

    day4_ktv_sentimental: [
        { bg: "ktv", text: "我看著點歌機的螢幕，手指在一首老歌上停了下來。", name: "我" },
        { text: "那是一首關於「思念」和「遺憾」的歌。旋律緩緩流出，包廂裡的喧鬧聲逐漸安靜下來。", name: "我" },
        { text: "「時間沖淡了顏色，卻沖不淡記憶裡的輪廓...」", name: "我(唱)" },
        { text: "我看著螢幕上的歌詞，視線卻慢慢模糊。這首歌，讓我想起了...", name: "我" }
    ],

    // --- 白月光分支判定點 (邏輯由 Game Core 處理) ---
    // 這裡拆分成不同路線的對話塊

    // 1. 普通路線 (暗示模糊的白月光)
    day4_ktv_memory_normal: [
        { bg: "ktv", text: "腦海中浮現出一個模糊的身影。我不記得祂的名字，看不清祂的臉。", name: "我" },
        { text: "但我知道，我曾深愛過某個「存在」。在這個紙糊的世界之外，或許有真實的溫暖曾屬於我。", name: "我" },
        { text: "唱到最後一句時，我感覺心裡某個空洞的地方隱隱作痛。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "轉學生...你怎麼突然變得這麼傷感？", name: "蘭蘭" },
        { char: "peter", name: "彼得", emotion: "normal", text: "哼，多愁善感。不過...音準還不錯。", name: "彼得" }
    ],

    // 2. Lynn 路線 (彼得 = 關鍵人物/白月光投射)
    day4_ktv_memory_lynn: [
        { bg: "ktv", text: "我的目光不由自主地看向彼得。", name: "我" },
        { text: "歌詞裡的每一個字，彷彿都是為了他而寫。不，是為了那個記憶深處，總是受傷卻又總是保護著我的「那個人」。", name: "我" },
        { text: "現在的彼得，和記憶中的影子重疊了。", name: "我" },
        { text: "「如果還能再見你一面，我願用一切交換...」", name: "我(唱)" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "......幹嘛一直盯著我看？還有...你的眼神，讓我覺得很不舒服。", name: "彼得" },
        { text: "他雖然嘴硬，但耳根卻悄悄紅了，並且避開了我的視線。", name: "我" }
    ],

    // 3. Jornona 路線 (蘭蘭 = 關鍵人物/白月光投射)
    day4_ktv_memory_jornona: [
        { bg: "ktv", text: "我看著正在搖鈴鼓的蘭蘭。她熱烈的笑容背後，我彷彿看到了火焰。", name: "我" },
        { text: "那是一場毀滅一切的大火，而在那場火中，只有這份笑容是真實的。", name: "我" },
        { text: "這首歌是獻給妳的。獻給那個瘋狂、熱烈，卻又無比孤獨的靈魂。", name: "我" },
        { text: "「燃燒殆盡後的灰燼，是我愛妳的證明...」", name: "我(唱)" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "......", name: "蘭蘭" },
        { text: "蘭蘭停下了手中的動作。她難得地沒有吵鬧，只是靜靜地看著我，眼神中閃過一絲我看不懂的複雜情緒。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "雖然聽不懂你在唱什麼悲傷的東西...但，我很喜歡喔。", name: "蘭蘭" }
    ],

    // 4. Melas 路線 (奧拉 = 關鍵人物/白月光投射)
    day4_ktv_memory_melas: [
        { bg: "ktv", text: "奧拉依然面無表情地看著螢幕上的數據，但我知道她在聽。", name: "我" },
        { text: "我的歌聲穿越了數據的洪流，試圖觸碰那個冰冷外殼下的真實。", name: "我" },
        { text: "曾經我們是不是也像這樣，試圖解析這個世界的真理？而妳，就是我唯一的常數。", name: "我" },
        { text: "「在無數個變量之中，唯有妳是永恆...」", name: "我(唱)" },
        { char: "ora", name: "奧拉", emotion: "surprise", text: "偵測到不明生體訊號波動...心率上升...邏輯迴路出現輕微紊亂。", name: "奧拉" },
        { text: "她按著自己的胸口，困惑地看著我。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這首歌的頻率...似乎與我的核心代碼產生了共鳴。", name: "奧拉" }
    ],

    day4_ktv_end: [
        { bg: "ktv", text: "一曲唱罷，包廂裡陷入了短暫的沈默，隨即又恢復了熱鬧。", name: "我" },
        { text: "我們唱到喉嚨沙啞，直到夜幕降臨。", name: "我" },
        { bg: "gate", bgm: "home", text: "走出 KTV 時，外面的空氣有些涼意。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "啊～真爽快！明天也要繼續玩喔！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "normal", text: "明天我要徹底消毒。再見。", name: "彼得" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "數據採集完畢。歸檔中。", name: "奧拉" },
        { text: "大家在校門口道別，各自回家。", name: "我" }
    ],

    // --- 晚上 ---
    day4_trans_home: [
        { bg: "home", bgm: "home", text: "回到家，身體雖然疲憊，但精神卻很亢奮。", name: "我" },
        { text: "手機震動了一下，看來群組又要熱鬧起來了。", name: "我" }
    ],

    day4_chat_start: [
        { type: "chat", id: "sys", text: "--- Day 4 聊天室開啟 ---" },
        { type: "chat", id: "lanlan", text: "今天的 MVP 絕對是我！那個高音沒有人能超越！" },
        { type: "chat", id: "peter", text: "那是噪音。我的耳朵現在還在耳鳴。" },
        { type: "chat", id: "ora", text: "經過頻譜分析，轉學生的抒情歌情感波動值最高。" },
    ],
    
    day4_night_chat_content: [
        { type: "choice", options: [
            { text: "大家今天都唱得很棒！", next: "day4_chat_happy" },
            { text: "下次我們換個安靜點的地方吧...", next: "day4_chat_quiet" }
        ]}
    ],
    
    day4_chat_happy: [
        { type: "chat", id: "self", text: "大家今天都唱得很棒！玩得很開心！" },
        { type: "chat", id: "lanlan", text: "對吧對吧！下次還要再去！" },
        { type: "chat", id: "peter", text: "饒了我吧..." }
    ],

    day4_chat_quiet: [
        { type: "chat", id: "self", text: "下次我們換個安靜點的地方吧...彼得快崩潰了。" },
        { type: "chat", id: "peter", text: "算你有良心。" },
        { type: "chat", id: "lanlan", text: "欸～安靜的地方多無聊啊！" }
    ]
};