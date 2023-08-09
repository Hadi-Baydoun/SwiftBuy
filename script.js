const bar = document.getElementById('bar'),
      close = document.getElementById('close'),
      nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle instead of add/remove
    });
}

if(close){
    close.addEventListener('click',()=>{
        navMenu.classList.remove('active')
    })
}

const navLink = document.querySelectorAll('#nav-bar')

function linkAction(){
    const navMenu = document.getElementById('active')
    navMenu.classList.remove('active')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*Filter*/ 

let mixerFeatured = mixitup('.pro-container', {
    selectors:{
        target: '.pro'
    },
    animation : {
    duration:700
}
})

const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
    linkFeatured.forEach(l=>l.classList.remove('active-featured'))
    this,classList.add('active-featured')
}

const filterButtons = document.querySelectorAll('.featured__item');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove('active-featured');
        });

        // Add active class to the clicked button
        this.classList.add('active-featured');

        // Get the data-filter value from the clicked button
        const filterValue = this.getAttribute('data-filter');

        // Use MixItUp API to filter the items
        mixerFeatured.filter(filterValue);
    });
});
