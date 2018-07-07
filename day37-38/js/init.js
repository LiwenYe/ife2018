function init(part1,part2) {
    let region = part1.querySelectorAll("input");
    let product = part2.querySelectorAll("input");

    let rand1 = Math.floor(Math.random()*3);
    region[rand1].checked = true;

    let rand2 = Math.floor(Math.random()*3);
    product[rand2].checked = true;
}