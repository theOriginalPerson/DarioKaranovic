var a = 0;
var text = 'Web Developer & Inventor';
var spd = 50;

function typeWriter() {
  if (a < text.length) {
    document.getElementById("heading").innerHTML += text.charAt(a);
    a++;
    setTimeout(typeWriter, spd);
  }
}

var i = 0;
var txt = 'Dario Karanovic';
var speed = 50;

function typeWriter2() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
  }
}

var i2 = 0;
var txt2 = "Hi, my name is Dario! I dabble with HTML and CSS, along with JavaScript and Python. Check out my projects page to see what other things I have built!";
var speed2 = 50;

function typeWriter3() {
  if (i2 < txt2.length) {
    document.getElementById("aboutP").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter3, speed2);
  }
}
