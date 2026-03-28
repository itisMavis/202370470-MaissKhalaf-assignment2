# Technical Documentation

## Overview

This project is a static, responsive portfolio website built using HTML, CSS, and JavaScript. This version introduces interactive features and dynamic content while maintaining a clean and readable layout.

## Structure

index.html contains the overall layout and content of the website, including sections for About, Projects, Achievements, Insights, and Contact.
css/styles.css manages typography, spacing, layout structure, responsive behavior, and visual styling.
js/script.js implements the personalized greeting and API-powered insight section.
assets/images/ stores images used throughout the website, including placeholder images for projects.

## Responsive Design Implementation

The layout uses a combination of CSS Grid and Flexbox:

Grid is used for structuring larger sections.
Flexbox is used for alignment and spacing within components.
Media queries are used to adjust layout and spacing across smaller screen sizes, ensuring compatibility on mobile and tablet devices. 

## JavaScript Functionality 

1. Personalized greeting
Uses Date().getHours() to select an appropriate time-based greeting.
Updates the greeting dynamically when the user types their name.
2. API insight section
Fetches a short tip from the Advice Slip public API using fetch with async/await.
Displays a loading message while the request is in progress.
Shows a user-friendly error message if the request fails.
## Form Implementation

The contact form includes:

Name field
Email field
Message field

Basic HTML validation attributes such as required ensure user input is provided before submission. The form is front-end only and does not connect to a backend.

JavaScript also validates input fields and checks for a correct email format, then displays a confirmation or error message below the form.

## Design Considerations
Clean typography was selected to maintain readability.
Spacing and alignment were structured to create a balanced layout.
Hover effects were kept subtle to avoid distraction.

## Testing & Compatibility

The website was tested using browser developer tools to simulate different screen sizes. It was verified to function correctly across modern browsers.