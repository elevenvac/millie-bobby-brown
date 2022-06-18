$(document).ready(function () {      
    const btn = document.getElementById("hamburgeropenbtn");

    $("#hamburgeropenbtn").click(function () {
        if(btn.classList.contains("fa-bars") === true) {
        $(this).removeClass("fa-bars");
        $(this).addClass("fa-xmark");
        }else{
        $(this).removeClass("fa-xmark");
        $(this).addClass("fa-bars");
        }
    });
});