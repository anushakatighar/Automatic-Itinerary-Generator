document.getElementById("travel-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let destination = document.getElementById("destination").value;
    let days = document.getElementById("days").value;

    if (destination && days > 0) {
        window.location.href = `itinerary.html?destination=${destination}&days=${days}`;
    }
});
