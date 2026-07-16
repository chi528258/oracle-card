const cards = [

{
title:"月の人魚",
image:"images/S__8126478.jpg",
message:"心を休ませる時間が、新しい流れを呼び込みます。焦らず、自分の心の声を大切にしてください。"
},

{
title:"星の願い",
image:"images/S__8126479.jpg",
message:"あなたの願いは宇宙へ届いています。信じて一歩ずつ進みましょう。"
},

{
title:"花の妖精",
image:"images/S__8126480.jpg",
message:"優しさが幸運を運んできます。笑顔が素敵な一日になります。"
},

{
title:"ユニコーン",
image:"images/S__8126481.jpg",
message:"奇跡はもうすぐあなたの目の前に現れます。"
},

{
title:"星くじら",
image:"images/S__8126482.jpg",
message:"大きな流れに身を任せることで、新しい世界が広がります。"
},

{
title:"蝶の精霊",
image:"images/S__8126483.jpg",
message:"変化を恐れず一歩踏み出しましょう。新しい自分に出会えます。"
},

{
title:"白鳥の湖",
image:"images/S__8126484.jpg",
message:"心穏やかな時間があなたを癒してくれます。"
},

{
title:"愛のバラ",
image:"images/S__8126485.jpg",
message:"愛を受け取る準備ができています。優しさを信じてください。"
},

{
title:"虹の橋",
image:"images/S__8126486.jpg",
message:"希望へ続く道が開かれています。"
},

{
title:"ドルフィン",
image:"images/S__8126487.jpg",
message:"楽しむ気持ちが幸運を引き寄せます。"
},

{
title:"天使の導き",
image:"images/S__8126488.jpg",
message:"見えない存在があなたを守っています。安心してください。"
},

{
title:"月の鹿",
image:"images/S__8126489.jpg",
message:"静かな時間があなたの直感を育てます。"
},

{
title:"平和の鳩",
image:"images/S__8126490.jpg",
message:"争いよりも調和を選ぶことで運気が上昇します。"
},

{
title:"三日月の魔法",
image:"images/S__8126491.jpg",
message:"新しい始まりにぴったりなタイミングです。"
},

{
title:"水晶の洞窟",
image:"images/S__8126492.jpg",
message:"本当の答えはあなたの心の中にあります。"
},

{
title:"宇宙の扉",
image:"images/S__8126493.jpg",
message:"新しい可能性が開かれています。勇気を持って進みましょう。"
},

{
title:"希望の光",
image:"images/S__8126494.jpg",
message:"最後には必ず光が差し込みます。希望を忘れないでください。"
}

];

function drawCard(){

const card = cards[Math.floor(Math.random()*cards.length)];

document.getElementById("title").textContent = card.title;

document.getElementById("cardImage").src = card.image;

document.getElementById("message").textContent = card.message;

}
