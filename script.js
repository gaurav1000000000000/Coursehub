document.addEventListener("DOMContentLoaded", function () {
    const courseButtons = document.querySelectorAll(".btn-primary");

    courseButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const courses = ["UI/UX Design", "Cybersecurity", "Blockchain", "Ethical Hacking"];
            alert("You selected the " + courses[index] + " course!");
        });
    });
});
