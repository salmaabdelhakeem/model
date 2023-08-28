var allimages=Array.from(document.querySelectorAll("img"));
var currentIndex;


function closeLayer(){

    document.getElementById("overlayLayer").classList.replace("d-flex" ,"d-none")

}


for(var i=0 ; i<allimages.length ; i++){
    allimages[i].addEventListener("click" , displayphoto)
}


function displayphoto(einfo){
    var imageSRC=einfo.target.src;
    document.getElementById("overlayLayer").classList.replace("d-none" ,"d-flex");

    document.getElementById("childd").style.backgroundImage=`url(${imageSRC})`

    currentIndex= allimages.indexOf(einfo.target);
    console.log(currentIndex)
}

function nextimg(){
 currentIndex++

 if (currentIndex== allimages.length)
 {
    currentIndex=0
 }

 var nextImageSrc= allimages[currentIndex].src;
 document.getElementById("childd").style.backgroundImage=`url(${nextImageSrc})`

}

function prevImg(){

    currentIndex--;
    if(currentIndex<0){
        currentIndex=allimages.length-1
    }
  
    var preimgsrc= allimages[currentIndex].src;
    document.getElementById("childd").style.backgroundImage=`url(${preimgsrc})`
}