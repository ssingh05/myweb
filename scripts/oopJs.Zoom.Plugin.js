/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var imageGallery = new Object();

// load images
window.onload = function(){
   imageGallery.Images = ['image2.jpg', 'image1.JPG', 'image3.png', 'image4.png']; 
   imageGallery.currentIndex = 0; 
   imageGallery._loopInterval = setInterval(imageGallery.Next, 2500);
   console.log(imageGallery._loopInterval ,"this" ,imageGallery.Images);
 // imageGallery.Display(); 
   
 }; 

// load next image
imageGallery.Next = function(){
    
    if(imageGallery.currentIndex < (imageGallery.Images -1)){
        imageGallery.currentIndex++; 
    }else{
        imageGallery.currentIndex = 0; 
    }
    imageGallery.Display(); 
  // alert()); 
    console.log(imageGallery.loopInterval , imageGallery.Display(), "Display Image");
};


// load previous image
imageGallery.Previous = function(){
    if(imageGallery.currentIndex > 0){
        imageGallery.currentIndex--; 
    }else{
        imageGallery.CurrentIndex = (imageGallery.Images.length-1); 
    }
     imageGallery.Display(); 
};

// display imgae

imageGallery.Display = function(){
    var imageFlow = document.getElementById("currentpreviewimage");
    var currentImage = imageGallery.Images[imageGallery.currentIndex]; 
    imageFlow.src = "../images/zoom/"+currentImage; 
    
};