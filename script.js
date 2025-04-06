// 1- get the modal 
// 2- get the content of modal
// 3- get the close btn
// 4- when click on close hide the modal
// 5- when click on skip hide the modal


/* 1- get the modal */
var modal = document.getElementById('the_modal');

var img = document.getElementById('the_img');

/* 2- get the content of modal */
var modalImg = document.getElementById('img'),
    modalCaption = document.getElementById('caption');

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.innerHTML = this.alt;
}    

/* 3- get the close btn */
var close = document.getElementsByClassName('close')[0];

/* 4- when click on close hide the modal */
close.onclick = function() {
    modal.style.display = "none"
}

/* 5- when click on Esc hide the modal */
document.onkeydown = function(ev){ // اي زرار ادوس عليه في كبيورد لو كان زرار دا الكود بتاعه 27 نفذ جملة ايف 
    if (ev.keyCode == "27") {
        modal.style.display ="none";
    }
}
