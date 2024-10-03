document.addEventListener("DOMContentLoaded", function() {
    const description = document.getElementById('description');
    const jack = document.createElement('p');
    jack.textContent = "Now featuring a headphone jack!";
    description.appendChild(jack);
});
