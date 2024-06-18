"use strict";

const questions = 
[
  {
    "question": "What attribute is used to require a field in a model?",
    "options": ["[Required]", "[Optional]", "[MaxLength]", "[MinLength]"],
    "answer": "[Required]"
  },
  {
    "question": "What attribute is used to specify the valid range for a numeric field?",
    "options": ["[Range]", "[Length]", "[Value]", "[Scope]"],
    "answer": "[Range]"
  },
  {
    "question": "Which HTTP verb attribute indicates an action method handles GET requests?",
    "options": ["HttpGet", "HttpPost", "HttpPut", "HttpDelete"],
    "answer": "HttpGet"
  },
  {
    "question": "Which HTTP verb attribute indicates an action method handles POST requests?",
    "options": ["HttpGet", "HttpPost", "HttpPut", "HttpDelete"],
    "answer": "HttpPost"
  },
  {
    "question": "What method is used to return a view from a controller?",
    "options": ["View()", "Return()", "Render()", "Display()"],
    "answer": "View()"
  },
  {
    "question": "What tag helper is used to bind a label to a model property?",
    "options": ["asp-for", "asp-bind", "asp-model", "asp-label"],
    "answer": "asp-for"
  },
  {
    "question": "What is the correct format for specifying a layout in a Razor view?",
    "options": ["@{ Layout = \"_Layout\"; }", "@{ LayoutPage = \"_Layout\"; }", "@{ LayoutPath = \"_Layout\"; }", "@{ LayoutView = \"_Layout\"; }"],
    "answer": "@{ Layout = \"_Layout\"; }"
  },
  {
    "question": "Which property in the FutureValueModel class calculates the future value?",
    "options": ["CalculateFutureValue", "FutureValue", "ComputeValue", "DetermineValue"],
    "answer": "CalculateFutureValue"
  },
  {
    "question": "Which attribute is used to indicate that a method handles HTTP POST requests?",
    "options": ["HttpPost", "HttpGet", "HttpPut", "HttpDelete"],
    "answer": "HttpPost"
  },
  {
    "question": "What method is used to check if a model's state is valid?",
    "options": ["ModelState.IsValid", "ModelState.CheckValid", "ModelState.Validate", "ModelState.Verify"],
    "answer": "ModelState.IsValid"
  },
  {
    "question": "Which namespace is required for data validation attributes in a model?",
    "options": ["System.ComponentModel.DataAnnotations", "System.DataValidation", "System.ModelAnnotations", "System.ComponentModel.Validation"],
    "answer": "System.ComponentModel.DataAnnotations"
  },
  {
    "question": "What attribute is used to display a summary of validation messages in a view?",
    "options": ["asp-validation-summary", "asp-validation-display", "asp-validation-messages", "asp-validation-list"],
    "answer": "asp-validation-summary"
  },
  {
    "question": "Which attribute is used to bind an input field to a model property?",
    "options": ["asp-for", "asp-bind", "asp-model", "asp-input"],
    "answer": "asp-for"
  },
  {
    "question": "Which Razor syntax is used to declare a strongly-typed model in a view?",
    "options": ["@model", "@bind", "@type", "@declare"],
    "answer": "@model"
  },
  {
    "question": "In which folder should you create the _Layout.cshtml file?",
    "options": ["Views/Shared", "Views/Home", "Views/Layout", "Views/Common"],
    "answer": "Views/Shared"
  },
  {
    "question": "What is the purpose of the @RenderBody() method in a layout page?",
    "options": ["To render the content of the child view", "To include CSS styles", "To import JavaScript files", "To define the page title"],
    "answer": "To render the content of the child view"
  },
  {
    "question": "Which HTML helper method is used to create a form in a Razor view?",
    "options": ["<form asp-action>", "<form asp-submit>", "<form asp-route>", "<form asp-method>"],
    "answer": "<form asp-action>"
  },
  {
    "question": "What is the correct way to specify a label for a model property in a view?",
    "options": ["<label asp-for>", "<label asp-bind>", "<label asp-model>", "<label asp-label>"],
    "answer": "<label asp-for>"
  },
  {
    "question": "Which method is called to display the initial form in the Future Value app?",
    "options": ["HttpGet Index()", "HttpPost Index()", "HttpPut Index()", "HttpDelete Index()"],
    "answer": "HttpGet Index()"
  },
  {
    "question": "Which method is used to handle the form submission in the Future Value app?",
    "options": ["HttpPost Index()", "HttpGet Index()", "HttpPut Index()", "HttpDelete Index()"],
    "answer": "HttpPost Index()"
  }
];

  module.exports = questions;