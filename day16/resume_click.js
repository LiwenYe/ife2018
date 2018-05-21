window.onload = function(){
    var title = document.getElementsByTagName('h2');
    for (let i=0;i<title.length;i++){
        title[i].addEventListener('click', function () {
            var ul = title[i].nextElementSibling;
            ul.style.display = 'block';
        });
    }

    var photo = document.getElementsByTagName('img')[0];
    photo.addEventListener('click',function () {
        window.open("https://baike.baidu.com/item/%E4%BA%94%E6%9C%88%E5%A4%A9/17011?fr=aladdin");
    })
}