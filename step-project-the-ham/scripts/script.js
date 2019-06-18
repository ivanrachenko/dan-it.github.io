let contentLibrary = [//FIXME - move to data file???
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design1.jpg"
    },
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design2.jpg"
    },
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design3.jpg"
    },
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design4.jpg"
    },
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design5.jpg"
    },
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design6.jpg"
    },
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design7.jpg"
    },
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design8.jpg"
    },
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design9.jpg"
    },
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design10.jpg"
    },
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design11.jpg"
    },
    {
        category: "graphic-design",
        caption: "Graphic Design",
        source: "/works/graphic design/graphic-design12.jpg"
    },
    {
        category: "landing-page",
        caption: "Landing Page",
        source: "/works/landing page/landing-page1.jpg"
    },
    {
        category: "landing-page",
        caption: "Landing Page",
        source: "/works/landing page/landing-page2.jpg"
    },
    {
        category: "landing-page",
        caption: "Landing Page",
        source: "/works/landing page/landing-page3.jpg"
    },
    {
        category: "landing-page",
        caption: "Landing Page",
        source: "/works/landing page/landing-page4.jpg"
    },
    {
        category: "landing-page",
        caption: "Landing Page",
        source: "/works/landing page/landing-page5.jpg"
    },
    {
        category: "landing-page",
        caption: "Landing Page",
        source: "/works/landing page/landing-page6.jpg"
    },
    {
        category: "landing-page",
        caption: "Landing Page",
        source: "/works/landing page/landing-page7.jpg"
    },
    {
        category: "web-design",
        caption: "Web Design",
        source: "/works/web design/web-design1.jpg"
    },
    {
        category: "web-design",
        caption: "Web Design",
        source: "/works/web design/web-design2.jpg"
    },
    {
        category: "web-design",
        caption: "Web Design",
        source: "/works/web design/web-design3.jpg"
    },
    {
        category: "web-design",
        caption: "Web Design",
        source: "/works/web design/web-design4.jpg"
    },
    {
        category: "web-design",
        caption: "Web Design",
        source: "/works/web design/web-design5.jpg"
    },
    {
        category: "web-design",
        caption: "Web Design",
        source: "/works/web design/web-design6.jpg"
    },
    {
        category: "web-design",
        caption: "Web Design",
        source: "/works/web design/web-design7.jpg"
    },
    {
        category: "wordpress",
        caption: "WordPress",
        source: "/works/wordpress/wordpress1.jpg"
    },
    {
        category: "wordpress",
        caption: "WordPress",
        source: "/works/wordpress/wordpress2.jpg"
    },
    {
        category: "wordpress",
        caption: "WordPress",
        source: "/works/wordpress/wordpress3.jpg"
    },
    {
        category: "wordpress",
        caption: "WordPress",
        source: "/works/wordpress/wordpress4.jpg"
    },
    {
        category: "wordpress",
        caption: "WordPress",
        source: "/works/wordpress/wordpress5.jpg"
    },
    {
        category: "wordpress",
        caption: "WordPress",
        source: "/works/wordpress/wordpress6.jpg"
    },
    {
        category: "wordpress",
        caption: "WordPress",
        source: "/works/wordpress/wordpress7.jpg"
    },
    {
        category: "wordpress",
        caption: "WordPress",
        source: "/works/wordpress/wordpress8.jpg"
    },
    {
        category: "wordpress",
        caption: "WordPress",
        source: "/works/wordpress/wordpress9.jpg"
    },
    {
        category: "wordpress",
        caption: "WordPress",
        source: "/works/wordpress/wordpress10.jpg"
    }
];


let loadedContentCount = 0;
let loadingContentPortion = 12;

$(document).ready(() => {

    $(".navbar-menu .menu-item").click(function () {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });

    $(".tabs .tabs-caption li").click(function () {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".tabs")
            .find(".tab-content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });

    $(".filter .captions li").click(function () {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".filter");

        let category = $(this).attr('data-category');

        $(this).closest(".filter").find(".content img").each(function (i, item) {
            if ($(item).attr('data-category') == category || category == "all") {
                $(item).show();
            } else {
                $(item).hide();
            }
        })

    });

    $(".our-work .btn.load").click(function () {
        loadContent();
        if (loadedContentCount >= contentLibrary.length) {
            $(this).hide();
        }
    });

    randomizeArray(contentLibrary);
    loadContent();
    new Slider("#testimonial-slider");
});

function randomizeArray(arr) {
    arr.forEach(item => {
        item.sortOrder = Math.random();
    });
    arr.sort(function (o1, o2) {
        return o1.sortOrder - o2.sortOrder;
    });
}

function loadContent() {
    if (loadedContentCount < contentLibrary.length) {
        let tmp = loadedContentCount < contentLibrary.length - loadingContentPortion ? loadedContentCount + loadingContentPortion : contentLibrary.length;
        for (let i = loadedContentCount; i < tmp; i++) {

            let itemContainer = $("<div>").addClass("outer");
            $(".our-work .content").append(itemContainer);

            let item = $("<img />")
                .attr("src", "img" + contentLibrary[i].source)
                .attr("data-category", contentLibrary[i].category)
                .attr("draggable", false);
            $(itemContainer).append(item);

            let itemInfo = $("<div>").addClass("info")
                .append("<div class='info-btn-outer'>" +
                    "<div class='info-btn link'>" +
                    "<i class='fa fa-link' aria-hidden='true'></i>" +
                    "</div>" +
                    "<div class='info-btn search'>" +
                    "<i class='fa fa-search' aria-hidden='true'></i>" +
                    "</div>" +
                    "</div>")
                .append("<p class='title'>creative design</p>")
                .append("<p class='caption'>" + contentLibrary[i].caption + "</p>");
            $(itemContainer).append(itemInfo);

            loadedContentCount++;
        }
    }
}
