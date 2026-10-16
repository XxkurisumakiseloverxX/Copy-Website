const arr = ["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10",
    "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"]; // carousel sources
let i = 0;
first = true;
let bar = false;
let courses = false;
let extra = false;

function next() {
    if (first) {
        document.getElementById("carouselimg").src = arr[1];
        first = false;
        return 1;
    }
    document.getElementById("carouselimg").src = arr[i];
    if (i === 2) {
        i=0;
        return 1;
    }
    i++;
    return 1;
} // next carousel image
function prev() {
    if (first) {
        document.getElementById("carouselimg").src = arr[2];
        first = false;
        return 1;
    }
    document.getElementById("carouselimg").src = arr[i];
    if (i === 0) {
        i = 2;
        return 1;
    }
    i--;
    return 1;
} // previous carousel image

function togglebar() {
    if (bar) {
        document.getElementById("sidebar").style.display = "none";
        document.getElementById("mainbody").style.marginLeft = "0vw";
        bar = false;
        return 1;
    }
    document.getElementById("sidebar").style.display = "inline-block";
    document.getElementById("sidebar").style.position = "fixed";
    document.getElementById("mainbody").style.marginLeft = "21vw";
    bar = true;
    return 1;
} //toggles sidebar

function toggleCourses() {
    if (courses) {
        document.getElementById("sidebarhiddencourses").style.display = "none";
        courses = false;
        return 1;
    }
    document.getElementById("sidebarhiddencourses").style.display = "grid";
    courses = true;
    if (extra) {
        extra = true;
        toggleExtra();
    }
    return 1;
}

function toggleExtra() {
    if (extra) {
        document.getElementById("sidebarhiddenextra").style.display = "none";
        extra = false;
        return 1;
    }
    document.getElementById("sidebarhiddenextra").style.display = "grid";
    extra = true;
    if (courses) {
        courses = true;
        toggleCourses();
    }
    return 1;
}