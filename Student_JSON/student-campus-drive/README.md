# Student Campus Drive

This project is a simple interactive webpage that displays a list of students who attended campus drives along with the names of the companies they interacted with. The webpage allows users to dynamically add new student names and fetch additional names from a JSON file without reloading the page.

## Project Structure

```
student-campus-drive
├── index.html        # Main HTML document
├── styles.css        # CSS styles for the webpage
├── script.js         # JavaScript functionality for dynamic interactions
├── data.json         # JSON file containing student names and company names
└── README.md         # Documentation for the project
```

## Files Description

- **index.html**: This file structures the webpage and includes links to the CSS and JavaScript files. It contains a list to display student names and their corresponding company names.

- **styles.css**: This file contains styles for the webpage, utilizing CSS selectors to differentiate between odd and even rows in the student list for better visual presentation.

- **script.js**: This file implements the functionality to add new student names dynamically. It also includes an AJAX function to fetch additional names from the `data.json` file and update the list without reloading the page.

- **data.json**: This file contains a JSON array of student names and their corresponding company names, which can be fetched by the AJAX function in `script.js`.

## How to Run the Project

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser.
3. Use the input field to add new student names and click the button to add them to the list.
4. Click the "Fetch More Students" button to load additional names from the `data.json` file.

## Technologies Used

- HTML
- CSS
- JavaScript
- AJAX
- JSON

## License

This project is open-source and available for anyone to use and modify.