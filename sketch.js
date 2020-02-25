let tracker;
let strange;
let vid;
let capture;
let stock;
let img;
let black;
let distance;
let vid1
let vid2
let aud
var mic
let fft
let sight = true

let play = false

function preload() {
  stock = loadImage('star.jpg');
  vid1 = createVideo('gif2.mp4')
  vid2 = createVideo('gif4.mp4')
  vid = createVideo('gif3.mp4')
  black = loadImage('black.jpg')
}

function setup() {
  


  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();

  fft.setInput(mic)


    vid.hide()
    vid1.hide()
    vid2.hide()

    vid1.loop()
    vid2.loop()
    vid.loop()

    createCanvas(1600, 1000, WEBGL)

    // aud = createCapture(AUDIO)
    // aud.hide()

    // graphics = createGraphics(100, 100)

    // start capturing video

    capture = createCapture(VIDEO);
    capture.size(1600, 1000);
    // capture.hide();

    // capture1 = createCapture(VIDEO);
    // capture1.size(1600, 1000);
    // capture1.hide();

    frameRate(10)

    // create the tracker
    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)
}


function draw() {   

  var vol = mic.getLevel();





 let positions = tracker.getCurrentPosition()

    if (positions.length > 0) {


        stroke(255)
        fill(255)

        // draw the data
        let i = 0;
        while (i < positions.length - 1) {
            // ellipse(positions[i][0], positions[i][1], 4, 4)
            // text(i, positions[i][0], positions[i][1])
            // line(positions[i][0], positions[i][1], positions[i+1][0], positions[i+1][1])
            // image(vid, positions[i][0]-strange.width/2, positions[i][1]-strange.height/2, 50, 50)
        
            i++
          }


        // overlay eyes
        let leftEyeX = positions[32][0]
        let leftEyeY = positions[32][1]

        let rightEyeX = positions[27][0]
        let rightEyeY = positions[27][1]
        


        // push()
        // fill(255, 0, 0)
        // ellipse(leftEyeX, leftEyeY, 20, 20)
        // ellipse(rightEyeX, rightEyeY, 20, 20)
        // pop() 



        // measure distances between features
        let noseX = positions[62][0]
        let noseY = positions[62][1]

        let leftNostrilX = positions[43][0]
        let leftNostrilY = positions[43][1]

        let rightNostrilX = positions[42][0]
        let rightNostrilY = positions[42][1]

        
        let distance = dist(leftEyeX, leftEyeY, rightEyeX, rightEyeY) 
        // let distanceRight = dist(noseX, noseY, rightNostrilX, rightNostrilY)



      // print(stretch)
   // distance = distboi;
    let stretch = (2*distance)+800-118


    if(stretch<960){

    let rsphere = pow(1.048,distance)

    texture(black)
    sphere(rsphere,32,24)

    translate(0,0,-distance)

    strokeWeight(0)
 
    translate(0,0,distance-100)

    let photonsphere = rsphere*3/2


    texture(stock)
    // shearX(millis()/10000)
    // shearY(millis()/1000)
    // rotateZ(millis()/(vol*1000))

    torus(photonsphere, distance*3,24,16)


      translate(0, 0,450)
      translate(0,0,-350)

      noStroke()
      texture(stock)

      ellipsoid(800, 800, stretch, 24, 24)



    }else{

      print(stretch)
}}

}





function mouseClicked() {
  if(play == false){
  vid1.play();
  vid2.play();
              vid.play();
play = true;

  }

}






















function notused(){


      // get data from tracker
    let positions = tracker.getCurrentPosition()
    if (positions.length > 0) {

        stroke(255)
        fill(255)

        // draw the data
        let i = 0;
        while (i < positions.length - 1) {
            // ellipse(positions[i][0], positions[i][1], 4, 4)
            // text(i, positions[i][0], positions[i][1])
            // line(positions[i][0], positions[i][1], positions[i+1][0], positions[i+1][1])
            // image(vid, positions[i][0]-strange.width/2, positions[i][1]-strange.height/2, 50, 50)
        
            i++
          }


        // overlay eyes
        let leftEyeX = positions[32][0]
        let leftEyeY = positions[32][1]

        let rightEyeX = positions[27][0]
        let rightEyeY = positions[27][1]
        


        // push()
        // fill(255, 0, 0)
        // ellipse(leftEyeX, leftEyeY, 20, 20)
        // ellipse(rightEyeX, rightEyeY, 20, 20)
        // pop()   



        // measure distances between features
        let noseX = positions[62][0]
        let noseY = positions[62][1]

        let leftNostrilX = positions[43][0]
        let leftNostrilY = positions[43][1]

        let rightNostrilX = positions[42][0]
        let rightNostrilY = positions[42][1]

        
        let distboi = dist(leftEyeX, leftEyeY, rightEyeX, rightEyeY) 
        // let distanceRight = dist(noseX, noseY, rightNostrilX, rightNostrilY)

}
}