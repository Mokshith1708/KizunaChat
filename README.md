# KizunaChat - A Messaging Service Prototype Web App

KizunaChat, derived from 'kizuna' (connect or bond in Japanese), is a web-based chat application designed to connect users. It is a messaging service prototype featuring user authentication, real-time messaging, group chat, and optional features such as AI-powered chatbots and video/audio calls.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [System Design](#system-design)
- [Optional Features](#optional-features)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features

- **User Registration & Authentication**: Secure user sign-up and login.
- **Text Messaging**: Real-time messaging between users.
- **Group Chat**: Create and join group conversations.
- **Real-time Updates**: Instant message delivery and notifications.
- **AI-Powered Chatbot**: An AI chatbot for user interaction.
- **Video/Audio Calling**: Real-time video and audio calls.

## Technology Stack

### Frontend

- **Framework**: [Next.js](https://nextjs.org/) - A React framework for server-side rendering and static site generation.
- **UI Libraries and Components**:
  - [Radix UI](https://www.radix-ui.com/) - Accessible and customizable UI components.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for custom designs.
  - [Lucide React](https://lucide.dev/) - React components for Lucide icons.
  - [React Spinners](https://www.npmjs.com/package/react-spinners) - Loading spinner components.
  - [Shadcn/UI](https://shadcn.dev/) - Reusable components and theming.
- **Form Handling**:
  - [React Hook Form](https://react-hook-form.com/) - Managing form state and validation.
- **Chatbot Integration**:
  - [Botpress Webchat](https://botpress.com/) - Integrating Botpress chatbots.
- **Real-time Communication**:
  - [ZEGOCLOUD UIKit](https://www.zegocloud.com/) - Prebuilt UI components for video and audio calling.
- **Utilities**:
  - [Date-fns](https://date-fns.org/) - Date manipulation.
  - [CLSx](https://www.npmjs.com/package/clsx) - Utility for class names.
  - [Sonner](https://www.npmjs.com/package/sonner) - Notification library.
- **Form Validation**:
  - [Zod](https://zod.dev/) - TypeScript-first schema validation library.

### Backend

- **Convex DB**: Utilized for real-time data management and synchronization. Convex simplifies handling data interactions by integrating directly with the frontend, providing efficient real-time updates and reactive features.
  - **Real-Time Data Management**: Handles data synchronization and real-time updates, reducing the need for traditional backend services.
  - **Integration**: Directly integrated with the frontend for streamlined data handling and communication.

- **Clerk** - Authentication service for user management and security.

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/Mokshith1708/KizunaChat
    cd KizunaChat
    ```

2. **Install Dependencies:**

    (Note: Ensure you have Node.js version v22.8.0 installed)
    ```bash
    npm install
    ```

## Usage

1. **Start the Backend Server:**

    ```bash
    npx convex dev
    ```

2. **Start the App:**

    ```bash
    npm run dev
    ```

3. **Open the Application:**
   After running `npm run dev`, a link will be displayed in the terminal. Copy and paste this link into your browser to access the application.

4. **Login or Sign Up:**
   To use the application, you need to create an account. You can sign up using either:
   - Google account
   - Email and password
   
   After signing up, you can log in using your email and password or Google account credentials.

   ![alt text](image.png)

5. **Navigation Bar:**
   The navigation bar on the left side allows you to switch between friends and conversations, view user details, and log out.
   ![alt text](image-7.png)

6. **Friends Page:**
   Add friends by entering their email addresses. Ensure the friend has a KizunaChat account. You can test this by opening another browser or using a different account.
    ![alt text](image-1.png)


7. **Accept or Reject Friend Requests:**
   Manage friend requests on the Friends page. You will see requests and can accept or reject them accordingly.
   ![alt text](image-2.png)

8. **Conversations:**
   View all friends and groups. Notifications for unread messages are indicated. Clicking on notifications takes you to the chat window.
    ![alt text](image-3.png)

9. **Group Creation:**
   Create a new group by clicking the symbol in the top right corner of the Conversations page. Enter the necessary details and click "Create."
   ![alt text](image-4.png)

10. **Chat Option:**
    Click on a person or group to open the chat window. You can view all messages with timestamps. Use the top bar for calling and settings options.
    ![alt text](image-5.png)
    ![alt text](image-6.png)


11. **Chatbot:**
    Access the AI-powered chatbot by clicking the message symbol on the leftmost corner of the page. The chatbot can answer general questions.
    ![alt text](image-8.png)

12. **Calling Feature:**
    Use the call option in the menu to initiate a call. Note that there is no notification system for incoming calls; both users need to manually join the call.
    ![alt text](image-9.png)

## System Design

A comprehensive system design document is available in the [docs/SystemDesign.md](docs/SystemDesign.md). It includes architecture diagrams, component descriptions, and data flow.

## Optional Features

### AI-Powered Chatbot Integration
Integrated a ChatGPT-based bot from Botpress Webchat through APIs for general interaction.

### Video/Audio Calling
Integrated ZEGOCLOUD UIKit for video and audio calling. Note that the integration is limited to a certain amount of call time.

## Deployment
Guess what the project is deployed!! the project can be accessed at [Link](kizuna-chat.vercel.app)
. 

## Contributing

To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Create a pull request.



<!-- # KizunaChat - A Messaging Service Prototype Web App
KizunaChat, which means 'kizuna' (connect or bond in Japanese), is a web-based chat application designed to connect users. It is a messaging service prototype featuring user authentication, real-time messaging, group chat, and optional features such as AI-powered chatbots and video/audio calls.


## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [System Design](#system-design)
- [Optional Features](#optional-features)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Registration & Authentication**: Secure user sign-up and login.
- **Text Messaging**: Real-time messaging between users.
- **Group Chat**: Create and join group conversations.
- **Real-time Updates**: Instant message delivery and notifications.
- **AI-Powered Chatbot**: An AI chatbot for user interaction.
- **Video/Audio Calling**: Real-time video and audio calls.

## Technology Stack

### Frontend

- **Framework**: [Next.js](https://nextjs.org/) - A React framework for server-side rendering and static site generation.
- **UI Libraries and Components**:
  - [Radix UI](https://www.radix-ui.com/) - Accessible and customizable UI components.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for custom designs.
  - [Lucide React](https://lucide.dev/) - React components for Lucide icons.
  - [React Spinners](https://www.npmjs.com/package/react-spinners) - Loading spinner components.
  - [Shadcn/UI](https://shadcn.dev/) - Reusable components and theming.
- **Form Handling**:
  - [React Hook Form](https://react-hook-form.com/) - Managing form state and validation.
- **Chatbot Integration**:
  - [Botpress Webchat](https://botpress.com/) - Integrating Botpress chatbots.
- **Real-time Communication**:
  - [ZEGOCLOUD UIKit](https://www.zegocloud.com/) - Prebuilt UI components for video and audio calling.
- **Utilities**:
  - [Date-fns](https://date-fns.org/) - Date manipulation.
  - [CLSx](https://www.npmjs.com/package/clsx) - Utility for class names.
  - [Sonner](https://www.npmjs.com/package/sonner) - Notification library.
- **Form Validation**:
  - [Zod](https://zod.dev/) - TypeScript-first schema validation library.

### Backend

- **Convex DB**: Utilized for real-time data management and synchronization. Convex simplifies handling data interactions by integrating directly with the frontend, providing efficient real-time updates and reactive features.

  - **Real-Time Data Management**: Handles data synchronization and real-time updates, reducing the need for traditional backend services.
  - **Integration**: Directly integrated with the frontend for streamlined data handling and communication.

- **Clerk** - Authentication service for user management and security.


## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/Mokshith1708/KizunaChat
    cd KizunaChat
    ```

2. **Install Dependencies:**

    (Note: Please make sure Node version of v22.8.0 is installed)
    ```bash
    npm install
    ```

## Usage

1. **Start the Backend Server:**

    ```bash
    npx convex dev
    ```

2. **Start the App:**

    ```bash
    npm run dev
    ```
3. **Open the application:**
   After running "npm run dev" you can see a link. Copy and paste it in your browser.

4. **Login or Singup:** 
   To use the application you need to have an account.
   You have two options to Signup-
    - Signup through google account
    - Signup through gmail.
   
   So later you can login using gmail and passward of google account directly. Here is the image attached.
   ![alt text](image.png)

5. **Navigation bar:**
   On the left most side we have navigation bar which provides buttons to swtich from one friends to conversations and viceversa . also to see user details and logout.
   ![alt text](image-7.png)

6. **Friends Page:**
   We have a friends Page where we can add friends.
   Click on it to add friends. Pls make sure that the friend you want to add has a KizunaChat account. (Maybe you can open other browser or same browser with different account and login with different email to check.) Give that mail address and click send.
   ![alt text](image-1.png)

7. **Accepct or Reject the friendship:**
    you will get the requests in friends page you can accepct or reject on clicking corresponding symbols.
    Also you can see the number of requests on the friends page button as shown in picture.
    ![alt text](image-2.png)

8. **Conversations:**
   In this page we can see  all our friends and groups. if there are any notifications which you didn't see, then they also indicate it. Clicking on them takes you to chat option.
   ![alt text](image-3.png)

9. **Group Creation:**
    In the conversation page itself you have a symbol at top right corner clicking on which we can create a new group.
    Give the necessary details and click create.
    ![alt text](image-4.png)

10. **Chat-option:**
    Clicking on the person or group chat space will open to the right. where you have option to chat. You can see all the chats and time and date on which they were sent.
    You also have a bar at the top which have call and settings options. Settings can be used to leave group or remove group or delete chat correspondingly.
    ![alt text](image-5.png)
    ![alt text](image-6.png)

11. **Chat-Bot:**
   We have a message symbol at the left most corner of the page. Clicking on which opens a chat bot. It is a generalized chatbot. So you can ask any general questions.
   ![alt text](image-8.png)

12. **Calling Feature:**
    We have a call option in the menu. Clicking on which redirects to a call. (Please note that I didn't add any notification mechanism here to notify the user. So if one user calls another user also needs to click on the call button manually to join in the call. I will make sure that i will handle this in future.)
    ![alt text](image-9.png)


## System Design

A comprehensive system design document is available in the [docs/SystemDesign.md](docs/SystemDesign.md). It includes architecture diagrams, component descriptions, and data flow.

## Optional Features

### AI-Powered Chatbot Integration
Used the chatgpt based bot from Botpress Webchat and integrated it through some APIs.

### Video/Audio Calling
Used ZEGOCLOUD UIKit for integrating call option into my web app. Here also i used an api to integrate it. Also it is limited so we i have access for only few days with 10000 minutes of call time.

## Deployment

If deployed, the project can be accessed at [your-deployment-url.com](http://your-deployment-url.com). Deployment is managed on [AWS](https://aws.amazon.com/) or [Heroku](https://www.heroku.com/).

## Contributing

To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Create a pull request.

 -->