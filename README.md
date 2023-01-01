 ![GitHub](https://img.shields.io/github/license/BEPb/README)
 ![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
# Canadian Chamber Of Commerce
![landing page](https://user-images.githubusercontent.com/73742471/210173152-6090466b-6efb-4a63-a6bb-782a0c8cab3a.png)
## Table of Contents
- [Project Description](#project-description)
- [Motivation](#motivation)
- [Code Styles](#code-styles)
- [Tools and Frameworks](#tools-and-frameworks)
- [Features](#features)
  * [Admin Functionalities](#administrator)
  * [Instructor Functinalities](#instructor)
  * [Corporate Trainee Functinalities](#corporatetrainee)
  * [Individual Trainee Functinalities](#individualtrainee)
  * [guest Functionalities](#guest)
- [API References](#api-references)
  * [Guest (Course) router](#guest-router)
  * [Instructor router](#instructor-router)
  * [Trainee router](#trainee-router)
  * [Admin router](#admin-router)
  * [Authentication router](#authentication-router)
- [Contributing](#contributing)
- [Credits](#credits)
- [Licence](#Licence)

## Project Description

### Course 
Advanced Computer Lab (CSEN 704), Winter 2022

### Theme
The theme of the project, is to create a complete Online Learning System. An Online
Learning System is a web application through which individuals can attend pre-recorded
courses online. Existing web applications include but are not limited to Coursera, Udemy,
LinkedIn Learning, Great Learning and Udacity.


### Overview 
This project followed the Agile Methodology; meaning it was splited into Sprints, with
each Sprint lasting a set amount of time and a fully functioning version of the project
with the specified System Requirements should be submitted and evaluated.

### Objectives
- Learn how to properly use the Agile Methodology to plan out a project and develop
the software.
- Learn the process of following a given set of System Requirements to develop a
software.
- Learn to research and master the use of the MERN Stack.
- Learn how to work together as a team on GitHub.

## Motivation
This project is done as a simulation to real company flow where all team members contribuite together for a final project 
## Code Styles
The project follows the  [ MVC ](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)design pattern ,MVC is a software architectural pattern commonly used for developing user interfaces that divide the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user , So the Files in the backend was divided into the M (models) where the schema of the models exist which represent the core of the database , the C (controller) where the functions needed for the routes exists and the V (views) the view in MERN stack is represented by the react frontend server. Also the routes in our project was abstracted from the controller function as shown in [ API References](#api-references)

## Tools and Frameworks
![MERN_STACK](https://miro.medium.com/max/1400/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg)

### What is the MERN Stack?
MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

- MongoDB - document database
- Express(.js) - Node.js web framework
- React(.js) - a client-side JavaScript framework
- Node(.js) - the premier JavaScript web server

Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js the popular and powerful JavaScript server platform. Regardless of which variant you choose, ME(RVA)N is the ideal approach to working with JavaScript and JSON, all the way through.

### How does the MERN stack work?
The MERN architecture allows you to easily construct a 3-tier architecture (frontend, backend, database) entirely using JavaScript and JSON.

![MERN_ARCH](https://webimages.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png?auto=format%2Ccompress)

#### - React.js Front End
The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple Components, connect them to data on your backend server, and render them as HTML.

React’s strong suit is handling stateful, data-driven interfaces with minimal code and minimal pain, and it has all the bells and whistles you’d expect from a modern web framework: great support for forms, error handling, events, lists, and more.

#### - Express.js and Node.js Server Tier
The next level down is the Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.js,” and that is indeed exactly what it is. Express.js has powerful models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses.

By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js front-end, you can connect to Express.js functions that power your application. Those functions in turn use MongoDB’s Node.js drivers, either via callbacks for using Promises, to access and update data in your MongoDB database.

#### - MongoDB Database Tier
If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you’re going to want a database that’s just as easy to work with as React, Express, and Node.

That’s where MongoDB comes in: JSON documents created in your React.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval. Again, if you’re building in the cloud, you’ll want to look at Atlas. If you’re looking to set up your own MERN stack, read on!

## Features
We have four main users in our website: 

# Features common for all users except guest:

- Log in using his email and password.

![log in](https://user-images.githubusercontent.com/83594429/210078803-642f4a78-123c-4543-a33d-5b5c35b62417.PNG)  

- Log out from the website
<img width="290" alt="image" src="https://user-images.githubusercontent.com/57245606/210161314-5ac10024-c0b8-4577-817b-f9e033c32588.png">


### Administrator


- Add another admin to the website.

![add admin](https://user-images.githubusercontent.com/83594429/210079303-76a4faf6-3856-4dbf-9a06-ec79b78828d7.PNG)

- Add corporate trainee to the website.

![add corporate trainee](https://user-images.githubusercontent.com/83594429/210079759-09e97b3e-a1ac-4ff6-b375-fd67856b8ff5.PNG)

- Add instructor to the website.

![Add instructor](https://user-images.githubusercontent.com/83594429/210079794-65e12eb2-97a0-41f3-828c-9d5c4ba5f36a.PNG)

- View the reports and solve it.

![solve problems](https://user-images.githubusercontent.com/83594429/210080839-d4e492f1-ff01-42e1-8cea-19c0cb079bd4.PNG)

- View the courses enroll requests and all the details of the request

![Enroll request](https://user-images.githubusercontent.com/83594429/210083256-24ffe185-40ef-4200-b566-837bb5bc019f.PNG)

- View refund requests and approved them or not

![refund requests](https://user-images.githubusercontent.com/83594429/210082781-09110a9c-9d35-41ce-a467-a17622e210f8.PNG)

- Add promotions to any course in the website and specify the percent of discount and the end time of the discount

![add promotions](https://user-images.githubusercontent.com/83594429/210082874-4a58a5da-df01-457c-9257-3a8f154651fc.PNG)


### Guest
- request access to a specific course they do not have access to!
<img width="513" alt="image" src="https://user-images.githubusercontent.com/57245606/210162051-000427a9-7690-4ee3-b476-941e48ea9c73.png">


### Corporate Trainee
- Sign Up for the webiste

<img width="1214" alt="image" src="https://user-images.githubusercontent.com/57245606/210162072-fdb0d8dd-694c-494f-b30a-bd5d76aaf87a.png">


### Instructor

- view the ratings and reviews on all his/her courses

- view and accept the contract which includes all the rights to the posted videos and materials as well as the % taken by the company on each video per --- registered trainee
- view all the titles of the courses given by him/her
<img width="1436" alt="image" src="https://user-images.githubusercontent.com/57245606/210162118-fbc1a0f0-4d3d-46f4-ad04-cff98d1f3779.png">

- filter the courses given by him/her based on a subject or price
<img width="683" alt="image" src="https://user-images.githubusercontent.com/57245606/210162151-c26e861d-2014-4452-96e6-663ceb149439.png">

- search for a course given by him/her based on course title or subject or instructor
<img width="645" alt="image" src="https://user-images.githubusercontent.com/57245606/210162158-6613ca16-c1f5-4760-8475-baf6d0d689cf.png">

- view the amount of money owed per month
<img width="682" alt="image" src="https://user-images.githubusercontent.com/57245606/210162140-f8e3c51b-44af-4005-9174-1df8ccc993e7.png">

- create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course
- upload a video link from YouTube under each subtitle and enter a short description of the video
- upload a video link from YouTube as a preview to the course
- create a multiple choice exam with 4 choices per question
<img width="797" alt="image" src="https://user-images.githubusercontent.com/57245606/210162174-a9e4ab94-048d-4f8a-9f46-dc9c4afd6f0a.png">

- set the answers (not visible for the trainee) for multiple choice exercises
<img width="775" alt="image" src="https://user-images.githubusercontent.com/57245606/210162185-cce2f182-db8e-466c-9372-80f1f3317201.png">

- view his/her rating and reviews as an instructor
- edit his/her mini biography or email
<img width="675" alt="image" src="https://user-images.githubusercontent.com/57245606/210162199-d28d588b-ddd4-4174-890d-15768371b9dc.png">
<img width="657" alt="image" src="https://user-images.githubusercontent.com/57245606/210162207-b5cb3ab6-181c-4b25-a2af-b032317e3595.png">


- define a promotion for the course (% discount) and for how long
<img width="602" alt="image" src="https://user-images.githubusercontent.com/57245606/210162219-5e09281b-80f7-4154-abe4-6ddc84473a94.png">


### Individual Trainee
- view the amount available in their wallet from refunded courses
- enter their credit card details to pay for a course they want to register for
- pay for a course
- request a refund only if less than 50% of the course has been attended



### Individual Trainee/Corporate Trainee

- open all the items inside a course he/she is registered for including videos and excercises
- rate an instructor 
- rate a course
- solve a multiple choice exercise by choosing the correct answer
- submit the answers to the exercise after completing it
- view his/her grade from the exercise
- view the questions with the correct solution to view the incorrect answers
- watch a video from a course he/she is registered for
- see his/her progress in the course as a percentage of how much of the course has been completed so far
- receive a certificate as a PDF after completing the course via email
- download the certificate as a PDF from the website
- write notes while watching the video
- download the notes as a PDF
- see a list of all the courses he/she is enrolled in on their profile



### guest/instructor/individual trainee 

- view and accept the website/ company refund/ payment policy while signing up
- view the price of each course
- filter the courses based on price (price can be FREE)
- choose a course from the results and view (but not open) its details including course subtitles, excercises , total hours of each subtitle, total hours of the course and price (including % discount if applicable) according to the country selected


### guest/instructor/individual trainee/corporate trainee

- select their country 
<img width="1041" alt="image" src="https://user-images.githubusercontent.com/57245606/210165011-d9c88eb2-de15-45fd-966b-b20563c8b7dd.png">

- filter the courses based on a subject and/or rating
<img width="1036" alt="image" src="https://user-images.githubusercontent.com/57245606/210165043-b18a8f5f-eaed-4b77-858c-3599119a4900.png">

- search for a course based on course title or subject or instructor
<img width="999" alt="image" src="https://user-images.githubusercontent.com/57245606/210165018-dc72fc57-342f-4d43-9830-4f6fd6488d87.png">

- view a preview video of the course and the course outline before registering for it
<img width="915" alt="image" src="https://user-images.githubusercontent.com/57245606/210165032-46b01163-1686-4aa7-9405-5077f7e3201a.png">

- view the most viewed/ most popular courses
<img width="1427" alt="image" src="https://user-images.githubusercontent.com/57245606/210165058-71678e3f-b556-46db-a5f0-b2d3dd2fcbf9.png">

- view all the titles of the courses available including the total hours of the course and course rating
<img width="1190" alt="image" src="https://user-images.githubusercontent.com/57245606/210165065-8ace7c5e-df1c-45b1-97e5-9bc65b734535.png">


### /instructor/individual trainee/corporate trainee

- receive an email to change a forgotten password
- change his/her password
<img width="623" alt="image" src="https://user-images.githubusercontent.com/57245606/210165084-a834b749-e554-4586-b130-86d808673098.png">

- report a problem with a course. The problem can be "technical", "financial" or "other"
<img width="881" alt="image" src="https://user-images.githubusercontent.com/57245606/210165096-1dab93a4-a18f-4fe5-9e4a-72f9ad654bda.png">

- see all previously repoted problems and their statuses
<img width="1437" alt="image" src="https://user-images.githubusercontent.com/57245606/210165106-f8b8484f-5c8b-436f-822c-2d625346d2dc.png">

- follow up on an unresolved problem
<img width="1310" alt="image" src="https://user-images.githubusercontent.com/57245606/210165111-f2a20630-f912-42e9-b62a-ee258db0c2f6.png">

## API References
Our APIs is divided into four APIs :
### Guest Router
#### Route : (`/course`)

#### GET Courses
 - Route : `/listCourses` 
 - Request type : `get`
#### GET Specefic course
 - Route : `/listCourses/:id` 
 - Request type : `get`
 - Request Header : {`id:'courseId`}
#### GET most popular courses
 - Route : `/mostpopular` 
 - Request type : `get`
#### Search for a course 
 - Route : `/listCourses/search` 
 - Request type : `get`
 - Request query : {`search:'search fields`}


### Instructor Router
#### Route : (`/instructor`)
#### Create Course
- Route : `/addCourse`
- Request type : `post`
- Request Body : 
 `{
  title: 'Full Mern Stack ',
  price: '180',
  description: 'MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node),with React.js',
  subejct: 'programming',
  language: 'English',
  imgUrl: '[!imageLink]',
  coursePreviewUrl :[!CoursePreviewLink],
  subtitles :[Array(subtitle)]
}
`
#### Create Exam
- Route : `/setExam` `/setFinalExam`
- Request type : `post`
- Request Body : 
 `{
  subtitleId: 'mongoose.type.objectId()',
  courseId: 'mongoose.type.objectId()',
  questions: [Array(questions)]
}
`
#### Report problem
- Route : `/reportProblem` 
- Request type : `post`
- Request Body : 
 `{
  reportType: 'technical',
  problemTitle 'Video Quality',
  courseId: 'mongoose.type.objectId()',
  description: 'The video quality is very low'
}
`
#### viewReportedProblems
 - Route : `/viewReportedProblems` 
 - Request type : `get`
 - Request Header : `is handled using the middleWare of authentication session which contains logged user token`
#### Own Courses
 - Route : `/listCourseTitles` 
 - Request type : `get`
 - Request Header : `{courseId: 'mongoose.type.objectId()'}`
  
#### View profit 
 - Route : `/profit` 
 - Request type : `get`
 - Request Header : `is handled using the middleWare of authentication session which contains logged user token`

#### View questions on courses 
 - Route : `/getQuestions` 
 - Request type : `get`
 - Request Header : `{courseId :'mongoose.type.objectId()'}`

#### reply for a question 
- Route : `/addReply` 
- Request type : `patch`
- Request Body : 
 `{
  questionId: 'mongoose.type.objectId()',
  reply :'you can use typeScript'
}
`
#### update Subtitles
- Route : `/updateSubtitle` 
- Request type : `patch`
- Request Body : 
 `{
  courseId:'mongoose.type.objectId()', subId'mongoose.type.objectId()':, linkDesc:'What is MernStack', linkUrl:'[videoUrl]', allowed:true}`

#### delete Subtitles
- Route : `/deletSubtitle` 
- Request type : `delete`
- Request Body : 
 `{
  courseId:'mongoose.type.objectId()', subId:'mongoose.type.objectId()', linkId:'mongoose.type.objectId()}`
### Trainee Router
#### Route : (`/individualtrainee`)

### Admin Router

#### Route : (`/admin`)

### Authentication Router
- Route : `/login` 
- Request type : `post`
- Request Body : 
 `{username :'ahned' , password : 'Ahmed@123'}`

- Route : `/signUp` 
- Request type : `post`
- Request Body : 
 `{username :'ahned' , password : 'Ahmed@123' , email : 'ahmed@gmail.com' , firstname:'ahmed' , lastname:'mohmaed'}`
  
- Route : `/logOut` 
- Request type : `post`
-Request header : `is handled using the middleWare of authentication session which contains logged user token`



## Contributing
Anyone who would like to contribute in the project please send me an E-mail on [hossamelfarr@gmail.com](hossamelfarr@gmail.com)

## Credits
|Contributers|Github Account|
|---|---|
|Yehea Eldib | [yehea eldib](https://github.com/yehiaeldib)|
|Hossam El Far| [hossam elfar](https://github.com/Terror-1)|
|Ahmed Azooz|[ahmed azooz](https://github.com/A3zooz)|
|Adham Haggag|[adham hagag](https://github.com/Haggag23)|
|Abdullah Fouad|[abdullah fouad](https://github.com/Abdullah204)|

### Licence 
 This project is licenced under [MIT LICENCE](/LICENSE.md)
