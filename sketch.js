let width=500,height=700,cellSize=25,i,j,a=[],b,stack=[],colors=[]

function setup() {
  createCanvas(width, height)
  frameRate(100)
  for(i=0;i<height/cellSize;i++){
    b=[]
    for(j=0;j<width/cellSize;j++){
      b.push(new Cell(i,j))
    }
    a.push(b)
  }
  // console.log(a)
  // console.log(a[4][10])
  a[0][0].visited=true
  i=0
  j=0
      background(100)
  colors[0]="#"+Math.floor(Math.random()*16777215).toString(16);
  console.log(colors[0])
  colors[1]="("+Math.floor(Math.random*255)+","+Math.floor(Math.random*255)+","+Math.floor(Math.random*255)+")"
  colors[2]="("+Math.floor(Math.random*255)+","+Math.floor(Math.random*255)+","+Math.floor(Math.random*255)+")"
       // delayTime(1)
     }

function draw() {
    let neighbors,next
   a[i][j].visited=true
   neighbors=[]
   flag=true
   stack.push(a[i][j])
   if(j-1>=0&&!a[i][j-1].visited) {
     neighbors.push(a[i][j-1])
   }
   if(j+1<width/cellSize&&!a[i][j+1].visited ){
     neighbors.push(a[i][j+1])
   }
   if(i-1>=0&&!a[i-1][j].visited  ){
     neighbors.push(a[i-1][j])
   }
  
   if(i+1<height/cellSize&&a[i+1]&&!a[i+1][j].visited){
     neighbors.push(a[i+1][j])
   }
  
    if(neighbors.length===0)
    {
      stack.pop()
      next=stack.pop()
    }
    else{
      // if(stack.length!==0)
      //   clear()
      next=neighbors[Math.floor(Math.random()*neighbors.length)]
    }
    // console.log(stack)
      
   // console.log(next)
  try{
   next.visited=true

    if(next.row-i===1){
      a[i][j].walls[2]=false
      next.walls[0]=false
    }
    if(next.row-i===-1){
      a[i][j].walls[0]=false
      next.walls[2]=false
    }
    if(next.col-j===1){
      a[i][j].walls[3]=false
      next.walls[1]=false
    }
    if(next.col-j===-1){
      a[i][j].walls[1]=false
      next.walls[3]=false
    }
  
                

       for(i=0;i<height/cellSize;i++){
          for(j=0;j<width/cellSize;j++){
            
           
            strokeWeight(2)
             stroke("#000336")
            if(a[i][j].walls[0]) //top
              line((j)*cellSize,i*cellSize,(j+1)*cellSize,(i)*cellSize)
            if(a[i][j].walls[1]) //left
              line((j)*cellSize,i*cellSize,j*cellSize,(i+1)*cellSize)
            if(a[i][j].walls[2]) //bottom
             {
               // console.log(a[i][j].walls[2])
               line(j*cellSize,(i+1)*cellSize,(j+1)*cellSize,(i+1)*cellSize)}
            if(a[i][j].walls[3]) //right
              line((j+1)*cellSize,(i+1)*cellSize,(j+1)*cellSize,(i)*cellSize)
             if(a[i][j].visited){
              noStroke()
              rect((a[i][j].col)*cellSize,(a[i][j].row)*cellSize,cellSize,cellSize)
               // fill("#007ba7")
               fill(colors[0])
            }
          }
      }
      i=next.row
      j=next.col
      a[i][j].walls=next.walls
    }
  catch(e){}
}
class Cell{
  constructor(row,col){
    this.row=row
    this.col=col
    this.visited=false
    this.walls=[true,true,true,true]
  }
}