const image1 = document.createElement("img");
image1.src = "images/1.jpg";
const image2 = document.createElement("img");
image2.src = "images/2.jpg";
const image3 = document.createElement("img");
image3.src = "images/3.jpg";
const image4 = document.createElement("img");
image4.src = "images/4.jpg";
const image5 = document.createElement("img");
image5.src = "images/52698949_1014030908795010_1409213932714852352_n.JPG.jpg";
function myFunction() {
    var pics = [
       image1.src, image2.src,image3.src,image4.src,image5.src
    ]
    var image = document.getElementsByClassName("image")[0];
    var arr_index=(Math.floor(Math.random()*5));
    image.src = pics[arr_index];
}