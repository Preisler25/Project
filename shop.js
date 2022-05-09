// let list = [];
let mainlist = [];
let alma = [];
let barack = [];
let korte = [];
let szilva = [];
let banan = [];
let repa = [];
let eper = [];
let mango = [];
let ubi = [];
let karfiol = [];
let retek = [];
let dinnye = [];

//money

let money = 10000;


//price

const almaAr = 50;
const barackAr = 93;
const korteAr = 73;
const szilvaAr = 38;
const bananAr = 48;
const repaAr = 76;
const eperAr = 38;
const mangoAr = 18;
const ubiAr = 90;
const karfiolAr = 48;
const retekAR = 13;
const dinnyeAr = 51;


const shop = document.getElementById('shop');
const kosar = document.getElementById('kosar');
const print = document.getElementById('print');

const changeShop =()=>{
    shop.style.display = "grid";
    kosar.style.display = "none";
}
const changeKosar =()=>{
    kosar.style.display = "flex";
    shop.style.display = "none";
    display();
}
const add =(value, list)=>{
    list.push(value);
}

const disp =(alma, barack, korte, szilva, banan, repa, eper, mango, ubi, karfiol, retek, dinnye)=>{
    document.getElementById('almaprint').innerHTML = `Alma: ${alma.length}-db van a kosaradban<button onclick="remove(alma)">Del</button>`
    document.getElementById('barackprint').innerHTML = `Barack: ${barack.length}-db van a kosaradban<button onclick="remove(barack)">Del</button>`
    document.getElementById('korteprint').innerHTML = `Körte: ${korte.length}-db van a kosaradban<button onclick="remove(korte)">Del</button>`
    document.getElementById('szilvaprint').innerHTML = `Szilva: ${szilva.length}-db van a kosaradban<button onclick="remove(szilva)">Del</button>`
    document.getElementById('bananprint').innerHTML = `Banán: ${banan.length}-db van a kosaradban<button onclick="remove(banan)">Del</button>`
    document.getElementById('repaprint').innerHTML = `Répa: ${repa.length}-db van a kosaradban<button onclick="remove(repa)">Del</button>`
    document.getElementById('eperprint').innerHTML = `Eper: ${eper.length}-db van a kosaradban<button onclick="remove(eper)">Del</button>`
    document.getElementById('mangoprint').innerHTML = `Mango: ${mango.length}-db van a kosaradban<button onclick="remove(mango)">Del</button>`
    document.getElementById('uborkaprint').innerHTML = `Uborka: ${ubi.length}-db van a kosaradban<button onclick="remove(ubi)">Del</button>`
    document.getElementById('karfiolprint').innerHTML = `Karfiol: ${karfiol.length}-db van a kosaradban<button onclick="remove(karfiol)">Del</button>`
    document.getElementById('retekprint').innerHTML = `Retek: ${retek.length}-db van a kosaradban<button onclick="remove(retek)">Del</button>`
    document.getElementById('dinnyeprint').innerHTML = `Dinnye: ${dinnye.length}-db van a kosaradban<button onclick="remove(dinnye)">Del</button>`

}

const remove =(list)=>{
    list.pop();
    display()
}

const display =()=>{
    disp(alma, barack, korte, szilva, banan, repa, eper, mango, ubi, karfiol, retek, dinnye)
}

const buy =()=>{
    let chout = alma.length*almaAr+ barack.length*barackAr+korte.length*korteAr+szilva.length*szilvaAr+banan.length*bananAr+repa.length*repaAr+eper.length*eperAr+mango.length*mangoAr+ubi.length*ubiAr+karfiol.length*karfiolAr+retek.length*retekAR+dinnye.length*dinnyeAr;
    alert(chout)
}