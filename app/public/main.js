$(document).ready(function () {

    ! function (n) {
        n.fn.menumaker = function (s) {
            var i = n(this),
                e = n.extend({
                    title: "Menu",
                    format: "dropdown",
                    sticky: !1
                }, s);
            return this.each(function () {
                return i.prepend('<div id="menu-button">' + e.title + "</div>"), n(this).find("#menu-button").on("click", function () {
                    n(this).toggleClass("menu-opened");
                    var s = n(this).next("ul");
                    s.hasClass("open") ? s.hide().removeClass("open") : (s.show().addClass("open"), "dropdown" === e.format && s.find("ul").show())
                }), i.find("li ul").parent().addClass("has-sub"), multiTg = function () {
                    i.find(".has-sub").prepend('<span class="submenu-button"></span>'), i.find(".submenu-button").on("click", function () {
                        n(this).toggleClass("submenu-opened"), n(this).siblings("ul").hasClass("open") ? n(this).siblings("ul").removeClass("open").hide() : n(this).siblings("ul").addClass("open").show()
                    })
                }, "multitoggle" === e.format ? multiTg() : i.addClass("dropdown"), e.sticky === !0 && i.css("position", "fixed"), resizeFix = function () {
                    n(window).width() > 1045 && i.find("ul").show(), n(window).width() <= 1045
                }, resizeFix(), n(window).on("resize", resizeFix)
            })
        }
    }(jQuery),
    function (n) {
        n(document).ready(function () {
            n("#cssmenu").menumaker({
                title: "MENÜ",
                format: "multitoggle"
            })
        })
    }(jQuery);

    /* slider owl Carousel */
    $("#banner-area .owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    /* isotop filter */
    var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows"
    })

    /* filter item on button onclick */
    $(".button-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
            filter: filterValue
        });
    });

    $(document).ready(function () {
        $("#ilk").trigger("click");
    });

    /* top sale owl-carousel */
    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    /* blogs owl-carousel */
    $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });

});