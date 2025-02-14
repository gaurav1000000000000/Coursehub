document.addEventListener("DOMContentLoaded", function () {
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const courseName = button.getAttribute("data-course");
            const coursePrice = button.getAttribute("data-price");
            alert(`You selected the ${courseName} course! Price: ${coursePrice}`);
        });
    });
});
