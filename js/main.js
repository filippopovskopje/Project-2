$(function () {
  // ----------------------------------------------------------------------------------Saatite

  function theTime() {
    let now = new Date();
    const min = now.getMinutes();
    const minDegrees = min * 6 + 90;
    $(".min-hand").css({ transform: `rotate(${minDegrees}deg)` });
    const hour = now.getUTCHours();
    const hourDegrees1 = hour * 30 - 120 + 90;
    $(".hour-hand1").css({ transform: `rotate(${hourDegrees1}deg)` });
    const hourDegrees2 = hour * 30 + 90;
    $(".hour-hand2").css({ transform: `rotate(${hourDegrees2}deg)` });
    const hourDegrees3 = hour * 30 + 60 + 90;
    $(".hour-hand3").css({ transform: `rotate(${hourDegrees3}deg)` });
    const hourDegrees4 = hour * 30 + 30 + 90;
    $(".hour-hand4").css({ transform: `rotate(${hourDegrees4}deg)` });
  }
  setInterval(theTime, 60000);
  theTime();
  // --------------------------------------------------------------------------------- strelkata kaj team stranata
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".line").slideDown(1000);
    }
  });
  // --------------------------------------------------------------------------------------------------navbarot

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".mynavbar").css({ background: "white", transition: "background 1s" });
      $(".onScroll-black").css({ color: "black", transition: "color 1s" });
      $(".icon-bar").css({ backgroundColor: "black" });
    }
    if ($(this).scrollTop() < 50) {
      $(".mynavbar").css({
        background: "transparent",
        transition: "background 1s"
      });
      $(".onScroll-black").css({ color: "white", transition: "color 1s" });
      $(".icon-bar").css({ backgroundColor: "white" });
    }
    // ----------------------------------------------------------------------------------------kopcinjata i naslovot kaj skalite vo footer
    if ($(this).scrollTop() > $(".clock-row").offset().top - 1000) {
      $(".stairs-h2").fadeIn(500);
      $(".stairs-btn1")
        .delay(500)
        .fadeIn(500);
      $(".stairs-btn2")
        .delay(500)
        .fadeIn(500);
    }
    if ($(this).scrollTop() < $(".clock-row").offset().top - 1000) {
      $(".stairs-h2").fadeOut();
      $(".stairs-btn1").css({ display: "none" });
      $(".stairs-btn2").css({ display: "none" });
    }
    if ($(".row-section-one").length > 0) {
      if ($(this).scrollTop() > $(".row-section-one").offset().top - 400) {
        $(".row-section-one")
          .find(".section-one-title")
          .fadeIn(500);
        $(".row-section-one")
          .find(".section-one-text")
          .delay(500)
          .fadeIn(500);
      }
      if ($(this).scrollTop() < $(".row-section-one").offset().top - 400) {
        $(".row-section-one")
          .find(".section-one-title")
          .fadeOut();
        $(".row-section-one")
          .find(".section-one-text")
          .css({ display: "none" });
      }
      if (
        $(this).scrollTop() >
        $(".section-four-container").offset().top - 500
      ) {
        $(".section-four-container").fadeIn(500);
      }
      if (
        $(this).scrollTop() <
        $(".section-four-container").offset().top - 500
      ) {
        $(".section-four-container").fadeOut(500);
      }
    }
  });
  if ($('#indexPage')) {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > $(".row-section-one").offset().top - 400) {
        $(".row-section-one")
          .find(".section-one-title")
          .fadeIn(500);
        $(".row-section-one")
          .find(".section-one-text")
          .delay(500)
          .fadeIn(500);
      }
      if ($(this).scrollTop() < $(".row-section-one").offset().top - 400) {
        $(".row-section-one")
          .find(".section-one-title")
          .fadeOut();
        $(".row-section-one")
          .find(".section-one-text")
          .css({ display: "none" });
      }
      if ($(this).scrollTop() > $(".section-four-container").offset().top - 500) {
        $(".section-four-container").fadeIn(500);
      }
      if ($(this).scrollTop() < $(".section-four-container").offset().top - 500) {
        $(".section-four-container").fadeOut(500);
      }
    });
  }

  // ------------------------------------------------------------------------------------------Meni navbar na mobilen
  $(".hamburger").on("click", function () {
    $(".mob-menu").toggleClass("blok-menu");
    $(".main-container").toggleClass("none-menu");
    if ($(".hamburger").css("marginTop") === "8px") {
      $(".hamburger").html(' <span class="iks">X</span>');
      $(".hamburger").css("marginTop", "0px");
    } else {
      $(".hamburger").html(
        '  <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>'
      );
      $(".hamburger").css("marginTop", "8px");
    }
  });
  $(window).on("resize", function () {
    if ($(window).width() >= 426) {
      $(".mob-menu").removeClass("blok-menu");
      $(".main-container").removeClass("none-menu");
    }
  });
  // ------------------------------------------------------------------------------------------------------
  if ($(document).scrollTop() > 50) {
    $(".mynavbar").css({ background: "white", transition: "background 1s" });
    $(".onScroll-black").css({ color: "black", transition: "color 1s" });
  }
  if ($(document).scrollTop() < 50) {
    $(".mynavbar").css({
      background: "transparent",
      transition: "background 1s"
    });
    $(".onScroll-black").css({ color: "white", transition: "color 1s" });
  }
  // -------------------------------------------------------------------------------------------------Team stranata
  $(".team-div1 h2").fadeIn(1000);
  let x = 0;
  $(`.team-div1 li`).each(function () {
    x++;
    $(this)
      .delay(200 * x)
      .fadeIn(300);
  });
  // ----------------------------------------------------------------------------------------- Team values plusovite
  $(".fa-plus").on("click", function () {
    $(".p-plus").slideUp(500);
    let activP = $(this)
      .parent()
      .siblings(1);
    if (activP.css("display") === "block") {
      activP.slideUp(500);
      $(".fa-minus").each(function () {
        $(this)
          .removeClass("fa-minus")
          .addClass("fa-plus");
      });
    } else {
      activP.slideDown(500);
      $(".fa-minus").each(function () {
        $(this)
          .removeClass("fa-minus")
          .addClass("fa-plus");
      });
      $(this)
        .removeClass("fa-plus")
        .addClass("fa-minus");
    }
  });

  // -----------------------------------------------------------------------modalot kaj team stranata
  $(".modal-link").on("click", function () {
    let image = $(this)
      .children()
      .eq(0)
      .attr("src");
    let name = $(this)
      .siblings()
      .eq(0)
      .text();
    let position = $(this)
      .siblings()
      .eq(1)
      .text();
    $(".modal-container").html(
      `   <div class="modal fade" id="box-1" role="dialog">
  <div class="modal-dialog modal-dialogdiv">
      <div class="modal-content modal-contentdiv">
          <div class="modal-body modal-bodydiv flex ">
              <div class="modal-div1">
              <img src=" ${image}" alt="">
              </div>
              <div class="modal-div2">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <div>
                  <img src=" ${image}" alt="" class="small-img">
                      <h2>${name}</h2>
                      <h4 class="red">${position}</h4>
                      <p>Kris was previously Chief Strategy Officer of cross-border ecommerce platform
                          FiftyOne,
                          rebranded as Borderfree in 2013 and acquired by Pitney Bowes in May 2015. He is
                          expert
                          in the globalisation and localisation of ecommerce businesses and in building
                          technology
                          solutions that stimulate and encourage online shopping on a global basis.</p>
                      <a href="#" class="black"><i class="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>`
    );
  });
  // ----------------------------------------------------------------------service stranata
  function coding(list) {
    $(".list-div li").fadeOut();
    $(".list-div ul").fadeOut();
    let x = 1;
    $(list).fadeIn();
    $(`${list} li`).each(function () {
      x++;
      $(this)
        .delay(200 * x)
        .fadeIn(300);
    });
  }
  function classRed(h) {
    $(".row-service h3").each(function () {
      $(this).removeClass("red");
    });
    $(h).addClass("red");
  }
  $(".coding").on("click", function () {
    classRed(".coding");
    coding(".coding-list");
  });
  $(".marketing").on("click", function () {
    classRed(".marketing");
    coding(".marketing-list");
  });
  $(".branding").on("click", function () {
    classRed(".branding");
    coding(".branding-list");
  });
  $(function () {
    $(".coding").click();
    $("body").on("wheel", function (e) {
      let delta = e.originalEvent.wheelDelta;
      if (delta < 0) {
        if ($(".row-service h3.red").text() !== "Branding") {
          classRed($(".row-service h3.red").next());
          // $('.row-service h3.red').next().click();
        }
      } else if (delta > 0) {
        if ($(".row-service h3.red").text() !== "Coding") {
          classRed($(".row-service h3.red").prev());
          // $('.row-service h3.red').prev().click();
        }
      }
    });
    $("body").click(function (e) {
      if (
        !$(".thediv").is(e.target) &&
        $(".thediv").has(e.target).length === 0
      ) {
        $(".row-service h3").each(function () {
          $(this).removeClass("red");
        });
      }
    });
  });

  // -------------------------------------------------------------------------------------hireUs stranta
  $(".hireUs-row a").hover(
    function () {
      $(this).attr("id", "opacity-after");
      $(".hireUs-row a").each(function () {
        $(this).addClass("opacity-hover");
      });
    },
    function () {
      $(".hireUs-row a").each(function () {
        $(this).removeClass("opacity-hover");
      });
    }
  );
});
// -------------------------------------------------------------------------------------indexStrana boja na cartite

$(".section-two-div").hover(
  function () {
    $(this).css("backgroundColor", "rgba(0,0,0,0.8)");
    $(this).css("color", "#fff");
    $(this)
      .find("h4")
      .css("fontWeight", "bolder");
    $(this)
      .find("p")
      .slideDown();
  },
  function () {
    $(this).css("backgroundColor", "transparent");
    $(this).css("color", "#000");
    $(this)
      .find("h4")
      .css("fontWeight", "normal");
    $(this)
      .find("p")
      .slideUp();
  }
);
// ---------------------------------------------------------------------------------------

const laptopArr = [
  "img/bg2-home-1.png",
  "img/bg2-home-2.png",
  "img/bg2-home-3.png"
];
let num = 0;
setInterval(() => {
  $("#laptop").attr("src", laptopArr[num]);
  num++;
  if (num === laptopArr.length) {
    num = 0;
  }
}, 3000);
$(".btn-up").click(function () {
  $(".tablet-screen").animate({ scrollTop: "-=100px" }, 800);
  console.log("nesto");
});
$(".btn-down").click(function () {
  $(".tablet-screen").animate({ scrollTop: "+=100px" }, 800);
  console.log("nesto");
});
$(window).resize(function () {
  if ($(window).width() < 1000) {
    $(".section-two-div").hover(
      function () {
        $(this)
          .find(".more")
          .hide();
      },
      function () {
        $(this)
          .find(".more")
          .show();
      }
    );
  }
  // ________________________________________WORK STRANA
});

var counter = 0;
$(".next").on("click", function () {
  counter -= 90;
  var rotation = "translateZ( -50vw ) rotateY( " + counter + "deg )";
  $("#cube").css("transform", rotation);
});
$(".previous").on("click", function () {
  counter += 90;
  var rotation = "translateZ( -50vw ) rotateY( " + counter + "deg )";
  $("#cube").css("transform", rotation);
});

$(window).bind("mousewheel", function (e) {
  if (e.originalEvent.wheelDelta / 120 > 0) {
    counter -= 90;
    var rotation = "translateZ( -50vw ) rotateY( " + counter + "deg )";
    $("#cube").css("transform", rotation);
  } else {
    counter += 90;
    var rotation = "translateZ( -50vw ) rotateY( " + counter + "deg )";
    $("#cube").css("transform", rotation);
  }
});

// -----------------GORE NORMALEN KOD :) 

// -------------------DOLE KOD ZA IE da raboti


// "use strict";

// $(function () {
//   // ----------------------------------------------------------------------------------Saatite
//   function theTime() {
//     var now = new Date();
//     var min = now.getMinutes();
//     var minDegrees = min * 6 + 90;
//     $(".min-hand").css({
//       transform: "rotate(".concat(minDegrees, "deg)")
//     });
//     var hour = now.getUTCHours();
//     var hourDegrees1 = hour * 30 - 120 + 90;
//     $(".hour-hand1").css({
//       transform: "rotate(".concat(hourDegrees1, "deg)")
//     });
//     var hourDegrees2 = hour * 30 + 90;
//     $(".hour-hand2").css({
//       transform: "rotate(".concat(hourDegrees2, "deg)")
//     });
//     var hourDegrees3 = hour * 30 + 60 + 90;
//     $(".hour-hand3").css({
//       transform: "rotate(".concat(hourDegrees3, "deg)")
//     });
//     var hourDegrees4 = hour * 30 + 30 + 90;
//     $(".hour-hand4").css({
//       transform: "rotate(".concat(hourDegrees4, "deg)")
//     });
//   }

//   setInterval(theTime, 60000);
//   theTime(); // --------------------------------------------------------------------------------- strelkata kaj team stranata

//   $(window).on("scroll", function () {
//     if ($(this).scrollTop() > 150) {
//       $(".line").slideDown(1000);
//     }
//   }); // --------------------------------------------------------------------------------------------------navbarot

//   $(window).on("scroll", function () {
//     if ($(this).scrollTop() > 50) {
//       $(".mynavbar").css({
//         background: "white",
//         transition: "background 1s"
//       });
//       $(".onScroll-black").css({
//         color: "black",
//         transition: "color 1s"
//       });
//       $(".icon-bar").css({
//         backgroundColor: "black"
//       });
//     }

//     if ($(this).scrollTop() < 50) {
//       $(".mynavbar").css({
//         background: "transparent",
//         transition: "background 1s"
//       });
//       $(".onScroll-black").css({
//         color: "white",
//         transition: "color 1s"
//       });
//       $(".icon-bar").css({
//         backgroundColor: "white"
//       });
//     } // ----------------------------------------------------------------------------------------kopcinjata i naslovot kaj skalite vo footer


//     if ($(this).scrollTop() > $(".clock-row").offset().top - 1000) {
//       $(".stairs-h2").fadeIn(500);
//       $(".stairs-btn1").delay(500).fadeIn(500);
//       $(".stairs-btn2").delay(500).fadeIn(500);
//     }

//     if ($(this).scrollTop() < $(".clock-row").offset().top - 1000) {
//       $(".stairs-h2").fadeOut();
//       $(".stairs-btn1").css({
//         display: "none"
//       });
//       $(".stairs-btn2").css({
//         display: "none"
//       });
//     }

//     if ($(".row-section-one").length > 0) {
//       if ($(this).scrollTop() > $(".row-section-one").offset().top - 400) {
//         $(".row-section-one").find(".section-one-title").fadeIn(500);
//         $(".row-section-one").find(".section-one-text").delay(500).fadeIn(500);
//       }

//       if ($(this).scrollTop() < $(".row-section-one").offset().top - 400) {
//         $(".row-section-one").find(".section-one-title").fadeOut();
//         $(".row-section-one").find(".section-one-text").css({
//           display: "none"
//         });
//       }

//       if ($(this).scrollTop() > $(".section-four-container").offset().top - 500) {
//         $(".section-four-container").fadeIn(500);
//       }

//       if ($(this).scrollTop() < $(".section-four-container").offset().top - 500) {
//         $(".section-four-container").fadeOut(500);
//       }
//     }
//   });

//   if ($('#indexPage')) {
//     $(window).on("scroll", function () {
//       if ($(this).scrollTop() > $(".row-section-one").offset().top - 400) {
//         $(".row-section-one").find(".section-one-title").fadeIn(500);
//         $(".row-section-one").find(".section-one-text").delay(500).fadeIn(500);
//       }

//       if ($(this).scrollTop() < $(".row-section-one").offset().top - 400) {
//         $(".row-section-one").find(".section-one-title").fadeOut();
//         $(".row-section-one").find(".section-one-text").css({
//           display: "none"
//         });
//       }

//       if ($(this).scrollTop() > $(".section-four-container").offset().top - 500) {
//         $(".section-four-container").fadeIn(500);
//       }

//       if ($(this).scrollTop() < $(".section-four-container").offset().top - 500) {
//         $(".section-four-container").fadeOut(500);
//       }
//     });
//   } // ------------------------------------------------------------------------------------------Meni navbar na mobilen


//   $(".hamburger").on("click", function () {
//     $(".mob-menu").toggleClass("blok-menu");
//     $(".main-container").toggleClass("none-menu");

//     if ($(".hamburger").css("marginTop") === "8px") {
//       $(".hamburger").html(' <span class="iks">X</span>');
//       $(".hamburger").css("marginTop", "0px");
//     } else {
//       $(".hamburger").html('  <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>');
//       $(".hamburger").css("marginTop", "8px");
//     }
//   });
//   $(window).on("resize", function () {
//     if ($(window).width() >= 426) {
//       $(".mob-menu").removeClass("blok-menu");
//       $(".main-container").removeClass("none-menu");
//     }
//   }); // ------------------------------------------------------------------------------------------------------

//   if ($(document).scrollTop() > 50) {
//     $(".mynavbar").css({
//       background: "white",
//       transition: "background 1s"
//     });
//     $(".onScroll-black").css({
//       color: "black",
//       transition: "color 1s"
//     });
//   }

//   if ($(document).scrollTop() < 50) {
//     $(".mynavbar").css({
//       background: "transparent",
//       transition: "background 1s"
//     });
//     $(".onScroll-black").css({
//       color: "white",
//       transition: "color 1s"
//     });
//   } // -------------------------------------------------------------------------------------------------Team stranata


//   $(".team-div1 h2").fadeIn(1000);
//   var x = 0;
//   $(".team-div1 li").each(function () {
//     x++;
//     $(this).delay(200 * x).fadeIn(300);
//   }); // ----------------------------------------------------------------------------------------- Team values plusovite

//   $(".fa-plus").on("click", function () {
//     $(".p-plus").slideUp(500);
//     var activP = $(this).parent().siblings(1);

//     if (activP.css("display") === "block") {
//       activP.slideUp(500);
//       $(".fa-minus").each(function () {
//         $(this).removeClass("fa-minus").addClass("fa-plus");
//       });
//     } else {
//       activP.slideDown(500);
//       $(".fa-minus").each(function () {
//         $(this).removeClass("fa-minus").addClass("fa-plus");
//       });
//       $(this).removeClass("fa-plus").addClass("fa-minus");
//     }
//   }); // -----------------------------------------------------------------------modalot kaj team stranata

//   $(".modal-link").on("click", function () {
//     var image = $(this).children().eq(0).attr("src");
//     var name = $(this).siblings().eq(0).text();
//     var position = $(this).siblings().eq(1).text();
//     $(".modal-container").html("   <div class=\"modal fade\" id=\"box-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-dialogdiv\">\n      <div class=\"modal-content modal-contentdiv\">\n          <div class=\"modal-body modal-bodydiv flex \">\n              <div class=\"modal-div1\">\n              <img src=\" ".concat(image, "\" alt=\"\">\n              </div>\n              <div class=\"modal-div2\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                  <div>\n                  <img src=\" ").concat(image, "\" alt=\"\" class=\"small-img\">\n                      <h2>").concat(name, "</h2>\n                      <h4 class=\"red\">").concat(position, "</h4>\n                      <p>Kris was previously Chief Strategy Officer of cross-border ecommerce platform\n                          FiftyOne,\n                          rebranded as Borderfree in 2013 and acquired by Pitney Bowes in May 2015. He is\n                          expert\n                          in the globalisation and localisation of ecommerce businesses and in building\n                          technology\n                          solutions that stimulate and encourage online shopping on a global basis.</p>\n                      <a href=\"#\" class=\"black\"><i class=\"fab fa-linkedin-in\"></i></a>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"));
//   }); // ----------------------------------------------------------------------service stranata

//   function coding(list) {
//     $(".list-div li").fadeOut();
//     $(".list-div ul").fadeOut();
//     var x = 1;
//     $(list).fadeIn();
//     $("".concat(list, " li")).each(function () {
//       x++;
//       $(this).delay(200 * x).fadeIn(300);
//     });
//   }

//   function classRed(h) {
//     $(".row-service h3").each(function () {
//       $(this).removeClass("red");
//     });
//     $(h).addClass("red");
//   }

//   $(".coding").on("click", function () {
//     classRed(".coding");
//     coding(".coding-list");
//   });
//   $(".marketing").on("click", function () {
//     classRed(".marketing");
//     coding(".marketing-list");
//   });
//   $(".branding").on("click", function () {
//     classRed(".branding");
//     coding(".branding-list");
//   });
//   $(function () {
//     $(".coding").click();
//     $("body").on("wheel", function (e) {
//       var delta = e.originalEvent.wheelDelta;

//       if (delta < 0) {
//         if ($(".row-service h3.red").text() !== "Branding") {
//           classRed($(".row-service h3.red").next()); // $('.row-service h3.red').next().click();
//         }
//       } else if (delta > 0) {
//         if ($(".row-service h3.red").text() !== "Coding") {
//           classRed($(".row-service h3.red").prev()); // $('.row-service h3.red').prev().click();
//         }
//       }
//     });
//     $("body").click(function (e) {
//       if (!$(".thediv").is(e.target) && $(".thediv").has(e.target).length === 0) {
//         $(".row-service h3").each(function () {
//           $(this).removeClass("red");
//         });
//       }
//     });
//   }); // -------------------------------------------------------------------------------------hireUs stranta

//   $(".hireUs-row a").hover(function () {
//     $(this).attr("id", "opacity-after");
//     $(".hireUs-row a").each(function () {
//       $(this).addClass("opacity-hover");
//     });
//   }, function () {
//     $(".hireUs-row a").each(function () {
//       $(this).removeClass("opacity-hover");
//     });
//   });
// }); // -------------------------------------------------------------------------------------indexStrana boja na cartite

// $(".section-two-div").hover(function () {
//   $(this).css("backgroundColor", "rgba(0,0,0,0.8)");
//   $(this).css("color", "#fff");
//   $(this).find("h4").css("fontWeight", "bolder");
//   $(this).find("p").slideDown();
// }, function () {
//   $(this).css("backgroundColor", "transparent");
//   $(this).css("color", "#000");
//   $(this).find("h4").css("fontWeight", "normal");
//   $(this).find("p").slideUp();
// }); // ---------------------------------------------------------------------------------------

// var laptopArr = ["img/bg2-home-1.png", "img/bg2-home-2.png", "img/bg2-home-3.png"];
// var num = 0;
// setInterval(function () {
//   $("#laptop").attr("src", laptopArr[num]);
//   num++;

//   if (num === laptopArr.length) {
//     num = 0;
//   }
// }, 3000);
// $(".btn-up").click(function () {
//   $(".tablet-screen").animate({
//     scrollTop: "-=100px"
//   }, 800);
//   console.log("nesto");
// });
// $(".btn-down").click(function () {
//   $(".tablet-screen").animate({
//     scrollTop: "+=100px"
//   }, 800);
//   console.log("nesto");
// });
// $(window).resize(function () {
//   if ($(window).width() < 1000) {
//     $(".section-two-div").hover(function () {
//       $(this).find(".more").hide();
//     }, function () {
//       $(this).find(".more").show();
//     });
//   } // ________________________________________WORK STRANA

// });
// var counter = 0;
// $(".next").on("click", function () {
//   counter -= 90;
//   var rotation = "translateZ( -50vw ) rotateY( " + counter + "deg )";
//   $("#cube").css("transform", rotation);
// });
// $(".previous").on("click", function () {
//   counter += 90;
//   var rotation = "translateZ( -50vw ) rotateY( " + counter + "deg )";
//   $("#cube").css("transform", rotation);
// });
// $(window).bind("mousewheel", function (e) {
//   if (e.originalEvent.wheelDelta / 120 > 0) {
//     counter -= 90;
//     var rotation = "translateZ( -50vw ) rotateY( " + counter + "deg )";
//     $("#cube").css("transform", rotation);
//   } else {
//     counter += 90;
//     var rotation = "translateZ( -50vw ) rotateY( " + counter + "deg )";
//     $("#cube").css("transform", rotation);
//   }
// });
