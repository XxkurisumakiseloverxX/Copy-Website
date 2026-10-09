const arr = ["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10",
    "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"];
let i = 1;

function next() {
    if (i === 2) {
        i = 0;
    }
    document.getElementById("carouselimg").src = arr[i+1];
    i++;
    return 1;
}
function prev() {
    if (i === 0) {
        i = 3;
    }
    document.getElementById("carouselimg").src = arr[i-1];
    i--;
    return 1;
}