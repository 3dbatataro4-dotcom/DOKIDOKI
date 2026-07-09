window.day1_script = {
    // --- Day 1: 入學與初識 ---
    day1_intro: [
        { bg: "gate", bgm: "peace", text: "（春風拂過...校園裡充滿了新生入學的活力與希望。）", name: "" },
        { text: "這裡是國內首屈一指的貴族寄宿學校——『紙校』。至少，我的入學通知書上是這麼寫的。", name: "我" },
        { text: "壯觀的歐式鍛鐵大門聳立在眼前，門柱上的校徽在陽光下閃鑠著耀眼的光芒。", name: "我" },
        { text: "我深吸了一口氣。為了家族的期望...我轉學來到了這裡，開啟全新的高中生活。", name: "我" },
        { bg: "corridor", text: "走進主校舍，走廊的牆壁潔白無瑕，空氣中瀰漫著高級芬多精噴霧的淡淡香氣。", name: "我" },
        { text: "這股味道清新得讓人心曠神怡。", name: "我" },
        { text: "班導師親切地在走廊盡頭接待了我，並遞給我一份精緻入學手冊。", name: "我" },
        { text: "「學校規定每個學生都必須在今天加入一個社團，否則無法算作正式入學手續完成喔。」", name: "我" },
        { text: "我低頭看著手中的社團列表，上面大部分的熱門社團都已經額滿了。", name: "我" },
        { text: "只剩下最後一行，社團名稱聽起來有些古怪...", name: "我" },
        { text: "「身心靈自助研究社」。", name: "我" },
        { text: "聽起來像是在做瑜珈或是心理輔導的社團。這也是唯一還招人的社團了，我似乎別無選擇。", name: "我" },
        { text: "正當我猶豫著要不要直接去社團教室看看時，走廊另一端的公佈欄前傳來了一陣說話聲。", name: "我" }
    ],

    // --- Day 1: Hallway Encounter (初見共通線) ---
    day1_hallway_encounter: [
        { bg: "corridor", text: "我放輕腳步走過去，看到三個氣質截然不同的帥氣男生正站在佈告欄前。", name: "我" },
        { text: "佈告欄的邊緣，有一點點之前社團海報殘留下來的透明膠帶痕跡。", name: "我" },
        { char: "peter", name: "彼得", emotion: "confused", text: "Shit，這到底是誰貼的？居然留下這麼多殘膠！這會嚴重影響學生會佈告欄的整體觀感！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "哎呀，彼得你真的很囉嗦耶。只是膠帶而已嘛，有什麼大不了的？大不了我叫家裡的僕人把整塊公佈欄換成純金的呀。", effect: "jump" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......彼得的強迫症發作的概率為 100%。蘭蘭提出的方案成本效益極低，且破壞原有的建築結構。安靜點，別干擾我思考。", effect: "breathe" },
        { text: "那個穿著整齊制服、有著一頭漂亮長髮的男生正拿著一條雪白的除塵布瘋狂地擦拭著佈告欄，旁邊有著橘藍漸層雙眼的混血兒男生正滿臉笑容地看著他。", name: "我" },
        { text: "而藍色頭髮的男生則靠在牆上，一臉冷漠地翻閱著一本厚重的原文書。雖然三個人看起來都不太好相處，但卻意外地和諧。", name: "我" },
        { text: "這就是我在這所貴族學校未來的同學嗎？", name: "我" }
    ],
    // 初見差分：林恩 (Lynn)
    day1_hallway_encounter_lynn: [
        { bg: "corridor", text: "我抬起頭，看到三個引人注目的男生。", name: "我" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "Shit...這股味道...（突然停下手中的動作，猛地轉頭看向我）", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "happy", text: "乾淨的氣息...？不，這是...我的吉祥物味道！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "彼得又發作了呀。喂，那邊的新生，小心點，會長大人可能要查你服儀了哦。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......變量出現。彼得的專注力轉移。", effect: "breathe" },
        { text: "那個長髮會長死死地盯著我，眼神中似乎帶著某種...狂熱？", name: "我" }
    ],
    // 初見差分：喬諾娜 (Jornona)
    day1_hallway_encounter_jornona: [
        { bg: "corridor", text: "我抬起頭，看到三個引人注目的男生。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "好無聊呀...想買點東西...嗯？（鼻子動了動）", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "（瞬間出現在我面前，橘藍漸層的眼睛發亮）這個感覺...好熟悉呀！像柔軟的玩偶！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "confused", text: "離遠點，你這個暴發戶。別在走廊上騷擾新生。Shit，空氣都被你弄混濁了。", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......人際互動數值異常。記錄。", effect: "breathe" },
        { text: "那個混血兒男孩幾乎要貼到我身上了，眼裡閃爍著興奮的光芒。", name: "我" }
    ],
    // 初見差分：蜜拉思 (Melas)
    day1_hallway_encounter_melas: [
        { bg: "corridor", text: "我抬起頭，看到三個引人注目的男生。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......（合上書本）", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "這股干擾因子。誤差值 3 分 20 秒。勉強在可接受範圍內。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "你在自言自語什麼？那邊只是個新生。Shit，你又在算什麼怪數學嗎？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "奧拉好可怕呀，對著新生冷笑。", effect: "jump" },
        { text: "那個淡藍色頭髮的男生準確地越過另外兩人，銳利的金瞳鎖定了我，嘴角似乎勾起了一抹意味深長的弧度。", name: "我" }
    ],

    // 早晨：教室選擇 (使用 MapSystem)
    day1_class_prompt: {
        text: "那是...這所學校風雲人物的三人組吧？要和誰搭話呢？",
        options: [
            { location: "彼得的座位", action: "去找會長搭話", target: "day1_meet_peter_class", char: "peter", affection: 10, color: "var(--peter-color)" },
            { location: "蘭蘭的座位", action: "觀察那個混血兒", target: "day1_meet_lanlan_class", char: "lanlan", affection: 10, color: "var(--lanlan-color)" },
            { location: "奧拉的座位", action: "向學霸請教問題", target: "day1_meet_ora_class", char: "ora", affection: 10, color: "var(--ora-color)" }
        ]
    },

    day1_meet_peter_class: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "normal", text: "（他正拿著一條雪白的除塵布仔細地擦拭著桌角，動作優雅但也許過於講究了）", effect: "breathe" },
        { text: "我猶豫了一下，剛拉開旁邊的椅子，他就彷彿觸電般轉過頭來。", name: "我" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "Shit！別動！你進教室前有去洗手間用抗菌肥皂洗過手嗎？", effect: "jump" },
        { text: "他眉頭緊皺，從口袋裡拿出一小瓶精緻的酒精噴霧，對著我周圍的空氣輕輕噴了兩下。", name: "我" },
        {
            type: "choice", options: [
                { text: "咳咳...這味道真刺鼻。", next: "peter_class_toxic" },
                { text: "抱歉，我馬上去洗手。", next: "peter_class_wash" }
            ]
        }
    ],
    peter_class_toxic: [
        { char: "peter", name: "彼得", emotion: "normal", text: "這可是頂級的雪松木除菌噴霧，能淨化你周遭混濁的空氣。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "confused", text: "聽著，我是彼得，紙校的學生會長。" },
        { char: "peter", name: "彼得", emotion: "normal", text: "這張桌子我每天都會進行三次深度清理。如果你敢把沒洗乾淨的手放上去，我就把你和那些灰塵一起掃地出門。" },
        { text: "這所學校的學生會長雖然長得很帥，但似乎有點嚴重的強迫症。", name: "我" },
        { text: "（繼續上課）", target: "day1_trans_break" } // 強制跳轉，不依賴原有的順序
    ],
    peter_class_wash: [
        { char: "peter", name: "彼得", emotion: "surprise", text: "洗手？很好，至少你還有一點基本的衛生常識。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "normal", text: "聽著，新生。我是彼得，紙校的學生會長。" },
        { char: "peter", name: "彼得", emotion: "confused", text: "這張桌子我每天都會進行三次深度清理。如果你敢把它弄髒，我會讓你整個學期都在打掃公廁。" },
        { text: "看來順著他的話說比較安全。我點點頭，小心翼翼地坐下。", name: "我" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    // Lynn Route (Morning Class - Peter)
    day1_meet_peter_class_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "normal", text: "（正在瘋狂消毒，看到我走過來，動作瞬間停滯）", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "......林恩？", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "（猛地站起來，椅子被撞翻）真的是你！我就知道你只是暫時離開。這張普通的桌子配不上你！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "坐我的位置。我剛用進口殺菌劑擦了五十遍。不，坐我腿上，這整間教室的空氣都不及格。" },
        {
            type: "choice", options: [
                { text: "彼得，這學期的吉祥費你還沒結算。", next: "lynn_peter_class_ge", ge: 1, char: "peter" },
                { text: "彼得，你那瓶潔廁靈該不會又要拿來喝了吧？", next: "lynn_peter_class_normal1" },
                { text: "不用了，我坐自己位子就好。", next: "lynn_peter_class_normal2" }
            ]
        }
    ],
    lynn_peter_class_ge: [
        { char: "peter", name: "彼得", emotion: "happy", text: "呵，你這隻貪財的貓。這張無限額的黑卡拿去，只要你乖乖待在我視線裡。", effect: "jump" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    lynn_peter_class_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "這可是頂級聖水！你不懂它的神聖之處！", effect: "shake" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    lynn_peter_class_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "......你在外面學會了抗拒我？沒關係，我會慢慢幫你清理掉那些壞習慣的。", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    // Jornona Route (Morning Class - Peter)
    day1_meet_peter_class_jornona: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "Shit...這股廉價的寶石銅臭味。你怎麼又回來了。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "別靠近我。我對中二病和炫富狂過敏。" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（一腳踹開門）彼得！你敢嫌棄喬諾娜？！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆過來！蘭蘭把這間教室買下來了，把彼得趕出去！" },
        {
            type: "choice", options: [
                { text: "蘭蘭，這裡空氣好悶，好想趕快回家...", next: "jornona_peter_class_ge", ge: 1, char: "lanlan" },
                { text: "不要吵架啦，我們先上課。", next: "jornona_peter_class_normal" }
            ]
        }
    ],
    jornona_peter_class_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "好呀好呀！這爛學校有什麼好讀的，我們回家吃下午茶！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "angry", text: "要滾快滾！別踩髒我剛拖好的地板！" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    jornona_peter_class_normal: [
        { char: "lanlan", name: "蘭蘭", emotion: "confused", text: "既然老婆都這麼說了...我就放這神經病一馬呀！", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    // Melas Route (Morning Class - Peter)
    day1_meet_peter_class_melas: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "......你身上的氣場很奇怪。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "normal", text: "不像庶民那麼髒，但有一種...機械般冰冷的感覺。你跟奧拉是一夥的？" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（聲音從背後傳來）彼得。停止你的低效能評估。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "蜜拉思不是你能理解的存在。轉過去，繼續擦你的桌子。" },
        {
            type: "choice", options: [
                { text: "奧拉，他的消毒水配比似乎不正確。", next: "melas_peter_class_ge", ge: 1, char: "ora" },
                { text: "算了，我們去旁邊吧。", next: "melas_peter_class_normal" }
            ]
        }
    ],
    melas_peter_class_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "（推了推金絲眼鏡）沒錯，酒精濃度低於 75% 就無法穿透細菌細胞壁。他只是在浪費揮發性液體。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "angry", text: "閉嘴！這是頂級定製配方！你們兩個怪胎離我遠點！" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    melas_peter_class_normal: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "走吧，別讓這種強迫症數據污染我們的邏輯庫。", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],

    day1_meet_lanlan_class: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "normal", text: "哎呀？新同學？過來坐呀！", effect: "jump" },
        { text: "坐在旁邊的少年笑嘻嘻地對我招手，他那雙橘紅色漸層到青藍色的眼睛在陽光下非常漂亮。", name: "我" },
        { text: "他雖然穿著制服，但上面掛滿了各種閃亮亮的純金飾品，看起來就像個移動的珠寶盒。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "我是蘭蘭呀！這堂課好無聊，而且老師講話好慢呀，聽得我都快睡著了。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "吶，我們翹課去吃甜點好不好？說不定能買下那間店呀！我有帶很多錢！" },
        {
            type: "choice", options: [
                { text: "不行，第一天就翹課太顯眼了！", next: "lanlan_class_stop" },
                { text: "那帶上我吧！", next: "lanlan_class_burn" }
            ]
        }
    ],
    lanlan_class_stop: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "嘖，你跟彼得一樣講規矩呀。翹課有什麼不好的，大家一起去玩不好嗎？", effect: "breathe" },
        { text: "他撇撇嘴，無聊地趴在桌上，像一隻失去活力的大型犬。", name: "我" },
        { text: "被他這樣盯著，我整堂課都無法專心。", name: "我" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    lanlan_class_burn: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "哇！你好棒呀！居然答應了！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "那我們等老師轉過身寫黑板就偷偷溜走呀！等我一下，我叫司機把車開到後門！" },
        { text: "看著他真的拿出手機準備打電話，我趕緊按住他的手阻止了他。", name: "我" },
        { text: "第一天上學就真的翹課什麼的，還是免了吧，我只是開玩笑的。", name: "我" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    // Lynn Route (Morning Class - Lanlan)
    day1_meet_lanlan_class_lynn: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "哎呀？這不是彼得那隻寶貝貓嗎？", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "怎麼跑來找蘭蘭玩了？彼得會氣瘋的呀！" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（瞬間出現，手持超聲波除塵儀）離她遠點，你這個滿身銅臭味的傢伙！", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "林恩，過來。那邊空氣裡的俗氣太重，會影響你的品味。" },
        {
            type: "choice", options: [
                { text: "但蘭蘭那條金飾看起來很值錢...", next: "lynn_lanlan_class_ge", ge: 1, char: "peter" },
                { text: "（躲到彼得背後）彼得，救我，那邊的珠寶太刺眼了。", next: "lynn_lanlan_class_normal1" },
                { text: "我只是想打個招呼而已。", next: "lynn_lanlan_class_normal2" }
            ]
        }
    ],
    lynn_lanlan_class_ge: [
        { char: "peter", name: "彼得", emotion: "smile", text: "Shit，那種沾滿銅臭味的東西會污染你！我明天就把他的戶頭凍結！", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    lynn_lanlan_class_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "好孩子。我們走。", effect: "shake" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    lynn_lanlan_class_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "不要隨便跟這種人打招呼，你會被帶壞的。", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    // Jornona Route (Morning Class - Lanlan)
    day1_meet_lanlan_class_jornona: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "（瞪大眼睛，手裡的金條掉在桌上）...喬諾娜？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！！！你終於回來了！！！我就知道你不會丟下蘭蘭的！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "（直接把課本連同桌子一起扔了騰出空間）快坐快坐！椅子硬不硬？蘭蘭給你訂製純金沙發好不好呀？" },
        {
            type: "choice", options: [
                { text: "（高傲地抱怨）這墊子太硬了，我要真絲的。", next: "jornona_lanlan_class_normal1" },
                { text: "只要是你送的，就算硬一點也沒關係。", next: "jornona_lanlan_class_ge", ge: 1, char: "lanlan" },
                { text: "不用這麼誇張啦...", next: "jornona_lanlan_class_normal2" }
            ]
        }
    ],
    jornona_lanlan_class_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "遵命老婆！蘭蘭馬上讓直升機空投一百個法國真絲抱枕過來呀！", effect: "jump" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    jornona_lanlan_class_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "老婆真體貼！但蘭蘭絕對不會委屈老婆的呀！", effect: "jump" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    jornona_lanlan_class_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "confused", text: "怎麼會誇張呢？老婆值得最好的呀！不然鑲鑽的如何？", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    // Melas Route (Morning Class)
    day1_meet_lanlan_class_melas: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "哇...你過來幹嘛？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "明明不久前才『離開』的說，怎麼這麼快就回來了呀...", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（冷冷地合上手中的原文書）蘭蘭。停止你不具邏輯的發言。離她遠點。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，過來。我的身邊才是你該待的象限。" },
        {
            type: "choice", options: [
                { text: "奧拉，這本書有新的結論嗎？", next: "melas_lanlan_class_ge", ge: 1, char: "ora" },
                { text: "奧拉，他沒有惡意，不需要用這種口吻。", next: "melas_lanlan_class_normal1" },
                { text: "你為什麼對蘭蘭這麼兇？", next: "melas_lanlan_class_normal2" }
            ]
        }
    ],
    melas_lanlan_class_ge: [
        { char: "ora", name: "奧拉", emotion: "happy", text: "（推了推眼鏡，眼神閃爍著滿意的光芒）果然，只有你能與我同頻共振。這本書的第四章存在兩個邏輯謬誤，我們稍後來推算。", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    melas_lanlan_class_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "不進行無謂的社交是保持效率的基礎，希望你記住這點。", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    melas_lanlan_class_normal2: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "他是一組無效數據，沒有解釋的必要。你的關注重點放錯了。", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],

    day1_meet_ora_class: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......（筆尖在筆記本上快速移動著，連頭都沒抬）" },
        { text: "他正在筆記本上寫著密密麻麻的筆記，仔細一看，那似乎是某種極其高深的大學物理公式。", name: "我" },
        { text: "我試圖打個招呼，但他舉起一隻手制止了我，彷彿早就算準了我的動作，精準地擋在我的視線前方。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "別說話。你會打斷我的思緒。這是我第 4 遍推算這個題目的局部最優解，正在關鍵步驟。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "我是奧拉。既然老師把你排在我旁邊，就請保持最高限度的安靜。" },
        {
            type: "choice", options: [
                { text: "那是什麼題目？也太難了吧？", next: "ora_class_question" },
                { text: "（保持安靜，不打擾他）", next: "ora_class_quiet" }
            ]
        }
    ],
    ora_class_question: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "......聽不懂嗎？這很正常。它遠超正常高中生的理解範圍。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "我就不浪費唇舌跟你解釋了。會拉低我的效率。" },
        { text: "他微微抬起頭，金色的狹長眼眸看了我一眼，然後繼續埋頭寫著那些看也看不懂的公式。", name: "我" },
        { text: "總覺得他講話雖然直接，但奇妙地不會讓人覺得太過惡意...只是單純的效率至上。", name: "我" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    ora_class_quiet: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "很好，你做出了最有效率的選擇。", effect: "breathe" },
        { text: "他微微抬起頭，金色的狹長眼眸看了我一眼。雖然表情依舊冷淡，但似乎沒有剛才那麼防備了。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "希望你接下來也能表現得這麼安分。" },
        { text: "這是在誇獎我嗎？雖然聽起來冷冰冰的...", name: "我" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    // Lynn Route (Morning Class)
    day1_meet_ora_class_lynn: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......林恩。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "你的回歸是一個極端不穩定的常數。根據混沌理論，那個有潔癖的變態在 3 秒後到達戰場的概率是 100%。" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（猛然拉開教室門）奧拉！別用你的電子眼掃描她！她是我的！！", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "......誤差不到 0.1 秒。真是有夠吵。" },
        {
            type: "choice", options: [
                { text: "涼拌。", next: "lynn_ora_class_ge", ge: 1, char: "peter" },
                { text: "我想聽聽奧拉對這件事的機率分析...", next: "lynn_ora_class_normal1" },
                { text: "你們不要吵架啦！", next: "lynn_ora_class_normal2" }
            ]
        }
    ],
    lynn_ora_class_ge: [
        { char: "peter", name: "彼得", emotion: "smile", text: "乖貓貓，我們離這個書呆子遠點。我新買的專屬座位已經消毒好了。", effect: "jump" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    lynn_ora_class_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "聽一個機器講話會讓你感染病毒！快跟我走！", effect: "shake" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    lynn_ora_class_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "我才沒有跟這種缺乏情感模組的傢伙吵架。走吧，別理他了。", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    // Jornona Route (Morning Class)
    day1_meet_ora_class_jornona: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......喬諾娜。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "你的離開帶走了某條土豪金龍的全部理智。現在你回來了，他的財力防線又要開始崩潰了。" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（一腳踢開門）奧拉，你敢動我老婆一下，我就把你那些破書全燒了！買下你家大樓！！", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "......缺乏教養的浮誇生物。" },
        {
            type: "choice", options: [
                { text: "蘭蘭～你真的買得起奧拉的大樓嗎～你確定？", next: "jornona_ora_class_ge", ge: 1, char: "lanlan" },
                { text: "真的嗎？那你幫我買下周遭的空地好不好？", next: "jornona_ora_class_normal1" },
                { text: "不用這麼誇張吧...", next: "jornona_ora_class_normal2" }
            ]
        }
    ],
    jornona_ora_class_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "當然呀！蘭蘭什麼都買得起呀！", effect: "jump" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    jornona_ora_class_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "沒問題！蘭蘭就算把地球買下來也會送給你的呀！", effect: "jump" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    jornona_ora_class_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "confused", text: "一點都不誇張呀！為你花錢是我活著的唯一樂趣了！", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    // 奧拉 (蜜拉思路線)
    day1_meet_ora_class_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "surprise", text: "......（筆尖在高級紙張上停住，墨水緩緩暈開）" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "（緩緩抬頭，金色的瞳孔微微收縮）......蜜拉思？", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "呵。這還真是......出乎意料的變量。你離開後，我的運算中樞產生了極大的偏差值，幸好...你回來了。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "坐下。別讓其他無關緊要的數據干擾我們重逢的交流頻率。" },
        {
            type: "choice", options: [
                { text: "你的運算模型需要重新校正了嗎？", next: "melas_ora_class_ge", ge: 1, char: "ora" },
                { text: "沒想到你還會期待我回來。", next: "melas_ora_class_normal1" },
                { text: "你剛剛在寫什麼？", next: "melas_ora_class_normal2" }
            ]
        }
    ],
    melas_ora_class_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "（滿意地勾起嘴角）是的。而你，正是唯一能幫我完美校正的參數。歡迎回來，同僚。", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    melas_ora_class_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "這不是期待，這是對穩定常數的合理評估。", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],
    melas_ora_class_normal2: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "只是一些無聊的推導。既然你來了，那些垃圾數據就沒有存在的必要了。", effect: "breathe" },
        { text: "（繼續上課）", target: "day1_trans_break" }
    ],

    // --- Transition: Class to Break ---
    day1_trans_break: [
        { bg: "classroom", text: "第一堂課總算平靜地度過了。", name: "" },
        { text: "下課鐘聲響起，老師講完最後一個重點後就離開了教室。", name: "" },
        { text: "教室裡瞬間嘈雜起來，同學們三三兩兩地聚在一起聊天。", name: "我" },
        { text: "我環顧四周，決定利用短暫的休息時間，稍微去認識一下那幾個氣質特別的同學，畢竟他們也算是我剛轉來唯一說過話的人了。", name: "我" }
    ],

    // --- Day 1: Break Chat (課間) (使用 MapSystem) ---
    day1_break_prompt: {
        text: "下課鐘響了，第一節課終於結束。該做些什麼好呢？",
        options: [
            { location: "走廊公佈欄旁", action: "找彼得借筆記", target: "day1_break_peter", char: "peter", affection: 5, color: "var(--peter-color)" },
            { location: "中庭花園", action: "和蘭蘭一起散步", target: "day1_break_lanlan", char: "lanlan", affection: 5, color: "var(--lanlan-color)" },
            { location: "圖書館角落", action: "觀察閱讀中的奧拉", target: "day1_break_ora", char: "ora", affection: 5, color: "var(--ora-color)" }
        ]
    },
    day1_break_peter: [
        { bg: "corridor", char: "peter", name: "彼得", emotion: "confused", text: "筆記？你要借學生會長的筆記？", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "我的筆記可是以最完美的排版和邏輯整理出來的。拿去可以，別弄皺了，也別在上面吃零食。看完記得還給我。" },
        { text: "我接過他遞來的筆記本，字跡確實非常工整漂亮，上面還帶著一股淡淡的古龍水香味。", name: "我" },
        { text: "我猶豫了一下，決定趁機打探剛才走廊上的事情。", name: "我" },
        {
            type: "choice", options: [
                { text: "剛才公佈欄上的膠帶...是誰弄的？", next: "peter_break_stain" },
                { text: "謝謝你的筆記，真的幫了大忙。", next: "peter_break_thanks" }
            ]
        }
    ],
    peter_break_stain: [
        { char: "peter", name: "彼得", emotion: "surprise", text: "（他的眼神瞬間變得銳利）你注意到了？", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "confused", text: "那是不守規矩的地下熱舞社貼的。他們總是不按規定申請場地，還到處亂貼宣傳單。" },
        { char: "peter", name: "彼得", emotion: "normal", text: "身為會長，我絕對不允許這種破壞校園整潔與秩序的行為。下次如果看到他們，記得向學生會舉報。" },
        { char: "peter", name: "彼得", emotion: "confused", text: "記住，新生。遠離那些不守規矩的傢伙，否則遲早惹上麻煩。" },
        { text: "看來他真的是個非常嚴肅、把規矩看得很重的學生會長。", name: "我" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    peter_break_thanks: [
        { char: "peter", name: "彼得", emotion: "normal", text: "哼，心存感激地收下吧。這可是會長親自整理的精華。", effect: "breathe" },
        { text: "我翻開筆記，裡面除了上課的內容，竟然還用紅筆標註了許多歷年來的考題陷阱...", name: "我" },
        { text: "這位會長雖然脾氣有點古怪，但似乎是個好人。", name: "我" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    // 彼得 (林恩路線)
    day1_break_peter_lynn: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "happy", text: "（一看到我走進來，他眼中閃過狂熱的光芒，直接跨過桌子衝來）貓貓！你來找我了！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "筆記？當然！整個學生會的資源都是為你準備的。這間教室的空氣剛換過三輪，是最純淨的。" },
        { text: "他把最高級的絲絨坐墊鋪在椅子上，然後小心翼翼地拿出一疊散發著淡淡松木香的筆記本。", name: "我" },
        {
            type: "choice", options: [
                { text: "彼得，你的筆記太長了，不如你直接唸給我聽？", next: "lynn_peter_break_normal1" },
                { text: "這墊子不錯，多少錢買的？", next: "lynn_peter_break_ge", ge: 1, char: "peter" },
                { text: "謝謝你會長，我自己看就好。", next: "lynn_peter_break_normal2" }
            ]
        }
    ],
    lynn_peter_break_ge: [
        { char: "peter", name: "彼得", emotion: "happy", text: "當然，我的榮幸。只要你想聽，我會唸一輩子。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    lynn_peter_break_normal1: [
        { char: "peter", name: "彼得", emotion: "happy", text: "給貓貓的墊子！當然是最好最吉祥的！", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    lynn_peter_break_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "......自己看嗎？你以前都會讓我唸給你聽的。不過只要你高興就好。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],

    // Jornona Route (Break - Peter)
    day1_break_peter_jornona: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "別把你那股充滿資本主義腐朽味的粉紅濾鏡帶過來。我剛淨化完這裡的磁場。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "出去。我的筆記不借給滿身銅臭的人。" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！別理這個神經病！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "什麼破筆記，蘭蘭直接買下出題老師的命題庫給你呀！" },
        {
            type: "choice", options: [
                { text: "（高傲地笑）蘭蘭說得對，這破筆記還配不上我呢。", next: "jornona_peter_break_ge", ge: 1, char: "lanlan" },
                { text: "蘭蘭，比起筆記我更想要限量版包包。", next: "jornona_peter_break_ge", ge: 1, char: "lanlan" },
                { text: "你們不要一見面就吵架...", next: "jornona_peter_break_normal2" }
            ]
        }
    ],
    jornona_peter_break_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "馬上買！老婆要幾個蘭蘭都全包了！", effect: "jump" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    jornona_peter_break_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "這就是我最愛的老婆呀！走，我們去吃從北海道空運的干貝！", effect: "jump" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    jornona_peter_break_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "明明是彼得先凶你的呀！老婆太善良了！", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],

    // Melas Route (Break - Peter)
    day1_break_peter_melas: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "surprise", text: "你到底是什麼東西？頂級消毒水對你居然沒有產生排斥反應...", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "confused", text: "你不是普通人。既然暫時無害，拿著筆記就快走，別污染了我的桌面。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（推開門）因為她是超越常規物理限制的觀測者。以你低劣的智商當然無法理解。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "走了，蜜拉思。別在這個缺乏邏輯的空間浪費時間。" },
        {
            type: "choice", options: [
                { text: "（冷靜地記錄）彼得的抗壓數據似乎比預測值低。", next: "melas_peter_break_normal2" },
                { text: "奧拉，他沒有惡意，不需要用這種口吻。", next: "melas_peter_break_normal1" },
                { text: "其實他的筆記寫得挺好...", next: "melas_peter_break_ge", ge: 1, char: "ora" }
            ]
        }
    ],
    melas_peter_break_normal2: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "一針見血的判斷。跟我來，我們要更新他的壓力崩潰模型矩陣。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    melas_peter_break_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "無效的同情心。希望你早點修正這個邏輯錯誤。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    melas_peter_break_ge: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "排版整齊並不能掩蓋邏輯的匱乏。走吧。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],

    // 奧拉 (蜜拉思路線 - Break)
    day1_break_ora_melas: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......（把厚重的全外文書籍合上）" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "這本書的邏輯漏洞多達 42 處。既然你回來了，不如我們來討論一下更有趣的變量？" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "比如，你消失的那段時間，這個微觀世界的熵增速率是否出現異常。" },
        {
            type: "choice", options: [
                { text: "我觀測到熵增的確放緩了。", next: "melas_ora_break_normal1" },
                { text: "你所謂的變量，是指我嗎？", next: "melas_ora_break_ge", ge: 1, char: "ora" },
                { text: "我沒有做相關紀錄。", next: "melas_ora_break_normal2" }
            ]
        }
    ],
    melas_ora_break_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "顯而易見的推論。你是我模型裡唯一無法精確預測的變動因子。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    melas_ora_break_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "（滿意地低笑）這與我的推演完全脗合。這證明我們之間不存在認知誤差。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    melas_ora_break_normal2: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "太可惜了。身為觀測者，你不應該有資料缺失的情形。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    day1_break_lanlan: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "哇！新同學來找我玩嗎？太好了呀！", effect: "jump" },
        { text: "蘭蘭興奮地湊過來，他身上的金飾隨著動作發出清脆的碰撞聲。", name: "我" },
        { text: "我瞥見他的手機螢幕，上面顯示著某個購物網站的結帳頁面，金額是一串長得不可思議的數字。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "學校的販賣部好無聊呀，賣的東西都不亮、也不好玩。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "吶，你喜歡什麼牌子的珠寶？下次我叫助理送一些目錄來給你挑呀！算我的見面禮！" },
        {
            type: "choice", options: [
                { text: "不用了，這太貴重了！", next: "lanlan_break_refuse" },
                { text: "哇，真的可以嗎？", next: "lanlan_break_accept" }
            ]
        }
    ],
    lanlan_break_refuse: [
        { char: "lanlan", name: "蘭蘭", emotion: "confused", text: "咦？為什麼不要呀？這些東西也不貴呀。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "彼得說過不能隨便送別人太貴重的東西，不然別人會有負擔。是這個意思嗎？" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "好吧，那下次我請你吃學校附近最貴的下午茶！這個總可以接受了吧？" },
        { text: "這位少爺的價值觀似乎跟一般人有很大的落差。", name: "我" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    lanlan_break_accept: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "太好了！你眼光一定很好呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "我們來決定要買什麼款式吧！鑽石？還是紅寶石？乾脆都買下來好了！" },
        { text: "他興致勃勃地打開拍賣網站，準備當場下標...", name: "我" },
        { text: "我趕緊找了個藉口溜走，以免真的收到價值連城的鑽戒。", name: "我" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    // Lynn Route (Break - Lanlan)
    day1_break_lanlan_lynn: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "是彼得家的貓貓！要不要玩這個呀？", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "這個打火機是純金的喔！點火的時候會有彩虹！", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（一把搶過打火機丟出窗外）危險物品絕對禁止接觸林恩！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "哇！彼得你賠我！那是法國工匠手工製作的限量版呀！" },
        {
            type: "choice", options: [
                { text: "涼拌，彼得我們走吧。", next: "lynn_lanlan_break_ge", ge: 1, char: "peter" },
                { text: "蘭蘭，那個打火機借我看看。", next: "lynn_lanlan_break_normal1" },
                { text: "其實有點想看彩虹火焰...", next: "lynn_lanlan_break_normal2" }
            ]
        }
    ],
    lynn_lanlan_break_ge: [
        { char: "peter", name: "彼得", emotion: "smile", text: "（立刻將我護在身後）真聰明，貓貓。有我在，誰也別想傷害你。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    lynn_lanlan_break_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "不准碰！那是沾滿細菌和危險因子的垃圾！", effect: "shake" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    lynn_lanlan_break_normal2: [
        { char: "peter", name: "彼得", emotion: "angry", text: "林恩，好奇心會害死貓。這是我絕對不允許的。", effect: "shake" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],

    // Jornona Route (Break - Lanlan)
    day1_break_lanlan_jornona: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！你終於來找我了！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "蘭蘭剛才把學校旁邊那條街都買下來了！以後你中午想吃什麼我們就去哪家店吃！" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "你說好不好呀？如果你不喜歡那條街，蘭蘭再去買別的！" },
        {
            type: "choice", options: [
                { text: "（打哈欠）那條街太吵了，我要安靜的頂級包廂。", next: "jornona_lanlan_break_normal1" },
                { text: "只要是你推薦的餐廳，我都喜歡。", next: "jornona_lanlan_break_ge", ge: 1, char: "lanlan" },
                { text: "不用亂花錢啦...", next: "jornona_lanlan_break_normal2" }
            ]
        }
    ],
    jornona_lanlan_break_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆最乖了！我們去吃世界上最貴的松露套餐！", effect: "jump" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    jornona_lanlan_break_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "沒問題呀老婆！蘭蘭馬上讓直升機吊一個隔音氣密艙過來當餐廳！", effect: "jump" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    jornona_lanlan_break_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "confused", text: "老婆怎麼變得這麼客氣？花錢才快樂呀！", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],

    // Melas Route (Break - Lanlan)
    day1_break_lanlan_melas: [
        { bg: "classroom", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "別過來呀！你的影子在動！", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "那是光學折射產生的錯覺。多讀點書，蘭蘭。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "蜜拉思，我們去那邊。這裡的智商濃度會污染你的算法。" },
        {
            type: "choice", options: [
                { text: "的確，低運算力環境會拖慢處理器速度。", next: "melas_lanlan_break_normal2" },
                { text: "奧拉，偶爾觀察無序的變量也有助於建立完整的模型。", next: "melas_lanlan_break_normal1" },
                { text: "其實蘭蘭挺好笑的。", next: "melas_lanlan_break_ge", ge: 1, char: "ora" }
            ]
        }
    ],
    melas_lanlan_break_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "你的幽默感模組似乎產生了不必要的變異。我們需要校正。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    melas_lanlan_break_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "那種無效的隨機數值不值得浪費時間去觀測。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    melas_lanlan_break_normal2: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "完全正確。跟我來，我們要進行今天的數據對標。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],

    day1_break_ora: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......（即使在吵雜的圖書館自修區，他依然專注地看著書）", effect: "breathe" },
        { text: "我好奇地湊近一看，發現他看的是一本《高等天體物理學》的全外文專書。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "如果你的目的是搭訕，我建議你尋找其他目標。我的時間分配表裡沒有包含無意義的社交活動。" },
        { text: "他連頭都沒抬，語氣冷淡得像是在陳述某種客觀事實。", name: "我" },
        {
            type: "choice", options: [
                { text: "你看得懂這本書嗎？", next: "ora_break_curious" },
                { text: "抱歉打擾了。", next: "ora_break_leave" }
            ]
        }
    ],
    ora_break_curious: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "......（終於從書本中抬起頭，金色的眼眸平靜地看著我）", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "這只是基礎理論的覆盤。對我來說，這跟看童話書沒有太大差別。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "你那種驚訝的表情很無聊。紙校的學生如果連這種程度的知識都無法掌握，那就太令人失望了。" },
        { text: "這傢伙講話真不客氣...但我不得不承認，他認真看書的樣子確實挺有魅力的。", name: "我" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    ora_break_leave: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "......（他看著我知難而退，微微點了點頭）", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "很好，知所進退是種美德。比起無意義的糾纏，這有效率多了。" },
        { text: "雖然被誇獎了，但總覺得心裡有些不是滋味。", name: "我" },
        { text: "我就這樣默默地看著他讀到了上課鐘響。", name: "我" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    // Lynn Route (Break - Ora)
    day1_break_ora_lynn: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......林恩。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "那個有強迫症的會長因為你的暫時離去，產生了嚴重的錯亂悖論。建議你...", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（瞬間殺出，將我護在身後）建議你閉嘴。林恩不需要聽你的代碼廢話。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "smile", text: "貓貓，我們走。別理這個缺乏情感模組的機器人。" },
        {
            type: "choice", options: [
                { text: "涼拌。", next: "lynn_ora_break_ge", ge: 1, char: "peter" },
                { text: "彼得，別對同學這麼兇啦...", next: "lynn_ora_break_normal" }
            ]
        }
    ],
    lynn_ora_break_ge: [
        { char: "peter", name: "彼得", emotion: "happy", text: "真乖。我給你準備了法式可麗露，我們回會辦吃。", effect: "jump" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    lynn_ora_break_normal: [
        { char: "peter", name: "彼得", emotion: "confused", text: "你在同情他？這毫無必要。不過只要你高興就好。", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    // Jornona Route (Break - Ora)
    day1_break_ora_jornona: [
        { bg: "classroom", char: "ora", name: "奧拉", emotion: "normal", text: "......喬諾娜。你的運作效率並未因為回歸而提升。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（突然跳出來）奧拉！不准說我老婆壞話！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "喬諾娜只是在節省體力！你比那些破書完美一萬倍！" },
        {
            type: "choice", options: [
                { text: "其實我聽不懂他在說什麼～", next: "jornona_ora_break_ge", ge: 1, char: "lanlan" },
                { text: "蘭蘭，不要理他了啦。", next: "jornona_ora_break_normal" }
            ]
        }
    ],
    jornona_ora_break_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "沒關係呀！老婆最聰明了！書呆子只會自言自語呀！", effect: "jump" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],
    jornona_ora_break_normal: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "老婆說的對，跟他講話會變笨的呀！", effect: "breathe" },
        { text: "（休息時間結束）", target: "day1_trans_lunch" }
    ],

    // --- Transition: Break to Lunch ---
    day1_trans_lunch: [
        { bg: "corridor", text: "上午的課程終於結束。走廊上開始充滿便當的香味和學生們準備用餐的喧鬧聲。", name: "" },
        { text: "肚子不爭氣地叫了一聲。我打開書包，裡面竟然有一份不知何時放進去的三明治。包裝袋上還印著『紙校食堂，品質不保證』的字樣。", name: "我" },
        { text: "為了不讓自己餓死在入學第一天，我決定找個地方解決這份午餐。同時，也許還能調查一下這所學校的異常情況。", name: "我" }
    ],

    // --- Day 1: Lunch Date (午休) (使用 MapSystem) ---
    day1_lunch_prompt: {
        text: "到午餐時間了！第一天的午休該怎麼度過呢？",
        options: [
            { location: "學生會辦", action: "和會長共進午餐", target: "day1_lunch_peter", char: "peter", affection: 10, color: "var(--peter-color)" },
            { location: "高級餐廳", action: "接受蘭蘭的邀約", target: "day1_lunch_lanlan", char: "lanlan", affection: 10, color: "var(--lanlan-color)" },
            { location: "安靜無人的天台", action: "尋找奧拉的身影", target: "day1_lunch_ora", char: "ora", affection: 10, color: "var(--ora-color)" }
        ]
    },
    day1_lunch_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "normal", text: "你很準時。時間觀念是紙校學生必備的素質。", effect: "breathe" },
        { text: "學生會辦公室一塵不染，空氣中瀰漫著高級芳香劑的味道。彼得正坐在寬大的辦公桌後，桌上擺著一個精緻的日式便當盒。", name: "我" },
        { char: "peter", name: "彼得", emotion: "smile", text: "坐下吧。別碰桌上的紙本公文，那是需要嚴格保密的。" },
        { char: "peter", name: "彼得", emotion: "confused", text: "在那之前，請先使用桌上的乾洗手液。我不希望在用餐時聞到除了食物以外的氣味。" },
        { text: "他打開便當盒，裡面除了白飯，居然是滿滿的各色保健食品和營養錠裝在分隔好的格子裡...", name: "我" },
        {
            type: "choice", options: [
                { text: "你的午餐...只有這些？", next: "peter_lunch_pills" },
                { text: "這樣會營養不良吧...", next: "peter_lunch_health" }
            ]
        }
    ],
    peter_lunch_pills: [
        { char: "peter", name: "彼得", emotion: "angry", text: "這不是普通的藥丸！這是我特別請專屬營養師調配的高純度萃取物！", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "confused", text: "學校餐廳的食物來源既不透明也缺乏營養價值控管。如果我不吃這些，我的腦力就會下降，怎麼管理整個學生會？" },
        { text: "他推了推隱形的眼鏡，一臉嚴肅地反駁我。", name: "我" },
        { text: "雖然看起來很不健康，但他真的很認真在維持會長的形象...", name: "我" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    peter_lunch_health: [
        { char: "peter", name: "彼得", emotion: "normal", text: "凡人的擔憂。我的新陳代謝曲線和營養吸收率都有專屬醫療團隊隨時監控。" },
        { char: "peter", name: "彼得", emotion: "sigh", text: "不過...如果你非常堅持的話，我允許你分享一點你的食物給我。前提是它乾淨且符合衛生標準。" },
        { text: "我無奈地把那份學校餐廳買來的三明治分給了他一半。他居然真的拿出一塊手帕仔細擦過手才接過去。", name: "我" },
        { text: "看著他眉頭緊鎖、小心翼翼地咀嚼著，我不禁覺得這個高高在上的會長其實有點可愛。", name: "我" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    // 彼得 (林恩路線 - Lunch)
    day1_lunch_peter_lynn: [
        { bg: "rooftop", char: "peter", name: "彼得", emotion: "happy", text: "貓貓！快進來，這裡風太大會吹亂你的頭髮。我馬上叫人建一個玻璃溫室。", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "我叫了米其林三星的主廚在樓下待命。你想吃什麼？魚子醬？松露？這個經過 99 次殺菌的便當是為你準備的。" },
        { char: "peter", name: "彼得", emotion: "happy", text: "來，這是我剛戴著無菌手套剝好的蝦。張嘴。啊——" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "（突然從樓梯口探出頭）哇！彼得你在餵貓呀？我也要吃蝦！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "滾開，你這個滿身油煙味的傢伙。這是林恩專屬的。你去吃你的焦炭吧。", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "小氣鬼！林恩，下次蘭蘭帶你去吃烤全羊！" },
        {
            type: "choice", options: [
                { text: "彼得餵的最好吃。", next: "lynn_peter_lunch_normal1" },
                { text: "彼得，你這蝦沒沾醬沒靈魂啊。", next: "lynn_peter_lunch_ge", ge: 1, char: "peter" },
                { text: "我自己吃就好了啦...", next: "lynn_peter_lunch_normal2" }
            ]
        }
    ],
    lynn_peter_lunch_ge: [
        { char: "peter", name: "彼得", emotion: "happy", text: "貓貓說的對！沾醬是吉祥的！", effect: "jump" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    lynn_peter_lunch_normal1: [
        { char: "peter", name: "彼得", emotion: "happy", text: "（眼眶微微泛紅）真乖。只要你願意，我每天、每頓飯都餵你吃。", effect: "shake" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    lynn_peter_lunch_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "......好吧。記得要先用酒精擦手。", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    // 彼得 (喬諾娜路線 - Lunch)
    day1_lunch_peter_jornona: [
        { bg: "rooftop", char: "peter", name: "彼得", emotion: "confused", text: "（捏著鼻子後退）Shit...這股粉紅色的塑膠味。別靠近欄杆，我怕你把炫富的霉運傳染給這棟大樓。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "離我遠點。你身上有那個玩火傢伙的銅臭味。" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（衝上來）彼得！不准欺負我老婆！喬諾娜，我們走，不要理這個潔癖狂！" },
        {
            type: "choice", options: [
                { text: "蘭蘭～我們去別的地方約會好了～", next: "jornona_peter_lunch_ge", ge: 1, char: "lanlan" },
                { text: "蘭蘭，我們去吃那家要排隊三小時的甜點店吧。", next: "jornona_peter_lunch_normal1" },
                { text: "你們不要吵架啦...", next: "jornona_peter_lunch_normal2" }
            ]
        }
    ],
    jornona_peter_lunch_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "好咧老婆大人！司機已經在地表最強的景觀餐廳訂位了呀！", effect: "jump" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    jornona_peter_lunch_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "沒問題！蘭蘭直接把整間店買下來，老婆想吃多久都可以！", effect: "jump" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    jornona_peter_lunch_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "老婆太善良了！哼，算你運氣好，神精病！", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    // 彼得 (蜜拉思路線 - Lunch)
    day1_lunch_peter_melas: [
        { bg: "rooftop", char: "peter", name: "彼得", emotion: "surprise", text: "......你背後好像跟著什麼東西。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "雖然你看起來很陰沉，但意外地沒有那種髒亂的感覺。你是奧拉的同夥？" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（不知何時站在身後）彼得，停止你無禮的臆測。蜜拉思是觀測變量，不是你的驅邪對象。" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "Shit！你們兩個走路都沒有聲音的嗎？！" },
        {
            type: "choice", options: [
                { text: "他的心跳頻率因為受驚而增加了 35%。", next: "melas_peter_lunch_normal2" },
                { text: "奧拉，這樣嚇他沒有數據蒐集價值。", next: "melas_peter_lunch_normal1" },
                { text: "我們去別的地方吃飯吧。", next: "melas_peter_lunch_ge", ge: 1, char: "ora" }
            ]
        }
    ],
    melas_peter_lunch_normal2: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "準確的數據。真不愧是你。我們走吧，別讓他干擾我們的運算。", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    melas_peter_lunch_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "觀察極端狀態下的有機體反應，本身就是基線數據的一部分。", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    melas_peter_lunch_ge: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "同意。這裡的空氣中充滿了不理性的恐懼因子。", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],

    day1_lunch_lanlan: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "哇！你真的來了呀！快坐快坐！", effect: "jump" },
        { text: "這是一家裝潢極其奢華的法式餐廳，但偌大的空間裡只有我們兩個人，外面還站著幾個西裝筆挺的保鑣。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "我把這裡包下來啦！因為學校的餐廳太吵了呀，影響我吃飯的心情。" },
        { char: "lanlan", name: "蘭蘭", emotion: "normal", text: "吶，我點了松露和牛排，而且聽說他們大廚會親自出來桌邊火烤！超炫的喔！" },
        {
            type: "choice", options: [
                { text: "會不會太誇張了？只是一頓午餐耶！", next: "lanlan_lunch_raw" },
                { text: "哇，聽起來好好吃...", next: "lanlan_lunch_cooked" }
            ]
        }
    ],
    lanlan_lunch_raw: [
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "咦？誇張嗎？蘭蘭平常都是這樣的呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "真麻煩呀，如果你覺得不自在的話..." },
        { text: "他隨手揮退了想要靠近的服務生和主廚。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "那我們就請他們到廚房弄好再端出來吧！這樣可以安靜地聊天了！" },
        { text: "雖然這種奢侈的作風讓人很有壓力，但他意外地很會照顧別人的情緒。", name: "我" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    lanlan_lunch_cooked: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "對吧對吧！火燒起來的時候超漂亮的呀！", effect: "jump" },
        { text: "過了一會兒，主廚推著餐車過來，在牛排上淋上白蘭地並點燃了火焰。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "哇——！好酷！吃吧吃吧，這可是這間店最好吃的招牌菜呀！" },
        { text: "他興奮得像個小孩子一樣。這頓奢華午餐雖然讓人有些不習慣，但確實非常美味。", name: "我" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    // 奧拉線午餐
    day1_lunch_ora: [
        { bg: "rooftop", char: "ora", name: "奧拉", emotion: "normal", text: "......（坐在天台的陰影處，慢條斯理地吃著能量棒）", effect: "breathe" },
        { text: "我好不容易在一處偏僻的角落找到了他。他正一邊看著平板上的數據，一邊進食。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "你的出現機率只有 3.14%。真是令人驚訝的干擾項。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "如果你是來尋求作業解答的，你可以回去了。我不提供這項低效的服務。" },
        {
            type: "choice", options: [
                { text: "我只是想找個安靜的地方吃飯。", next: "ora_lunch_eat" },
                { text: "為什麼你總是拒人於千里之外？", next: "ora_lunch_ask" }
            ]
        }
    ],
    ora_lunch_eat: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "......（他看著我拿出的普通便當，推了推眼鏡）", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "充滿碳水化合物的低效餐點。進食這種東西只會導致飯後血糖升高，降低腦袋的運作效率。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "隨便你吧。只要別發出咀嚼聲就行。" },
        { text: "雖然嘴上這麼說，但他並沒有趕我走。", name: "我" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    ora_lunch_ask: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "......這是一個沒有邏輯的問題。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "社交會產生多餘的變量和情緒波動，這些都會影響我的運算精度。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "我只需要最純粹的數據，不需要關係。現在，你可以停止這個沒有效益的話題了。" },
        { text: "他的防備心比我想像的還要重。看來要接近他並不容易。", name: "我" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    // 蘭蘭 (喬諾娜路線 - 沒品浪漫)
    day1_lunch_lanlan_jornona: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！你看！我讓米其林三星廚師用頂級番茄醬在蛋包飯上寫了你的名字！", effect: "jump" },
        { text: "他從身後掏出一束閃瞎人眼的「花束」。仔細一看，全是用純金和紅寶石打造的。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "真的花會謝掉呀，這個不會！而且這個很貴！蘭蘭覺得這個最配你！" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "喜歡嗎？不喜歡蘭蘭再去把這條街上的珠寶店買下來給你挑！" },
        { char: "peter", name: "彼得", emotion: "confused", text: "（路過）Shit...我的眼睛。這種暴發戶的審美真是嚴重污染視覺神經。" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "彼得你懂什麼！這叫閃亮！老婆喜歡就好！對吧喬諾娜？" },
        {
            type: "choice", options: [
                { text: "（收下花束）蘭蘭送的我都喜歡。", next: "jornona_lanlan_lunch_ge", ge: 1, char: "lanlan" },
                { text: "蘭蘭，這上面少了一顆鑽石。", next: "jornona_lanlan_lunch_normal1" },
                { text: "這花束太重了啦...", next: "jornona_lanlan_lunch_normal2" }
            ]
        }
    ],
    jornona_lanlan_lunch_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "太好啦！老婆最棒了！快吃蛋包飯，冷了蘭蘭就叫他重做！", effect: "jump" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    jornona_lanlan_lunch_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "什麼？！那群工匠竟然敢偷工減料！蘭蘭馬上開除他們！", effect: "shake" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    jornona_lanlan_lunch_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "confused", text: "咦？很重嗎？那蘭蘭幫你拿著好了！", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    // 蘭蘭 (林恩路線 - 嫌棄)
    day1_lunch_lanlan_lynn: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "哎呀？是那隻貓？你怎麼不跟彼得在一起？", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "彼得那傢伙太吵了，整天喊著貓貓貓貓的。你受得了他嗎？不如跟蘭蘭一起吃和牛！" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（突然出現，手持高壓殺菌噴霧）離我的貓遠點，你這個玩火的。你的油煙味會燻壞她。" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "哇！護妻狂魔來了！快跑呀！" },
        {
            type: "choice", options: [
                { text: "（抱住彼得的手臂）彼得才不吵呢。", next: "lynn_lanlan_lunch_normal1" },
                { text: "彼得，和牛聽起來也挺香的。", next: "lynn_lanlan_lunch_ge", ge: 1, char: "peter" },
                { text: "（站在原地）和牛聽起來也不錯...", next: "lynn_lanlan_lunch_normal2" }
            ]
        }
    ],
    lynn_lanlan_lunch_normal1: [
        { char: "peter", name: "彼得", emotion: "smile", text: "還是貓貓最懂事。我們回會辦，這裡空氣不達標。", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    lynn_lanlan_lunch_ge: [
        { char: "peter", name: "彼得", emotion: "angry", text: "真的嗎？我覺得油有點多，但貓貓說的算。" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    lynn_lanlan_lunch_normal2: [
        { char: "peter", name: "彼得", emotion: "angry", text: "林恩！你的味覺被污染了嗎？我現在就帶你去淨化腸胃！", effect: "shake" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    // 蘭蘭 (蜜拉思路線 - Lunch)
    day1_lunch_lanlan_melas: [
        { bg: "restaurant", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "呃...你要吃什麼？這裡沒有蝙蝠或者蜥蜴尾巴可以吃喔...", effect: "shake" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（推門而入）她只攝取高能流質。還有，蘭蘭，停止你缺乏科學根據的想像。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "跟我走，蜜拉思。這裡的食物充滿了會導致心血管阻塞的無用油脂。" },
        {
            type: "choice", options: [
                { text: "（走向奧拉）我需要補充合成液了。", next: "melas_lanlan_lunch_ge", ge: 1, char: "ora" },
                { text: "油炸食品其實偶爾吃也不錯。", next: "melas_lanlan_lunch_normal" }
            ]
        }
    ],
    melas_lanlan_lunch_ge: [
        { char: "ora", name: "奧拉", emotion: "happy", text: "正確的選擇。我準備了最新配方的營養劑。", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    melas_lanlan_lunch_normal: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "不理性的渴望。但這是你的選擇，我就暫時不干預數據的走向了。", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],

    day1_lunch_ora: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "......" },
        { text: "地下圖書館昏暗且安靜得可怕。奧拉坐在一堆積滿灰塵的古籍中間，手裡拿的卻是一台閃爍著綠色代碼的平板電腦。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "你為什麼要進行進食這種低效的能量補充行為？" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這座伺服器...這座學校的營養合成機制效率極差，產生的廢棄物佔用率高達 80%。" },
        {
            type: "choice", options: [
                { text: "因為不吃會死啊...", next: "ora_lunch_die" },
                { text: "難道你不需要吃東西？", next: "ora_lunch_food" }
            ]
        }
    ],
    ora_lunch_die: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "『死亡』只不過是人物狀態數值的歸零，以及內存區塊的釋放。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "只要核心備份還在，隨時可以重新編譯。你的恐懼沒有邏輯支持。" },
        { text: "他的話冷酷得沒有一絲人情味。在他眼裡，我們似乎都只是一串可以隨時刪除的數據。", name: "我" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    ora_lunch_food: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "我？我是系統管理員...至少，這具載體的權限夠高。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "我不需要碳水化合物。我靠這座學校本身的『運算力』維持存在。" },
        { text: "我看著他那明顯缺乏血色的蒼白皮膚，覺得他與其說是管理員，不如說更像個吸血鬼。", name: "我" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    // Jornona Route (Lunch)
    day1_lunch_ora_jornona: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "ignore", text: "......圖書館禁止閃光彈。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "你身上的鑽石反光影響我看書了。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "（戴著墨鏡出現）那是因為喬諾娜本身就在發光呀！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆我們走，這裡太暗了，配不上你！" },
        {
            type: "choice", options: [
                { text: "（戴上墨鏡）沒錯，我也覺得這裡太暗了。", next: "jornona_ora_lunch_ge", ge: 1, char: "lanlan" },
                { text: "蘭蘭，我們去吃高級下午茶吧。", next: "jornona_ora_lunch_normal1" },
                { text: "你們不要吵架啦...", next: "jornona_ora_lunch_normal2" }
            ]
        }
    ],
    jornona_ora_lunch_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆最乖了！直升機已經在頂樓等我們呀！", effect: "jump" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    jornona_ora_lunch_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "好呀！蘭蘭把整棟樓都買下來！", effect: "jump" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    jornona_ora_lunch_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "老婆太善良了！哼，算你運氣好，書呆子！", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    // （Moved Melas Lunch route to group with other Lanlan Lunch routes）

    // 奧拉 (蜜拉思路線 - 觀察)
    day1_lunch_ora_melas: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "smile", text: "過來，蜜拉思。坐在這裡。這本書的第 42 頁有個有趣的悖論。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "我計算過你攝入的卡路里。這份午餐的營養配比不合格。吃這個。（遞過來一管不明液體）" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "雖然味道像粉筆灰，但能讓你的大腦運轉效率提升 15%。我想看到你最聰明的樣子。" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "（探頭）哇，奧拉你在虐待同事嗎？那個看起來像水泥呀！" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "......蘭蘭，圖書館禁止喧嘩。出去。否則我會將你的音量數據歸零。" },
        {
            type: "choice", options: [
                { text: "（接過液體）既然能提升效率，我會攝取。", next: "melas_ora_lunch_ge" },
                { text: "我需要更有邏輯的營養分析報告才考慮飲用。", next: "melas_ora_lunch_normal1" },
                { text: "這看起來真的很像水泥...", next: "melas_ora_lunch_normal2", ge: 1, char: "ora" }
            ]
        }
    ],
    melas_ora_lunch_ge: [
        { char: "ora", name: "奧拉", emotion: "happy", text: "明智的選擇。這證明了我們的思維邏輯是一致的。", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    melas_ora_lunch_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "過度謹慎的反應。我的分析模型是不會出錯的。", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    melas_ora_lunch_normal2: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "膚淺的視覺判斷。你讓我有點失望。", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    // 奧拉 (林恩路線 - 無感)
    day1_lunch_ora_lynn: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "......林恩？" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "彼得正在全校廣播找你。為了校園的安寧，建議你立刻回到他身邊。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "他在 3 分鐘前剛買下了廣播室。噪音分貝已經超過了人類忍受極限。" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（破門而入）貓貓！原來你在這裡！這裡的灰塵會弄髒你的衣服的！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（乖乖跟著走）好的，我這就回去。", next: "lynn_ora_lunch_ge" },
                { text: "彼得，你太吵了啦。", next: "lynn_ora_lunch_normal1" },
                { text: "林恩只是想安靜吃個午餐...", next: "lynn_ora_lunch_normal2", ge: 1, char: "peter" }
            ]
        }
    ],
    lynn_ora_lunch_ge: [
        { char: "peter", name: "彼得", emotion: "happy", text: "真乖。我給你準備了最高級的無菌午餐，我們走。", effect: "jump" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    lynn_ora_lunch_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "我這是在保護你！你怎麼能嫌我吵！", effect: "shake" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],
    lynn_ora_lunch_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "在這裡？跟這個會散發輻射的機器人？這太不衛生了！", effect: "breathe" },
        { text: "（午休時間結束）", target: "day1_trans_club" }
    ],

    // --- Transition: Lunch to Club ---
    day1_trans_club: [
        { bg: "corridor", text: "下午的課在昏昏欲睡中度過了。夕陽將窗戶拉出長長的影子。", name: "" },
        { text: "放學鐘聲一響，教室裡的人很快就走光了。", name: "我" },
        { text: "我收拾好書包，拿出了那張皺巴巴的社團申請表。", name: "我" },
        { text: "前往社團大樓的路上，我不禁在想，那個只有三個人的社團到底是什麼樣的。", name: "我" }
    ],

    // 放學：入社
    day1_club_entry: [
        { bg: "club_room", bgm: "club", text: "推開門，夕陽將這間稍顯老舊的教室染成了橘紅色。我驚訝地發現，早上的那三個人都在裡面。", name: "" },
        { char: "peter", name: "彼得", emotion: "normal", text: "（正在用酒精棉片擦拭泡茶的茶具）又是你。進來前有敲門並得到允許嗎？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "哎呀！是新同學！你真的來了呀！快來吃下午茶！蘭蘭帶了松露巧克力！" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "安靜。既然來了，就是第四個社員。坐下。" },
        { text: "奧拉推了推眼鏡，金色的眼睛平靜地掃視著我。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這個社團的宗旨是『探索心理學的深層邏輯』。通俗一點說，就是聊天和做心理測驗。" },
        { text: "就這樣，我莫名其妙地加入了這個只有四個人的奇怪社團。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "今天的課題是「詞彙聯想」。新人，試試看你能拼出什麼句子來表達你現在的心境。" }
    ],

    // --- Common: Self Intro (全員共通自我介紹) ---
    day1_club_self_intro: [
        { bg: "club_room", bgm: "club", char: "ora", name: "奧拉", emotion: "normal", text: "既然人都到齊了，那就進行正式的社員資料建檔。俗稱的「自我介紹」。" },
        { char: "peter", name: "彼得", emotion: "normal", text: "我是彼得。學生會長，也是這所學校規律的維護者。我的要求只有一個：保持絕對的整潔與秩序。" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "我是蘭蘭呀！喜歡亮晶晶的東西和吃肉！討厭無聊的歷史課！" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "奧拉。負責記錄和觀察。請盡量減少無意義的社交辭令，那會浪費我的時間。" },
        { text: "三雙眼睛同時看向我...", name: "我" }
    ],

    // 特殊路線：白月光反應 (會被動態插入)
    day1_club_lynn: [
        { bg: "club_room", bgm: "club", char: "peter", name: "彼得", emotion: "surprise", text: "（手中的茶杯差點掉在地上）...這股熟悉的香氣...", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "happy", text: "我的專屬吉祥物？！真的是你！", effect: "jump" },
        { char: "peter", name: "彼得", emotion: "smile", text: "快過來！坐這裡！這張沙發我剛才用最高級的除蟎吸塵器吸過三次，並灑了你最喜歡的香水！" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "哇，彼得的強迫症好像瞬間治好了呀。真神奇。" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "有趣的情感變量。彼得的血清素水平顯著上升。" },
        {
            type: "choice", options: [
                { text: "（慵懶地窩進沙發）", next: "lynn_club_ge", ge: 1, char: "peter" },
                { text: "會長，這種破沙發配不上我。", next: "lynn_club_normal1" },
                { text: "謝謝會長，我自己坐就好。", next: "lynn_club_normal2" }
            ]
        }
    ],
    lynn_club_ge: [
        { char: "peter", name: "彼得", emotion: "happy", text: "只要你喜歡，這整個社團辦公室都可以照你的意思改裝。", effect: "breathe" },
        { text: "（接下來準備進行社團活動）", target: "day1_club_self_intro" }
    ],
    lynn_club_normal1: [
        { char: "peter", name: "彼得", emotion: "surprise", text: "你說得對！我明天就讓人空運最頂級的義大利真皮沙發過來！", effect: "shake" },
        { text: "（接下來準備進行社團活動）", target: "day1_club_self_intro" }
    ],
    lynn_club_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "你怎麼變得這麼客氣？沒關係，我會包容你的。", effect: "breathe" },
        { text: "（接下來準備進行社團活動）", target: "day1_club_self_intro" }
    ],

    day1_club_jornona: [
        { bg: "club_room", bgm: "club", char: "lanlan", name: "蘭蘭", emotion: "bored", text: "好無聊呀，早知道就在家數鈔票了...嗯？", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "（橘藍漸層的眼睛瞬間亮了起來）老婆？！喬諾娜！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "（撲過來緊緊抱住）真的是你呀！我昨天剛買了一座海島，我們去那邊度假好不好？！" },
        { char: "peter", name: "彼得", emotion: "confused", text: "離遠點，你這個暴發戶。別在神聖的社團教室裡摟摟抱抱。" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "人類心跳頻率的異常波動...這份數據值得記錄。" },
        {
            type: "choice", options: [
                { text: "海島～好棒～", next: "jornona_club_ge", ge: 1, char: "lanlan" },
                { text: "比起海島，我更想把你買下來。", next: "jornona_club_normal1" },
                { text: "別鬧了，大家都在看呢。", next: "jornona_club_normal2" }
            ]
        }
    ],
    jornona_club_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "對吧老婆！蘭蘭這就去請一百個工匠把島鋪滿鑽石呀！", effect: "jump" },
        { text: "（接下來準備進行社團活動）", target: "day1_club_self_intro" }
    ],
    jornona_club_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "哇！老婆好霸氣！蘭蘭整個人都是你的呀！", effect: "jump" },
        { text: "（接下來準備進行社團活動）", target: "day1_club_self_intro" }
    ],
    jornona_club_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "confused", text: "老婆害羞了嗎？好吧，那晚點再抱！", effect: "breathe" },
        { text: "（接下來準備進行社團活動）", target: "day1_club_self_intro" }
    ],

    day1_club_melas: [
        { bg: "club_room", bgm: "club", char: "ora", name: "奧拉", emotion: "surprise", text: "......（筆記本上的筆尖突然停住）" },
        { char: "ora", name: "奧拉", emotion: "smile", text: "（抬起頭，金色的眼睛閃過一絲笑意）蜜拉思？", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "呵。終於捨得回來履行跟我一起推導終極公式的約定了嗎？過來，我幫你留了最佳觀測位置。" },
        { char: "peter", name: "彼得", emotion: "confused", text: "奧拉居然會笑...Shit，我是不是該去預約一下全面體檢了？" },
        { char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "太可怕啦！書呆子居然笑了呀！" },
        {
            type: "choice", options: [
                { text: "我也很期待跟你核對數據。", next: "melas_club_ge" },
                { text: "你笑起來的數據變動值得記錄。", next: "melas_club_normal1", ge: 1, char: "ora" },
                { text: "這只是偶發事件啦。", next: "melas_club_normal2" }
            ]
        }
    ],
    melas_club_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "沒錯。我們的疊加運算能輕易解開這個世界的底層邏輯。", effect: "breathe" },
        { text: "（接下來準備進行社團活動）", target: "day1_club_self_intro" }
    ],
    melas_club_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "身為觀測者，你不該把注意力放在這種無意義的面部肌肉運動上。", effect: "breathe" },
        { text: "（接下來準備進行社團活動）", target: "day1_club_self_intro" }
    ],
    melas_club_normal2: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "在我的守恆定律裡，沒有所謂的偶發。坐下吧。", effect: "breathe" },
        { text: "（接下來準備進行社團活動）", target: "day1_club_self_intro" }
    ],

    // --- Transition: Club End (Minigame Finished) ---
    day1_trans_sns: [
        { bg: "club_room", text: "我們花了半個小時玩詞彙聯想。雖然大家給出的答案都有些脫軌，但意外地有趣。", name: "我" },
        { text: "奧拉將最後一個句子記錄在筆記本上，推了推眼鏡。「初步的心理特徵擷取完畢。今天算是達成最低限度的社團活動標準了。」", name: "我" },
        { text: "彼得長舒了一口氣，放下了正在擦拭茶杯的布。而蘭蘭則無聊地打了個哈欠，吃掉了最後一顆松露巧克力。", name: "我" },
        { text: "雖然社員們性格各異，但我在這所新學校的第一個下午，就這樣平靜地度過了。", name: "我" }
    ],

    // --- Day 1: After School (放學) (使用 MapSystem) ---
    day1_afterschool_prompt: {
        text: "放學了！這是第一天最自由的時間，要去哪裡看看呢？",
        options: [
            { location: "學生會辦", action: "幫彼得整理文件", target: "day1_afterschool_peter", char: "peter", affection: 10, color: "var(--peter-color)" },
            { location: "校門口", action: "和蘭蘭一起等司機", target: "day1_afterschool_lanlan", char: "lanlan", affection: 10, color: "var(--lanlan-color)" },
            { location: "圖書館", action: "和奧拉一起自習", target: "day1_afterschool_ora", char: "ora", affection: 10, color: "var(--ora-color)" }
        ]
    },
    day1_afterschool_peter: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "normal", text: "你主動留下來幫忙？很好，這證明你具備成為優秀學生的潛質。", effect: "breathe" },
        { text: "放學後的學生會辦公室只剩下彼得一個。他正對著一疊厚厚的文件進行歸檔，每一份都整齊得像是用尺量過。", name: "我" },
        { char: "peter", name: "彼得", emotion: "confused", text: "去把那邊的會議記錄按照日期、部門、重要程度分別放進三個不同的資料夾裡。千萬別弄錯順序。" },
        {
            type: "choice", options: [
                { text: "好的，馬上處理。", next: "peter_afterschool_wipe" },
                { text: "這樣分類會不會太繁瑣了？", next: "peter_afterschool_dirty" }
            ]
        }
    ],
    peter_afterschool_wipe: [
        { char: "peter", name: "彼得", emotion: "smile", text: "很好，服從與效率是美德的開始。這是消毒紙巾，整理前先擦手。", effect: "jump" },
        { text: "我接過他遞來的濕紙巾，認命地開始處理那堆如同小山般的文件。", name: "我" },
        { text: "彼得滿意地在自己的辦公桌前坐下。夕陽的光輝灑在他認真工作的側臉上，讓他看起來少了一分嚴苛，多了一分寧靜的帥氣。", name: "我" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    peter_afterschool_dirty: [
        { char: "peter", name: "彼得", emotion: "angry", text: "繁瑣？這是維持這所學校龐大系統運轉的根基！", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "confused", text: "如果任何一份文件歸檔錯誤，就會引發蝴蝶效應，導致整個校園秩序的崩塌！" },
        { text: "看著他因為激動而微微放大的音量，我決定還是不要質疑他的做事方法了。乖乖地拿起了文件。", name: "我" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    // 彼得 (林恩路線 - After School)
    day1_afterschool_peter_lynn: [
        { bg: "church", char: "peter", name: "彼得", emotion: "smile", text: "林恩，我們在神面前重新宣誓吧。", effect: "breathe" },
        { char: "peter", name: "彼得", emotion: "happy", text: "我會買下這個教堂，每天用聖水清洗三遍，把它改成你的專屬宮殿。只有你能淨化我的靈魂，貓貓。" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "（路過）......祈禱在統計學上對改變現狀的概率為 0.0001%。" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "閉嘴，奧拉。別用你的垃圾數據污染我們的神聖時刻。" },
        {
            type: "choice", options: [
                { text: "涼拌，愛買就買，你最吉祥。", next: "lynn_peter_after_ge", ge: 1, char: "peter" },
                { text: "不用買下教堂啦...", next: "lynn_peter_after_normal" }
            ]
        }
    ],
    lynn_peter_after_ge: [
        { char: "peter", name: "彼得", emotion: "smile", text: "因為你在這裡。走吧，我護送你回家，不會讓外面的灰塵碰到你的。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    lynn_peter_after_normal: [
        { char: "peter", name: "彼得", emotion: "confused", text: "好吧...既然你開金口了。但我還是會派人徹底打掃這裡的。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    // 彼得 (喬諾娜路線 - After School)
    day1_afterschool_peter_jornona: [
        { bg: "church", char: "peter", name: "彼得", emotion: "confused", text: "你為什麼跟著我？教堂不歡迎中二病，也不歡迎滿身鑽石粉末的暴發戶。", effect: "shake" },
        { char: "peter", name: "彼得", emotion: "normal", text: "去找那條土豪金龍。別在這裡礙眼。" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！我在這！別理那個神棍，我們去玩！" },
        {
            type: "choice", options: [
                { text: "（翻白眼）這破教堂我才不想待呢，蘭蘭我們走。", next: "jornona_peter_after_ge" },
                { text: "我們回家吧。", next: "jornona_peter_after_normal", ge: 1, char: "lanlan" }
            ]
        }
    ],
    jornona_peter_after_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "對嘛！蘭蘭帶你去坐私人遊艇出海呀！", effect: "jump" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    jornona_peter_after_normal: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "好呀老婆！我家有超大的溫泉浴池，已經放好洗澡水了！", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    // 彼得 (蜜拉思路線 - After School)
    day1_afterschool_peter_melas: [
        { bg: "classroom", char: "peter", name: "彼得", emotion: "confused", text: "......你還留在這幹嘛？這個時間點，學生會辦公室要進行紫外線殺菌了。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "（站在門口）因為我們需要觀測你的強迫症在紫外線下的波長變化。" },
        { char: "peter", name: "彼得", emotion: "angry", text: "滾出去！我的辦公室不是你們的實驗室！" },
        {
            type: "choice", options: [
                { text: "他驅趕我們的應激反應非常標準。", next: "melas_peter_after_ge" },
                { text: "算了吧，奧拉，我們走。", next: "melas_peter_after_normal", ge: 1, char: "ora" }
            ]
        }
    ],
    melas_peter_after_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "確實。這項變量始終如一地保持著穩定。我們走吧。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    melas_peter_after_normal: [
        { char: "ora", name: "奧拉", emotion: "ignore", text: "缺乏探究精神。不過既然你這麼說了，就放過這組數據吧。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],

    day1_afterschool_lanlan: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "angry", text: "哇！司機居然遲到了兩分鐘！扣他這個月的獎金！", effect: "jump" },
        { text: "我和蘭蘭一起站在學校的氣派大門口。他正對著手腕上限量版的手錶發脾氣。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "好無聊啊，不然我們坐直升機回家好了？我現在就叫他們開過來！" },
        {
            type: "choice", options: [
                { text: "冷靜點，只是遲到兩分鐘而已！", next: "lanlan_afterschool_play" },
                { text: "你家真的有直升機嗎？", next: "lanlan_afterschool_ask" }
            ]
        }
    ],
    lanlan_afterschool_play: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "真的嗎？那我在等五分鐘好了！如果你留下來陪蘭蘭，蘭蘭就不生氣呀！", effect: "jump" },
        { text: "在他的堅持下，我只好陪著他在校門口多等了一會兒。一輛加長型的黑色豪華轎車很快就駛了過來。", name: "我" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "車來了！明天見呀新同學！對了，這條鑽石項鍊算是今天的陪聊費，送你啦！" },
        { text: "我還來不及拒絕，他就把一個精緻的絲絨盒子塞進我手裡，然後鑽進了車裡。", name: "我" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    lanlan_afterschool_ask: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "有呀，大概有五六台吧。還有一架私人客機專門用來去巴黎買衣服的。", effect: "breathe" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "下次帶你一起去呀！我們去把整條香榭麗舍大道買下來！" },
        { text: "他描繪的畫面太過誇張，我明智地選擇了當作他在開玩笑。", name: "我" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    // 蘭蘭 (林恩路線 - After School)
    day1_afterschool_lanlan_lynn: [
        { bg: "gate", char: "lanlan", name: "蘭蘭", emotion: "smile", text: "怎麼啦貓貓？彼得沒來接你嗎？", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "那要不要坐蘭蘭的車回去？車上有剛烤好的頂級和牛派喔！" },
        { char: "peter", name: "彼得", emotion: "angry", text: "（瞬間出現）不需要！林恩的交通工具有我準備的高規格防彈且全方位殺菌裝甲車！", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "切，防彈車有什麼了不起，我的跑車可是能下潛到海溝的呀。" },
        {
            type: "choice", options: [
                { text: "我不跟他走他會中邪。", next: "lynn_lanlan_after_ge", ge: 1, char: "peter" },
                { text: "謝謝蘭蘭的邀請。", next: "lynn_lanlan_after_normal" }
            ]
        }
    ],
    lynn_lanlan_after_ge: [
        { char: "peter", name: "彼得", emotion: "smile", text: "這才乖。司機已經用負離子清除過車內的懸浮微粒了。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    lynn_lanlan_after_normal: [
        { char: "peter", name: "彼得", emotion: "confused", text: "不要隨便答應別人的邀請，尤其是來路不明的暴發戶。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    // 蘭蘭 (喬諾娜路線 - 私奔)
    day1_afterschool_lanlan_jornona: [
        { bg: "arcade", char: "lanlan", name: "蘭蘭", emotion: "happy", text: "老婆！你看！我把這個遊戲機裡所有的娃娃都夾給你了！", effect: "jump" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "只要你開心，蘭蘭什麼都願意做呀！我們把這個遊樂廳買下來當專屬遊樂場好不好？" },
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "或者我們去坐摩天輪？聽說在最高點接吻會永遠在一起呀！" },
        { char: "peter", name: "彼得", emotion: "confused", text: "（在遠處）Shit...那邊的粉紅泡泡都要溢出大氣層了。" },
        {
            type: "choice", options: [
                { text: "（揉眼睛）我累了，背我回家。", next: "jornona_lanlan_after_ge" },
                { text: "好呀，去坐摩天輪！", next: "jornona_lanlan_after_normal", ge: 1, char: "lanlan" }
            ]
        }
    ],
    jornona_lanlan_after_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "遵命！老婆大人！蘭蘭就算背著你環遊世界都沒問題呀！", effect: "jump" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    jornona_lanlan_after_normal: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "好耶！蘭蘭馬上叫人清場！", effect: "jump" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    // 蘭蘭 (蜜拉思路線 - 害怕)
    day1_afterschool_lanlan_melas: [
        { bg: "arcade", char: "lanlan", name: "蘭蘭", emotion: "surprise", text: "呃...蜜拉思？你怎麼來了？", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "你笑得我心裡發毛呀。這裡沒有你要的實驗數據吧？" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "奧拉在那邊的天文館，你去找他吧，別嚇我呀！" },
        {
            type: "choice", options: [
                { text: "（面無表情）你的恐懼源自於無知。", next: "melas_lanlan_after_ge" },
                { text: "蘭蘭，恐懼反應會消耗多餘的心肺功能。", next: "melas_lanlan_after_normal1", ge: 1, char: "ora" },
                { text: "抱歉，打擾了。", next: "melas_lanlan_after_normal2" }
            ]
        }
    ],
    melas_lanlan_after_ge: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "（從通訊器傳來聲音）沒錯。數據已收集完畢，來天文館找我。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    melas_lanlan_after_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "confused", text: "你在說什麼啊...算了算了，快去找你的機器人同伴吧！", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    melas_lanlan_after_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "bored", text: "快走快走，跟你講話感覺智商都要歸零了呀。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],

    day1_afterschool_ora: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "......（鋼筆在紙本上書寫著優美的公式，依然全神貫注）" },
        { text: "放學後的圖書館安靜得只剩下翻書的聲音。奧拉選了一個靠窗的位置，陽光將他的淺藍色長髮映照得格外柔軟。", name: "我" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "你的腳步聲破壞了這個空間的靜謐系數。如果打算留下來，請確保你的分貝不高於15。" },
        {
            type: "choice", options: [
                { text: "我會很安靜的。", next: "ora_afterschool_texture" },
                { text: "你在寫作業嗎？", next: "ora_afterschool_beautiful" }
            ]
        }
    ],
    ora_afterschool_texture: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "希望你說到做到。干擾源往往沒有自知之明。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "你可以坐在對面，但別嘗試跟我搭話。我正在構思下週國際數學科展的論文草稿。" },
        { text: "奧拉推了推金絲眼鏡，不再理我，繼續埋首於他的學術世界中。", name: "我" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    ora_afterschool_beautiful: [
        { char: "ora", name: "奧拉", emotion: "surprise", text: "（他轉過頭，略帶疑惑地看了我一眼）作業？那種重複性的低級勞動，我早在開學第一天就用自動化腳本處理完了。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這是我個人的獨立研究。關於多維度幾何拓樸在實際應用上的推演。" },
        { text: "這真是我聽過最學霸的發言了。難怪他身邊總是籠罩著生人勿近的氣場。", name: "我" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    // 奧拉 (林恩路線 - After School)
    day1_afterschool_ora_lynn: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "normal", text: "......林恩。你在這個空間遊蕩會產生物理性的灰塵干擾。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "ignore", text: "而且，那個神經質的會長正在用廣播系統大喊『貓貓不見了』。去解決他。" },
        { char: "peter", name: "彼得", emotion: "surprise", text: "（踹開圖書館大門）貓貓！原來你被這傢伙綁架了！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "（朝彼得跑去）對不起，我馬上過來！", next: "lynn_ora_after_ge" },
                { text: "彼得，我只是在觀察機器人而已。", next: "lynn_ora_after_normal1", ge: 1, char: "peter" },
                { text: "我只是想安靜看個書...", next: "lynn_ora_after_normal2" }
            ]
        }
    ],
    lynn_ora_after_ge: [
        { char: "peter", name: "彼得", emotion: "happy", text: "沒事就好。走，我們回家，司機已經把車子全身消毒過了。", effect: "jump" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    lynn_ora_after_normal1: [
        { char: "peter", name: "彼得", emotion: "angry", text: "這破銅爛鐵有什麼好看的！快過來淨化！", effect: "shake" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    lynn_ora_after_normal2: [
        { char: "peter", name: "彼得", emotion: "confused", text: "回家我會唸給你聽的，這裡空氣太差了。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    // 奧拉 (喬諾娜路線 - After School)
    day1_afterschool_ora_jornona: [
        { bg: "library", char: "ora", name: "奧拉", emotion: "ignore", text: "......喬諾娜。你身上那些閃閃發光的劣質碳分子(鑽石)嚴重影響了我的視線。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "這裡不適合炫耀。去停車場找那條土豪金龍吧。" },
        { char: "lanlan", name: "蘭蘭", emotion: "angry", text: "（從窗戶探出頭）奧拉！你敢罵我老婆的行頭劣質？！", effect: "shake" },
        {
            type: "choice", options: [
                { text: "但這是蘭蘭買給我的～", next: "jornona_ora_after_ge", ge: 1, char: "lanlan" },
                { text: "蘭蘭，這書呆子不懂欣賞，我們走。", next: "jornona_ora_after_normal1" },
                { text: "好啦蘭蘭，我們回家吧。", next: "jornona_ora_after_normal2" }
            ]
        }
    ],
    jornona_ora_after_ge: [
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "就是呀！我們的品味是世界第一！", effect: "jump" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    jornona_ora_after_normal1: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "沒事！蘭蘭馬上就把這棟圖書館買下來改裝成老婆的衣櫃呀！", effect: "jump" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    jornona_ora_after_normal2: [
        { char: "lanlan", name: "蘭蘭", emotion: "happy", text: "好耶！老婆我們坐直升機回家！", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    // 奧拉 (蜜拉思路線 - 同行)
    day1_afterschool_ora_melas: [
        { bg: "planetarium", char: "ora", name: "奧拉", emotion: "smile", text: "蜜拉思，你看那顆星。", effect: "breathe" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "它在三億年前就熄滅了，但光現在才傳到這裡。就像這個世界的實體數據延遲一樣。" },
        { char: "ora", name: "奧拉", emotion: "happy", text: "但你現在在我身邊，這是唯一無誤差的「現在進行式」。這比星星有趣多了。" },
        {
            type: "choice", options: [
                { text: "只要觀測者還在，星星就存在。", next: "melas_ora_after_ge", ge: 1, char: "ora" },
                { text: "光速延遲也是宇宙的浪漫之一。", next: "melas_ora_after_normal1" },
                { text: "今晚的星空確實很美。", next: "melas_ora_after_normal2" }
            ]
        }
    ],
    melas_ora_after_ge: [
        { char: "ora", name: "奧拉", emotion: "smile", text: "（輕笑）我同意。今晚去我家？我有新的公式想和你...探討。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    melas_ora_after_normal1: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "浪漫是主觀且缺乏實質意義的詞彙，但我容許你的偏差。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],
    melas_ora_after_normal2: [
        { char: "ora", name: "奧拉", emotion: "normal", text: "美麗只是主觀感受，但我們可以在不精確的浪漫中稍微停留一下。走吧。", effect: "breathe" },
        { text: "（放學後時光結束）", target: "day1_trans_home" }
    ],

    // --- Transition: Home ---
    day1_trans_home: [
        { text: "告別了性格迥異的社員們，我獨自走在回家的路上。", name: "我" },
        { bg: "home", bgm: "home", text: "推開家門，熟悉的家具佈置讓我徹底放鬆下來。我疲憊地倒在柔軟的床上。", name: "我" },
        { text: "回想著今天發生的一切，感覺就像做夢一樣。", name: "我" },
        { text: "這所名為紙校的貴族學園，有著隨時拿著酒精噴霧的潔癖會長，動不動就要買下整條街的豪門少爺，還有把一切都數據化的天才學霸...", name: "我" },
        { text: "「未來的校園生活...感覺會非常熱鬧啊。」我喃喃自語。", name: "我" },
        { text: "就在我快要陷入沉睡時，扔在床頭櫃上的手機突然發出了一連串的提示音。", name: "我" }
    ],

    // 社團活動結束 -> 互換SNS
    day1_sns_exchange: [
        { char: "peter", name: "彼得", emotion: "normal", text: "把你的通訊軟體打開。掃這個 QR Code。我需要確保隨時能聯絡到社團成員。", effect: "shake" },
        { char: "lanlan", name: "蘭蘭", emotion: "smile", text: "好耶！快加我加我！蘭蘭會發很多好吃的照片給你呀！" },
        { char: "ora", name: "奧拉", emotion: "normal", text: "我已將你的帳號加入群組『心理學深層邏輯探索社』。未經允許，禁止傳送無意義的早安圖或貼圖干擾版面。" },
        { text: "（就這樣，我莫名其妙地被加進了一個群組。）", name: "我" }
    ],

    // 晚間：群組聊天
    day1_chat_start: [
        { bg: "home", bgm: "home", text: "回到家，躺在床上，手機突然響個不停。", name: "我" },
        { text: "是那個奇怪的社團群組...", name: "我" }
    ],

    // 聊天內容 (Type: chat)
    day1_chat_content: [
        { type: "chat", id: "sys", text: "系統：您已加入群組『心理學深層邏輯探索社』。" },
        { type: "chat", id: "peter", text: "所有人立刻匯報狀態。確認都已經到家並且完成全身消毒了。" },
        { type: "chat", id: "lanlan", text: "好餓呀...想吃烤肉🔥" },
        { type: "chat", id: "lanlan", text: "給你們看個好玩的！我剛買的純金鑲鑽烤肉架！", image: "https://file.garden/aWe99vhwaGcNwkok/DOKIDOKI/ICON" },
        { type: "chat", id: "peter", text: "Shit！蘭蘭你又在那裡炫富！快把它收起來！真刺眼！" },
        { type: "chat", id: "ora", text: "圖片佔用了過多頻寬。蘭蘭，停止上傳無意義的炫耀性資源。" },
        { type: "chat", id: "ora", text: "今日的社團活動時長已經達標。" },
        { type: "chat", id: "ora", text: "新人，明天記得準時到。你的出缺席紀錄會影響社團的評鑑分數。" },
        {
            type: "choice", options: [
                { text: "我會準時的。", next: "chat_reply_normal" },
                { text: "那個純金烤肉架是真的嗎！？", next: "chat_reply_scary" }
            ]
        },
    ],
    chat_reply_normal: [
        { type: "chat", id: "self", text: "大家放心，我明天會準時到的。" },
        { type: "chat", id: "ora", text: "很好。保持這種出勤率，我會給你滿分的平時成績。" },
        { type: "chat", id: "peter", text: "記得出門前要噴酒精。晚安，新社員。" },
        { type: "chat", id: "lanlan", text: "晚安呀！明天見！滿天星🌟" },
        { type: "chat", id: "self", text: "大家晚安！" },
    ],
    chat_reply_scary: [
        { type: "chat", id: "self", text: "那個純金烤肉架是真的嗎！？不怕被偷嗎！？" },
        { type: "chat", id: "lanlan", text: "哎呀，別那麼緊張嘛！當然是真的呀！被偷了再買就好啦！" },
        { type: "chat", id: "peter", text: "不要鼓勵他這種浪費行為。真是受不了。" },
        { type: "chat", id: "ora", text: "黃金的熔點是 1064 °C。用來烤肉在熱傳導效率上並不理想。結論：愚蠢的行為。" },
        { type: "chat", id: "self", text: "...看樣子我未來的日子絕對不會無聊了。" },
    ],

    // --- White Moonlight Night Chat: Lynn (Peter) ---
    day1_chat_content_lynn: [
        { type: "chat", id: "sys", text: "系統：您已加入群組『心理學深層邏輯探索社』。" },
        { type: "chat", id: "peter", text: "貓貓，你到家了嗎？有確實洗手換衣服嗎？" },
        { type: "chat", id: "lanlan", text: "哇，彼得你真的很囉嗦呀！" },
        { type: "chat", id: "peter", text: "閉嘴，不要干擾我和貓貓的對話！" },
        {
            type: "choice", options: [
                { text: "林恩很乾淨！", next: "lynn_chat_reply_ge", ge: 1, char: "peter" },
                { text: "彼得真的很像媽媽呢。", next: "lynn_chat_reply_normal1" },
                { text: "我還沒洗澡啦～", next: "lynn_chat_reply_normal2" }
            ]
        }
    ],
    lynn_chat_reply_ge: [
        { type: "chat", id: "self", text: "大家放心，我已經洗得乾乾淨淨了。" },
        { type: "chat", id: "peter", text: "很好，這才是我的好貓貓。明天見。" },
        { type: "chat", id: "lanlan", text: "好肉麻呀！受不了！" },
    ],
    lynn_chat_reply_normal1: [
        { type: "chat", id: "self", text: "彼得真的很像媽媽呢，一直管東管西的。" },
        { type: "chat", id: "peter", text: "我這是為了你的健康著想！不識好人心！" },
        { type: "chat", id: "ora", text: "彼得的掌控慾指數上升了 12%。" },
    ],
    lynn_chat_reply_normal2: [
        { type: "chat", id: "self", text: "我還沒洗澡啦～好累喔不想動。" },
        { type: "chat", id: "peter", text: "什麼！？你身上帶了多少外面的細菌！立刻去洗澡！" },
        { type: "chat", id: "peter", text: "不然我現在就僱人去你家幫你全面消毒！" },
    ],

    // --- White Moonlight Night Chat: Jornona (Lanlan) ---
    day1_chat_content_jornona: [
        { type: "chat", id: "sys", text: "系統：您已加入群組『心理學深層邏輯探索社』。" },
        { type: "chat", id: "lanlan", text: "老婆老婆！你到家了嗎？蘭蘭好想你呀！" },
        { type: "chat", id: "peter", text: "在群組裡公然調情，你的修養都被狗吃了嗎？" },
        { type: "chat", id: "lanlan", text: "略略略，神棍不要忌妒我呀！" },
        {
            type: "choice", options: [
                { text: "我也想你喔，蘭蘭。", next: "jornona_chat_reply_ge", ge: 1, char: "lanlan" },
                { text: "群組裡大家都在看啦...", next: "jornona_chat_reply_normal1" },
                { text: "彼得說得對，你克制一點。", next: "jornona_chat_reply_normal2" }
            ]
        }
    ],
    jornona_chat_reply_ge: [
        { type: "chat", id: "self", text: "我也想你喔，蘭蘭。" },
        { type: "chat", id: "lanlan", text: "老婆最好了！蘭蘭明天帶最好吃的松露給你吃！" },
        { type: "chat", id: "peter", text: "Shit...這群組沒救了。" },
    ],
    jornona_chat_reply_normal1: [
        { type: "chat", id: "self", text: "群組裡大家都在看啦...晚點私聊再說。" },
        { type: "chat", id: "lanlan", text: "好呀好呀！蘭蘭等你私訊喔！" },
        { type: "chat", id: "ora", text: "系統提示：禁止私下傳送超過伺服器負荷的大容量圖片。" },
    ],
    jornona_chat_reply_normal2: [
        { type: "chat", id: "self", text: "彼得說得對，你克制一點。" },
        { type: "chat", id: "lanlan", text: "嗚嗚...老婆嫌棄我了...蘭蘭要去角落畫圈圈了呀..." },
        { type: "chat", id: "peter", text: "很好，總算有個明理的人。" },
    ],

    // --- White Moonlight Night Chat: Melas (Ora) ---
    day1_chat_content_melas: [
        { type: "chat", id: "sys", text: "系統：您已加入群組『心理學深層邏輯探索社』。" },
        { type: "chat", id: "ora", text: "蜜拉思，你今天的卡路里消耗量低於預期。建議睡前進行15分鐘的輕度核心運動。" },
        { type: "chat", id: "lanlan", text: "哇，書呆子你連人家消耗多少卡路里都知道？變態呀！" },
        { type: "chat", id: "ora", text: "這是基於步態分析和質量轉移的基礎計算。你的大腦顯然無法理解。" },
        {
            type: "choice", options: [
                { text: "收到，這就去執行核心運動。", next: "melas_chat_reply_normal1" },
                { text: "奧拉，這樣有點像在監視我耶。", next: "melas_chat_reply_ge" },
                { text: "我就是要耍廢，不想動！", next: "melas_chat_reply_normal2", ge: 1, char: "ora" }
            ]
        }
    ],
    melas_chat_reply_ge: [
        { type: "chat", id: "self", text: "收到，這就去執行核心運動。確保身體數據在最佳狀態。" },
        { type: "chat", id: "ora", text: "良好的執行力。期待明天收集到你更完美的數據。" },
    ],
    melas_chat_reply_normal1: [
        { type: "chat", id: "self", text: "奧拉，這樣有點像在監視我耶。感覺毛毛的。" },
        { type: "chat", id: "ora", text: "『監視』帶有主觀的惡意預設。我這叫『客觀的數據觀測與優化建議』。" },
        { type: "chat", id: "peter", text: "不管叫什麼，聽起來都很猥瑣。離他遠點。" },
    ],
    melas_chat_reply_normal2: [
        { type: "chat", id: "self", text: "我就是要耍廢，不想動！" },
        { type: "chat", id: "ora", text: "拒絕最佳化路徑的非理性決策。你的惰性數據已記錄入檔。" },
        { type: "chat", id: "lanlan", text: "沒關係呀！躺著吃東西最舒服了！" },
    ],

    // Day 1 睡前總結 (進入 OP 前)
    day1_sleep_narrative: [
        { bg: "home", bgm: "home", text: "夜深了，手機的提示音終於安靜了下來。", name: "我" },
        { text: "回想著第一天來到這所學校，發生了許多意想不到的插曲...", name: "我" },
        { text: "有著極度潔癖的學生會長、動不動就揮金如土的財閥少爺、還有把一切都數據化的天才學霸...", name: "我" },
        { text: "「未來的校園生活...感覺會非常熱鬧啊。」我自言自語。", name: "我" },
        { text: "不知道明天，又會有什麼樣的挑戰在等著我呢？", name: "我" },
        { text: "我閉上雙眼，隨著睡意漸漸沉入夢鄉...", name: "我", target: "day1_sleep_video" }
    ]
};