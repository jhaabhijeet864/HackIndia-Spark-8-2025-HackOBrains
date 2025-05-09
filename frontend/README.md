# hackmentor-ai-frontend

## Overview
This project is a React application that integrates Firebase for user authentication. It provides functionalities for user login and sign-up.

## Project Structure
```
hackmentor-ai-frontend
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Login.tsx
│   │   └── Signup.tsx
│   ├── firebase
│   │   └── config.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd hackmentor-ai-frontend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Firebase Configuration**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication and set up the sign-in methods you want to use (e.g., Email/Password).
   - Copy your Firebase configuration settings and add them to `src/firebase/config.ts`.

4. **Run the Application**
   ```bash
   npm start
   ```
   This will start the development server and open the application in your default web browser.

## Usage
- Navigate to the login page to sign in with your credentials.
- Use the sign-up page to create a new account.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes. 

## License
This project is licensed under the MIT License.