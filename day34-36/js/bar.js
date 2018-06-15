let svgPart = document.querySelector("#svg-wrapper");
let xml = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(xml,"svg");
function createSVG(data) {
    svg.innerHTML=""; 
    svg.setAttribute("width","800");
    svg.setAttribute("height","320");

    createSVGAxis(svg,data);
    realTime(svg,data);
    getMax(data);

    svgPart.appendChild(svg);
}
function createSVGAxis(part) {
    //x轴
    let axisX = document.createElementNS(xml,"line");
    axisX.setAttribute("x1","33");
    axisX.setAttribute("y1","300");
    axisX.setAttribute("x2","710");
    axisX.setAttribute("y2","300");
    axisX.setAttribute("stroke","black");
    axisX.setAttribute("stroke-width","1");
    part.appendChild(axisX);

    //x轴右箭头
    let arrowR = document.createElementNS(xml,"polyline");
    arrowR.setAttribute("points","700 295, 710 300,700 305");
    arrowR.setAttribute("stroke","black");
    arrowR.setAttribute("stroke-width","1");
    arrowR.setAttribute("fill","transparent");
    part.appendChild(arrowR);

    //x轴坐标标识
    let axisXText = document.createElementNS(xml,"text");
    axisXText.setAttribute("x","710");
    axisXText.setAttribute("y","315");
    axisXText.setAttribute("style","fill:black;font-size:12");
    axisXText.innerHTML = "月份";
    part.appendChild(axisXText);

    //x轴区间标志
    let x=55;
    for (let i=1;i<=12;i++){
        let text = document.createElementNS(xml,"text");
        text.setAttribute("x",x.toString());
        text.setAttribute("y","315");
        text.setAttribute("style","fill:black;font-size:12");
        text.innerHTML = i+"月";
        x += 55;
        part.appendChild(text);
    }
    //x轴坐标线
    let x1 = 35,y1=300;
    for (let i=0;i<12;i++){
        x1 += 55;
        let coord = document.createElementNS(xml,"line");
        coord.setAttribute("x1",x1.toString());
        coord.setAttribute("y1",y1.toString());
        coord.setAttribute("x2",x1.toString());
        let y2 = y1+5;
        coord.setAttribute("y2",y2.toString());
        coord.setAttribute("stroke","black");
        coord.setAttribute("stroke-width","0.5");
        part.appendChild(coord);
    }

    //y轴
    let axisY = document.createElementNS(xml,"line");
    axisY.setAttribute("x1","33");
    axisY.setAttribute("y1","0");
    axisY.setAttribute("x2","33");
    axisY.setAttribute("y2","300");
    axisY.setAttribute("stroke","black");
    part.appendChild(axisY);

    //y轴坐标线
    x1 = 28,y1=300;
    for (let i=1;i<=5;i++){
        y1 -=  50;
        let coord = document.createElementNS(xml,"line");
        coord.setAttribute("x1",x1.toString());
        coord.setAttribute("y1",y1.toString());
        let x2 = x1 +670;
        coord.setAttribute("x2",x2.toString());
        coord.setAttribute("y2",y1.toString());
        coord.setAttribute("stroke","black");
        coord.setAttribute("stroke-width","0.2");
        part.appendChild(coord);
    }

    //y轴上箭头
    let arrowU = document.createElementNS(xml,"polyline");
    arrowU.setAttribute("points","27 10, 33 0,39 10");
    arrowU.setAttribute("stroke","black");
    arrowU.setAttribute("stroke-width","1");
    arrowU.setAttribute("fill","transparent");
    part.appendChild(arrowU);

    //y轴坐标标识
    let axisYText = document.createElementNS(xml,"text");
    axisYText.setAttribute("x","3");
    axisYText.setAttribute("y","15");
    axisYText.setAttribute("style","fill:black;font-size:12");
    axisYText.innerHTML = "销量";
    part.appendChild(axisYText);


}

function realTime(part,data) {
    //柱状颜色
    let colors=['blue','red','yellow','green','purple','black',"brown","mauve","pink"];

    //y轴
    let y=255;
    //y轴坐标最大值
    let yMax = getMax(data),
        add= yMax/5;           //y轴坐标间距

    //y轴坐标尺
    for (let i=0;i<5;i++){
        let text = document.createElementNS(xml,"text");
        text.setAttribute("x","3");
        text.setAttribute("y",y.toString());
        text.setAttribute("style","fill:black;font-size:12");
        text.innerHTML = add * (i+1);
        y -= 50;
        part.appendChild(text);
    }

    //柱状内容
    let xStart = 40;
    let width = 45 / data.length;
    for (let i=0;i<data.length;i++){
        let hs = data[i].sale;
        let start = xStart;
        for (let j=0;j<hs.length;j++){
            let pillar = document.createElementNS(xml,"rect");
            pillar.setAttribute("width",width.toString());
            pillar.setAttribute("fill",colors[i]);
            pillar.setAttribute("height",(hs[j]/add*50).toString());
            pillar.setAttribute("x",start.toString());
            pillar.setAttribute("y",(300 - hs[j]/add*50).toString());
            part.appendChild(pillar);
            start += 55;
        }
        xStart += width;
    }

    //标志颜色代表什么
    let xRect = 710,yRect = 40;
    for(let i=0;i<data.length;i++){
        let rect = document.createElementNS(xml,"rect");
        rect.setAttribute("width","10");
        rect.setAttribute("height","10");
        rect.setAttribute("x",xRect.toString());
        rect.setAttribute("y",yRect.toString());
        rect.setAttribute("fill",colors[i]);
        part.appendChild(rect);
        let text = document.createElementNS(xml,"text");
        let textX = xRect+15;
        text.setAttribute("x",textX.toString());
        text.setAttribute("y",(yRect+10).toString());
        text.setAttribute("style","fill:black;font-size:12");
        text.innerHTML = data[i].region + " " +data[i].product;
        part.appendChild(text);
        yRect += 20;
    }
}

//获取数组最大值
function getMax(data) {
    let max=0,maxs=[];
    if (data.length === 1){
        max = Math.max.apply(Math,data[0].sale);
    }else {
        for (let i=0;i<data.length;i++){
            maxs.push(Math.max.apply(Math,data[i].sale));
        }
        max = Math.max.apply(Math,maxs);
    }
    return max;
}