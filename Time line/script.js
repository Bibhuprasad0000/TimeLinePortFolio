const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const page1=document.querySelector(".content1");
const page2=document.querySelector(".content2");
const page3=document.querySelector(".content3");
const page4=document.querySelector(".content4");
const page5=document.querySelector(".content5");


const img1=document.querySelector(".container");


let root = document.documentElement;
let bgColor = getComputedStyle(root).getPropertyValue('--contrast-color');







one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    page1.style.display='block';
    page2.style.display='none';
    page3.style.display='none';
    page4.style.display='none';
    page5.style.display='none';
    img1.style.height='fit-content';
    root.style.setProperty('--contrast-color', '#D2E0FB');

}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    page1.style.display='none';
    page2.style.display='block';
    page3.style.display='none';
    page4.style.display='none';
    page5.style.display='none';
    root.style.setProperty('--contrast-color', '#FFF8E8');
}
three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");
    page1.style.display='none';
    page2.style.display='none';
    page3.style.display='block';
    page4.style.display='none';
    page5.style.display='none';
    root.style.setProperty('--contrast-color', '#F3FEB8');
}
four.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");
    page1.style.display='none';
    page2.style.display='none';
    page3.style.display='none';
    page4.style.display='block';
    page5.style.display='none';
    root.style.setProperty('--contrast-color', '#36C2CE');
}
five.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
    page1.style.display='none';
    page2.style.display='none';
    page3.style.display='none';
    page4.style.display='none';
    page5.style.display='block';
    root.style.setProperty('--contrast-color', '#FFF455');
}
