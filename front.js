let cursor=document.getElementById("cursor");
function isTouchDevice(){
  try{
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) =>{
  try{
    var x=!isTouchDevice() ? e.pageX:e.touches
    [0].pageX;
    var y = ! isTouchDevice() ? e.pageY : e.touches
    [0].pageY;
  }

  catch(e){} 
  cursor.style.left=x- 30 +"px"; 
  cursor.style.top=y- 30 +"px"; 
};
document.addEventListener("mousemove",(e) =>{
  move(e);
});
document.addEventListener("touchmove",(e) =>{
  move(e);
}); 

