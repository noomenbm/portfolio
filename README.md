# Personal Portfolio Website

This project is a personal portfolio website built for a Web Development Foundations course. It began as a static HTML/CSS assignment and is now being extended into a JavaScript-driven project gallery for the second assignment.

## Current Status

The website currently includes:

- A responsive homepage hero section
- A featured projects section on the homepage
- A full projects gallery page
- A simple about page
- A simple contact page
- A simple header and footer shared between all pages
- Dynamic project card rendering with JavaScript
- Real-time project filtering through a search input

## Technologies Used

- HTML5
- CSS3
- JavaScript

## JavaScript Gallery Features

For Assignment 2, the static project cards were replaced with a JavaScript-based rendering system:

- Project data is stored in an array of objects in `script.js`
- Cards are generated dynamically and injected into `.project-grid`
- The homepage shows featured projects only
- The projects page shows the full project list
- A search/filter box updates the gallery in real time

## Project Structure

- `index.html` : homepage with hero and featured project gallery
- `projects.html` : full project gallery
- `about.html` : about page
- `contact.html` : contact page
- `styles.css` : all site styling
- `script.js` : dynamic rendering and filtering logic

## Notes

- The layout and styling build on the first assignment and continue to evolve
- The JavaScript logic is being developed incrementally as part of the second assignment