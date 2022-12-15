let b = ["ебать меня в сраку онлайн",
         "очко пробито онлайн",
         "танкионлайн ебать",
         "ебейший фистинг онлайн",
         "игра твоих 9999 отчимов",
         "запустил - проебал мать",
         "кризис сука жрёт дохуя",
         "альтернатива гей-м",
         "орех гандон",
         "танчеки онлайн",
         "скорпион хуйня кст",
         "магнум похож на стоячий хуй",
         "когда компенсация блять?",
         "дарова заебал",
         "жми играть и кайфуй чурка",
         "хахаха, ты нуб соси хуй",
         "танкески онлайн",
         "танчища онлайн",
         "стреляющие хуйни онлайн",
         "пиу-пиу-бах онлайн",
         "пробития в очко онлайн",
         "пошёл нахуй."];
["home-screen-play-bt=Начать фистинг епта блять",
 "home-screen-download=Загрузить эту хуйню"].forEach(el => {
     let x = el.split("=");
     document.getElementsByClassName(x[0])[0].innerHTML = x[1];
 });
let v = document.getElementsByClassName("background-mx-video")[0].innerHTML = `<video id="video_content" preload="auto" autoplay="true" loop="true" muted="muted"><source id="video_content3_1" src="https://devs.cf/dosx-files/gachi.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"></video>`;

setInterval(function() {
document.getElementsByClassName("home-screen-txt")[0].innerHTML = b[Rnd(1, b.length)-1];
console.log("%cCREATED BY DOSX [@DOSX_PLUS]", "background-color: red; color: white; font-size: 15px;");
}, 1300)
function Rnd(min, max){return Math.floor(Math.random()*(max-min+1)+min)}
