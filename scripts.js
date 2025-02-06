// scripts.js
document.getElementById("trackButton").addEventListener("click", function() {
    dataLayer.push({
        event: 'buttonClick',
        category: 'Button Click',
        action: 'Click',
        label: 'TrackButton'
    });
});
