/**
 * Created an Intersection Observer
 * Intersection Observer takes a callback function in its constructor.
 * It can observe multiple entries at the same time.
 * It will run anytime the visibility of one of the observed element changes and as it is observing multiple entries, we'll need to use forEach to loop over them and then we'll use if else conditions to check if the entry is visible in the viewport or not. If it is visible, we'll add the custom class "show" to show the animation and when it's out of the viewport we'll remove the animation by removing that class
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

/**
 * Gave a custom hidden class and used querySelectorAll to grab all the custom class of the name in the DOM.
 * After Creating the Observer we need to tell it what to observe so we'll loop over the elements we grabbed and observe each of them
 */
const hiddenEle = document.querySelectorAll('.hidden');
hiddenEle.forEach((ele) => observer.observe(ele));