let canvasPart = document.getElementById("canvasWrapper");
let canvas = document.createElement('canvas');
function createLines(data) {
    canvas.innerHTML = "";
    canvas.width = 740;
    canvas.height = 360;

    if (canvas.getContext){
        let ctx = canvas.getContext('2d');
        Axis(ctx,getMax(data));
        addLines(ctx,data,getMax(data));
    }

    canvasPart.appendChild(canvas);
}
function Axis(ctx,max) {
    ctx.beginPath();
    ctx.moveTo(720,340);
    //x轴
    ctx.lineTo(30,340);
    //y轴
    ctx.lineTo(30,10);
    ctx.stroke();

    //x轴箭头
    ctx.beginPath();
    ctx.moveTo(710,335);
    ctx.lineTo(720,340);
    ctx.lineTo(710,345);
    ctx.stroke();
    //y轴箭头
    ctx.beginPath();
    ctx.moveTo(25,20);
    ctx.lineTo(30,10);
    ctx.lineTo(35,20);
    ctx.stroke();

    let x = 85;
    for (let i=0;i<12;i++){
        //x轴坐标线
        ctx.beginPath();
        ctx.moveTo(x,340);
        ctx.lineTo(x,346);
        ctx.stroke();
        //x轴坐标标识
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "14px sans-serif";
        ctx.fillText((i+1).toString(),x,355);
        x += 55;
    }
    //x轴含义
    ctx.fillText("月份",725,350);

    let y = 290,add = max/6;
    for (let i=0;i<6;i++){
        //y轴坐标线
        ctx.beginPath();
        ctx.moveTo(30,y);
        ctx.lineTo(22,y);
        ctx.stroke();
        //y轴坐标标识
        ctx.textAlign = "start";
        ctx.font = "12px sans-serif";
        ctx.fillText(Math.round(add*(i+1)).toString(),0,y);
        y -= 50;
    }
    ctx.fillText("销量",0,10);
}
function addLines(ctx,data,max) {
    let colors = ['blue','red','yellow','green','purple','black',"brown","mauve","pink"];
    for (let i=0;i<data.length;i++) {
        let x = 82,add = max/6;
        ctx.save();
        ctx.beginPath();
        for (let j = 0; j < 12; j++) {
            let height = data[i].sale[j] / add * 50,
                height2 = data[i].sale[j+1]/add *50;
            ctx.fillStyle = colors[i];
            ctx.rect(x, 338 - height, 4, 4);
            ctx.fill();
            x += 55;
            if (j<11){
                ctx.strokeStyle = colors[i];
                ctx.lineTo(x+2,340 - height2);
                ctx.stroke();
            }
        }
        ctx.restore();
    }
}