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

    const image = document.getElementById("image");

    image.addEventListener("wheel", function(event){
        const currentWidth = parseInt(getComputedStyle(image).width);

        if(event.deltaY < 0 && currentWidth < 800) {
            newWidth = currentWidth + 20;
        } else if(event.deltaY > 0 && currentWidth > 50) {
            newWidth= currentWidth - 20;
        }

        image.style.width = newWidth + "px";
    });
}
)
