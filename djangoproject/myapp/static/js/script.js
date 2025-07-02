document.addEventListener("DOMContentLoaded", function(){
    const title = document.getElementById("title");

    title.addEventListener("click", function(){

    const currentColor = getComputedStyle(title).color;
    if(currentColor === "rgb(0, 0, 255)") {
        title.style.color = "white";
    } else {
        title.style.color = "blue";
    }
});
}
)
