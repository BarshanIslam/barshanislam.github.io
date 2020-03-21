function myFunction() {
    var pics = [
        "file:///C:/Users/Labz/Downloads/Compressed/project%201-20200321T062704Z-001/project%201/images/52698949_1014030908795010_1409213932714852352_n.JPG",
        "file:///C:/Users/Labz/Downloads/Compressed/project%201-20200321T062704Z-001/project%201/images/1.jpg",
        "file:///C:/Users/Labz/Downloads/Compressed/project%201-20200321T062704Z-001/project%201/images/2.jpg",
        "file:///C:/Users/Labz/Downloads/Compressed/project%201-20200321T062704Z-001/project%201/images/3.jpg",
        "file:///C:/Users/Labz/Downloads/Compressed/project%201-20200321T062704Z-001/project%201/images/4.jpg"
    ]
    var image = document.getElementsByClassName("image")[0];
    var arr_index=(Math.floor(Math.random()*5));
    image.src = pics[arr_index];
}