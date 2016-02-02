var source   = $("#projects-template").html();
var template = Handlebars.compile(source);
var data = { projects: [
    {name: "alan", image: "Alan", description: "Johnson" },
    {name: "alan", image: "Alan", description: "Johnson" },
    {name: "alan", image: "Alan", description: "Johnson" }
  ]};
$("#projects").html(template(data));
