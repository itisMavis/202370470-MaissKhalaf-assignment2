# Technical Documentation

# Overview
This project is a static, responsive portfolio website built using HTML, CSS, and JavaScript. The Assignment 2 update adds interactive features and dynamic content while keeping the layout clean and readable.

# Structure
1. index.html contains the overall layout and content of the website, including sections for About, Projects, Achievements, Insights, and Contact.
2. css/styles.css manages typography, spacing, layout structure, responsive behavior, and visual styling.
3. js/script.js implements the personalized greeting and API-powered insight section.
4. assets/images/ stores images used throughout the website, including placeholder images for projects.

# Responsive Design Implementation
The layout uses a combination of CSS Grid and Flexbox:
- Grid is used for structuring larger sections.
- Flexbox is used for alignment and spacing within components.

# JavaScript Functionality
1. Personalized greeting
- Uses Date().getHours() to select an appropriate time-based greeting.
- Updates the greeting live when the user types their name.

2. API insight section
- Fetches a short tip from the Advice Slip public API using fetch and async/await.
- Displays a loading message while the request is in progress.
- Shows a friendly error message if the request fails.

# Form Implementation
The contact form includes:
- Name field
- Email field
- Message field
Basic HTML validation attributes such as required ensure user input is provided before submission. The form is front-end only and does not connect to a backend.
JavaScript also checks for empty fields and a valid email format, then shows a confirmation or error message below the form.

# Design Considerations
- Clean typography was selected to maintain readability.
- Spacing and alignment were structured to create a balanced layout.
- Hover effects were kept subtle to avoid distraction.

# Testing & Compatibility
The website was tested using browser developer tools to simulate different screen sizes. It was verified to function correctly across modern browsers.
