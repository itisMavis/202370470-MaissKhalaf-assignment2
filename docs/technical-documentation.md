# Technical Documentation

# Overview

This project is a static, responsive portfolio website built using HTML, CSS, and JavaScript. The structure separates content, styling, and functionality into organized files to improve maintainability and readability.

# Structure

1. index.html contains the overall layout and content of the website, including sections for About, Projects, Achievements, and Contact.

2. css/styles.css manages typography, spacing, layout structure, responsive behavior, and visual styling.

3. js/script.js implements the dynamic greeting feature based on the current time.

4. assets/images/ stores images used throughout the website, including placeholder images for projects.

# Responsive Design Implementation

The layout uses a combination of CSS Grid and Flexbox:

Grid is used for structuring larger sections.
Flexbox is used for alignment and spacing within components.

# JavaScript Functionality

The greeting feature is implemented using:
Date().getHours() to retrieve the current hour.
Conditional (if–else) statements to determine whether to display a morning, afternoon, or evening greeting.
DOM manipulation to update the greeting text dynamically when the page loads.

# Form Implementation

The contact form includes:
Name field
Email field
Message field
Basic HTML validation attributes such as required ensure user input is provided before submission. The form is front-end only and does not connect to a backend.

# Design Considerations

Clean typography was selected to maintain readability.
Spacing and alignment were structured to create a balanced layout.
A minimal color palette was used to maintain a professional appearance.

# Testing & Compatibility

The website was tested using browser developer tools to simulate different screen sizes. It was verified to function correctly across modern browsers.