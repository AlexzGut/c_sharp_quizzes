"use strict";

const questions = 
[
    {
      "question": "What method is used to add MVC services to an ASP.NET Core project?",
      "options": [
        "AddControllers",
        "AddControllersWithViews",
        "AddMvc",
        "AddRazorPages"
      ],
      "answer": "AddControllersWithViews"
    },
    {
      "question": "What is the method used to configure the HTTP request pipeline in ASP.NET Core?",
      "options": [
        "ConfigureServices",
        "Configure",
        "UseRouting",
        "UseEndpoints"
      ],
      "answer": "Configure"
    },
    {
      "question": "Which method enables routing in an ASP.NET Core application?",
      "options": [
        "UseRouting",
        "UseEndpoints",
        "UseMvc",
        "MapControllerRoute"
      ],
      "answer": "UseRouting"
    },
    {
      "question": "What is the pattern for the default route in ASP.NET Core MVC?",
      "options": [
        "{controller}/{action}/{id?}",
        "{controller=Home}/{action=Index}/{id?}",
        "{controller}/{action}/{id}",
        "{controller=Default}/{action=Default}/{id?}"
      ],
      "answer": "{controller=Home}/{action=Index}/{id?}"
    },
    {
      "question": "What is the purpose of the UseEndpoints method?",
      "options": [
        "Enable routing",
        "Configure the request pipeline",
        "Map endpoints to routes",
        "Add MVC services"
      ],
      "answer": "Map endpoints to routes"
    },
    {
      "question": "Which segment of the default route specifies the controller?",
      "options": [
        "First",
        "Second",
        "Third",
        "None"
      ],
      "answer": "First"
    },
    {
      "question": "Which segment of the default route specifies the action method within the controller?",
      "options": [
        "First",
        "Second",
        "Third",
        "None"
      ],
      "answer": "Second"
    },
    {
      "question": "Which segment of the default route specifies an argument for the id parameter of the action method?",
      "options": [
        "First",
        "Second",
        "Third",
        "None"
      ],
      "answer": "Third"
    },
    {
      "question": "How does the URL 'http://localhost/Product/List/Guitars' map to the default route?",
      "options": [
        "Product controller, List action, id=Guitars",
        "Home controller, Index action, id=Guitars",
        "Product controller, Detail action, id=Guitars",
        "Home controller, List action, id=Guitars"
      ],
      "answer": "Product controller, List action, id=Guitars"
    },
    {
      "question": "What method can a controller use to return plain text to the browser?",
      "options": [
        "JsonResult",
        "ContentResult",
        "Content",
        "PlainTextResult"
      ],
      "answer": "Content"
    },
    {
      "question": "Which method is NOT recommended for creating URLs according to best practices?",
      "options": [
        "Use hyphens to separate words",
        "Prefer names as identifiers over numbers",
        "Avoid the use of query string parameters",
        "Use underscores to separate words"
      ],
      "answer": "Use underscores to separate words"
    },
    {
      "question": "Which of the following URLs follows best practices?",
      "options": [
        "https://www.murach.com/p/List?catId=1",
        "https://www.murach.com/product/list/guitars/page-1",
        "https://www.murach.com/p/Detail?id=1307",
        "https://www.murach.com/product/fender-special-edition-standard-stratocaster"
      ],
      "answer": "https://www.murach.com/product/list/guitars/page-1"
    },
    {
      "question": "Which attribute can be used to specify a route for a controller action?",
      "options": [
        "HttpGet",
        "HttpPost",
        "Route",
        "Action"
      ],
      "answer": "Route"
    },
    {
      "question": "Which method in the Product controller returns the detail of a product using attribute routing?",
      "options": [
        "Detail",
        "List",
        "Add",
        "Update"
      ],
      "answer": "Detail"
    },
    {
      "question": "What namespace is used for the Home controller in the Admin area?",
      "options": [
        "GuitarShop.Controllers",
        "GuitarShop.Areas.Admin.Controllers",
        "GuitarShop.Admin.Controllers",
        "GuitarShop.Areas.Controllers"
      ],
      "answer": "GuitarShop.Areas.Admin.Controllers"
    },
    {
      "question": "Which method maps controllers that use attribute routing in ASP.NET Core?",
      "options": [
        "MapDefaultControllerRoute",
        "MapControllerRoute",
        "MapControllers",
        "MapEndpoint"
      ],
      "answer": "MapControllers"
    },
    {
      "question": "What is the name of the method used to configure endpoints in ASP.NET Core?",
      "options": [
        "ConfigureEndpoints",
        "UseRouting",
        "MapEndpoints",
        "UseEndpoints"
      ],
      "answer": "UseEndpoints"
    },
    {
      "question": "Which method in the Product controller lists products based on category using attribute routing?",
      "options": [
        "List",
        "Detail",
        "Add",
        "Update"
      ],
      "answer": "List"
    },
    {
      "question": "What is the default controller specified in the default route pattern?",
      "options": [
        "Default",
        "Index",
        "Product",
        "Home"
      ],
      "answer": "Home"
    },
    {
      "question": "Which action method is set as the default action in the default route pattern?",
      "options": [
        "Detail",
        "Index",
        "List",
        "Home"
      ],
      "answer": "Index"
    }
  ];

  module.exports = questions;