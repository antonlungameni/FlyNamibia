// Wait for the page to load
window.onload = function () {
    // Wait for 3 seconds
    setTimeout(function () {
        // Show the popup
        Swal.fire({
            title: 'New Booking System',
            imageUrl: 'https://storage.aerocrs.com/394/system/FlyNamibia_logo_colored.png',
            imageHeight: 100,
            imageAlt: 'A tall image',
            html: ' <p style="text-align: center; font-weight: bold;">We are moving to a new booking system.</p>  <p style="text-align: center; font-weight: bold;">To book flights before or on 27 August 2023, please stay on this site.</p><p style="text-align: center; font-weight: bold;">To book flights from 28 August 2023 onwards, please visit our new site at <a href="https://www.flynam.com">www.flynam.com</a> </p></div>',
            showCancelButton: true,
            showDenyButton: true,
            confirmButtonText: 'View New Site',
            cancelButtonText: 'Continue to Old Site',
            denyButtonText: 'Fly Safari/Rundu',
            color: '#D2342E',
            confirmButtonColor: '#D2342E',
            denyButtonColor: '#D2342E',
            cancelButtonColor: '#D2342E',
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to the new page
                window.location.href = 'https://flynam.com/';
            }
            if (result.isDenied) {
                // Redirect to the Safari page
                window.location.href = 'https://www.flynamibiasafari.com.na/';
            }
        });;
    }, 3000);
};