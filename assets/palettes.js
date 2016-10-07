/*
    Traditional Colors of Japan
    via: https://en.wikipedia.org/wiki/Traditional_colors_of_Japan
*/

// Red/Violet series
var redviolets = ['#F08F90', '#F47983', '#DB5A6B', '#C93756', '#FCC9B9', '#FFB3A7', '#F2666C'];
////////////////////////////////////////////////////////////////////////////////
// 一斤染	Ikkonzome	One kin (0.6 kg) dye	240,143,144	                   #F08F90
// 桃色	 Momo-iro	Peach-colored	244,121,131	                            #F47983
// 紅梅色	Kōbai-iro	Red plum colored	219,90,107	                       #DB5A6B
// 中紅	 Nakabeni	Medium crimson (dye)	201,55,86	                    #C93756
// 桜色	 Sakura-iro	Cherry blossom color	   252,201,185	                #FCC9B9
// 退紅	 Arazome	Washed-out crimson (dye)	255,179,167	                #FFB3A7
// 薄紅	 Usubeni	Pale crimson (dye)	        242,102,108	                #F2666C
////////////////////////////////////////////////////////////////////////////////

// red series
var reds = ['#F58F84', '#AC8181', '#B95754', '#C91F37', '#9D2933', '#7B3B3A', '#F7665A',
        '#B56C60', '#97645A', '#A24F46', '#C3272B', '#8F1D21', '#672422', '#BC2D29',
        '#5E2824', '#8B352D', '#FA7B62', '#F8674F', '#DC3023', '#AB4C3D', '#934337',
        '#9D2B22', '#913228', '#6F3028', '#351E1C', '#F35336', '#D34E36', '#CF3A24',
        '#A13D2D', '#913225', '#752E23', '#F9906F', '#FF7952', '#F07F5E', '#E68364',
        '#FF4E20', '#E35C38', '#CB6649', '#B35C44', '#B14A30', '#9B533F', '#8C4736',
        '#60281E', '#542D24', '#4C221B'];
////////////////////////////////////////////////////////////////////////////////
// 鴇羽色	Tokiha-iro	Ibis wing color	245,143,132	#F58F84
// 桜鼠	Sakuranezumi	Cherry blossom mouse	172,129,118	#AC8181
// 長春色	Chōshun-iro	Long spring (season) color	185,87,84	#B95754
// 唐紅/韓紅	Karakurenai	Foreign crimson[1]	201,31,55	#C91F37
// 臙脂色	Enji-iro	Cochineal red/rouge	157,41,51	#9D2933
// 深緋	Kokiake	Deep scarlet	123,59,58	#7B3B3A
// 甚三紅	Jinzamomi	Thrice-dyed crimson	247,102,90	#F7665A
// 水がき	Mizugaki	Water persimmon	181,108,96	#B56C60
// 梅鼠	Umenezumi	Plum-blossom mouse	151,100,90	#97645A
// 蘇芳香	Suōkō	Sappanwood incense	162,79,70	#A24F46
// 赤紅	Akabeni	Pure crimson (dye)	195,39,43	#C3272B
// 真朱	Shinshu	True red	143,29,33	#8F1D21
// 小豆色	Azuki-iro	Red bean color	103,36,34	#672422
// 銀朱	Ginshu	Greyed red (lit. silvered red)	188,45,41	#BC2D29
// 海老茶	Ebicha	Maroon (Shrimp brown)	94,40,36	#5E2824
// 栗梅	Kiriume	Red-brown (lit. chestnut-plum)	139,53,45	#8B352D
// 曙色	Akebono-iro	Dawn-color	250,123,98	#FA7B62
// 珊瑚色	Sango-iro	Coral color	248,103,79	#F8674F
// 猩々緋	Shōjōhi	Red-orange (lit. orangutan-colored)	220,48,35	#DC3023
// 芝翫茶	Shikancha	Wilted brown (lit. wilted lawn-clippings)	171,76,61	#AB4C3D
// 柿渋色	Kakishibu-iro	Persimmon-juice color	147,67,55	#934337
// 紅樺	Benikaba	Red birch	157,43,34	#9D2B22
// 紅鳶	Benitobi	Red kite (bird species)	145,50,40	#913228
// 紅檜皮	Benihibata	Cypress bark red	111,48,40	#6F3028
// 黒鳶	Kurotobi	Black kite (bird species)	53,30,28	#351E1C
// 紅緋	Benihi	Blood red	243,83,54	#F35336
// 照柿	Terigaki	Glazed persimmon	211,78,54	#D34E36
// 緋	Ake	Scarlet (blood)	207,58,36	#CF3A24
// 江戸茶	Edocha	Red-brown (Edo brown)	161,61,45	#A13D2D
// 紅柄色	Bengara-iro	Dyestalk red (lit. the color from dying with the stalk of the beni plant)	145,50,37	#913225
// 檜皮色	Hihada-iro	Cypress bark color	117,46,35	#752E23
// 宍色	Shishi-iro	Meat-color	249,144,111	#F9906F
// 洗朱	Araishu	Rinsed-out red	255,121,82	#FF7952
// 赤香色	Akakō-iro	Red incense-colored	240,127,94	#F07F5E
// ときがら茶	Tokigaracha	Brewed mustard-brown	230,131,100	#E68364
// 黄丹	Ōtan	Ochre (earthen yellow-red-brown)	255,78,32	#FF4E20
// 蘇比	Sohi	Overdyed/refreshed red-brown	227,92,56	#E35C38
// 遠州茶	Enshūcha	Muddy brown (lit. the brown of a distant river)	203,102,73	#CB6649
// 唐茶	Karacha	Spicy red-brown (Chinese tea brown)	179,92,68	#B35C44
// 樺茶	Kabacha	Birch brown	177,74,48	#B14A30
// 宗傳唐茶	Sōdenkaracha	Faded spicy red-brown	155,83,63	#9B533F
// 雀茶	Suzumecha	Sparrow-brown	140,71,54	#8C4736
// 栗皮茶	Kurikawacha	Chestnut-leather brown	96,40,30	#60281E
// 百塩茶	Momoshiocha	Boiled red bean brown	84,45,36	#542D24
// 鳶色	Tobi-iro	Ibis-color	76,34,27	#4C221B
////////////////////////////////////////////////////////////////////////////////

// Yellow/Red series
var redyellows =[ '#9F7462', '#B64925', '#592B1F', '#351F19', '#F57F4F', '#EC8254', '#9F5233',
                  '#EC956C', '#985538', '#824B35', '#FFA26B', '#FCA474', '#FF8936', '#FA9258',
                  '#FB8136', '#8F583C', '#2E211B', '#AB6134', '#CA6924', '#FFA565', '#D57835',
                  '#C66B27', '#A96232', '#985629', '#8C5939', '#6A432D', '#593A27', '#C48E69',
                  '#BE7F51', '#7D4E2D', '#B7702D', '#6B4423' ];
////////////////////////////////////////////////////////////////////////////////
// 胡桃染	Kurumizome	Walnut-dyed	159,116,98	#9F7462
// 蒲色	Kaba-iro	Cattail color (the plant)	182,73,37	#B64925
// 黄櫨染	Kōrozen	Sumac-dyed	89,43,31	#592B1F
// 焦茶	Kogecha	Scorched brown	53,31,25	#351F19
// 深支子	Kokikuchinashi	Rich gardenia	245,127,79	#F57F4F
// 洗柿	Araigaki	Washed-out persimmon	236,130,84	#EC8254
// 代赭色	Taisha-iro	Red ochre color	159,82,51	#9F5233
// 赤白橡	Akashirotsurubami	Sawtooth oak	236,149,108	#EC956C
// 礪茶	Tonocha	Polished brown	152,85,56	#985538
// 煎茶色	Sencha-iro	Green tea-colored	130,75,53	#824B35
// 洒落柿	Sharegaki	Stylish persimmon	255,162,107	#FFA26B
// 薄柿	Usugaki	Pale persimmon	252,164,116	#FCA474
// 萱草色	Kanzō-iro	Daylily-colored	255,137,54	#FF8936
// 梅染	Umezome	Plum-dyed	250,146,88	#FA9258
// 紅鬱金	Beniukon	Red-bronze (lit. red dye and turmeric)	251,129,54	#FB8136
// 丁子茶	Chōjicha	Clove-brown	143,88,60	#8F583C
// 憲法染	Kenpōzome	Legal dye (from when color use was regulated by class)	46,33,27	#2E211B
// 枇杷茶	Biwacha	Loquat (tree) brown	171,97,52	#AB6134
// 琥珀色	Kohaku-iro	Amber	202,105,36	#CA6924
// 淡香	Usukō	Pale incense	255,165,101	#FFA565
// 朽葉色	Kuchiba-iro	Decaying leaves color	213,120,53	#D57835
// 金茶	Kincha	Golden brown	198,107,39	#C66B27
// 丁子染	Chōjizome	Clove-dyed	169,98,50	#A96232
// 狐色	Kitsune-iro	Fox-color	152,86,41	#985629
// 柴染	Fushizome	Brushwood-dyed	140,89,57	#8C5939
// 伽羅色	Kyara-iro	Aloewood-color	106,67,45	#6A432D
// 煤竹色	Susutake-iro	Weathered bamboo (lit. "sooty")	89,58,39	#593A27
// 白茶	Shiracha	White tea-colored	196,142,105	#C48E69
// 黄土色	Ōdo-iro	Ochre (lit. earthen yellow)	190,127,81	#BE7F51
// 銀煤竹	Kinsusutake	Golden-grey bamboo (dried and weathered)	125,78,45	#7D4E2D
// 黄唐茶	Kigaracha	Chinese yellow tea-colored	183,112,45	#B7702D
// 媚茶	Kobicha	Brown-nosers' brown (lit. "the brown of flattery")	107,68,35	#6B4423
////////////////////////////////////////////////////////////////////////////////

// Yellow series
var yellows =    ['#F7BB7D', '#FFA400', '#FFA631', '#E08A1E', '#CB7E1F', '#C57F2E', '#785E49',
                  '#FFB95A', '#FAA945', '#CE9F6F', '#BB8141', '#FFB61E', '#FFB94E', '#E2BE9F',
                  '#E69B3A', '#E29C45', '#B0927A', '#826B58', '#7F6B5D', '#7F5D3B', '#665343',
                  '#4C3D30', '#A17917', '#896C39', '#5C4827', '#E3B130', '#E2B13C',' #F3C13A',
                  '#D3B17D', '#AA8736', '#957B38', '#D9B611', '#645530'];
////////////////////////////////////////////////////////////////////////////////
// 浅黄	Asagi	Light yellow	247,187,125	#F7BB7D
// 山吹色	Yamabuki-iro	Bright golden yellow (and a particular rose varietal)	255,164,0	#FFA400
// 玉子色	Tamago-iro	Egg-colored	255,166,49	#FFA631
// 櫨染	Hajizome	Sumac-dyed	224,138,30	#E08A1E
// 山吹茶	Yamabukicha	Bright gold-brown	203,126,31	#CB7E1F
// 桑染	Kuwazome	Mulberry-dyed	197,127,46	#C57F2E
// 生壁色	Namakabe-iro	The color of an undried wall	120,94,73	#785E49
// 梔子	Kuchinashi	Cape jasmine or gardenia	255,185,90	#FFB95A
// 玉蜀黍色	Tōmorokoshi-iro	Corn-colored	250,169,69	#FAA945
// 白橡	Shirotsurubami	White oak	206,159,111	#CE9F6F
// 黄橡	Kitsurubami	Golden oak	187,129,65	#BB8141
// 藤黄	Tō'ō	Gamboge	255,182,30	#FFB61E
// 花葉色	Hanaba-iro or kayou-iro	Floral leaf-colored	255,185,78	#FFB94E
// 鳥の子色	Torinoko-iro	Eggshell paper-colored	226,190,159	#E2BE9F
// 鬱金色	Ukon-iro	Turmeric-colored	230,155,58	#E69B3A
// 黄朽葉	Kikuchiba	Golden fallen leaves	226,156,69	#E29C45
// 利休白茶	Rikyūshiracha	Faded Sen no Rikyu's tea	176,146,122	#B0927A
// 利休茶	Rikyūcha	Sen no Rikyu's tea	130,107,88	#826B58
// 灰汁色	Aku-iro	Lye-colored	127,107,93	#7F6B5D
// 肥後煤竹	Higosusutake	Japanese iris and sooty bamboo	127,93,59	#7F5D3B
// 路考茶	Rokōcha	Contemplation in a tea garden	102,83,67	#665343
// 海松茶	Mirucha	Simmered seaweed	76,61,48	#4C3D30
// 菜種油色	Nataneyu-iro	Rapeseed oil-colored	161,121,23	#A17917
// 黄海松茶	Kimirucha	Yellow Sea pine-brown	137,108,57	#896C39
// 鶯茶	Uguisucha	Nightingale-brown (greenish brown)	92,72,39	#5C4827
// 菜の花色	Nanohanacha	Rape-blossom brown	227,177,48	#E3B130
// 苅萱	Kariyasu	Japanese triandra grass (Themeda japonica)	226,177,60	#E2B13C
// 黄蘗	Kihada	Amur cork tree (Phellodendron amurense)	243,193,58	#F3C13A
// 蒸栗色	Mushikuri-iro	Steamed chestnut color	211,177,125	#D3B17D
// 青朽葉	Aokuchiba	Pale fallen leaves	170,135,54	#AA8736
// 鶸茶	Hiwacha	Finch-brown (Cardueline finch)	149,123,56	#957B38
// 女郎花	Ominaeshi	Patrinia flowers (Patrinia scabiosaefolia)	217,182,17	#D9B611
// 鶯色	Uguisu-iro	Nightingale-colored	100,85,48	#645530
////////////////////////////////////////////////////////////////////////////////

// yellow/green series
var yellowgreens = ['#BDA928', '#BBA46D', '#9C8A4D', '#534A32', '#473F2D', '#8B7D3A', '#524B2A',
                    '#3B3429', '#857C55', '#5E5545', '#7A942E', '#4D4B3A', '#BCB58C', '#8DB255',
                    '#8C9E5E', '#5B8930', '#52593B', '#454D32' ];
////////////////////////////////////////////////////////////////////////////////
// 鶸色	Hiwa-iro	Greenfinch color	189,169,40	#BDA928
// 青白橡	Aoshirotsurubami	Pale oak	187,164,109	#BBA46D
// 柳茶	Yanagicha	Willow tea	156,138,77	#9C8A4D
// 璃寛茶	Rikancha	Rikan brown	83,74,50	#534A32
// 藍媚茶	Aikobicha	Flirtatious indigo tea	71,63,45	#473F2D
// 苔色	Koke-iro	Moss color	139,125,58	#8B7D3A
// 海松色	Miru-iro	Codium fragile seaweed color	82,75,42	#524B2A
// 千歳茶	Sensaicha	Thousand year old brown	59,52,41	#3B3429
// 梅幸茶	Baikōcha	Baiko brown	133,124,85	#857C55
// 岩井茶	Iwaicha	Iwai brown	94,85,69	#5E5545
// 鶸萌黄	Hiwamoegi	Siskin sprout yellow	122,148,46	#7A942E
// 柳煤竹	Yanagisusutake	Sooty willow bamboo	77,75,58	#4D4B3A
// 裏柳	Urahayanagi	Underside of willow leaves	188,181,140	#BCB58C
// 淡萌黄	Usumoegi	Pale young green onion	141,178,85	#8DB255
// 柳染	Yanagizome	Willow dye	140,158,94	#8C9E5E
// 萌黄	Moegi	Fresh onion	91,137,48	#5B8930
// 青丹	Aoni	Blue Black Crayfish	82,89,59	#52593B
// 松葉色	Matsuba-iro	Pine needle color	69,77,50	#454D32
////////////////////////////////////////////////////////////////////////////////

// Green/Blue Green series
var greenbluegreens = ['#8C9C76', '#6B9362', '#817B69', '#5E644F', '#374231', '#2A603B', '#A5BA93',
                       '#898A74', '#407A52', '#3D5D42', '#3D4035', '#006442', '#656255', '#224634',
                       '#2D4436', '#2E372E', '#5A6457', '#749F8D', '#819C8B', '#3A6960', '#3A403B',
                       '#2B3733', '#354E4B', '#203838'];
////////////////////////////////////////////////////////////////////////////////
// 薄青	Usuao	Pale blue	140,156,118	#8C9C76
// 若竹色	Wakatake-iro	Young bamboo color	107,147,98	#6B9362
// 柳鼠	Yanaginezumi	Willow grey	129,123,105	#817B69
// 老竹色	Oitake-iro	Old bamboo color	94,100,79	#5E644F
// 千歳緑	Sensaimidori	Thousand year old green	55,66,49	#374231
// 緑	Midori	Green	42,96,59	#2A603B
// 白緑	Byakuroku	Whitish green	165,186,147	#A5BA93
// 錆青磁	Sabiseiji	Rusty celadon	137,138,116	#898A74
// 緑青	Rokushō	Patina	64,122,82	#407A52
// 木賊色	Tokusa-iro	Horsetail color	61,93,66	#3D5D42
// 御納戸茶	Onandocha	Storeroom brown	61,64,53	#3D4035
// 青竹色	Aotake-iro	Green bamboo color	0,100,66	#006442
// 利休鼠	Rikyūnezumi	Greyish dark green	101,98,85	#656255
// びろうど	Birōdo	Velvet	34,70,52	#224634
// 虫襖	Mushiao	Insect screen	45,68,54	#2D4436
// 藍海松茶	Aimirucha	Indigo Codium fragile seaweed brown	46,55,46	#2E372E
// 沈香茶	Tonocha	Aloeswood brown	90,100,87	#5A6457
// 水浅葱	Mizuasagi	Pale green onion	116,159,141	#749F8D
// 青磁色	Seiji-iro	Celadon color	129,156,139	#819C8B
// 青碧	Seiheki	Blue-green	58,105,96	#3A6960
// 錆鉄御納戸	Sabitetsuonando	Rusty storeroom	58,64,59	#3A403B
// 鉄色	Tetsu-iro	Iron color	43,55,51	#2B3733
// 御召茶	Omeshicha	Silk crepe brown	53,78,75	#354E4B
// 高麗納戸	Kōrainando	Goryeo storeroom	32,56,56	#203838
////////////////////////////////////////////////////////////////////////////////

// Blue/BlueViolet series
var blueviolets = [ '#757D75', '#4F4944', '#2B3736', '#86ABA5', '#6A7F7A', '#C6C2B6', '#48929B',
                    '#006C7F', '#455859', '#5C544E', '#264348', '#364141', '#1D697C', '#317589',
                    '#4D646C', '#044F67', '#344D56', '#3D4C51', '#4D8FAC', '#252321', '#5D8CAE',
                    '#192236', '#181B26', '#1F4788', '#003171', '#1B294B', '#78779B', '#191F45',
                    '#766980', '#5A4F74', '#614E6E'];
////////////////////////////////////////////////////////////////////////////////
// 湊鼠	Minatonezumi	Harbor rat	117,125,117	#757D75
// 青鈍	Aonibi	Dull blue	79,73,68	#4F4944
// 鉄御納戸	Tetsuonando	Iron storage	43,55,54	#2B3736
// 水色	Mizu-iro	Water color	134,171,165	#86ABA5
// 錆浅葱	Sabiasagi	Rusted light-blue	106,127,122	#6A7F7A
// 瓶覗	Kamenozoki	Inside of a bottle	198,194,182	#C6C2B6
// 浅葱色	Asagi-iro	Light blue color	72,146,155	#48929B
// 新橋色	Shinbashi-iro	New bridge color	0,108,127	#006C7F
// 錆御納戸	Sabionando	Rusty storage	69,88,89	#455859
// 藍鼠	Ainezumi	Mousy indigo	92,84,78	#5C544E
// 藍色	Ai-iro	Indigo color	38,67,72	#264348
// 御納戸色	Onando-iro	Onando color	54,65,65	#364141
// 花浅葱	Hana'asagi	Light blue flower	29,105,124	#1D697C
// 千草色	Chigusa-iro	Thousand herb color	49,117,137	#317589
// 舛花色	Masuhana-iro	Opposite flower color	77,100,108	#4D646C
// 縹	Hanada	Light blue silk	4,79,103	#044F67
// 熨斗目花色	Noshimehana-iro	Iron head flower color	52,77,86	#344D56
// 御召御納戸	Omeshionando	Kimono storage	61,76,81	#3D4C51
// 空色	Sora-iro	Sky color	77,143,172	#4D8FAC
// 黒橡	Kurotsurubami	Black chestnut oak	37,35,33	#252321
// 群青色	Gunjō-iro	Ultramarine color	93,140,174	#5D8CAE
// 紺	Kon	Dark blue	25,34,54	#192236
// 褐色	Kachi-iro	Coarse wool color	24,27,38	#181B26
// 瑠璃色	Ruri-iro	Lapis lazuli color	31,71,136	#1F4788
// 紺青色	Konjō-iro	Navy blue color	0,49,113	#003171
// 瑠璃紺	Rurikon	Dark blue lapis lazuli	27,41,75	#1B294B
// 紅碧	Benimidori	Stained red	120,119,155	#78779B
// 紺桔梗	Konkikyō	Navy blue bellflower	25,31,69	#191F45
// 藤鼠	Fujinezumi	Mousy wisteria	118,105,128	#766980
// 紅掛花色	Benikakehana-iro	Safflower color	90,79,116	#5A4F74
// 藤色	Fuji-iro	Wisteria color	137,114,158	#89729E	二藍	Futaai	Dark indigo	97,78,110	#614E6E
////////////////////////////////////////////////////////////////////////////////

// Violet series
var violets =     [ '#875F9A', '#5D3F6A', '#976E9A', '#3F313A', '#2B2028', '#3A243B', '#A87CA0',
                    '#8D608C', '#5B3256', '#4F284B', '#23191E', '#763568', '#BB7796', '#491E3C',
                    '#755D5B', '#63424B', '#6D2B50', '#4D3B3C', '#A4345D', '#8F4155', '#43242A',
                    '#512C31', '#7E2639', '#59292C', '#44312E'];
////////////////////////////////////////////////////////////////////////////////
// 藤紫	Fujimurasaki	Wisteria purple	135,95,154	#875F9A
// 桔梗色	Kikyō-iro	Bellflower color	93,63,106	#5D3F6A
// 紫苑色	Shion-iro	Tatarian aster color	151,110,154	#976E9A
// 滅紫	Metsushi	Disappearing purple	63,49,58	#3F313A
// 紫紺	Shikon	Blue violet	43,32,40	#2B2028
// 深紫	Kokimurasaki	Deep purple	58,36,59	#3A243B
// 薄色	Usu-iro	Thin color	168,124,160	#A87CA0
// 半色	Hashita-iro	Half color	141,96,140	#8D608C
// 菫色	Sumire-iro	Violet color	91,50,86	#5B3256
// 紫	Murasaki	Purple	79,40,75	#4F284B
// 黒紅	Kurobeni	Dark red	35,25,30	#23191E
// 菖蒲色	Ayame-iro	Iris color	118,53,104	#763568
// 紅藤	Benifuji	Red wisteria	187,119,150	#BB7796
// 杜若	Kakitsubata	Rabbit-ear iris	73,30,60	#491E3C
// 鳩羽鼠	Hatobanezumi	Dove feather grey	117,93,91	#755D5B
// 葡萄鼠	Budōnezumi	Grape mouse	99,66,75	#63424B
// 蒲萄	Ebizome	Vine grape	109,43,80	#6D2B50
// 藤煤竹	Fujisusutake	Wisteria and burnt-bamboo	77,59,60	#4D3B3C
// 牡丹	Bōtan	Tree peony	164,52,93	#A4345D
// 梅紫	Umemurasaki	Plum purple	143,65,85	#8F4155
// 似せ紫	Nisemurasaki	Fake purple	67,36,42	#43242A
// 紫鳶	Murasakitobi	Purple kite	81,44,49	#512C31
// 蘇芳	Suō	Sappanwood	126,38,57	#7E2639
// 桑染	Kuwazome	Mulberry dye	89,41,44	#59292C
// 紅消鼠	Benikeshinezumi	Vanishing red mouse	68,49,46	#44312E
////////////////////////////////////////////////////////////////////////////////


// Achromatic series
achromatic = ['#FFDDCA', '#B9A193', '#97867C', '#6E5F57', '#4B3C39', '#393432', '#352925', '#27221F', '#171412', '#EBF6F7'];

////////////////////////////////////////////////////////////////////////////////
// 白練	Shironeri	Unbleached silk	255,221,202	        #FFDDCA
// 白鼠	Shironezumi	White mouse	185,161,147	            #B9A193
// 銀鼠	Ginnezumi	Silver-grey	151,134,124	            #97867C
// 素鼠	Sunezumi	Plain mouse	110,95,87	            #6E5F57
// 丼鼠	Dobunezumi	Brown rat grey	75,60,57	        #4B3C39
// 藍墨茶	Aisumicha	Indigo ink brown	57,52,50	   #393432
// 檳榔子染	Binrōjizome	Betel nut dye	53,41,37	  #352925
// 墨色	Sumi-iro	Ink color	39,34,31	            #27221F
// 黒色	Kokushoku	Black	23,20,18	                #171412
// 藍白	Aijiro	Indigo white	235, 246, 247	        #EBF6F7
////////////////////////////////////////////////////////////////////////////////
