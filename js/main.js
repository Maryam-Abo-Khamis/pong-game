//Variable by DOM
let ball=document.querySelector('.ball')
let playStation=document.querySelector('.container')
let line_player=document.querySelector('.line.player')

//Golobal Variable
let top_line=36;
let first_move=false;
let top_ball=48;
let concat=false;

function toRight(){
  let c=0;
  setTimeout(()=>{
    let count=setInterval(()=>{
        let left=3.5+c++;
        ball.style.left=`${left}%`
        ball.style.top=`${top_ball}%`
        if(left==92.5 & pass(top_ball)){
          clearInterval(count)
          pass(top_ball)
          toLeft(left)
        }else if(left==95.5){
          clearInterval(count)
          ball.style.left=`${left+.5}%`
        }
      },10)
  },100)

}
function toLeft(left){
  concat=true;
  setTimeout(()=>{
    concat=false;
    let c=0;
    let count=setInterval(()=>{
      let new_left=left-c++;
      ball.style.left=`${new_left}%`
      ball.style.top=`${top_ball}%`
      if(new_left==3.5){
        clearInterval(count)
        console.log('yes')
        toRight()

      }
    },10)
  },100)
}

function pass(){
  return (top_line>=(top_ball/3) && top_line<=(top_ball+6));
}
document.body.addEventListener("keydown",(e)=>{
  console.log(e.key)
  if(!first_move&(e.key=='ArrowUp'||e.key=='ArrowDown')){
    toRight()
    first_move=true;
  }
  if(e.key=='ArrowUp'&top_line>0){
    if(concat){
      top_ball-=1;
      ball.style.cssText=`top:${top_ball}%`
    }
    top_line-=1;
    line_player.style.cssText=`top:${top_line}%`
  }
  else if(e.key=='ArrowDown' & top_line<67){
    if(concat){
      top_ball+=1 
      ball.style.cssText=`top:${top_ball}%`
    }
    top_line+=1 
    line_player.style.cssText=`top:${top_line}%`
  }
})