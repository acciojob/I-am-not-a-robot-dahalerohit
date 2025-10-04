//your code here
let container = document.querySelector('main');

let imageClassName = ["img1", "img2", "img3", "img4", "img5"];

let randomIndex = parseInt(Math.random() * 5);

let ramdomClassName = imageClassName[randomIndex];

imageClassName.push(ramdomClassName);

let count = 0;

for (let i = 0; count < 6; i++) {
  let imgTag = document.createElement('img');

  let randomIndex = parseInt(Math.random() * 6);

  if (imageClassName[randomIndex] == -1) {
    continue;
  }

  imgTag.className = imageClassName[randomIndex];
  count++
  imgTag.id = "img" + count;

  imageClassName[randomIndex] = -1
  container.append(imgTag);

  imgTag.addEventListener("click", checkRobot);



}

let h3 = document.createElement('h3');
h3.innerText = "Please click on the identical tiles to verify that you are not a robot."
h3.id = "h"
container.append(h3);



let click = 0;

let previousImageSet = new Set()
function checkRobot(e) {

  let clickedImage = e.target;
  if (previousImageSet.has(clickedImage.id)) {

    return
  }

  previousImageSet.add(clickedImage.id)
  console.log(previousImageSet);

  clickedImage.classList.add("selected")

  click++;

  if (click == 1) {
    let resetButton = document.createElement('button');
    resetButton.innerText = "Reset";
    resetButton.id = "reset";
    container.append(resetButton);
    resetButton.addEventListener("click", reset)
  }

  if (click == 2) {

    let VerifyButton = document.createElement('button');
    VerifyButton.innerText = "Verify"
    VerifyButton.id = "verify"
    container.append(VerifyButton);
    VerifyButton.addEventListener("click", verify)
  }

  if (click > 2) {
    let VerifyButton = document.getElementById("verify");
    if (VerifyButton) {
      VerifyButton.remove();
    }
  }

}

function reset() {

  let selectedImages = document.querySelectorAll('.selected');
  for (let t of selectedImages) {
    t.classList.remove("selected");

  }
  click = 0;
  previousImageSet.clear();

  let VerifyButton = document.getElementById("verify");
  if (VerifyButton) {
    VerifyButton.remove();
  }
  let resetButton = document.getElementById("reset");
  resetButton.remove();

    let messageParagraph = document.getElementById("para");
    if (messageParagraph) {
        messageParagraph.remove();
    }
}

function verify() {
  let para = document.createElement('p');
  para.id = "para"
  let selectedImages = document.querySelectorAll('.selected');
  if (selectedImages[0].className === selectedImages[1].className) {
    para.innerText = "You are a human. Congratulations!"
  }
  else {
    para.innerText = "We can't verify you as a human. You selected the non-identical tiles."
  }

  container.append(para);
  let VerifyButton = document.getElementById("verify");
  VerifyButton.remove();


}




