//let canvas= document.getElementById('drawing');

function createCanvas(data) {
    let canvas = document.getElementById("drawing");
    canvas.width = 800;
    canvas.height = 340;

    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        createCanvasAxis(ctx,data);
        addContent(ctx,data)
    }
}
function createCanvasAxis(ctx,data) {

    ctx.beginPath();
    ctx.moveTo(720,305);
    //x轴
    ctx.lineTo(33,305);
    //y轴
    ctx.lineTo(33,5);
    ctx.stroke();

    //y轴箭头
    ctx.beginPath();
    ctx.moveTo(27,15);
    ctx.lineTo(33,5);
    ctx.lineTo(38,15);
    ctx.stroke();

    //x箭头
    ctx.beginPath();
    ctx.moveTo(710,300);
    ctx.lineTo(720,305);
    ctx.lineTo(710,310);
    ctx.stroke();

    //x轴坐标线及文字描述
    ctx.save();
    ctx.beginPath();
    let x=33;
    for (let i=0;i<12;i++){
        x += 55;
        ctx.moveTo(x,305);
        ctx.lineTo(x,310);
        ctx.stroke();
        ctx.textAlign = "center";
        ctx.font = "14px 华文宋体"
        ctx.fillText((i+1)+"月",x,325);
    }
    ctx.font = "12px 华文宋体";
    ctx.fillText("月份",740,315);
    ctx.restore();

    //y轴坐标线及文字描述
    ctx.save();
    ctx.beginPath();
    let y = 305;
    let yMax = getMaxY(data);
    for (let i=0;i<5;i++){
        y -= 50;
        ctx.moveTo(28,y);
        ctx.strokeStyle = "#d4d4d4";
        ctx.lineTo(710,y);
        ctx.stroke();
        ctx.moveTo(26,y);
        ctx.textAlign = "end";
        ctx.textBaseline = "middle";
        ctx.font = "14px 华文宋体";
        ctx.fillText(yMax/5*(i+1),25,y);
    }
    ctx.font = "12px 华文宋体";
    ctx.fillText("销量",30,20);
    ctx.restore();

}

function addContent(ctx,data) {
    //点和线颜色
    let colors=['blue','red','yellow','green','purple','black',"brown","mauve","pink"];

    ctx.save();
    let xCir =715,yCir=43;
    for (let i=0;i<data.length;i++){
        ctx.beginPath();
        ctx.moveTo(xCir,yCir);
        ctx.fillStyle = colors[i];
        ctx.arc(xCir,yCir,5,0,Math.PI*2,false);
        ctx.fill();
        let xText = xCir + 8;
        ctx.font="12px 宋体";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "black";
        ctx.fillText(data[i].region+" "+data[i].product,xText,yCir);
        yCir +=20;
    }
    ctx.restore();

    let yMax = getMaxY(data);
    let add = yMax/5;
    for (let i=0;i<data.length;i++) {
        ctx.save();
        let hs = data[i].sale;
        let x=30;
        ctx.beginPath();
       for (let j = 0; j < 12; j++) {
            x += 55;
           ctx.fillStyle = colors[i];
            let y = 305 - hs[j] / add * 50,
                y1 = 305 - hs[j + 1] / add * 50;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2, false);
            if (j < 11) {
                ctx.moveTo(x, y);
                ctx.lineTo(x + 55, y1);
                ctx.stroke()
            }
            ctx.fill();
        }
        ctx.restore();
    }
}

function getMaxY(data) {
    let max,maxs=[];
        max = Math.max.apply(Math,data[0].sale);
    if (data.length > 1){
        for (let i=0;i<data.length;i++){
            maxs.push(Math.max.apply(Math,data[i].sale));
        }
        max = Math.max.apply(Math,maxs);

    }
    return max;
}