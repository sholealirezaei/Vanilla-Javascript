console.clear();


Array.from(document.querySelectorAll('.show-details'), (button) => {
    let parent = button.closest('tbody');
    button.addEventListener('click',() => {
        if ( parent.dataset.open) {
            delete parent.dataset.open;
        } else {
            parent.dataset.open = true;
        }
    });
});