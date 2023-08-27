function slåmyntfunct() {
  var slåbuttonelement = document.getElementById("slåmyntknapp");
  var restartbuttonelement = document.getElementById("restartbutton");
  const kronellermynt = Math.floor(Math.random() * 2);
  if (kronellermynt == 0) {
    myntbakgrunn(1);
  }
  if (kronellermynt == 1) {
    myntbakgrunn(2);
  }
  slåbuttonelement.style.display = "none";
  restartbuttonelement.style.display = "block";
}

function restart() {
  var slåbuttonelement = document.getElementById("slåmyntknapp");
  var restartbuttonelement = document.getElementById("restartbutton");
  slåbuttonelement.style.display = "block";
  restartbuttonelement.style.display = "none";
  restartbuttonelement.style.display = "none";
  myntbakgrunn(0);
}

function myntbakgrunn(valg) {
  if (valg == 0) {
    //ingen
    document.getElementById("mynt").style.backgroundImage = "url(//)";
    console.log('Restart')
  }
  if (valg == 1) {
    //kron
    document.getElementById("mynt").style.backgroundImage =
      "url(https://i.ibb.co/T0B5sm8/kron.png)";
      console.log('Krone!')
  }
  if (valg == 2) {
    //mynt
    document.getElementById("mynt").style.backgroundImage =
      "url(https://i.ibb.co/BL7MZTQ/mynt.png)";
      console.log('Mynt!')
  }
}
