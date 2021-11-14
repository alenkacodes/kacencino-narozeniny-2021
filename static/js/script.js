var contentDiv = document.getElementById("content");
var stage1Div = document.getElementById("stage-1");
var stage2Div = document.getElementById("stage-2");
var stage3Div = document.getElementById("stage-3");
var stage4Div = document.getElementById("stage-4");
var stage5Div = document.getElementById("stage-5");
var stage6Div = document.getElementById("stage-6");
var stage7Div = document.getElementById("stage-7");
var stage8Div = document.getElementById("stage-8");

// // remove afterwards  = FOR DEVELOPMENT ONLY =
// stage1Div.hidden = true;
// stage4Div.hidden = false;
// contentDiv.className = "background-stage4";

//  ========= modal =========
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
var span = document.getElementsByClassName("close")[0];

function openModal(imgPath) {
  modal.style.display = "block";
  modalImg.src = imgPath;
}

span.onclick = function () {
  modal.style.display = "none";
};
// ========== End of modal =================

//  ========= STAGE 1 =========

var pusaButton = document.getElementById("pusa");

pusaButton.onclick = function () {
  openModal("../img/pusa.jpg");
};

var giftImg = document.getElementById("gift");
giftImg.onclick = function () {
  stage1Div.hidden = true;
  stage2Div.hidden = false;
  contentDiv.className = "background-stage2";
};

// ========== End of STAGE 1 =================

//  ========= STAGE 2 =========
var startButton = document.getElementById("startButton");
startButton.onclick = function () {
  stage2Div.hidden = true;
  stage3Div.hidden = false;
  contentDiv.className = "background-stage3";
};
// ========== End of STAGE 2 =================

//  ========= STAGE 3 =========
function check_q1(input) {
  var hidden_block = document.getElementById("instruction1");
  if (input.id == "correct1") {
    hidden_block.hidden = false;
  } else {
    hidden_block.hidden = true;
    openModal("../img/evil.jpg");
  }
}

document.getElementById("button-kitchen").onclick = function () {
  document.getElementById("instruction2").hidden = false;
};

document.getElementById("button-drink").onclick = function () {
  stage3Div.hidden = true;
  stage4Div.hidden = false;
  contentDiv.className = "background-stage4";
};
// ========== End of STAGE 3 =================

//  ========= STAGE 4 =========
document.getElementById("button-4").onclick = function () {
  var answer = document.getElementById("proteza");
  var hidden_block = document.getElementById("instruction3");
  if (answer.value.toLowerCase() == "protéza") {
    hidden_block.hidden = false;
  } else {
    hidden_block.hidden = true;
    openModal("../img/evil.jpg");
  }
};

document.getElementById("button-bathroom").onclick = function () {
  document.getElementById("instruction4").hidden = false;
};

document.getElementById("button-pauza").onclick = function () {
  stage4Div.hidden = true;
  stage5Div.hidden = false;
  contentDiv.className = "background-stage5";
};
// ========== End of STAGE 4 =================
