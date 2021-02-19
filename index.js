const underline = document.querySelector(".underline");
const nav = document.querySelector(".nav");
const Main_Page = document.querySelector("#Main_Page");
const Blog = document.querySelector("#Blog");
const signIn = document.querySelector("#signIn");




// ============For_top_nav_bar=================

let arr = [Main_Page,Blog,signIn];
for(let i=0; i<arr.length; i++){
    arr[i].addEventListener('mouseenter', e => {
        underline.style.left = arr[i].offsetLeft + "px";
        underline.style.width =  arr[i].offsetWidth + "px";
    });
}
nav.addEventListener('mouseleave', e => {
    underline.style.left = 21 + "px";
    underline.style.width =  0 + "px";
});



// ============FOR_SIDE_NAV_BAR====================

const html = document.querySelector("#html");
const python = document.querySelector("#python");
const javascript = document.querySelector("#javascript");
const github = document.querySelector("#github");
const css = document.querySelector("#css");
const sideBar = document.querySelector("#sideBar");
const side_underline = document.querySelector(".side_underline");



  


// let arrr = [html,css,python,github,javascript];
// for(let i=0; i<arrr.length; i++){
//     arrr[i].addEventListener('mouseenter', e => {
//         // side_underline.style.top = arrr[i].offsetTop + "px";
//         side_underline.style.top = 14+"px";
//         side_underline.style.height = 60+"px";
//         console.log(arrr[i].offsetLeft);

//         side_underline.style.width = arrr[i].offsetWidth +260+"px";




//         // side_underline.style.width =  arrr[i].offsetWidth + "px";
//     });
// }






// let arrr = [html,css,python,github,javascript];
// let top_height = 14 + "px";

// for(let i=0; i<arrr.length; i++){
//     arrr[i].addEventListener('mouseenter', e => {
//         side_underline.style.width = html.offsetWidth + 260 + "px";
//         side_underline.style.height = 60 + "px";
//         side_underline.style.top = top_height;
//         top_height = (60 +"px"+top_height)  ;
//         console.log(top_height);
//     })
// }









html.addEventListener('mouseenter', e => {
    side_underline.style.width = html.offsetWidth + 260 + "px";
    side_underline.style.height = 60 + "px";
    side_underline.style.top = 14+"px";
}  );

css.addEventListener('mouseenter', e => {
    side_underline.style.width = css.offsetWidth + 260 + "px";
    side_underline.style.height = 60+"px";
    side_underline.style.top = 60+14+"px";
}  );
javascript.addEventListener('mouseenter', e => {
    side_underline.style.width = javascript.offsetWidth + 260 + "px";
    side_underline.style.height = 60+"px";
    side_underline.style.top = 60+60+14+"px";
}  );
python.addEventListener('mouseenter', e => {
    side_underline.style.width = python.offsetWidth + 260 + "px";
    side_underline.style.height = 60+"px";
    side_underline.style.top = 60+60+60+14+"px";
}  );
github.addEventListener('mouseenter', e => {
    side_underline.style.width = github.offsetWidth + 260 + "px";
    side_underline.style.height = 60+"px";
    side_underline.style.top = 60+60+60+60+14+"px";
}  );

sideBar.addEventListener('mouseleave', e => {
    side_underline.style.height = 0 + "px";
    side_underline.style.width =  0 + "px";
});

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
// c.width = 100+"%";

var Sanskrit = "०१२३४५६७८९ॐ॰ऽ॥।ऋॠऌॡएऐओऔअआइईउऊशषसहयरलवपफबभमनधदथतटठडधनणढडठटचछजझञङघगखक";
Sanskrit = Sanskrit.split("");
var font_size = 7;
var columns = c.width/font_size;
var drops = [];

for(var x = 0; x < columns; x++)
    drops[x] = 1; 
    
    function draw()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#02e901";
    ctx.font = font_size + "px arial";
    for(var i = 0; i < drops.length; i++)
    {
        var text = Sanskrit[Math.floor(Math.random()*Sanskrit.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
            drops[i]++;     
        }
    }
    
    setInterval(draw, 30);





    // ===========================sidebar======================