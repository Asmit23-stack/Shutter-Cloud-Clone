const toggleButton1 = document.getElementById('menu'); 
const menu = document.getElementById('menu-info'); 
 
toggleButton1.addEventListener('click', function(){
    if(menu.style.display === 'none' || menu.style.display === ''){
        menu.style.display = 'inline'; 
    } else {
        menu.style.display = 'none'; 
    }
});


// Select all the toggle buttons (angle down icons)
const toggleButtons2 = document.querySelectorAll('.angle-toggle');

// Loop through each button and add a click event listener
toggleButtons2.forEach(button => {
    button.addEventListener('click', function() {
        // Get the sibling FAQ answer paragraph
        const answer = this.parentElement.querySelector('.faqs-a');

        // Toggle the display of the answer between 'none' and 'inline'
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'inline';
            // Change icon to angle-up when the answer is shown
            this.classList.replace('fa-solid fa-angle-down', 'fa-solid fa-angle-up');
        } else {
            answer.style.display = 'none';
            // Change icon back to angle-down when the answer is hidden
            this.classList.replace('fa-solid fa-angle-up', 'fa-solid fa-angle-down');
        }
    });
});
