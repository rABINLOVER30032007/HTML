// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("booking-form");
  
    bookingForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      // Get values from the form
      const departure = document.getElementById("departure").value;
      const destination = document.getElementById("destination").value;
      const travelDate = document.getElementById("travel-date").value;
  
      // Check if all fields are filled
      if (departure && destination && travelDate) {
        alert(`Booking Confirmed!\nDeparture: ${departure}\nDestination: ${destination}\nDate: ${travelDate}`);
      } else {
        alert("Please fill in all fields.");
      }
  
      // Clear the form after submission
      bookingForm.reset();
    });
  });
  