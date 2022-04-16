"use strict";
const showData = (data) => {
  const table = document.getElementById("table");
  const arrData = data.dataseries;
  const tr0 = document.createElement("tr");
  const tr1 = document.createElement("tr");
  const tr2 = document.createElement("tr");

  table.append(tr0);
  table.append(tr1);
  table.append(tr2);

  console.log(arrData);
  const createWeather = (arr) => {
    arr.forEach((element) => {
      const direction = element.wind10m.direction;
      const speed = element.wind10m.speed;
      const timepoint = element.timepoint;
      const td0 = document.createElement("td");
      tr0.append(td0);
      td0.append(timepoint);

      const td1 = document.createElement("td");
      tr1.append(td1);
      td1.append(direction);
      const td2 = document.createElement("td");
      tr2.append(td2);
      td2.append(speed);
    });
  };
  createWeather(arrData);
};

const myData = async function show() {
  let url =
    "https://www.7timer.info/bin/astro.php?lon=113.2&lat=25.1&ac=0&unit=metric&output=json";

  let aaa = await fetch(url);
  let json = await aaa.json();
  showData(json);
};
myData();

// let createWeather = (arrData) => {
//   arrData.forEach((element) => {
//       console.log(element)

//   });
// };

// createWeather()

// .then(()=>console.log(" пиздец"))

//                          _________________________________________________ решение с помощью промис

// const myData2 = ()=> {                       // тоже смое что        const MyData = async function show() {

//     return new Promise(     (response)=>{

//         let url = 'https://www.7timer.info/bin/astro.php?lon=113.2&lat=25.1&ac=0&unit=metric&output=json';

//         fetch(url).then((res)=>{
//             return response(res)
//         })

//     })
// }

// myData2().then((res)=>{return res.json()}).then((res)=>{console.log(res)})

// const matherFacker = async function getAllDataFromServer() {
//   let promise = await fetch(
//     "https://www.7timer.info/bin/astro.php?lon=113.2&lat=25.1&ac=0&unit=metric&output=json"
//   );
//   let parsPromice = await promise.json();
//     show(parsPromice)
//   console.log(parsPromice);
// };

