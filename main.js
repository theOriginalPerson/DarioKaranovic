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
var txt2 = "Hi, my name is Dario! I dabble with HTML and CSS, along with JavaScript and Python. I also love to design products and build them! Check out the projects section to see what I have built so far. As of: ";
var speed2 = 50;

function typeWriter3() {
  if (i2 < txt2.length) {
    document.getElementById("aboutP").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter3, speed2);
  }
}

var i3 = 0;
var txt3 = "If you have any questions, concerns, or feedback of any sort, please give me a shout at this link below (which should open your mail app). If the link does not open, fear not, just email me at: izumlaboratories@gmail.com";
var speed3 = 50;

function typeWriter4() {
  if (i3 < txt3.length) {
    document.getElementById("contactP").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter4, speed3);
  }
}

var d = new Date();
var n = d.getHours();
console.log(n);

function wallpaperSwitch() {
  if (n >= 19 || n < 7) {
    document.body.className = "nightTime";
    if (window.innerWidth < 400) {
      document.body.className = "nightColor";
    }
  }
  else if (n < 19 || n >= 7 && window.innerWidth >= 400) {
    document.body.className = "dayTime";
    if (window.innerWidth < 400) {
      document.body.className = "dayColor";
    }
  }
  console.log("test");
}