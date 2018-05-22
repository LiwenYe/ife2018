window.onload = function(){
    var title = document.getElementsByTagName('h2');

    (function() {
        var time = new Date().getHours();
        if (time<6 || time>22){
            alert("亲爱的访客，早上好！");
        } else if (time<12) {
            alert("亲爱的访客，上午好！");
        }else {
            alert("亲爱的访客，下午好！");
        }
    })();

    for (let i=0;i<title.length;i++){
        title[i].addEventListener('click', function () {
            var ul = title[i].nextElementSibling;
            if (ul.style.display == 'none') {
                ul.style.display = 'block';
            }else{
                ul.style.display = 'none';
            }
        });
    }

    var photo = document.getElementsByTagName('img')[0];
    photo.addEventListener('click',function () {
        window.open("https://baike.baidu.com/item/%E4%BA%94%E6%9C%88%E5%A4%A9/17011?fr=aladdin");
    })
}