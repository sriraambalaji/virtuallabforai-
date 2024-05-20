function vacuumWorld(locationInput, statusInputs) {
    let numRooms = statusInputs.length; // Number of rooms
    let goalState = new Array(numRooms).fill(0); // Initialize all rooms as clean
    let cost = 0;
    let output = ""; // String to store the output

    output += "<h2>Simulation Details:</h2>";
    output += "<p>Initial Location Condition: " + JSON.stringify(goalState) + "</p>";

    // Function to clean a room
    function cleanRoom(roomIndex) {
        goalState[roomIndex] = 0; // Mark the room as clean
        cost++; // Increment cost
        output += "<p>Cost for CLEANING Room " + (roomIndex + 1) + ": " + cost + "</p>";
        output += "<p>Room " + (roomIndex + 1) + " has been Cleaned.</p>";
    }

    // Function to move to a room
    function moveToRoom(roomIndex) {
        output += "<p>Moving to Room " + (roomIndex + 1) + ". ";

        if (roomIndex === locationInput) {
            output += "No action. Already in Room " + (roomIndex + 1) + ".";
        } else {
            cost++; // Increment cost for moving
            output += "COST for moving to Room " + (roomIndex + 1) + ": " + cost + "</p>";
        }
    }

    // Clean all dirty rooms sequentially
    for (let i = 0; i < numRooms; i++) {
        if (statusInputs[i] === 1) {
            cleanRoom(i);
        }
    }

    // Add status of all rooms to output
    output += "<p>Current Room Status:</p>";
    for (let i = 0; i < numRooms; i++) {
        output += "<p>Room " + (i + 1) + ": " + (goalState[i] === 1 ? "Dirty" : "Clean") + "</p>";
    }

    output += "<p>GOAL STATE: " + JSON.stringify(goalState) + "</p>";
    output += "<p>Performance Measurement: " + cost + "</p>";

    document.getElementById("output").innerHTML = output; // Display the output in the HTML document
}
