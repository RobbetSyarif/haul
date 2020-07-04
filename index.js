function s(s) {
  return document.querySelector(s)
}

let bll = s(".bulan h2");
let hrl = s(".hari h2");
let jml = s(".jam h2");
let mnl = s(".min h2");
let scl = s(".sec h2");
let born = s(".born h2");

let waktu = new Date();
let w = waktu.toString().split(" ");
let blan = waktu.getMonth();
let nama = prompt("Masukan Nama Panggilan");
let bo = prompt("masukan tanggal lahir \n format(dd-mm-yyyy)");
let txt = bo.split("-");
let month = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
let bln =["",'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    month = month.split(",");
let tahhun = parseInt(txt[1]) >= parseInt(blan)+1 ? 2020 : 2021;
let bullan= month[parseInt(txt[1])-1];
let harri = txt[0];
 
let from = `${bullan} ${harri}, ${tahhun} 09:00:00`;



s(".born h2").textContent =`${txt[0]} ${bln[parseInt(txt[1])]} ${txt[2]}`;

let countDownDate = new Date(from).getTime();
// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
  let bulan = Math.floor(distance / (1000* 60 * 60 * 24 * 30));
  let hari = Math.floor(distance / (1000 * 60 * 60 * 24) / 12);
  let jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((distance % (1000 * 60)) / 1000);
 
  bulan = bulan < 10 ? `0${bulan}` : bulan;
  hari = hari < 10 ? `0${hari}` : hari;
  jam = jam < 10 ? `0${jam}` : jam;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  
  // If the count down is finished, write some text 
  if (distance == 0) {
    clearInterval(x);
    alert("Happy Birthday");
  }
  bll.textContent = bulan;
  hrl.textContent = hari;
  jml.textContent = jam;
  mnl.textContent = min;
  scl.textContent = sec;
}, 1000);


//today
setInterval(()=>{
  let salam = ["selamat pagi","selamat siang","selamat sore","selamat malam"];
  
  let tm = new Date();
  let hor = tm.getHours();
  let men = tm.getMinutes();
  let det = tm.getSeconds();
  let dat = tm.getDate();
  let bul = tm.getMonth();
  let yer = tm.getYear();
  let sapa="";
  if (hor > 2 && hor < 11) {
    sapa = salam[0];
  }else if(hor >= 11 && hor <= 15){
    sapa = salam[1];
  }else if (hor >= 16 && hor <= 19){
    sapa = salam[2];
  }else if(hor >= 20 && hor <= 23){
    sapa = salam[3];
  }else{
    sapa = "tengah malam / dini hari";
  }
  hor = hor < 10 ? `0${hor}` : hor;
  men = men < 10 ? `0${men}` : men;
  det = det < 10 ? `0${det}` : det;
  dat = dat < 10 ? `0${dat}` : dat;
  bul = bul < 10 ? `0${bul}` : bul;
  yer = yer < 1000? yer+1900 : yer;
  s(".today .time h4").textContent = `${w[0]} ${dat}/${bul}/${yer}, ${hor} : ${men} : ${det}`;
  s(".today .time h5").textContent = `${sapa} ${nama.toLowerCase()}`;
},1000)


//anim debugger

setInterval(function(){
  let obj = document.createElement("div");
  let size = Math.round(Math.random()*50);
  let posisi = Math.round(Math.random()*100);
  size = size < 10 ? 10 : size;
  obj.style.position = "absolute";
  obj.style.width = `${size}px`;
  obj.style.height = `${size}px`;
  obj.style.bottom = "-5px";
  obj.style.borderRadius = "50%";
  obj.style.left = `${posisi}%`;
  obj.style.backgroundColor = "#fff";
  //obj.style.zIndex = -1;
  obj.classList.add("anim");
  s(".box").appendChild(obj);
  setTimeout(() => {
    obj.remove();
  }, 2000);
},100)