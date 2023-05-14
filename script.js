function playvideo() {
    v = document.getElementById("videoz");
    v.play()
    setTimeout(playvideo, 3000);
}

function myFunction(evt) {
    evt.preventDefault();

    const email = document.getElementById("e-mail").value;

if (email.includes('@') && email.includes('.com')) {
      alert("Rögzítettük adait! Köszönjük. Hamarosan valaszolunk.");
    } else {
      alert("Please enter a valid email.")
    }
}
const button = document.getElementById("s");
button.addEventListener("click", myFunction);