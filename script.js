
var audio = new Audio("song/1.mp3");
var giffy = document.getElementById('gif');
var masterPlay = document.getElementById('playbutton');
var barr = document.getElementById('bar');
var theimage= document.getElementById('image');
var heart1 = document.getElementById("heart1");
var heart2 = document.getElementById("heart2");
var heart3 = document.getElementById("heart3");
var heart4 = document.getElementById("heart4");
var heart5 = document.getElementById("heart5");


masterPlay.addEventListener('click',()=>{
if(audio.paused)
{ audio.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  giffy.style.opacity=1;
}
else{
  audio.pause();
  masterPlay.classList.remove('fa-circle-pause');
  masterPlay.classList.add('fa-circle-play');
  giffy.style.opacity=0;
}

})
audio.ontimeupdate= function(){
var progress = (audio.currentTime/audio.duration)*100;
barr.max = "100";
barr.value = progress;
}
barr.onchange = function(){
audio.currentTime = (barr.value*audio.duration/100);

}
var firstsong = document.getElementById("1");
var secondsong = document.getElementById("2");
var thirdsong = document.getElementById("3");
var fourthsong = document.getElementById("4");
var fifthsong = document.getElementById("5");
var nameofsong = document.getElementById("name1")
var nameofartist = document.getElementById("artist1");

firstsong.onclick = function(){
theimage.src = "cover/1.jpg";
audio.src = "song/1.mp3";
barr.value = 0;
nameofsong.innerText = "Agar Tum Saath Ho";
nameofartist.innerText = "Alka Yagnik,Arjit Singh";
if(audio.paused)
{ audio.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  giffy.style.opacity=1;
  
}
else{
  audio.pause();
  masterPlay.classList.remove('fa-circle-pause');
  masterPlay.classList.add('fa-circle-play');
  giffy.style.opacity=0;
}

}
secondsong.onclick = function(){
  theimage.src = "cover/2.jpg";
  audio.src = "song/2.mp3";
  barr.value=0;
  nameofsong.innerText = "Tum Ho";
  nameofartist.innerText = "Mohit Chauhan,Suzanne D'Mello";
  if(audio.paused)
  { audio.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    giffy.style.opacity=1;
  }
  else{
    audio.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    giffy.style.opacity=0;
  } 
  }
  thirdsong.onclick = function(){
    theimage.src = "cover/3.jpg";
    audio.src = "song/3.mp3";
    nameofsong.innerText = " Tum Ho Toh";
    nameofartist.innerText = "Farhan Akhtar";
    if(audio.paused)
    { audio.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      giffy.style.opacity=1;
    }
    else{
      audio.pause();
      masterPlay.classList.remove('fa-circle-pause');
      masterPlay.classList.add('fa-circle-play');
      giffy.style.opacity=0;
    }
    
    }
    fourthsong.onclick = function(){
      theimage.src = "cover/4.jpg";
      audio.src = "song/4.mp3";
      nameofsong.innerText = "Aaoge Tum Kabhi";
      nameofartist.innerText = "The Local Train";
      if(audio.paused)
      { audio.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        giffy.style.opacity=1;
      }
      else{
        audio.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        giffy.style.opacity=0;
      }
    }
      
      
      fifthsong.onclick = function(){
        theimage.src = "cover/5.jpg";
        audio.src = "song/5.mp3";
        nameofsong.innerText = "Balam Pichkari";
        nameofartist.innerText = "Vishal Dadlani,Shalmali Kholgade";
        if(audio.paused)
        { audio.play();
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-circle-pause');
          giffy.style.opacity=1;
          }
          else{
            audio.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            giffy.style.opacity=0;
          }
        
        }
heart1.addEventListener("click",()=>{
if(heart1.style.color!="red")
  {heart1.style.color = "red";}
else
   {heart1.style.color="white";}

})
heart2.addEventListener("click",()=>{
  if(heart2.style.color!="red")
    {heart2.style.color = "red";}
  else
     {heart2.style.color="white";}
  
  })
  heart3.addEventListener("click",()=>{
    if(heart3.style.color!="red")
      {heart3.style.color = "red";}
    else
       {heart3.style.color="white";}
    
    })
    heart4.addEventListener("click",()=>{
      if(heart4.style.color!="red")
        {heart4.style.color = "red";}
      else
         {heart4.style.color="white";}
      
      })
      heart5.addEventListener("click",()=>{
        if(heart5.style.color!="red")
          {heart5.style.color = "red";}
        else
           {heart5.style.color="white";}
        
        })
















