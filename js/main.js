//---------------------------- sound mute button --------------------

function mute() {
  const video = document.querySelector(".video");
  const btn = document.querySelector(".content__sound--btn");

  if (!video.muted) {
    btn.innerHTML = "<img src= images/eko-nams-audio-mute.svg />";
    video.muted = true;
  } else {
    video.muted = false;
    btn.innerHTML = "<img src= images/eko-nams-audio-mute.svg />";
  }
}

//---------------------------------------------------------------------

//---------------------------------- menu arrows ----------------------

let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
let body = document.querySelector("body");
if (isMobile.any()) {
  body.classList.add("touch");
  let arrow = document.querySelectorAll(".arrow");
  for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];

    thisLink.classList.add("parent");
    arrow[i].addEventListener("click", function () {
      subMenu.classList.toggle("open");
      thisArrow.classList.toggle("active");
    });
  }
} else {
  body.classList.add("mouse");
}

//--------------------------------------------------------

//------------------------ menu button -------------------

$(".menu__btn").on("click", function () {
  $(".menu__list").toggleClass("menu__list--active");
  $(".menu__btn").toggleClass("btn__active");
  $(".submenu__list").removeClass("open");
  $(".menu__arrow").removeClass("active");
  $(".list__item__lang").insertBefore($(".list__item--first"));
});

$(".submenu__list--link").on("click", function () {
  $(".menu__list").toggleClass("menu__list--active");
  $(".menu__btn").toggleClass("btn__active");
  $(".submenu__list").removeClass("open");
  $(".menu__arrow").removeClass("active");
});
$(".menu__list--link").on("click", function () {
  $(".menu__list").toggleClass("menu__list--active");
  $(".menu__btn").toggleClass("btn__active");
  $(".submenu__list").removeClass("open");
  $(".menu__arrow").removeClass("active");
});
//----------------- close menu on croll --------------------
$(document).ready(function(){
       $(window).bind('scroll', function() {
       var distance = 500;
             if ($(window).scrollTop() > distance) {
                $(".menu__list").addClass("menu__list--active");
                $(".menu__btn").addClass("btn__active");
             }
             
        });
    });

//--------------------------------------------------------

//-------------------- map -------------------------------

function initMap() {
  const map = new google.maps.Map(document.querySelector(".map__block"), {
    zoom: 4,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    zoomControl: true,
    center: { lat: 62.674143, lng: 19.673934 },
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#000000",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            saturation: "-100",
          },
          {
            lightness: "30",
          },
        ],
      },
      {
        featureType: "administrative.neighborhood",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            gamma: "0.00",
          },
          {
            lightness: "74",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#34334f",
          },
          {
            lightness: "-37",
          },
        ],
      },
      {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
          {
            lightness: "3",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#2d2c45",
          },
          {
            lightness: "0",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#7d7c9b",
          },
          {
            lightness: "43",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#2d2c45",
          },
          {
            lightness: "1",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#7d7c9b",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#2d2c45",
          },
          {
            lightness: "-1",
          },
          {
            gamma: "1",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on",
          },
          {
            hue: "#ff0000",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#7d7c9b",
          },
          {
            lightness: "-31",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#2d2c45",
          },
          {
            lightness: "-36",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#2d2c45",
          },
          {
            lightness: "0",
          },
          {
            gamma: "1",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
  });

  //---------------------- resize map ----------------------

  $(window).resize(function () {
    google.maps.event.trigger(map, "resize");
  });

  $(window).resize(function () {
    google.maps.event.trigger(map, "zoom");
  });

  //------------------------------------------------------

  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      animation: google.maps.Animation.DROP,
      icon: "./images/marker.png",
    });
  });

  new MarkerClusterer(map, markers, {
    imagePath: "./images/m",
    minimumClusterSize: 2,
  });
}

//---------------------- map locations ----------------
const locations = [
  { lat: 56.99255551, lng: 13.84736538 },
  { lat: 56.96669041, lng: 13.82440567 },
  { lat: 56.97005904, lng: 13.94422531 },
  { lat: 56.97679537, lng: 13.79161835 },
  { lat: 52.48278022, lng: 17.09472656 },
  { lat: 51.71001239, lng: 16.22886658 },
  { lat: 51.50104924, lng: 16.07643127 },
  { lat: 51.19139394, lng: 16.15127563 },
  { lat: 50.88744141, lng: 16.74179077 },
  { lat: 53.11051422, lng: 17.99697876 },
  { lat: 53.38701421, lng: 19.15500641 },
  { lat: 52.11999866, lng: 20.95092773 },
  { lat: 52.13980978, lng: 20.72004318 },
  { lat: 52.19329792, lng: 21.04611397 },
  { lat: 65.337055, lng: -18.289257 },
  { lat: 65.300355, lng: -18.564098 },
  { lat: 65.129948, lng: -18.28376 },
  { lat: 64.944487, lng: -18.256276 },
  { lat: 65.399729, lng: -18.221688 },
  { lat: 65.381858, lng: -18.151565 },
  { lat: 65.352666, lng: -18.263889 },
  { lat: 65.315414, lng: -18.256997 },
  { lat: 63.809168, lng: -20.104746 },
  { lat: 63.728439, lng: -20.022981 },
  { lat: 63.65144, lng: -20.169108 },
  { lat: 63.613626, lng: -20.22545 },
  { lat: 65.016506, lng: 28.051801 },
  { lat: 64.953791, lng: 27.852739 },
  { lat: 64.936925, lng: 28.04925 },
  { lat: 64.869358, lng: 28.002286 },
  { lat: 64.815064, lng: 27.97755 },
  { lat: 64.674444, lng: 28.245521 },
  { lat: 64.569088, lng: 28.240024 },
  { lat: 64.499782, lng: 28.577047 },
  { lat: 64.485441, lng: 28.506208 },
  { lat: 64.469354, lng: 28.531475 },
  { lat: 64.449, lng: 28.581256 },
];

//----------------------------------------------
