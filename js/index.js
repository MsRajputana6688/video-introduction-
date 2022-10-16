logup.addEventListener("click", function() {
    window.open("SignUp.html", "", "width=500px, height=700px, left=300px, top=100px");
});
login.addEventListener("click", function() {
    window.open("SignIn.html", "", "width=500px, height=500px, left=300px, top=100px");
});

setTimeout(function() {
    intro.style.display = "none";
    loop.style.display = "block";
}, 6800);


function setTime(ids, classes, time) {
    setTimeout(function() {
        ids = document.getElementById(ids);
        ids.className = `${classes} active`;
    }, time);
}

// function calling from here
setTime("headerLogo", "header-logo", 100);
setTime("welcome_text", "welcome_text", 3800);
setTime("CourseAbout", "Course-About", 2800);
setTime("rsh", "right-side-header", 100);