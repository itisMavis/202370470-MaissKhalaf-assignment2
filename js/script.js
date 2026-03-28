const greetingForUser = document.getElementById("greeting");

// This code updates the greeting message on the website.
// using if-else statements to determine the appropriate greeting based on the time of day.
if (greetingForUser) {
  const hour = new Date().getHours();
  let greeting = "Welcome";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  greetingForUser.textContent = greeting;
}
