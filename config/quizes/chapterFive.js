"use strict";

const questions = 
[
  {
    "question": "How do you change the default browser in Visual Studio?",
    "options": ["Press F12", "Use the Preferences menu", "Use the Start drop-down menu and Web Browser menu", "Use the Options menu"],
    "answer": "Use the Start drop-down menu and Web Browser menu"
  },
  {
    "question": "Which key combination runs an app without debugging in Visual Studio?",
    "options": ["Ctrl+F5", "F5", "Shift+F5", "Alt+F5"],
    "answer": "Ctrl+F5"
  },
  {
    "question": "What is displayed in the Internal Server Error page?",
    "options": ["Name and description of the exception", "Stack trace", "Query strings, cookies, headers, and routing data", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "How can you open the developer tools in Chrome, Firefox, and Edge?",
    "options": ["Press F11", "Press F12", "Right-click and select View Source", "Use the Settings menu"],
    "answer": "Press F12"
  },
  {
    "question": "How do you set a breakpoint in Visual Studio?",
    "options": ["Click in the margin indicator bar", "Press F11", "Use the Settings menu", "Right-click and select Add Breakpoint"],
    "answer": "Click in the margin indicator bar"
  },
  {
    "question": "Which window allows you to view the values of variables within the scope of the current method?",
    "options": ["Output window", "Immediate window", "Locals window", "Watch window"],
    "answer": "Locals window"
  },
  {
    "question": "What is the purpose of the Immediate window in Visual Studio?",
    "options": ["To view variable values", "To execute statements", "To set breakpoints", "To manage projects"],
    "answer": "To execute statements"
  },
  {
    "question": "How do you run an app in multiple browsers in Visual Studio?",
    "options": ["Use the Settings menu", "Use the Start drop-down menu and select Browse With", "Press Ctrl+F5", "Press F12"],
    "answer": "Use the Start drop-down menu and select Browse With"
  },
  {
    "question": "What do tracepoints allow you to do in Visual Studio?",
    "options": ["Set breakpoints", "Log messages to the Output window", "View variable values", "Execute statements"],
    "answer": "Log messages to the Output window"
  },
  {
    "question": "Which command is used to Step Into a function during debugging?",
    "options": ["F5", "F10", "F11", "Shift+F11"],
    "answer": "F11"
  },
  {
    "question": "How can you view the rendered HTML and CSS styles in Chrome?",
    "options": ["Open the Network tab", "Open the Elements tab", "Use the Console tab", "Open the Performance tab"],
    "answer": "Open the Elements tab"
  },
  {
    "question": "What does the Autos window display?",
    "options": ["Information about all variables", "Information about variables used by the current and previous statement", "All console logs", "Current breakpoint information"],
    "answer": "Information about variables used by the current and previous statement"
  },
  {
    "question": "How can you display the Breakpoints window in Visual Studio?",
    "options": ["Select Debug -> Windows -> Breakpoints", "Press Ctrl+Shift+B", "Right-click and select View Breakpoints", "Use the View menu"],
    "answer": "Select Debug -> Windows -> Breakpoints"
  },
  {
    "question": "What can the Exception Helper dialog display?",
    "options": ["Exception message", "Stack trace", "Suggested fixes", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "How do you run an app with debugging in Visual Studio?",
    "options": ["Press F5", "Press Ctrl+F5", "Press Shift+F5", "Press Alt+F5"],
    "answer": "Press F5"
  },
  {
    "question": "What is a breakpoint used for in debugging?",
    "options": ["To log messages", "To stop execution at a specific point", "To view variable values", "To step over functions"],
    "answer": "To stop execution at a specific point"
  },
  {
    "question": "How do you remove all breakpoints in Visual Studio?",
    "options": ["Right-click and select Remove All Breakpoints", "Select Debug -> Delete All Breakpoints", "Press Ctrl+Shift+B", "Use the Breakpoints window"],
    "answer": "Select Debug -> Delete All Breakpoints"
  },
  {
    "question": "What is displayed in the Watch window?",
    "options": ["Console logs", "Breakpoints information", "Values of specified variables and expressions", "Network requests"],
    "answer": "Values of specified variables and expressions"
  },
  {
    "question": "How do you stop debugging in Visual Studio?",
    "options": ["Press F5", "Press Shift+F5", "Press F10", "Press Alt+F5"],
    "answer": "Press Shift+F5"
  },
  {
    "question": "What does pressing F12 do in most browsers?",
    "options": ["Opens developer tools", "Closes the browser", "Refreshes the page", "Opens a new tab"],
    "answer": "Opens developer tools"
  }
];

  module.exports = questions;