const element = document.getElementById('scroll-hide');
function checkWindowSize() {
    if (window.innerWidth < 1000) {
            window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                element.style.display = 'none';
            }
        });
    }
    if (window.innerWidth > 1000) {
        element.style.display = 'flex';
    }

}
    
    // Check the window size when the page loads
    window.addEventListener('load', checkWindowSize);
    
    // Check the window size when the window is resized
    window.addEventListener('resize', checkWindowSize);

document.getElementById('click').addEventListener('click', function() {
    element.style.display = 'block';
    // You can call any function here
});
