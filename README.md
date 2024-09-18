# 📱 ChatBox

Welcome to the Chatting App! This project is a modern, real-time messaging application built using the MERN stack, Socket.io, TailwindCSS, and Daisy UI. It features robust authentication, real-time messaging, online user status, and global state management. Perfect for demonstrating a full-stack development setup and deploying a fully functional chat application.

## 🚀 Features

- **Tech Stack**: MERN (MongoDB, Express.js, React.js, Node.js) + Socket.io + TailwindCSS + Daisy UI
- **Authentication & Authorization**: Secure JWT-based authentication and authorization.
- **Real-time Messaging**: Instant communication with Socket.io.
- **Online User Status**: Track and display online user status using Socket.io and React Context.
- **Global State Management**: Manage global state with Zustand for a seamless user experience.
- **Error Handling**: Comprehensive error handling on both the server and client sides.
- **Deployment**: Learn how to deploy your app like a pro for FREE!
- **And much more!**: Explore additional features and functionalities.

## 📦 Installation

To get started with this project, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB server running locally or remotely.

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/chatting-app.git
   cd chatting-app
   ```

2. **Install Server Dependencies**

   Navigate to the `server` directory and install the required packages:

   ```bash
   cd server
   npm install
   ```

3. **Install Client Dependencies**

   Navigate to the `client` directory and install the required packages:

   ```bash
   cd ../client
   npm install
   ```

4. **Configuration**

   Create a `.env` file in the `server` directory and add the necessary environment variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Update `.env` in the `client` directory if needed for API endpoints.

5. **Run the Application**

   Start the server:

   ```bash
   cd ../server
   npm start
   ```

   Start the client:

   ```bash
   cd ../client
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## 🌟 Usage

1. **Register and Login**

   - Navigate to the registration page to create a new account.
   - Log in using your credentials to access the chat functionality.

2. **Real-time Messaging**

   - Start chatting with users in real-time.
   - See when users are online and receive instant message updates.

3. **Global State Management**

   - Experience smooth state transitions managed by Zustand.

4. **Error Handling**

   - View error messages and troubleshooting tips in the console or UI.
  
## **Env Variable**

```bash
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
NODE_ENV=...
```

## 📈 Deployment

Learn how to deploy your Chatting App for free using platforms like Heroku, Vercel, or Netlify. Follow the deployment guides specific to your chosen platform.

## 🛠️ Contributing

Contributions are welcome! If you’d like to improve the project, please:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Acknowledgements

- [MERN Stack](https://mern.io/)
- [Socket.io](https://socket.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)

## Contact

For questions or suggestions, feel free to contact me at [your-email@example.com](mailto:your-email@example.com).

---

Feel free to adjust the details according to your specific project needs and preferences.
