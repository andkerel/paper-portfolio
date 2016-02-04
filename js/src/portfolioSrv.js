var portfolioData = function() {
    //portfolio items
    var data = [
        {
            "name": "Portfolio",
            "description": "You're looking at it. A site redesign and the opportunity to try out AngularJS.",
            "img": "",
            "href": "http://andreakereliuk.com",
            "github": "",
            "behance": "",
            "code": ["AngularJS", "Gulp", "SASS"]
        },
        {
            "name": "Raising the Roof",
            "client": "ecentricarts",
            "clientUrl": "http://www.ecentricarts.com",
            "description": "Working with a designer, created a custom Wordpress theme for Raising the Roof's site redesign. Incorporated custom templates for the homepage, blog, and events page, as well as a multi-purpose hybrid template. It was important for me to make it easy for anyone to enter content, so I also included tips, instructions, and upload guidelines where applicable in the CMS.",
            "img": "",
            "href": "http://raisingtheroof.org",
            "code": ["Wordpress", "Grunt", "SASS", "PHP", "Javascript", "Git"]
        },
        {
            "name": "Lingo",
            "description": "",
            "img": "",
            "href": "",
            "github": "",
            "behance": "",
            "code": ["Javascript", "jQuery", "AJAX", "API", "PHP", "SQL"]
        },
        {
            "name": "",
            "description": "",
            "img": "",
            "href": "",
            "github": "",
            "behance": "",
            "code": ["jQuery", "AJAX", "API"]
        }     
    ];

    //for the controller
    return {
        data: data,
        allCodeTypes: allCodeTypes()
    };

    //filter out duplicate code types for view toggle
    function allCodeTypes() {
        var typeList = [];
        //push all code types to one array
        for (var i = 0; i < data.length; i++) {
            Array.prototype.push.apply(typeList, data[i].code);
        }
        //remove duplicates
        var unique = function(xs) {
          return xs.filter(function(x, i) {
            return xs.indexOf(x) === i;
          });
        };
        var uniqueList = unique(typeList);
        return uniqueList;
    }

};

portfolioApp.factory("portfolioData", portfolioData);