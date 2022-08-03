let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/brown-bear-sow-with-salmon-ursus-arctos-850x638.jpg') {
      myImage.setAttribute('src','images/bear-3405945_960_720.jpg');
    } else {
      myImage.setAttribute('src','images/brown-bear-sow-with-salmon-ursus-arctos-850x638.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'ヒグマって怖いんだね、 ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'ヒグマって怖いんだね、' + storedName;
}

myButton.onclick = function() {
    setUserName();
}