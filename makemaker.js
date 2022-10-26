var canvas  = document.getElementById("ex1");
var context = canvas.getContext("2d");

const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 600;
const SIZE_PIXEL = 20;

canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;

context.strokeStyle = "#0000ff";
context.fillRect(1,1, CANVAS_HEIGHT, CANVAS_WIDTH);

function draw_the_cell(x,y,SIZE_PIXEL,SIZE_PIXEL){
  context.clearRect(x,y,SIZE_PIXEL,SIZE_PIXEL);
}
function check_neighbours_cells(x,y){
  
        var pixelData = context.getImageData(x,y,1,1).data; 
  if(pixelData[3] == 255 ){
    console.log(x,y,"Black",pixelData[3])
  }else{
        console.log(x,y,"White",pixelData[3])

  }
  return pixelData;
}
fucntion random_select(){
   return Math.random() * (2 - 1) + 1;
}
for (let x = 10; x<=CANVAS_WIDTH; x+=SIZE_PIXEL){
  for (let y = 10; y<=CANVAS_WIDTH; y+=SIZE_PIXEL){
  if(y >= CANVAS_WIDTH-SIZE_PIXEL || x >= CANVAS_WIDTH-SIZE_PIXEL){
    break;
  }
   let top= check_neighbours_cells(x+SIZE_PIXEL,y);
   let bottom= check_neighbours_cells(x-SIZE_PIXEL,y);
   let right= check_neighbours_cells(x,y+SIZE_PIXEL);
   let left=check_neighbours_cells(x,y-SIZE_PIXEL);
    draw_the_cell(x,y,SIZE_PIXEL,SIZE_PIXEL);

}
}

