let canvas = document.getElementById("drawing");
function createCanvas(data) {
    canvas.innerHTML = "";
    canvas.width = 660;
    canvas.height = 360;

    if (canvas.getContext){
        let ctx = canvas.getContext('2d');
        createAxis2(ctx,data);
        createLine(ctx,data)
    }
}
function createAxis2(ctx,data) {
    ctx.beginPath();
    ctx.moveTo(640,330);
    //x轴
    ctx.lineTo(30,330);
    //y轴
    ctx.lineTo(30,20);
    ctx.stroke();

    //x轴箭头
    ctx.beginPath();
    ctx.moveTo(630,325);
    ctx.lineTo(640,330);
    ctx.lineTo(630,335);
    ctx.stroke();

    //y轴箭头
    ctx.beginPath();
    ctx.moveTo(25,30);
    ctx.lineTo(30,20);
    ctx.lineTo(35,30);
    ctx.stroke();

    ctx.save();
    ctx.font = "13px sans-serif";
    //x轴坐标含义
    ctx.fillText("月份",630,355);
    //y轴坐标含义
    ctx.fillText("销量",0,20);
    ctx.restore();

    //x轴坐标线
    let coordXStart = 30,
        textXStart = 20;
    for (let i=0;i<12;i++){
        ctx.beginPath();
        coordXStart += 48;
        ctx.moveTo(coordXStart,330);
        ctx.lineTo(coordXStart,340);
        ctx.stroke();

        ctx.save();
        textXStart += 48;
        ctx.font = "13px sans-serif";
        ctx.textAlign = "start";
        ctx.fillText((i+1)+"月",textXStart,355);
        ctx.restore();
    }

    //y轴
    let coordYStart = 330;
    let max = getMax(data),
        add = max/6;
    for (let i=0;i<6;i++){
        ctx.beginPath();
        coordYStart -= 45;
        ctx.moveTo(30,coordYStart);
        ctx.lineTo(25,coordYStart);
        ctx.stroke();

        ctx.font = "12px sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillText(parseInt(add*(i+1)),0,coordYStart);
    }
}
function createLine(ctx,data) {
    let colors = ["red","orange","yellow","green","pink","yellowgreen","blue","purple","black"];
    let rectStrat = 28,
        add = getMax(data) / 6;
    for (let i=0;i<data.length;i++) {
        ctx.save();
        ctx.beginPath();
        let hs = data[i].sale;
        ctx.fillStyle = colors[i];
        ctx.strokeStyle = colors[i];
        let x = rectStrat;
        for (let j = 0; j < 12; j++) {
            let y = 330 - hs[j] / add * 45,
                y1 = 330 - hs[j + 1] / add * 45;
            x += 48;
            ctx.rect(x, y - 2, 4, 4);
            ctx.fill();
            if (j < 11) {
                ctx.moveTo(x + 2, y);
                ctx.lineTo(x + 50, y1);
                ctx.stroke();
            }
        }
        ctx.restore();
    }
}