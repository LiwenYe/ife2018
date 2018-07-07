let svgPart = document.getElementById("svg-wrapper");
let xml = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(xml,"svg");
function createSVG(data) {
    svg.innerHTML = " ";

    svg.setAttribute("width","730");
    svg.setAttribute("height","360");

    let max = getMax(data);
    createAxis(max);
    createBars(data,max);
    color(data);

    svgPart.appendChild(svg);
}
function getMax(data) {
    let max = 0;
    for (let i=0;i<data.length;i++){
        let dataArray = data[i].sale;
        let max1 = Math.max.apply(Math,dataArray);
        if (max < max1){
            max = max1;
        }
    }
    return max;
}
function createAxis(data) {
    //x轴
    let axisX = document.createElementNS(xml,"line");
    axisX.setAttribute("x1","30");
    axisX.setAttribute("y1","330");
    axisX.setAttribute("x2","630");
    axisX.setAttribute("y2","330");
    axisX.setAttribute("stroke","black");
    axisX.setAttribute("stroke-width","1");
    svg.appendChild(axisX);
    //x轴坐标
    let coordXStart = 30;
    let textXStart = 40;
    for (let i=0;i<12;i++){
        coordXStart += 48;
        let coordX = document.createElementNS(xml,"line");
        coordX.setAttribute("x1",coordXStart.toString());
        coordX.setAttribute("y1","330");
        coordX.setAttribute("x2",coordXStart.toString());
        coordX.setAttribute("y2","340");
        coordX.setAttribute("stroke","black");

        let text = document.createElementNS(xml,"text");
        text.setAttribute("x",textXStart.toString());
        text.setAttribute("y","350");
        text.setAttribute("style","font-size:14px")
        text.textContent = (i+1) + "月";
        textXStart +=48;

        svg.appendChild(coordX);
        svg.appendChild(text);
    }
    //x轴箭头
    let arrowX = document.createElementNS(xml,"polyline");
    arrowX.setAttribute("points","620 325,630 330,620 335");
    arrowX.setAttribute("stroke","black");
    arrowX.setAttribute("fill","transparent");
    svg.appendChild(arrowX);
    //x轴坐标含义
    let textX = document.createElementNS(xml,"text");
    textX.setAttribute("x","610");
    textX.setAttribute("y","350");
    textX.setAttribute("style","font-size:13px");
    textX.textContent = "月份";
    svg.appendChild(textX);

    //y轴
    let axisY = document.createElementNS(xml,"line");
    axisY.setAttribute("x1","30");
    axisY.setAttribute("y1","20");
    axisY.setAttribute("x2","30")
    axisY.setAttribute("y2","330");
    axisY.setAttribute("stroke","black");
    svg.appendChild(axisY);
    //y轴箭头
    let arrowY = document.createElementNS(xml,"polyline");
    arrowY.setAttribute("points","25 30,30 20,35 30");
    arrowY.setAttribute("stroke","black");
    arrowY.setAttribute("fill","transparent");
    svg.appendChild(arrowY);
    //y轴坐标线
    let coordYStart = 330;
    let coordYText = 335;
    let add = data/6;
    for (let i=0;i<6;i++){
        coordYStart -= 45;
        let coordY = document.createElementNS(xml,"line");
        coordY.setAttribute("x1","25");
        coordY.setAttribute("y1",coordYStart.toString());
        coordY.setAttribute("x2","30");
        coordY.setAttribute("y2",coordYStart.toString());
        coordY.setAttribute("stroke","black");
        svg.appendChild(coordY);

        coordYText -= 45;
        let text = document.createElementNS(xml,"text");
        text.setAttribute("x","0");
        text.setAttribute("y",coordYText.toString());
        text.setAttribute("style","font-size:12px");
        let textY = add*(i+1);
        text.textContent = parseInt(textY);
        svg.appendChild(text);
    }
    //y轴坐标含义
    let textY = document.createElementNS(xml,"text");
    textY.setAttribute("x","0");
    textY.setAttribute("y","20");
    textY.setAttribute("style","font-size:14px");
    textY.textContent = "销量";
    svg.appendChild(textY);
}
function createBars(data,max) {
    let barStart = 34,
        width = 40/data.length,
        colors = ["red","orange","yellow","green","pink","yellowgreen","blue","purple","black"];
    let add = max / 6;
    for (let i=0;i<data.length;i++) {
        let x = barStart + width*i;
        let hs = data[i].sale;
        for (let j = 0; j < 12; j++) {
            let bar = document.createElementNS(xml, "rect");
            let height = (hs[j] / add) * 45;
            bar.setAttribute("x", x.toString());
            bar.setAttribute("y", (330 - height).toString());
            bar.setAttribute("width", width.toString());
            bar.setAttribute("height", height.toString());
            bar.setAttribute("fill",colors[i]);
            svg.appendChild(bar);
            x += 48;
        }
    }
}
function color(data) {
    let colors = ["red","orange","yellow","green","pink","yellowgreen","blue","purple","black"];
    let y = 40;
    for (let i=0;i<data.length;i++) {
        let rect = document.createElementNS(xml, "rect");
        rect.setAttribute("x","620");
        rect.setAttribute("y",y.toString());
        rect.setAttribute("width","8");
        rect.setAttribute("height","8");
        rect.setAttribute("fill",colors[i]);
        svg.appendChild(rect);

        let text = document.createElementNS(xml,"text");
        text.setAttribute("x","630");
        text.setAttribute("y",y+8);
        text.setAttribute("style","font-size:12px");
        text.textContent = data[i].product + "  "+data[i].region;
        svg.appendChild(text);

        y += 20;
    }
}