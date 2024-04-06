**ShadowSpeak - Anonymous Forum and Social Media Platform**

**Description:**
ShadowSpeak is an innovative anonymous forum and social media platform designed to facilitate open and candid discussions without the need for personal identification. Users can freely ask questions, provide answers, create engaging polls, and share confessions, all while maintaining their anonymity. Whether seeking advice, sharing thoughts, or participating in polls, ShadowSpeak offers a safe and judgment-free environment for users to express themselves.

**Features:**
1. **Anonymous Q&A:** Users can ask questions and provide answers anonymously, fostering genuine and unbiased discussions.
2. **Poll Creation:** Create intriguing polls anonymously to gather opinions and insights from the community.
3. **Poll Participation:** Engage in polls created by others anonymously, contributing to collective decision-making.
4. **Confession Corner:** Share confessions anonymously, providing a space for users to express their thoughts and feelings without fear of judgment.
5. **Anonymity:** Users can interact with the platform without revealing their identity, ensuring privacy and confidentiality.
6. **User-friendly Interface:** Intuitive design and smooth navigation make ShadowSpeak easy and enjoyable to use for all users.
7. **Moderation:** Robust moderation tools ensure that the platform remains a safe and respectful space for all users.
8. **Real-time Updates:** Stay updated with the latest questions, answers, polls, and confessions in real-time.
9. **Customizable Profile:** Personalize your profile while maintaining anonymity, adding a touch of individuality to your interactions.
10. **Feedback Mechanism:** Provide feedback anonymously to help improve the platform and tailor it to the community's needs.

**Tech Stack:**
- **Frontend:** Built using React.js
- **Backend:** Developed with Node.js and Express.js
- **Database:** MongoDB for data storage
- **Authentication:** Implemented using Auth0 for secure login and authentication

Sure, here's how you can set up your development environment to start working on ShadowSpeak:

**Setting Up Development Environment for ShadowSpeak**

**1. Prerequisites:**
Before you begin, ensure that you have the following installed on your system:
- Node.js and npm: Node.js is required to run the backend server, while npm is the package manager for installing dependencies. You can download and install Node.js from [here](https://nodejs.org/).
- MongoDB: MongoDB is used as the database for ShadowSpeak. Install MongoDB Community Edition from the official website [here](https://www.mongodb.com/try/download/community).
- Git: Git is used for version control. You can install Git from [here](https://git-scm.com/).

**2. Clone the Repository:**
Open your terminal or command prompt and clone the ShadowSpeak repository from GitHub using the following command:
```
git clone <repository_url>
```

**3. Install Dependencies:**
Navigate to the project directory and install the necessary dependencies for both the frontend and backend:
```
cd ShadowSpeak
cd frontend
npm install
cd ../backend
npm install
```

**4. Configure Environment Variables:**
Create a `.env` file in the `backend` directory and add the following environment variables:
```
PORT=3000
MONGODB_URI=<your_mongodb_connection_string>
AUTH0_DOMAIN=<your_auth0_domain>
AUTH0_AUDIENCE=<your_auth0_audience>
```
Replace `<your_mongodb_connection_string>` with your MongoDB connection string, `<your_auth0_domain>` with your Auth0 domain, and `<your_auth0_audience>` with your Auth0 audience.

**5. Start the Backend Server:**
Run the following command to start the backend server:
```
npm start
```
This will start the backend server at the specified port (default is 3000).

**6. Start the Frontend Development Server:**
Open a new terminal window, navigate to the `frontend` directory, and start the frontend development server:
```
cd ../frontend
npm start
```
This will start the frontend development server and open the ShadowSpeak application in your default web browser.

**7. Explore and Develop:**
You're all set! You can now explore the ShadowSpeak application in your web browser and start developing new features or making changes to existing ones. Any changes you make to the frontend or backend code will automatically be reflected in the development server.

**8. Accessing the Application:**
Once both the backend and frontend servers are running, you can access the ShadowSpeak application by navigating to `http://localhost:3000` in your web browser.

That's it! You've successfully set up your development environment for ShadowSpeak. Happy coding!

**Usage:**
1. **Sign Up/Sign In:** Users can sign up for an account or sign in anonymously to start using ShadowSpeak.
2. **Explore:** Browse through the various sections of the platform, including Q&A, Polls, and Confessions.
3. **Interact:** Ask questions, provide answers, create polls, participate in polls, and share confessions anonymously.
4. **Engage:** Join discussions, share your opinions, and connect with other users while maintaining your anonymity.
5. **Moderate:** Report any inappropriate content using the moderation tools provided to ensure a positive user experience for all.

**Contributors:**
- Pratik Solanki
- Kushagra Gupta
- Vedant Jain
- Parth Kumar Singh

ShadowSpeak - where anonymity meets expression. Happy exploring!
