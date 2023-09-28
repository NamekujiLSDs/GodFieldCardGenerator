const cardImg = document.getElementById("imgInput");
const cardTitle = document.getElementsByClassName("cardTitleInput")[0];

function generateHTML() {}

function generateCanvas() {
  if (document.querySelector("canvas")) {
    document.querySelector("canvas").remove();
  }
  html2canvas(document.querySelector("#capture"), {
    width: 620,
    height: 200,
    backgroundColor: null,
    useCORS: true,
    x: -10,
    y: -10,
  }).then((canvas) => {
    document.body.appendChild(canvas);
  });
}

function imageDownload() {
  let canvas = document.querySelector("canvas");
  let cardName = document.getElementsByClassName("cardTitle")[0].textContent;
  let link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `${cardName}.png`;
  link.click();
}
