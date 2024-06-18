"use strict";

const questions = 
[
    {
      "question": "What is the main benefit of the MVC pattern?",
      "options": [
        "Easier team collaboration",
        "Poor performance",
        "Limited control over HTML",
        "Lack of support for automated testing"
      ],
      "answer": "Easier team collaboration"
    },
    {
      "question": "When was ASP.NET Core MVC released?",
      "options": [
        "2002",
        "2007",
        "2015",
        "2020"
      ],
      "answer": "2015"
    },
    {
      "question": "Which component in the MVC pattern handles user interface generation?",
      "options": [
        "Model",
        "View",
        "Controller",
        "Middleware"
      ],
      "answer": "View"
    },
    {
      "question": "What does HTTP stand for?",
      "options": [
        "Hypertext Transfer Protocol",
        "Hyperlink Text Protocol",
        "Hypertext Transmission Protocol",
        "Hyperlink Transfer Protocol"
      ],
      "answer": "Hypertext Transfer Protocol"
    },
    {
      "question": "Which file in an ASP.NET Core MVC project contains the method for configuring services?",
      "options": [
        "Startup.cs",
        "Program.cs",
        "AppSettings.json",
        "Controller.cs"
      ],
      "answer": "Startup.cs"
    },
    {
      "question": "Which protocol is used for secure communication over a network?",
      "options": [
        "HTTP",
        "HTTPS",
        "TCP/IP",
        "FTP"
      ],
      "answer": "HTTPS"
    },
    {
      "question": "What is the role of the controller in the MVC pattern?",
      "options": [
        "Generating user interface",
        "Data access and business logic",
        "Handling requests and passing data",
        "Editing the content of a response"
      ],
      "answer": "Handling requests and passing data"
    },
    {
      "question": "Which IDE is integrated with features like IntelliSense and automatic compilation for ASP.NET Core MVC?",
      "options": [
        "Eclipse",
        "NetBeans",
        "Visual Studio",
        "Atom"
      ],
      "answer": "Visual Studio"
    },
    {
      "question": "What is a drawback of the MVC pattern?",
      "options": [
        "Requires more work to set up",
        "Poor performance",
        "Limited control over HTML",
        "Lack of support for automated testing"
      ],
      "answer": "Requires more work to set up"
    },
    {
      "question": "Which command is used to compile and run an app in Visual Studio Code?",
      "options": [
        "Ctrl+R",
        "F5",
        "Ctrl+F5",
        "Ctrl+Shift+B"
      ],
      "answer": "F5"
    },
    {
      "question": "What is the primary function of middleware in an ASP.NET Core MVC application?",
      "options": [
        "Generate the user interface",
        "Access the database",
        "Handle requests and responses",
        "Compile the application"
      ],
      "answer": "Handle requests and responses"
    },
    {
      "question": "What is state in the context of a web application?",
      "options": [
        "The current status of data for a single user",
        "A programming language",
        "A type of middleware",
        "A static web page"
      ],
      "answer": "The current status of data for a single user"
    },
    {
      "question": "What is the default URL pattern for routing in ASP.NET Core MVC?",
      "options": [
        "{controller}/{action}/{id?}",
        "{action}/{controller}/{id?}",
        "{controller}/{id}/{action?}",
        "{action}/{id}/{controller?}"
      ],
      "answer": "{controller}/{action}/{id?}"
    },
    {
      "question": "Which of the following is a static web page processing example?",
      "options": [
        "GET / HTTP/1.1",
        "POST /login HTTP/1.1",
        "PUT /update HTTP/1.1",
        "DELETE /remove HTTP/1.1"
      ],
      "answer": "GET / HTTP/1.1"
    },
    {
      "question": "Which of the following platforms can ASP.NET Core run on?",
      "options": [
        "Windows only",
        "Windows and macOS only",
        "Windows, macOS, and Linux",
        "Windows, macOS, Linux, and Android"
      ],
      "answer": "Windows, macOS, and Linux"
    },
    {
      "question": "Which method is used to define routes in ASP.NET Core MVC?",
      "options": [
        "UseEndpoints",
        "UseRouting",
        "MapControllers",
        "MapRoutes"
      ],
      "answer": "UseEndpoints"
    },
    {
      "question": "What is the purpose of the ConfigureServices method in Startup.cs?",
      "options": [
        "To configure the HTTP request pipeline",
        "To add services to the dependency injection container",
        "To set up routing",
        "To handle exceptions"
      ],
      "answer": "To add services to the dependency injection container"
    },
    {
      "question": "Which component of the MVC pattern contains the business logic?",
      "options": [
        "Model",
        "View",
        "Controller",
        "Middleware"
      ],
      "answer": "Model"
    },
    {
      "question": "What is the primary advantage of using HTTPS over HTTP?",
      "options": [
        "Faster communication",
        "Secure communication",
        "Simpler protocol",
        "Better compatibility"
      ],
      "answer": "Secure communication"
    },
    {
      "question": "Which tool is used to create and manage ASP.NET Core MVC applications?",
      "options": [
        "Eclipse",
        "NetBeans",
        "Visual Studio",
        "IntelliJ IDEA"
      ],
      "answer": "Visual Studio"
    }
  ];

  module.exports = questions;