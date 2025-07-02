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

    image.addEventListener("click", function(){
        const currentWidth = parseInt(getComputedStyle(image).width);

        let newWidth;

        if(currentWidth < 600) {
            newWidth = currentWidth + 20;
        } else {
            newWidth = 50;
        }

        image.style.width = newWidth + "px";
    });

    const listItems = document.querySelectorAll("li")

    listItems.forEach(function(item) {
        item.addEventListener("click", function() {
            const currentColor = getComputedStyle(item).backgroundColor;

            if(currentColor === "rgb(0, 0, 255)") {
                item.style.backgroundColor = "white";
                item.style.color = "black";
            } else {
                item.style.backgroundColor = "blue";
                item.style.color = "white";
            }
        });
    });
}
)
