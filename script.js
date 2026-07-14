const cards = [

{
title:"月の人魚",
image:"images/moon_mermaid.png",
message:"今は焦らず心を休ませる時。ゆっくり進むことで本来の力が戻ります。"
},

{
title:"星の願い",
image:"images/star_wish.png",
message:"あなたの願いは少しずつ形になります。希望を持ち続けましょう。"
},

{
title:"花の妖精",
image:"images/flower_fairy.png",
message:"あなたの優しさが誰かを笑顔にします。自然体でいることが幸運の鍵です。"
},

{
title:"ユニコーン",
image:"images/unicorn.png",
message:"自分を信じる勇気が新しい未来への扉を開きます。"
},

{
title:"星くじら",
image:"images/star_whale.png",
message:"大きな流れに身を任せることで素敵な出会いが訪れます。"
},

{
title:"蝶の精霊",
image:"images/butterfly_spirit.png",
message:"変化を恐れず一歩踏み出しましょう。新しい自分に出会えます。"
},

{
title:"白鳥の湖",
image:"images/swan_lake.png",
message:"穏やかな時間が心を癒します。ゆっくり深呼吸しましょう。"
},

{
title:"愛のバラ",
image:"images/rose_love.png",
message:"愛情があなたを包みます。感謝を伝えると運気が上がります。"
},

{
title:"虹の橋",
image:"images/rainbow_bridge.png",
message:"夢へ続く道はすぐそこです。勇気を出して進みましょう。"
},

{
title:"ドルフィン",
image:"images/dolphin.png",
message:"楽しい出来事が近づいています。笑顔を忘れずに。"
},

{
title:"天使の導き",
image:"images/angel.png",
message:"見えない存在があなたを優しく見守っています。"
},

{
title:"月の鹿",
image:"images/moon_deer.png",
message:"静かな時間が直感を高めます。心の声を信じてください。"
},

{
title:"平和の鳩",
image:"images/peace_dove.png",
message:"争いより調和を選ぶことで幸運が訪れます。"
},

{
title:"三日月の魔法",
image:"images/crescent_magic.png",
message:"新しい始まりに最適な日です。小さな一歩を大切に。"
},

{
title:"水晶の洞窟",
image:"images/crystal_cave.png",
message:"心を磨くことで未来がより明るく輝きます。"
},

{
title:"宇宙の扉",
image:"images/universe_door.png",
message:"新しい可能性が広がっています。恐れず挑戦しましょう。"
},

{
title:"希望の光",
image:"images/hope_light.png",
message:"最後には必ず光が差します。自分を信じて進んでください。"
}

];

const button=document.getElementById("drawButton");
const result=document.getElementById("result");
const title=document.getElementById("cardTitle");
const image=document.getElementById("resultImage");
const message=document.getElementById("message");

button.onclick=function(){

const card=cards[Math.floor(Math.random()*cards.length)];

title.textContent=card.title;
image.src=card.image;
message.textContent=card.message;

result.classList.remove("hidden");

};
