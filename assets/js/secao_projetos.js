const QRcode = document.querySelectorAll(".QRcode")
const linkQRcode = document.querySelectorAll(".linkQRcode")
const overlay = document.querySelectorAll(".overlay")

linkQRcode.forEach((link, index) => {

    link.addEventListener("click", () => {

        QRcode[index].classList.remove("hidden")
        overlay[index].classList.remove("hidden")

    })

})

document.addEventListener("click", (e) => {

    const clicouQR = e.target.closest(".QRcode");
    const clicouLink = e.target.closest(".linkQRcode");

    if (!clicouQR && !clicouLink) {

        QRcode.forEach(qr => qr.classList.add("hidden"));
        overlay.forEach(o => o.classList.add("hidden"));

    }

});