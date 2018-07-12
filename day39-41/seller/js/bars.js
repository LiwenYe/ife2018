let svgPart = document.getElementById("svgWrapper");
let xml = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(xml,'svg');
function createBars(data) {
    svg.innerHTML = "";
    svg.setAttribute('width','800');
    svg.setAttribute('height','360');


    createAxis(getMax(data));
    addBars(data,getMax(data));

    svgPart.appendChild(svg);
}
function createAxis(max) {
    //x轴
    let axisX = document.createElementNS(xml,"line");
    axisX.setAttribute('x1','30');
    axisX.setAttribute('x2','720');
    axisX.setAttribute('y1','340');
    axisX.setAttribute('y2','340');
    axisX.setAttribute('stroke','black');
    svg.appendChild(axisX);
    //x轴坐标线
    let x1 = 85;
    for (let i=0;i<12;i++){
        let coord = document.createElementNS(xml,'line');
        coord.setAttribute('x1',x1.toString());
        coord.setAttribute('y1','340');
        coord.setAttribute('x2',x1.toString());
        coord.setAttribute('y2','350');
        coord.setAttribute('stroke','black');
        svg.appendChild(coord);
        x1 += 55;
    }
    //x轴坐标标志
    x1 = 50;
    for (let i=1;i<=12;i++){
        let text = document.createElementNS(xml,'text');
        text.setAttribute('x',x1.toString());
        text.setAttribute('y','360');
        text.textContent = i;
        text.setAttribute('style','font-size:14px');
        svg.appendChild(text);
        x1 += 55;
    }
    //x轴箭头
    let arrowX = document.createElementNS(xml,"polyline");
    arrowX.setAttribute('points','710 335,720 340,710 345');
    arrowX.setAttribute('stroke','black');
    arrowX.setAttribute('fill','transparent');
    svg.appendChild(arrowX);
    //x轴含义
    let textX = document.createElementNS(xml,'text');
    textX.setAttribute('x','710');
    textX.setAttribute('y','355');
    textX.setAttribute('style','font-size:14px');
    textX.textContent = "月份";
    svg.appendChild(textX);

    //y轴
    let axisY = document.createElementNS(xml,"line");
    axisY.setAttribute('x1','30');
    axisY.setAttribute('x2','30');
    axisY.setAttribute('y1','10');
    axisY.setAttribute('y2','340');
    axisY.setAttribute('stroke','black');
    svg.appendChild(axisY);
    //y轴坐标线
    let y1 = 290;
    for (let i=0;i<12;i++){
        let coord = document.createElementNS(xml,'line');
        coord.setAttribute('x1','20');
        coord.setAttribute('y1',y1.toString());
        coord.setAttribute('x2','30');
        coord.setAttribute('y2',y1.toString());
        coord.setAttribute('stroke','black');
        svg.appendChild(coord);
        y1 -= 50;
    }
    //y轴箭头
    let arrowY = document.createElementNS(xml,"polyline");
    arrowY.setAttribute('points','25 20,30 10,35 20');
    arrowY.setAttribute('stroke','black');
    arrowY.setAttribute('fill','transparent');
    svg.appendChild(arrowY);
    //y轴含义
    let textY = document.createElementNS(xml,'text');
    textY.setAttribute('x','0');
    textY.setAttribute('y','15');
    textY.setAttribute('style','font-size:12px');
    textY.textContent = "销量";
    svg.appendChild(textY);
    //y轴坐标标志
    let add = max / 6;
    y1 = 295;
    for (let i=0;i<6;i++){
        let text = document.createElementNS(xml,'text');
        text.setAttribute('x','0');
        text.setAttribute('y',y1.toString());
        text.textContent = Math.round(add*(i+1));
        text.setAttribute('style','font-size:12px');
        svg.appendChild(text);
        y1 -= 50;
    }

}
function getMax(data) {

    let max,maxs = [];
    for (let i=0;i<data.length;i++){
        maxs.push(Math.max.apply(Math,data[i].sale));
    }
    max = Math.max.apply(Math,maxs);
    return max;
}
function addBars(data,max) {
    let start = 33,add = max/6,textStart=20;
    let colors = ['blue','red','yellow','green','purple','black',"brown","mauve","pink"];
    for (let i=0;i<data.length;i++) {
        let x = start + i*48/data.length;
        for (let j = 0; j < 12; j++) {
            let height = data[i].sale[j] / add * 50;
            let bar = document.createElementNS(xml, "rect");
            bar.setAttribute('x', x.toString());
            bar.setAttribute('y', (340 - height).toString());
            bar.setAttribute('width', (48/data.length).toString());
            bar.setAttribute('height', height.toString());
            bar.setAttribute('fill',colors[i]);
            svg.appendChild(bar);
            x += 55;
        }

        let barText = document.createElementNS(xml,"rect");
        barText.setAttribute('fill',colors[i]);
        barText.setAttribute('x','710');
        barText.setAttribute('y',textStart.toString());
        barText.setAttribute('width','6');
        barText.setAttribute('height','6');
        svg.appendChild(barText);
        let text = document.createElementNS(xml,"text");
        text.setAttribute('x','720');
        text.setAttribute('y',(textStart+6).toString());
        text.setAttribute('style','font-size:12px');
        text.textContent = data[i].product + " " + data[i].region;
        svg.appendChild(text);
        textStart += 20;
    }
}
