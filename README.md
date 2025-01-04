# Free Fire Account API

A simple, mobile-friendly project that dynamically displays API content or error messages inside an iframe. This project is designed to parse `uid` and `region` parameters from the URL and load corresponding API responses.

---

## Project Structure
```
project/ 
│ ├── index.html       # Main HTML file 
├── styles.css       # CSS for styling 
└── script.js        # JavaScript for functionality
```
---

## Features

- Dynamically loads API content into an iframe based on URL parameters.
- Displays error messages in raw JSON format if parameters are missing or invalid.
- Fully responsive and optimized for mobile devices.
- Modular structure with HTML, CSS, and JavaScript in separate files.

---

## Setup and Usage

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-repo-name/project.git
   cd project
   ```

## 2. File Structure
Ensure the following files are present in the project directory:

index.html
styles.css
script.js



## 3. Run Locally
Open index.html in any browser to test the project.


## 4. URL Structure
Use the following format to access the API or see error messages:

`https://starexxx.github.io/API/?UID/Region`

Example with Valid Parameters:

`https://starexxx.github.io/API/?4411457393/ind`

Example with Missing Parameters:

`https://starexxx.github.io/API/`

This will display the following error in raw JSON:
```json
{
  "error": "Invalid or missing parameters",
  "requiredFormat": "https://starexxx.github.io/API/?UID/Region",
  "example": "https://starexxx.github.io/API//?4411457393/ind"
}
