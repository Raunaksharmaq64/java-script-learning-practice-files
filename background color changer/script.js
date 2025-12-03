let colorS=document.querySelectorAll('.button');
let body= document.querySelector('body');

colorS.forEach(btn => {
    btn.addEventListener("click", () => {
        let bgColor = btn.id;       
        body.style.backgroundColor = bgColor;
    });
});