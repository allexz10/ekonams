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

    function initMap() {
      const map = new google.maps.Map(document.querySelector(".map__block"), {
        zoom: 4,
        disableDefaultUI: true,                
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: { lat: 62.22699604, lng: 10.85449219 },
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
      { lat: 16.94503784, lng: 16.94503784 },
      { lat: 53.11051422, lng: 17.99697876 },
      { lat: 53.38701421, lng: 19.15500641 },
      { lat: 52.11999866, lng: 20.95092773 },
      { lat: 52.13980978, lng: 20.72004318 },
      { lat: 52.19329792, lng: 21.04611397 },
      { lat: -37.819616, lng: 144.968119 },
      { lat: -38.330766, lng: 144.695692 },
      { lat: -39.927193, lng: 175.053218 },
      { lat: -41.330162, lng: 174.865694 },
      { lat: -42.734358, lng: 147.439506 },
      { lat: -42.734358, lng: 147.501315 },
      { lat: -42.735258, lng: 147.438 },
      { lat: -43.999792, lng: 170.463352 },
    ]; 