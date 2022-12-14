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
let v = document.getElementsByClassName("background-mx-video")[0].innerHTML = `<video id="video_content" preload="auto" autoplay="true" loop="true" muted="muted"><source id="video_content3_1" src="https://rr14---sn-n8v7kn7e.googlevideo.com/videoplayback?expire=1671065960&ei=Bx2aY7H2O8PHigS43rj4Cg&ip=216.151.180.34&id=o-AGh3ZajKdDSaBSes0pbjZRgpM5dfR-N1_QF5kK6qk-Pn&itag=18&source=youtube&requiressl=yes&spc=zIddbCeUUuOtQGmy8eV7k4qki2TB9t0&vprv=1&mime=video%2Fmp4&ns=ILiuG-wVjS37YlVGoLGjAIoK&cnr=14&ratebypass=yes&dur=62.159&lmt=1657975198705540&fexp=24001373,24007246,24239134&beids=24239134&c=WEB&txp=5318224&n=57KycsB_ZUFYgw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgCjd_-OZuFVHbBzfIqrAbNeeVTCMInCZDrhqRjfoPgEwCIQCmdpoMBS5y9AM3tLQ4-dUKDomvgKiHj9hkd_EOSXQd0w%3D%3D&rm=sn-ab5el77l&req_id=5e22e3ac8239a3ee&redirect_counter=2&cm2rm=sn-8ph2xajvh-8v1s7e&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=KD&mip=93.157.21.89&mm=29&mn=sn-n8v7kn7e&ms=rdu&mt=1671044256&mv=m&mvi=14&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOS6jqZY9RyXHSwYSXgCzDdca9izyZPlH1MUaVo2h0SeAiArypu7LpGRrJvjNuKVZCq6WtSaWDCMVjtmFZZqk1FFmw%3D%3D" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"></video>`;

setInterval(function() {
document.getElementsByClassName("home-screen-txt")[0].innerHTML = b[Rnd(1, b.length)-1];
console.log("%cCREATED BY DOSX [@DOSX_PLUS]", "background-color: red; color: white; font-size: 15px;");
}, 1300)
function Rnd(min, max){return Math.floor(Math.random()*(max-min+1)+min)}
