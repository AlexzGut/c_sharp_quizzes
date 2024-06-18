"use strict";

const questions = 
[
  {
    "question": "What are the three main components of the MVC pattern?",
    "options": ["Model-View-Controller", "Model-View-Component", "Module-View-Controller", "Module-View-Component"],
    "answer": "Model-View-Controller"
  },
  {
    "question": "What is the purpose of a primary key in an entity?",
    "options": ["To uniquely identify a record", "To store data in a database", "To create a relationship between tables", "To handle data transactions"],
    "answer": "To uniquely identify a record"
  },
  {
    "question": "Which file typically stores the connection string for a database?",
    "options": ["appsettings.json", "Startup.cs", "Program.cs", "DbContext.cs"],
    "answer": "appsettings.json"
  },
  {
    "question": "How does ASP.NET Core use dependency injection?",
    "options": ["To pass DbContext objects to controllers", "To manage HTTP requests", "To handle user authentication", "To create views dynamically"],
    "answer": "To pass DbContext objects to controllers"
  },
  {
    "question": "What is the role of the DbContext class in Entity Framework Core?",
    "options": ["To map entity classes to a database", "To handle HTTP requests", "To generate HTML content", "To configure middleware components"],
    "answer": "To map entity classes to a database"
  },
  {
    "question": "What does the Startup.cs file configure?",
    "options": ["The HTTP request and response pipeline", "Database connections", "User authentication", "Application settings"],
    "answer": "The HTTP request and response pipeline"
  },
  {
    "question": "What is the purpose of LINQ in ASP.NET Core?",
    "options": ["To query data from DbSet properties", "To configure middleware", "To manage user sessions", "To generate views"],
    "answer": "To query data from DbSet properties"
  },
  {
    "question": "How can you add NuGet packages for EF Core in Visual Studio?",
    "options": ["Using the NuGet Package Manager", "Editing the appsettings.json file", "Modifying the Startup.cs file", "Using the command line"],
    "answer": "Using the NuGet Package Manager"
  },
  {
    "question": "What is the purpose of a foreign key in an entity?",
    "options": ["To create a relationship between tables", "To store user input", "To manage data transactions", "To configure middleware components"],
    "answer": "To create a relationship between tables"
  },
  {
    "question": "Which tool can be used to create migration files in Entity Framework Core?",
    "options": ["Package Manager Console", "Visual Studio Code", "Command Prompt", "SQL Server Management Studio"],
    "answer": "Package Manager Console"
  },
  {
    "question": "What are the benefits of using the MVC pattern?",
    "options": ["Separation of concerns", "Easier to test individual components", "Easier to maintain", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "What is the role of a Razor view in an MVC web app?",
    "options": ["To generate the user interface", "To handle HTTP requests", "To manage database connections", "To configure middleware"],
    "answer": "To generate the user interface"
  },
  {
    "question": "What is the purpose of the @model directive in a Razor view?",
    "options": ["To create a strongly-typed view", "To manage user authentication", "To configure routing", "To define middleware components"],
    "answer": "To create a strongly-typed view"
  },
  {
    "question": "What are the benefits of using coding by convention in ASP.NET Core?",
    "options": ["It simplifies code and reduces configuration", "It enhances security", "It improves performance", "It provides better error handling"],
    "answer": "It simplifies code and reduces configuration"
  },
  {
    "question": "Which method can be used to add a new entity to the database in Entity Framework Core?",
    "options": ["Add", "Insert", "Create", "New"],
    "answer": "Add"
  },
  {
    "question": "What is the purpose of the HttpGet attribute in an MVC controller?",
    "options": ["To handle HTTP GET requests", "To handle HTTP POST requests", "To manage user authentication", "To configure routing"],
    "answer": "To handle HTTP GET requests"
  },
  {
    "question": "What does a CSS style sheet define in a web app?",
    "options": ["The appearance of the app", "The data model", "The middleware components", "The database schema"],
    "answer": "The appearance of the app"
  },
  {
    "question": "What is the function of the ViewBag property in an MVC controller?",
    "options": ["To transfer data from a controller to a view", "To manage user sessions", "To handle HTTP requests", "To configure middleware"],
    "answer": "To transfer data from a controller to a view"
  },
  {
    "question": "What is a Razor layout used for in an MVC web app?",
    "options": ["To define a common structure for multiple views", "To manage database connections", "To handle HTTP requests", "To create middleware components"],
    "answer": "To define a common structure for multiple views"
  },
  {
    "question": "What is the purpose of a Razor view start?",
    "options": ["To define common settings for Razor views", "To manage user authentication", "To configure routing", "To define middleware components"],
    "answer": "To define common settings for Razor views"
  }
];

  module.exports = questions;