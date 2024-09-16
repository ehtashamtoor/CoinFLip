# Coin Flip - A Next.js App

## Introduction

This project is a **Next.js** application that provides a coin flip functionality, fetches the current **Solana** rate, and incorporates **Firebase Authentication** for user signup. The app also features form validation for secure input handling and is styled with **TailwindCSS** for responsive design.

## Features

- **Next.js Pages Router**: Utilizes the traditional `pages` directory-based routing system for dynamic and static routes.
- **TailwindCSS**: A utility-first CSS framework used for building fast and responsive user interfaces.
- **Firebase Authentication**: Signup functionality implemented using **Firebase Authentication**.
- **Form Validation**: Includes validation for both signup and coin flip forms to ensure proper data handling.
- **Solana Rate API**: Fetches the latest Solana rate through the **CoinGecko API** and displays it in real-time.
- **Responsive Design**: Optimized for various screen sizes, ensuring a seamless user experience across devices.
- **State Management**: Utilizes React state hooks for managing coin flip functionality and real-time updates of the Solana rate.

## Technologies Used

- **Next.js**: A React framework for building fast and scalable web applications.
- **TailwindCSS**: A utility-first CSS framework for building responsive and customizable UI components.
- **React**: A JavaScript library for building user interfaces.
- **Firebase Authentication**: Authentication service used for secure user signup.
- **CoinGecko API**: API integration to fetch and display the latest **Solana** cryptocurrency rate.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ehtashamtoor/CoinFLip.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up **Firebase Authentication**:
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Email/Password** authentication in the Firebase Authentication settings.
   - Create a `.env.local` file in the root of your project with your Firebase credentials:

   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

## Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the Next.js development server and open your application in the default browser at [http://localhost:3000](http://localhost:3000).

## Key Features

### 1. **Coin Flip Simulation**
   - An interactive feature where users can flip a coin and get results instantly.
   - Form validation ensures the user input is correct before the flip action.

### 2. **Solana Rate Display**
   - Fetches the real-time **Solana** rate using the **CoinGecko API**.
   - API used: [`https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd`](https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd).

### 3. **Firebase Authentication**
   - Users can sign up using **Firebase Authentication** via email and password.
   - The signup form includes validation for fields like email format and password strength.

### 4. **Form Validation**
   - Both the **signup** and **coin flip** forms feature client-side validation.
     - **Signup Form**: Validates email format and password (e.g., minimum length).
     - **Coin Flip Form**: Ensures the user input is in the correct format before proceeding.

### 5. **Responsive UI**
   - Designed with **TailwindCSS** to ensure optimal display across various screen sizes, providing a seamless experience on both mobile and desktop devices.

### 6. **State-based Functionality**
   - Utilizes React state hooks to manage the coin flip logic and Solana rate updates, ensuring real-time interactions for users.

## Live Link

[**Coin Flip Application**](https://coin-flip-jade.vercel.app/)

---

Feel free to explore the codebase and customize the application to your liking. For any questions or further details, refer to the [Next.js](https://nextjs.org/docs), [TailwindCSS](https://tailwindcss.com/docs), and [Firebase Authentication](https://firebase.google.com/docs/auth) documentation!
