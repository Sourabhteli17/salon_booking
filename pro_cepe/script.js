// Global variable to store selected salon
let selectedSalon = "";

// Go to booking page with selected salon
function goBooking(salon){
    selectedSalon = salon;
    localStorage.setItem("selectedSalon", selectedSalon);
    window.location.href="booking.html";
}

// Fill salon name on booking page
document.addEventListener("DOMContentLoaded", function(){
    let salonHeader = document.getElementById("selectedSalon");
    if(salonHeader){
        let salon = localStorage.getItem("selectedSalon") || "Your Salon";
        salonHeader.innerText = "Book Appointment at " + salon;
    }

    // Booking form submit
    let form = document.getElementById("bookingForm");
    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();

            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let service = document.getElementById("service").value;
            let date = document.getElementById("date").value;
            let time = document.getElementById("time").value;
            let salon = localStorage.getItem("selectedSalon");

            // Store booking info in localStorage
            let bookingInfo = {name, phone, service, date, time, salon};
            localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));

            // Go to confirmation page
            window.location.href = "confirmation.html";
        });
    }

    // Confirmation page
    let confirmMessage = document.getElementById("confirmMessage");
    if(confirmMessage){
        let bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
        if(bookingInfo){
            confirmMessage.innerHTML = `
                <strong>Customer:</strong> ${bookingInfo.name}<br>
                <strong>Phone:</strong> ${bookingInfo.phone}<br>
                <strong>Salon:</strong> ${bookingInfo.salon}<br>
                <strong>Service:</strong> ${bookingInfo.service}<br>
                <strong>Date:</strong> ${bookingInfo.date}<br>
                <strong>Time:</strong> ${bookingInfo.time}
            `;
        }
    }
});

// Back to Home
function goHome(){
    window.location.href="index.html";
}