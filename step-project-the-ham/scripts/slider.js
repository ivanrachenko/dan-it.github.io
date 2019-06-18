function Slider(elementSelector) {

    this.items = [
        {
            text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. "
                +
                "Morbi pulvinar odio eget aliquam facilisis. "
                +
                "Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis",
            name: "Ivan Rachenko",
            title: "Senior Java Developer",
            img: "img/photos/photo1.png"
        },
        {
            text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. "
                +
                "Morbi pulvinar odio eget aliquam facilisis. "
                +
                "Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis",
            name: "Yuliia Rachenko",
            title: "UI/UX Designer",
            img: "img/photos/photo2.png"
        },
        {
            text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. "
                +
                "Morbi pulvinar odio eget aliquam facilisis. "
                +
                "Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis",
            name: "Hasan Ali",
            title: "UX Designer",
            img: "img/photos/photo3.png"
        },
        {
            text: "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. "
                +
                "Morbi pulvinar odio eget aliquam facilisis. "
                +
                "Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis",
            name: "Pep Guardiola",
            title: "Manager",
            img: "img/photos/photo4.png"
        },
        {
            text: "VVsssm, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. ",
            name: "Leo Messi",
            title: "God",
            img: "img/photos/photo1.png"
        },
        {
            text: "Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.",
            name: "Mark Zuckerberg",
            title: "Owner",
            img: "img/photos/photo3.png"
        }
    ];

    this.scrolledItemsCount = 3;
    this.scrollOffset = 0;

    this.init = () => {
        this.elementSlider = $(elementSelector).addClass("slider");

        this.elementText = $("<p></p>").addClass("text");
        $(this.elementSlider).append(this.elementText);

        this.elementName = $("<p></p>").addClass("name");
        $(this.elementSlider).append(this.elementName);

        this.elementTitle = $("<p></p>").addClass("title");
        $(this.elementSlider).append(this.elementTitle);

        this.elementImgContainer = $("<div>").addClass("img-container");
        $(this.elementSlider).append(this.elementImgContainer);

        this.elementImg = $("<img>").addClass("img");
        $(this.elementImgContainer).append(this.elementImg);

        this.elementScrollContainer = $("<div>").addClass("scroll-container");
        $(this.elementSlider).append(this.elementScrollContainer);

        this.elementBtnPrev = $("<div>").addClass("slider-btn prev");
        $(this.elementBtnPrev).prop("disabled", true);
        $(this.elementScrollContainer).append(this.elementBtnPrev);

        this.elementListWindow = $("<div>").addClass("window");
        $(this.elementScrollContainer).append(this.elementListWindow);
        $(this.elementListWindow).click(this.onItemClick);

        this.elementList = $("<div>").addClass("list");
        $(this.elementListWindow).append(this.elementList);

        this.elementBtnNext = $("<div>").addClass("slider-btn next");
        $(this.elementScrollContainer).append(this.elementBtnNext);

        $(this.elementBtnPrev).click(this.scrollRight);

        $(this.elementBtnNext).click(this.scrollLeft);
    };

    this.addItems = () => {
        let self = this;
        this.itemWidth = 0;
        $(this.items).each(function (i, item) {

            let elementItemContainer = $("<div>").addClass("item-container");
            $(self.elementList).append(elementItemContainer);

            let elementItem = $("<img>").addClass("item");
            $(elementItem)
                .attr("src", item.img)
                .attr("data-text", item.text)
                .attr("data-name", item.name)
                .attr("data-title", item.title)
                .attr("data-img", item.img);
            $(elementItemContainer).append(elementItem);

            if (i == 0) {
                self.itemWidth = $(elementItemContainer).outerWidth(true);
                self.showInfo(elementItem);
            }
        });
        $(this.elementListWindow).width(this.itemWidth * this.scrolledItemsCount);
    };

    this.scrollItems = function (offset) {
        $(this.elementList).css("left", this.itemWidth * offset);
    };

    this.scrollRight = () => {
        if (this.scrollOffset < 0) {
            this.scrollItems(++this.scrollOffset);
        }
    };

    this.scrollLeft = () => {
        if (this.scrollOffset > -(this.items.length - this.scrolledItemsCount)) {
            this.scrollItems(--this.scrollOffset);
        }
    };

    this.showInfo = (element) => {
        this.elementText.text($(element).attr("data-text"));
        this.elementName.text($(element).attr("data-name"));
        this.elementTitle.text($(element).attr("data-title"));
        $(this.elementImg).attr("src", $(element).attr("data-img"))
    };

    this.onItemClick = (event) => {
        let element = document.elementFromPoint(event.clientX, event.clientY);
        if (element != null && element.classList.contains("item")) {
            this.showInfo(element);
        }
    };

    this.init();
    this.addItems();
}