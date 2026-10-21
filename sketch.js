let bgImage;
let vid;
let image;

async function setup () {
  createCanvas(900, 900);
  bgImage = await loadImage('media/winter.jpg');
  
  vid = createVideo('media/rudolph.mp4'); 
    vid.hide(); 
    vid.loop(); 
    vid.volume(0); 
  image = await loadImage('media/santa.png');
  mySound = await loadSound('media/jingle-bells.mp3');


function mousePressed () {
  mySound.play();
  vid.play();
}