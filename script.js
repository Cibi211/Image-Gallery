var thumbnails=document.querySelectorAll(".pic");
var mainimage=document.querySelector("#main-image");
for(var i=0;i<thumbnails.length;i++){

    thumbnails[i].addEventListener("click",function(){
        mainimage.src=this.src

    });
}