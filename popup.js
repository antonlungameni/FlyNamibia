// Wait for the page to load
window.onload = function() {
    // Wait for 3 seconds
    setTimeout(function() {
        // Show the popup
        Swal.fire({
            title: 'Popup Title',
            text: 'Popup message goes here',
            icon: 'info',
            confirmButtonText: 'OK'
        });
    }, 3000);
};