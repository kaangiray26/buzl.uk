document.addEventListener('DOMContentLoaded', ()=> {
    // Add a click event to all images
    document.querySelectorAll('img').forEach((img) => {
        img.onclick = (e) => {
            // Open dialog
            const dialog = document.querySelector('#image-dialog');
            dialog.querySelector('img').src = e.target.src;
            dialog.showModal();
        };
    });
});