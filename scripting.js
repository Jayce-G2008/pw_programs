const programs = document.getElementById("programs");

programs.style.display = "flex";
programs.style.flexDirection = "row";
programs.style.justifyContent = "space-around";

const ypieImg = document.getElementById("ypieimg");

ypieImg.style.borderColor = "black";
ypieImg.style.border = "5px";
ypieImg.style.border = "solid";
ypieImg.style.width = "300px";

const ypieButton = document.getElementById("ypiebutton");

ypieButton.addEventListener("click", () => {
    window.open('https://ypie.org', '_blank');
})

const ypieArea = document.getElementById("ypie_area");
const ypieText = document.getElementById("ypietext");

ypieArea.style.width = "300px";
ypieArea.style.display = "flex";
ypieArea.style.flexDirection = "column";
ypieText.style.textAlign = "center";

const allstarcode = document.getElementById("allstarcode");
const allstarcodeImg = document.getElementById("allstarcodeimg");

allstarcodeImg.style.border = "5px solid black";
allstarcode.style.display = "flex";
allstarcode.style.flexDirection = "column";
allstarcode.style.width = '300px';
allstarcodeImg.style.width = "300px";

const allstarcodeButton = document.getElementById("allstarbutton");
const allstarcodeText = document.getElementById("allstarcodetext");

allstarcodeButton.addEventListener("click", () => {
    window.open('https://allstarcode.org/', '_blank');
})

allstarcodeText.style.textAlign = "center";