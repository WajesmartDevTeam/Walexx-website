! function(e) {
    "use strict";
    e(window).on("scroll", function(a) {
        e(this).scrollTop() < 100 ? e(".main-header").removeClass("sticky") : e(".main-header").addClass("sticky")
    }), e(window).on("load", function() {
        e(window).scrollTop() >= 100 && e(".main-header").addClass("sticky")
    }), jQuery("img.svg").each(function() {
        let e = jQuery(this),
            a = e.attr("id"),
            t = e.attr("class"),
            s = e.attr("src");
        jQuery.get(s, function(s) {
            let n = jQuery(s).find("svg");
            void 0 !== a && (n = n.attr("id", a)), void 0 !== t && (n = n.attr("class", t + " replaced-svg")), !(n = n.removeAttr("xmlns:a")).attr("viewBox") && n.attr("height") && n.attr("width") && n.attr("viewBox", "0 0 " + n.attr("height") + " " + n.attr("width")), e.replaceWith(n)
        }, "xml")
    }), e("[data-bg-img]").css("background", function() {
        return "url(" + e(this).data("bg-img") + ") center center"
    }), retinajs();
    let a = function(e, a) {
        return void 0 === e ? a : e
    };
    e(".owl-carousel").each(function() {
        let t = e(this);
        t.owlCarousel({
            items: a(t.data("owl-items"), 1),
            margin: a(t.data("owl-margin"), 0),
            loop: a(t.data("owl-loop"), !0),
            smartSpeed: 450,
            autoplay: a(t.data("owl-autoplay"), !1),
            autoplayTimeout: a(t.data("owl-speed"), 8e3),
            center: a(t.data("owl-center"), !1),
            animateOut: a(t.data("owl-animate"), !1),
            nav: a(t.data("owl-nav"), !1),
            navText: ['<img src="assets/images/icons/angle_left.svg" class="svg">', '<img src="assets/images/icons/angle_right.svg" class="svg">'],
            dots: a(t.data("owl-dots"), !1),
            responsive: a(t.data("owl-responsive"), {})
        })
    }), e(window).on("load", function() {
        e("[data-animate]").each(function() {
            let a = e(this),
                t = a.data("animate"),
                s = a.data("duration"),
                n = a.data("delay");
            s = void 0 === s ? "0.6" : s, n = void 0 === n ? "0.1" : n, a.waypoint(function() {
                a.addClass("animated " + t).css({
                    "animation-duration": s + "s",
                    "animation-delay": n + "s"
                })
            }, {
                offset: "93%"
            })
        })
    }), e(".menu-trigger").on("click", function(a) {
        e(".damke_header").toggleClass("active"), e(".damke_menu-wrapper").toggleClass("full-menu"), e("body").toggleClass("damke_overlay-menu")
    }), e(".damke_main-menu").find("ul li").parents(".damke_main-menu ul li").addClass("has-sub-menu"), e(".damke_main-menu").find(".has-sub-menu").prepend('<span class="submenu-button"></span>'), e(".damke_main-menu").find(".submenu-button").on("click", function(a) {
        e(this).toggleClass("sub-menu-oppened"), e(this).siblings("ul").hasClass("open") ? e(this).siblings("ul").removeClass("open").slideUp("fast") : e(this).siblings("ul").addClass("open").slideDown("fast")
    }), e(".count").counterUp({
        delay: 30,
        time: 2e3
    }), e(".damke_video-btn").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-with-zoom",
        removalDelay: 300,
        zoom: {
            enabled: !0,
            duration: 300,
            easing: "ease-in-out"
        }
    }), e(".damke_case-study-menu li").on("click", function() {
        e(".damke_case-study-menu li").removeClass("active"), e(this).addClass("active");
        let a = e(this).attr("data-filter");
        e(".damke_case-list").isotope({
            filter: a
        })
    });
    var t, s = e('[data-trigger="map"]');
    s.length && (t = s.data("map-options"), window.initMap = function() {
        s.css("min-height", "670px"), s.each(function() {
            var a, s, n, o, i = e(this);
            t = i.data("map-options"), s = parseFloat(t.latitude, 10), n = parseFloat(t.longitude, 10), o = parseFloat(t.zoom, 10), a = new google.maps.Map(i[0], {
                center: {
                    lat: s,
                    lng: n
                },
                zoom: o,
                scrollwheel: !1,
                disableDefaultUI: !0,
                zoomControl: !1,
                styles: [{
                    featureType: "landscape.man_made",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ebebeb"
                    }]
                }, {
                    featureType: "landscape.natural",
                    elementType: "geometry",
                    stylers: [{
                        color: "#d0e3b4"
                    }]
                }, {
                    featureType: "landscape.natural.terrain",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.business",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.medical",
                    elementType: "geometry",
                    stylers: [{
                        color: "#fbd3da"
                    }]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{
                        color: "#bde6ab"
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#ffffff"
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#ffffff"
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "black"
                    }]
                }, {
                    featureType: "transit.station.airport",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#cfb2db"
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#c7e5fd"
                    }]
                }]
            }), a = new google.maps.Marker({
                position: {
                    lat: s,
                    lng: n
                },
                map: a,
                animation: google.maps.Animation.DROP,
                draggable: !1,
                icon: "assets/images/icons/locator-icon.png"
            })
        })
    }, initMap()), e(".damke_single-faq .damke_fq-question").on("click", function(a) {
        e(this).parents(".damke_single-faq").children(".collapse").hasClass("show") && (a.stopPropagation(), a.preventDefault())
    });
    let n = e(".damke_backToTop");
    if (n.length) {
        let a = 350,
            t = function() {
                e(window).scrollTop() > a ? n.addClass("show") : n.removeClass("show")
            };
        t(), e(window).on("scroll", function() {
            t()
        }), n.on("click", function(a) {
            a.preventDefault(), e("html,body").animate({
                scrollTop: 0
            }, 700)
        })
    }
    e("[data-countdown]").each(function() {
        let a = e(this);
        a.countdown(a.data("countdown"), function(a) {
            e(this).html('<ul class="nav justify-content-between">' + a.strftime("<li><span>%D</span><span>Days</span></li><li><span>%H</span><span>Hours</span></li><li><span>%M</span><span>Minutes</span></li><li><span>%S</span><span>Seconds</span></li>") + "</ul>")
        })
    }), e(window).on("load", function() {
        e(".preloader").fadeOut(2e3)
    }), e(".contact-form").on("submit", "form", function(a) {
        a.preventDefault();
        var t = e(this);
        e.post(t.attr("action"), t.serialize(), function(a) {
            a = e.parseJSON(a), t.parents(".damke_cf-cover").find(".form-response").html("<span>" + a[1] + "</span>")
        })
    })
}(jQuery);