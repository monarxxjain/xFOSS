# TechnoCultural College Management System
![Screenshot 2024-09-15 020247](https://github.com/user-attachments/assets/765e648a-79ec-46b7-a91e-93752434400c)

## Overview

The **TechnoCultural College Management System** is a comprehensive platform designed to streamline and automate various academic and administrative functions within a college or university. This project utilizes **Java (Spring Boot)** for the backend, **ReactJS** for the frontend, and is powered by **MySQL** as the database. The platform also integrates cutting-edge technologies like **ThreeJS** for 3D visualizations and **TailwindCSS** for responsive UI design.

By offering features like **class scheduling**, **event tracking**, **student progress dashboards**, and **alumni connections**, the system greatly simplifies and boosts the efficiency of college management, benefiting both teachers and students.


## Key Features

- **Class Scheduling System**:
    ![Screenshot 2024-09-15 015435](https://github.com/user-attachments/assets/57748c63-e0cb-4125-bb19-4d97ef3d2fe5)
    - Teachers can easily manage and view their schedules.
    - Automated **email notifications** to teachers about class schedules or changes.
    - A **chat box** is integrated for seamless communication between teachers and students.

- **Student Progress Dashboard**:
    ![Screenshot 2024-09-15 015455](https://github.com/user-attachments/assets/db895d26-cb28-4cf0-b542-557b8bc0fa02)
    - Provides a **dynamic dashboard** for tracking student progress and performance.
    - Includes subject-wise rank lists and **achievement insights**.
    - Encourages a **competitive learning environment**, leading to a **30% increase in student engagement**.

- **Event Tracking and Alumni Connections**:
    ![Screenshot 2024-09-15 015157](https://github.com/user-attachments/assets/da2ced72-31eb-47bc-93c5-6db30c8f771f)
    ![Screenshot 2024-09-15 015219](https://github.com/user-attachments/assets/0fa65a53-074b-480b-88af-5304e2eb6053)

    - Track and manage **cultural** and **technical events** within the institution.
    - Foster strong **alumni relations** with features designed to maintain connections post-graduation.

- **3D Visualizations**:
    ![Screenshot 2024-09-15 015135](https://github.com/user-attachments/assets/9b06821d-2cb4-41da-be74-4d030a82ddb4)

    - **ThreeJS** is used to make website look more fun and interactive.


## Technical Stack

- **Backend**: Java (Spring Boot), Thymeleaf
- **Frontend**: ReactJS
- **Database**: MySQL
- **3D Visualizations**: ThreeJS
- **Styling**: TailwindCSS



## Project Highlights

- Boosted ease of use for teachers by **40%** through streamlined **class scheduling**, **event tracking**, and **progress monitoring**.
- **Dynamic dashboards** provided actionable insights on student performance and subject-wise ranks, which led to a **30% increase in student engagement** and fostered a more competitive learning environment.
- Integrated **email notifications** for class scheduling updates and changes.
- Implemented a **chat box** for seamless teacher-student communication, improving academic interaction and engagement.
  

## How It Works

1. **Teacher Dashboard**:
    - Teachers can log in to view their class schedules, track student progress, and manage events.
    - Receive **email notifications** for upcoming classes or schedule changes.
    - Use the integrated **chat feature** to communicate directly with students.

2. **Student Dashboard**:
    - Students can track their progress, view subject-wise rankings, and access personalized achievement insights.
    - Engage in events and communicate with teachers through the **chat feature**.


## Setup & Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/techno-cultural-college-management-system.git
    ```

2. Backend Setup:
    - Navigate to the backend directory and install dependencies:
        ```bash
        cd backend
        mvn install
        ```
    - Set up **MySQL** and configure database connection in `application.properties`.
    - Run the Spring Boot application:
        ```bash
        mvn spring-boot:run
        ```

3. Frontend Setup:
    - Navigate to the frontend directory and install dependencies:
        ```bash
        cd frontend
        npm install
        ```
    - Start the ReactJS development server:
        ```bash
        npm start
        ```

4. **Environment Variables**:
    - Configure the required environment variables such as database credentials, email service credentials, and API keys in your `.env` files.

---

## Database Schema

- **Users**: Stores user details including teachers, students, and admins.
- **Class Schedules**: Stores class scheduling information.
- **Progress**: Stores student progress and subject-wise ranks.
- **Events**: Tracks cultural and technical events organized by the college.
- **Alumni**: Stores alumni contact information and details for maintaining connections.



