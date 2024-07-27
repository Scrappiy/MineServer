// здесь пусто

window.onload = function () { // При загрузке страницы
    let div = document.getElementsByClassName('mapp'); // Получаем элементы с классом show
    div[0].scrollTo(1150, 2350); // Скролл первого элемента данного класса прокручиваем до нужного положения
}

function XYpos() {
    let div = document.getElementsByClassName('mapp'); // Получаем элементы с классом show
    div[0].scrollTo(1150, 2380); // Скролл первого элемента данного класса прокручиваем до нужного положения
}


// $('.bigmapp').hover(
//     function(){
//         $('.titdesc').html($(this).attr('data-title'));
//     }
// )

const titdesc = document.querySelector('.titdesc');
const descritioni = document.querySelector('.descritioni');
const bigmapp = document.querySelectorAll('.bigmapp');
const listting = document.querySelectorAll('.listting');
const listtingName = document.querySelectorAll('.listtingName');
const infP = document.querySelectorAll('.infP');
const titdesc1 = document.querySelector('.titdesc1');
const obv = document.querySelector('.obv');
document.getElementById("list1").style.display = '';
document.getElementById("list2").style.display = 'none';
document.getElementById("list3").style.display = 'none';
document.getElementById("list4").style.display = 'none';
document.getElementById("mappg1").style.display = 'none';
titdesc.style.display = 'none';
titdesc1.style.display = 'none';
let rtY = "1000";
let rtX = "1000";
let mappM = 4;
let mappMY = 1;
let mappMX = 1;
let mappG = false;

function XYposS() {
    let div = document.getElementsByClassName('mapp'); // Получаем элементы с классом show
    let textt = "";
    rtY = String(div[0].scrollTop); // Скролл первого элемента данного класса 
    rtX = String(div[0].scrollLeft);
    textt = `data-ysvg="` + rtY + `" data-xsvg="` + rtX + `"`;
    alert(textt);
}
// bigmapp.forEach(bigmapp=>{
//     bigmapp.addEventListener('mousemove', function(e){
//         titdesc.innerText = this.dataset.title
//     })
// })

function lor() {
    obv.textContent = " Я сора , я генеральный секретарь ЦК КПСМ , я делаю великий коммунизм чтобы весь сервер был коммунистический , я развил на многих коммунизм , я вообще самый первый создатель новый жизни мы с Антон реализовали новую жизнь , и много чего построил для новой жизни если бы не я вообще не было бы новой жизни и я нашёл для новой жизни место , я бы хотел добавить настоящий коммунизм , и стать мэром Новой Жизни , и да не забывайте мы все взрослеем и мы забываем про любимые игры и главный босс почти каждых игроком Майнкрафта это взросление .... и да я тот игрок когда против меня был почти весь сервер ... удачи всем кто читает ..."
}

bigmapp.forEach((item) => {
    item.addEventListener('click', function () {
        rtX = this.getAttribute('data-xsvg');
        rtY = this.getAttribute('data-ysvg');
        if (rtX != null && rtX != "") {
            let div = document.getElementsByClassName('mapp'); // Получаем элементы с классом show
            rtY = rtY*(mappM/4)*(mappMY);
            rtX = rtX*(mappM/4)*(mappMX);
            div[0].scrollTo(rtX, rtY); // Скролл первого элемента данного класса прокручиваем до нужного положения
        }
    });

    item.addEventListener('mouseenter', function () {
        titdesc.textContent = item.getAttribute('data-title');
        titdesc.style.display = 'block';
    });

    item.addEventListener('mouseleave', function () {
        titdesc.textContent = item.getAttribute('data-title');
        titdesc.style.display = 'none';
    });

    item.addEventListener('mousemove', function (e) {
        titdesc.style.color = this.getAttribute('data-col');
        titdesc.style.top = (e.y - 50) + 'px';
        titdesc.style.left = (e.x + 20) + 'px';
    });
})

listtingName.forEach((item) => {
    item.addEventListener('click', function () {
        rtY = this.getAttribute('data-name');
        if (rtY != null && rtY != "") {
        } else{
            rtY = this.textContent;
        }

        rtX = this.getAttribute('data-title');
        if (rtX != null && rtX != "") {
            obv.innerHTML = rtY+`<br><br>`+rtX;
        } else{
            obv.innerHTML = "Описание отсутствует";
        }
    });
})

listting.forEach((item) => {
    item.addEventListener('click', function () {
        rtY = this.getAttribute('data-name');
        if (rtY != null && rtY != "") {
        } else{
            rtY = this.textContent;
        }

        rtX = this.getAttribute('data-title');
        if (rtX != null && rtX != "") {
            obv.innerHTML = rtY+`<br><br>`+rtX;
        } else{
            obv.innerHTML = "Описание отсутствует";
        }

        rtX = this.getAttribute('data-xsvg');
        rtY = this.getAttribute('data-ysvg');
        rtY = rtY*(mappM/4)*(mappMY);
        rtX = rtX*(mappM/4)*(mappMX);
        if (rtX != null && rtX != "") {
            let div = document.getElementsByClassName('mapp'); // Получаем элементы с классом show
            div[0].scrollTo(rtX, rtY); // Скролл первого элемента данного класса прокручиваем до нужного положения
        }

        rtX = this.getAttribute('data-ide');
        if (rtX != null && rtX != "") {
            document.getElementById(rtX).style.opacity = 0.7;
            setTimeout(() => {
                document.getElementById(rtX).style.opacity = null;
            }, 300);
        }
    });
})

infP.forEach((item) => {
    item.addEventListener('click', function (e) {
        titdesc1.innerHTML = item.getAttribute('data-photo');
        titdesc1.style.display = 'block';
        titdesc1.style.top = (e.y + 20) + 'px';
        titdesc1.style.left = (e.x + 20) + 'px';
    });
    // item.addEventListener('mousemove', function (e) {
    //     titdesc1.style.top = (e.y + 20) + 'px';
    //     titdesc1.style.left = (e.x + 20) + 'px';
    // });
    item.addEventListener('mouseleave', function () {
        titdesc1.style.display = 'none';
    });
})

function mapM() {
    switch (mappM) {
        case 3:
            document.getElementById("mappg1").style.width="200%";
            document.getElementById("mappg2").style.width="200%";
            document.getElementById("mappg3").style.width="200%";
            document.getElementById("mst").innerHTML="1:50%";
            mappM=2;
            mappMY=0.9;
            mappMX=0.6;
            break;
        case 2:
            document.getElementById("mappg1").style.width="100%";
            document.getElementById("mappg2").style.width="100%";
            document.getElementById("mappg3").style.width="100%";
            document.getElementById("mst").innerHTML="1:25%";
            mappM=1;
            mappMY=0.6;
            mappMX=1;
            break;
        case 1:
            document.getElementById("mappg1").style.width="400%";
            document.getElementById("mappg2").style.width="400%";
            document.getElementById("mappg3").style.width="400%";
            document.getElementById("mst").innerHTML="1:100%";
            mappM=4;
            mappMY=1;
            mappMX=1;
            break;
        default:
            document.getElementById("mappg1").style.width="300%";
            document.getElementById("mappg2").style.width="300%";
            document.getElementById("mappg3").style.width="300%";
            document.getElementById("mst").innerHTML="1:75%";
            mappM=3;
            mappMY=0.98;
            mappMX=0.89;
            break;
    }

    // let div = document.getElementsByClassName('mapp'); // Получаем элементы с классом show
    // rtY = String(div[0].scrollTop); // Скролл первого элемента данного класса 
    // rtX = String(div[0].scrollLeft);
    // rtY = (rtY/4)*mappM;
    // rtX = (rtX/4)*mappM;
    //         div[0].scrollTo(rtX, rtY); // Скролл первого элемента данного класса прокручиваем до нужного положения
}

function mapG() {

    if (mappG == false) {
        mappG = true;
        document.getElementById("mappg1").style.display = '';
    } else {
        mappG = false;
        document.getElementById("mappg1").style.display = 'none';
    }
}

function dispR() {
    document.getElementById("list1").style.display = '';
    document.getElementById("list2").style.display = 'none';
    document.getElementById("list3").style.display = 'none';
    document.getElementById("list4").style.display = 'none';
}

function dispP() {
    document.getElementById("list1").style.display = 'none';
    document.getElementById("list2").style.display = '';
    document.getElementById("list3").style.display = 'none';
    document.getElementById("list4").style.display = 'none';
}
function dispH() {
    document.getElementById("list1").style.display = 'none';
    document.getElementById("list2").style.display = 'none';
    document.getElementById("list3").style.display = '';
    document.getElementById("list4").style.display = 'none';
}
function dispG() {
    document.getElementById("list1").style.display = 'none';
    document.getElementById("list2").style.display = 'none';
    document.getElementById("list3").style.display = 'none';
    document.getElementById("list4").style.display = '';
}

function razrab() {
    obv.innerHTML = `Автор карты: Pool <br> Для реализации проекта мне нужна помощь в дополнении описания к постройкам и игрокам данного сервера. <br> Если вы можете сделать красивые скрины построек, иных красивых и интересных мест сервера (при необходимости с шейдарами), то присылайте изображения в ДС группу города новая жизнь.<br> Если вы можете разнообразить и дополнить описание построек и игроков, то заполните яндекс форму:<a href="https://forms.yandex.ru/u/6692310202848f3a4dae132b/"> форма интервью</a>
`;
}