let imgBox = document.getElementById("imageBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")

let GenerateButton = document.querySelector(".GenerateBtn")
let searchInput = document.querySelector(".container input")

function generateQR(){
    if
    (qrText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-image");
    }
    else
    {
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error")
        }, 1000)
    }
}

GenerateButton.addEventListener("click", generateQR)

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generateQR();
    }
});