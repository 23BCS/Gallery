let scollContainer =document.querySelector(".gallery");
let backBtn =document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");



scollContainer.addEventListener("wheel", (e)=>{
    e.preventDefault();
    scollContainer.scrollLeft += e.deltaY;
    scollContainer.Style.scrollBehavior="auto";
});


nextBtn.addEventListener("click", ()=>{
    scollContainer.style.scrollBehavior="smooth";
    scollContainer.scrollLeft += 900;

});
backBtn.addEventListener("click", ()=>{
    scollContainer.style.scrollBehavior="smooth";
    scollContainer.scrollLeft -= 900;

});