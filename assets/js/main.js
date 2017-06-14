$(document).ready(function() {

    console.log('hello world!')

    var data = {
        title: "Beside the Park",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };

    var template = $('#header').html();
    console.log(template);


    var compiledTemplate = Handlebars.compile(template);
    console.log(compiledTemplate);

    // $('#page').html(compiledTemplate(data));

    var html = compiledTemplate(data);
    console.log(html)

    $('#page').append(html);

    // $('#page').append(Handlebars.templates.index(data));

    var CreateConsole = () => {
        console.log("ES6!");

    }

    CreateConsole();

});
