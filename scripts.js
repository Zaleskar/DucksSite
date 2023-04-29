//Description tab

let btn_h1 = document.getElementById("buttons_h1");
let desc_img = document.getElementById("wild_img");
let desc_info = document.getElementById("wild_info");
let wild_img_styles = window.getComputedStyle(wild_img);
let wild_property = wild_img_styles.getPropertyValue('opacity');
let img_fs = document.getElementById("image_zoom");

desc_img.style.height = "1147.5px"
desc_img.style.objectFit = "cover"



function call_info() {
    desc_img.style.filter = "opacity(100)";
    desc_info.style.filter = "opacity(100)";
}

function call_wild() {
    desc_img.src = "./images/Wild.jpg";
}

function call_dom() {
    desc_img.src = "./images/Domestic.jpg"
    
}

function call_hb() {
    desc_img.src = "./images/hb.jpg"
    
}

//Image zoom full screen

function View_image() {
    img_fs.style.filter = "opacity(100%)";
    img_fs.style.zIndex = "2";
    
    img_fs.scrollIntoView();
    desc_img.style.filter = "opacity(0)";
    desc_info.style.filter = "opacity(0)";

    
}

