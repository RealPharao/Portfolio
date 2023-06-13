const pdfBnt = document.querySelector("#bnt");
const pdfT = document.querySelector("#pdfText");

const hold = document.querySelector("#pdf-holder");
const cvP = document.querySelector("#pdfCurriculum");

    console.log("sign of life");
    hidePdf();

    pdfBnt.addEventListener("click", viewPdf);

function viewPdf(){
    console.log("show me the goods");
    hideText();

    cvP.removeEventListener("click", viewPdf);

    hold.classList.remove("hide");
    cvP.classList.remove("hide");

}

function hidePdf(){
    cvP.classList.add("hide");
    hold.classList.add("hide");
}

function hideText(){
  pdfT.classList.add("hide");
}