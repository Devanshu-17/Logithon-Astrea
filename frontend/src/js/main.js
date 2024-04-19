

(function (window, document, $, undefined) {
  "use strict";

  var imJs = {
    m: function (e) {
      imJs.d();
      imJs.methods();
    },

    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },

    methods: function (e) {
      imJs.featherAtcivation();
      imJs.wowActive();
      imJs.backToTopInit();
      imJs.mobileMenuActive();
      imJs.awsActivation();
      imJs.stickyHeader();
      imJs.smothScroll();
      imJs.slickActivation();
      imJs.backToTopInit();
      // imJs.cursorAnimate();
    },

    smothScroll: function () {
      $(document).on("click", ".smoth-animation", function (event) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top,
          },
          500
        );
      });
    },

    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          $(".header--sticky").addClass("sticky");
        } else {
          $(".header--sticky").removeClass("sticky");
        }
      });
    },

    awsActivation: function (e) {
      AOS.init();
    },

    featherAtcivation: function () {
      feather.replace();
    },

    wowActive: function () {
      new WOW().init();
    },

    backToTopInit: function () {
      // declare variable
      var scrollTop = $(".backto-top");
      $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
          $(scrollTop).css("opacity", "1");
        } else {
          $(scrollTop).css("opacity", "0");
        }
      }); // scroll END

      //Click event to scroll to top
      $(scrollTop).click(function () {
        $("html, body").animate(
          {
            scrollTop: 0,
            easingType: "linear",
          },
          500
        );
        return false;
      }); // click() scroll top EMD
    },

    mobileMenuActive: function (e) {
      $(".humberger-menu").on("click", function (e) {
        e.preventDefault();
        $(".popup-mobile-menu").addClass("menu-open");
        imJs._html.css({
          overflow: "hidden",
        });
      });

      $(
        ".close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a"
      ).on("click", function (e) {
        e.preventDefault();
        $(".popup-mobile-menu").removeClass("menu-open");
        $(".has-droupdown > a")
          .removeClass("open")
          .siblings(".submenu")
          .removeClass("active")
          .slideUp("400");
        imJs._html.css({
          overflow: "",
        });
      });

      $(".popup-mobile-menu").on("click", function (e) {
        e.target === this && $(".popup-mobile-menu").removeClass("menu-open");
        imJs._html.css({
          overflow: "",
        });
      });

      $(".has-droupdown > a").on("click", function (e) {
        e.preventDefault();
        $(this).siblings(".submenu").toggleClass("active").slideToggle("400");
        $(this).toggleClass("open");
        imJs._html.css({
          overflow: "",
        });
      });

      $(".nav-pills .nav-link").on("click", function (e) {
        $(".rn-popup-mobile-menu").removeClass("menu-open");
        imJs._html.css({
          overflow: "",
        });
      });
    },

    slickActivation: function () {
      $(".inner_page-slick_activation").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },

    backToTopInit: function () {
      // declare variable
      var scrollTop = $(".backto-top");
      $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
          $(scrollTop).css("opacity", "1");
        } else {
          $(scrollTop).css("opacity", "0");
        }
      });

      //Click event to scroll to top
      $(scrollTop).on("click", function () {
        $("html, body").animate(
          {
            scrollTop: 0,
            easingType: "linear",
          },
          500
        );
        return false;
      });
    },

    cursorAnimate: function () {
      var myCursor = jQuery(".mouse-cursor");
      if (myCursor.length) {
        if ($("body")) {
          const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
          let n,
            i = 0,
            o = !1;
          (window.onmousemove = function (s) {
            o ||
              (t.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (e.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (n = s.clientY),
              (i = s.clientX);
          }),
            $("body").on("mouseenter", "a, .cursor-pointer", function () {
              e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
            }),
            $("body").on("mouseleave", "a, .cursor-pointer", function () {
              ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"));
            }),
            (e.style.visibility = "visible"),
            (t.style.visibility = "visible");
        }
      }
    },
  };
  imJs.m();
})(window, document, jQuery);
