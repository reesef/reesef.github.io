var source   = $("#projects-template").html();
var template = Handlebars.compile(source);
var data = { projects: [

    { name: "Browse contests - 99designs",
      image: "images/projects/browse.png",
      description: "kdjflksd sdklfklsfj k" },

    { name: "Responsive contests - 99designs",
      image: "images/projects/contest-page.png",
      description: "Johnson sdkfjs skldfj" },

    { name: "Fullscreen design viewer - 99designs",
      image: "images/projects/------",
      description: "Johnson sdkfjs skldfj" },

    { name: "Messaging - 99designs",
      image: "images/projects/------",
      description: "Johnson sdkfjs skldfj" },

    { name: "Niño",
      image: "images/projects/------",
      description: "Johnson sdkfjs skldfj" },

    { name: "Landscaping.io",
      image: "images/projects/------",
      description: "Johnson sdkfjs skldfj" },

    { name: "Totoapp.com",
      image: "images/projects/------",
      description: "Johnson sdkfjs skldfj" }
]};

$("#projects").html(template(data));
