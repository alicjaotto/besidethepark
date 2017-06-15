$(document).ready(function () {

    console.log('hello world!'

    //header scripts and data
    );const headerTemplate = $('#header-template').html();
    const compiledHeaderTemplate = Handlebars.compile(headerTemplate);

    const header_data = {
        logo: "Beside the Park",
        introduction_title: "Lorem ipsum",
        introduction_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        menu_png: "img/menu.png",
        search_png: "img/search.png",
        links: [{ menu_link: "#about", text: "about" }, { menu_link: "#portfolio", text: "portfolio" }, { menu_link: "#contact", text: "contact us" }]

    };

    const headerHTML = compiledHeaderTemplate(header_data);

    $('header').append(headerHTML);

    //sction about scripts and data
    const aboutTemplate = $('#about-template').html();
    const compiledAboutTemplate = Handlebars.compile(aboutTemplate);

    const about_data = {
        title: "Lorem ipsum",
        paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        paragraph2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        paragraph3: "eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        paragraph4: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        paragraph5: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
    };

    const aboutHTML = compiledAboutTemplate(about_data);

    $('#about').append(aboutHTML);

    //sction offer scripts and data
    const offerTemplate = $('#offer-template').html();
    const compiledOfferTemplate = Handlebars.compile(offerTemplate);

    const offer_data = {
        offer1_title: "Built to last",
        offer1_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        offer1_link: "http://findmore.org",
        offer1_link_title: "Find out more",

        offer2_title: "Our clients",
        offer2_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        offer2_link: "'http://findmore.org'",
        offer2_link_title: "Get insights",

        offer3_title: "Sign up & see why",
        offer3_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        offer3_link: "http://findmore.org",
        offer3_link_title: "Get started now",

        offer4_title: "Perfect pictures",
        offer4_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        offer4_link: "http://findmore.org",
        offer4_link_title: "Find out more"
    };

    const offerHTML = compiledOfferTemplate(offer_data);

    $('#offer').append(offerHTML);
});