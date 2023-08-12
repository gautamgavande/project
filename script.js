function abcd(){document.querySelector("#rect")
.addEventListener("mousemove",function(dets){
   var locationx=dets.clientX - document.querySelector("#rect").getBoundingClientRect().x;
    var locationy=dets.clientY - document.querySelector("#rect").getBoundingClientRect().y;

    document.querySelector("#innerrect").style.clipPath =`circle(12% at ${locationx}px ${locationy}px)`;

})
}
window.requestAnimationFrame(abcd)
