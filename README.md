<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>
<body>

<h1>AuthApp - React Native Authentication </h1>

<h2>Overview</h2>
<p><strong>AuthApp</strong> is a simple React Native application designed to demonstrate a basic authentication flow, including user login and sign-up. The app includes three main screens: Welcome, Login, and Signup. It uses state management with <code>useState</code>, navigation with <code>React Navigation</code>, and can be tested using BlueStacks emulator.</p>

<p>This app is part of a tutorial series to help you understand and build authentication systems in React Native step-by-step.</p>

<h2>Features</h2>
<ul>
  <li>Welcome screen with navigation to login and signup.</li>
  <li>Simple login screen using phone number and password.</li>
  <li>Signup screen with phone number, email, and password fields.</li>
  <li>Authentication flow using mock logic (you can extend this with real backend integration).</li>
  <li>Works seamlessly with the BlueStacks emulator.</li>
</ul>

<h2>Screens</h2>
<ol>
  <li><strong>Welcome Screen</strong>: The landing page where users can choose to log in or sign up.</li>
  <li><strong>Login Screen</strong>: Allows users to log in with their phone number and password.</li>
  <li><strong>Signup Screen</strong>: Allows users to sign up by providing their phone number, email, and password.</li>
  <li><strong>Home Screen</strong>: (Coming soon) A protected screen accessible only after login, with a logout feature.</li>
</ol>

<h2>Folder Structure</h2>
<pre>
src/
├── components/    # Reusable UI components
├── context/       # Authentication context and state management
├── navigation/    # Navigation setup using React Navigation
├── screens/       # App screens: Welcome, Login, Signup, and Home
└── services/      # Services for handling API requests (to be added)
</pre>

<h2>Setup and Installation</h2>

<h3>Prerequisites</h3>
<ul>
  <li><strong>Node.js</strong>: Make sure you have Node.js installed. You can download it from <a href="https://nodejs.org/" target="_blank">here</a>.</li>
  <li><strong>Expo CLI</strong>: Create a new react expo project</li>
</ul>
<pre>
npx create-expo-app --template 
</pre>
<ul>
  <li><strong>ADB (Android Debug Bridge)</strong>: For connecting BlueStacks with your development environment.</li>
  <li><strong>BlueStacks Emulator</strong>: Instead of Android Studio's emulator, we're using BlueStacks for smoother performance. <a href="https://www.bluestacks.com/" target="_blank">Download BlueStacks here</a>.</li>
</ul>

<h3>Steps to Run the Project</h3>
<ol>
  <li><strong>Clone the Repository</strong>:
  <pre>
git clone https://github.com/Mcaino/MyAuthApp.git
cd MyAuthApp
  </pre></li>

  <li><strong>Install Dependencies</strong>: Inside your project folder, run:
  <pre>
npm install
  </pre></li>

  <li><strong>Start the Expo Development Server</strong>: Use the following command to start the Expo server:
  <pre>
npx expo start
  </pre></li>

  <li><strong>Run the App on BlueStacks</strong>: To run the app on the BlueStacks emulator, first connect BlueStacks to ADB:
  <pre>
adb connect 127.0.0.1:5555
  </pre>
  Once connected, in Expo Developer Tools, click "Run on Android device/emulator" and choose BlueStacks.</li>
</ol>

<h2>BlueStacks Setup (Optional)</h2>
<p>Using BlueStacks as your emulator can improve performance and make testing faster, especially if Android Studio's emulator is too slow or buggy. Here's how to set it up:</p>
<ol>
  <li>Install BlueStacks from <a href="https://www.bluestacks.com/" target="_blank">here</a>.</li>
  <li>Enable <strong>Developer Mode</strong> in BlueStacks.</li>
  <li>Enable <strong>USB Debugging</strong> under Developer Options in BlueStacks.</li>
  <li>Run <code>adb connect 127.0.0.1:5555</code> to connect BlueStacks with ADB.</li>
</ol>

<h2>Usage</h2>

<h3>Welcome Screen</h3>
<p>The app starts with a <strong>Welcome Screen</strong> where users can choose to log in or sign up.</p>

<h3>Login Screen</h3>
<p>Users can log in using their <strong>phone number</strong> and <strong>password</strong>.</p>

<h3>Signup Screen</h3>
<p>Users can create a new account by entering their <strong>phone number</strong>, <strong>email</strong>, and <strong>password</strong>.</p>

<h3>Home Screen (Coming Soon)</h3>
<p>After logging in, users will be taken to the <strong>Home Screen</strong> (which we'll add in the upcoming tutorials). From here, they can log out or explore other functionalities.</p>

<h2>Future Improvements</h2>
<ul>
  <li>Backend integration for authentication (Firebase, Node.js, etc.).</li>
  <li>Adding a Home Screen with logout functionality.</li>
  <li>Secure token storage (with libraries like <code>SecureStore</code> or <code>AsyncStorage</code>).</li>
  <li>Validation for phone number, email, and password.</li>
  <li>Implementing authentication context and protected routes.</li>
  <li>Optimized UI/UX and animations.</li>
</ul>

<h2>Troubleshooting</h2>

<h3>BlueStacks Not Connecting</h3>
<p>If you're having trouble connecting BlueStacks to ADB, try these steps:</p>
<ol>
  <li>Restart BlueStacks and your development server.</li>
  <li>Ensure <strong>USB Debugging</strong> is enabled in BlueStacks.</li>
  <li>Re-run <code>adb connect 127.0.0.1:5555</code>.</li>
</ol>

<h3>App Not Launching on BlueStacks</h3>
<ul>
  <li>Make sure BlueStacks is connected to ADB by running <code>adb devices</code>. It should show up as a connected device.</li>
  <li>Check that the Expo server is running, and refresh BlueStacks if necessary.</li>
</ul>

<h2>Contributing</h2>
<p>Feel free to fork this repository and make your own changes! Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>

<h2>Stay Connected!</h2>
<p>Be sure to follow the tutorial series and subscribe to our channel for more updates. Don't hesitate to reach out with any questions or feedback!</p>

</body>
</html>
