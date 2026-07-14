const cards = [

{
title:"月の人魚",
image:"images/S__8126478.jpg",
message:"今は焦らず心を休ませる時。ゆっくり進むことで本来の力が戻ります。"
},

{
title:"星の願い",
image:"images/S__8126479.jpg",
message:"あなたの願いは少しずつ形になります。希望を持ち続けましょう。"
},

{
title:"花の妖精",
image:"images/S__8126480.jpg",
message:"あなたの優しさが誰かを笑顔にします。自然体でいることが幸運の鍵です。"
},

{
title:"ユニコーン",
image:"images/S__8126481.jpg",
message:"自分を信じる勇気が新しい未来への扉を開きます。"
},

{
title:"星くじら",
image:"images/S__8126482.jpg",
message:"大きな流れに身を任せることで素敵な出会いが訪れます。"
},

{
title:"蝶の精霊",
image:"images/S__8126483.jpg",
message:"変化を恐れず一歩踏み出しましょう。新しい自分に出会えます。"
},

{
title:"白鳥の湖",
image:"images/S__8126484.jpg",
message:"穏やかな時間が心を癒します。ゆっくり深呼吸しましょう。"
},

{
title:"愛のバラ",
image:"images/S__8126485.jpg",
message:"愛情があなたを包みます。感謝を伝えると運気が上がります。"
},

{
title:"虹の橋",
image:"images/S__8126486.jpg",
message:"夢へ続く道はすぐそこです。勇気を出して進みましょう。"
},

{
title:"ドルフィン",
image:"images/S__8126487.jpg",
message:"楽しい出来事が近づいています。笑顔を忘れずに。"
},

{
title:"天使の導き",
image:"images/S__8126488.jpg",
message:"見えない存在があなたを優しく見守っています。"
},

{
title:"月の鹿",
image:"images/S__8126489.jpg",
message:"静かな時間が直感を高めます。心の声を信じてください。"
},

{
title:"平和の鳩",
image:"images/S__8126490.jpg",
message:"争いより調和を選ぶことで幸運が訪れます。"
},

{
title:"三日月の魔法",
image:"images/S__8126491.jpg",
message:"新しい始まりに最適な日です。小さな一歩を大切に。"
},

{
title:"水晶の洞窟",
image:"images/S__8126492.jpg",
message:"心を磨くことで未来がより明るく輝きます。"
},

{
title:"宇宙の扉",
image:"images/S__8126493.jpg",
message:"新しい可能性が広がっています。恐れず挑戦しましょう。"
},

{
title:"希望の光",
image:"images/S__8126494.jpg",
message:"最後には必ず光が差します。自分を信じて進んでください。"
}

];

const button = document.getElementById("drawButton");
const result = document.getElementById("result");
const title = document.getElementById("cardTitle");
const image = document.getElementById("resultImage");
const message = document.getElementById("message");

button.onclick = function(){

const card = cards[Math.floor(Math.random() * cards.length)];

title.textContent = card.title;
image.src = card.image;
message.textContent = card.message;

result.classList.remove("hidden");

};
