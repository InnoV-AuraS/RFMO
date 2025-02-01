document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const leftPane = document.getElementById("left-pane");
    const close = document.getElementById("close");
    // Toggle the 'active' class on #left-pane when the hamburger is clicked
    hamburger.addEventListener("click", () => {
        leftPane.classList.toggle("active");
    });

    close.addEventListener("click",()=>{
        leftPane.classList.toggle("active")
    })

    // Optional: Close the left pane when a menu item is clicked
    const menuItems = leftPane.querySelectorAll("ul li");
    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            leftPane.classList.remove("active");
        });
    });
});
