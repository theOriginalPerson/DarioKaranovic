var a = 0;
var text = 'Prospective Engineer & Inventor';
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
const listInfo = ["-> Love designing & building circuits", "-> Passionate about inventing", "-> Experience with C#, Python, Arduino-language/C, HTML, CSS, and Javascript", "-> Proficient in CAD software: particularly Fusion360, Onshape and AutoCAD", "-> Bachelor's in Psychology"];
var speed2 = 800;

function typeWriter3() {
  if (i2<listInfo.length) {
    document.getElementById("aboutP").innerHTML += listInfo[i2] + "<br><br>";
    i2++;
    setTimeout(typeWriter3, speed2);
  }
}
