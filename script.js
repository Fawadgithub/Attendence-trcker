// Prompt the teacher for the number of students
var numberOfStudents = parseInt(prompt("Enter the number of students in the class:"));

// Check if the number of students is valid
if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
    alert("Please enter a valid number of students.");
} else {
    // Arrays to store student names and absent students
   var studentNames = [];
    var absentStudents = [];

    // Loop to get attendance for each student
    for (let i = 0; i < numberOfStudents; i++) {
        var name = prompt(`Enter the name of student ${i + 1}:`);
        var status = prompt(`Is ${name} Present or Absent?`).toLowerCase();

        // Validate attendance input
        if (status === "present") {
            studentNames.push(name); // Store present students
        } else if (status === "absent") {
            absentStudents.push(name); // Store absent students
        } else {
            alert("Invalid input. Please enter 'Present' or 'Absent'.");
            i--; // Decrement i to repeat the input for the same student
        }
    }

    // Display the results
    var presentCount = numberOfStudents - absentStudents.length;
    var message = `Total Present: ${presentCount}\n`;
    
    if (absentStudents.length > 0) {
        message += `Absent Students: ${absentStudents.join(", ")}`;
    } else {
        message += "All students are present!";
    }
    
    alert(message);
}
