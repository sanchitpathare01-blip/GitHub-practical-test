/**
 * Sanchit Pathare - Personal Portfolio
 * File: script.js
 * Description: Simple and beginner-friendly JavaScript interaction
 *              for the portfolio welcome button.
 */

// Wait for the DOM content to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the interactive button and welcome message container
  const welcomeBtn = document.getElementById("welcome-btn");
  const welcomeBox = document.getElementById("welcome-message");
  const welcomeText = document.getElementById("welcome-text");

  // Define the greeting message
  const greetingMessage = 
    "👋 Hello and welcome! Thanks for stopping by my portfolio. " +
    "I am passionate about software engineering, full stack development, and AI. " +
    "Feel free to check out my projects below or connect with me on GitHub and LinkedIn!";

  // Set the message text inside the welcome paragraph
  welcomeText.textContent = greetingMessage;

  // Add click event listener to the button
  welcomeBtn.addEventListener("click", function () {
    // Check if the welcome box is currently hidden
    const isHidden = welcomeBox.classList.contains("hidden");

    if (isHidden) {
      // Reveal the welcome box
      welcomeBox.classList.remove("hidden");
      welcomeBtn.textContent = "Close Message ✕";
    } else {
      // Hide the welcome box
      welcomeBox.classList.add("hidden");
      welcomeBtn.textContent = "Say Hello 👋";
    }
  });
});
