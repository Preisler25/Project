//első feladat 2p
let listGyuri = ["Alma", "Körte", "Banán"];
let listPisti = ["Barack", "Alma", "Körte"];
//második feladat 4p + 2p ==> 6p
const twoa = (list, item)=>{list.push(item)}
const twob = (list)=>{list.pop()}
//harmadik feladat 6p
const threea = (list)=>{for (let i = 0; i < list.length; i++){console.log(list[i]);}}
//negyedik feladat 3p + 3p ==> 6p
const ato = {gyarto:"Skoda", model:"octavia", color:"White"};
const ato2 = {gyarto:"Tesla", model:"S", color:"Red"};
const foura =(car)=>{alert(car.color)}
const fourb =(car)=>{console.log(car.gyarto);}
//ötödik feladat 11p
const parkolo = {szabadhelyek:10, osszeshely:80,};
const fivea =(garage)=>garage.osszeshely-garage.szabadhelyek;
const fiveb =(garage)=>{alert("Az öszes helynek csak" + (garage.szabadhelyek/garage.osszeshely)*100 + "% szabad") }
//hatodik feladat 15p
const Fibonacci_list = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
const PI_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5,]
const six =(list, list1)=>{for(let i = 0; i < list.length; i++){for (let j = 0; j < list1.length; j++){if(list[i] == list1[j]){if(i == j){console.log(list[i] + " " + list1[j] + " És ez a pár a " + i + " inexen található");}}}}}
//hetedik feladat (DOM) imp ==> div

//nyolcadik (DOM) btn ==> clear
