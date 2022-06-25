window.marker = null;

function initialize() {
    var map;
    var latitude = $('#map').attr('data-latitude');
    var longitude = $('#map').attr('data-longitude');
    var mapMarker = $('#map').attr('data-marker');
    var nottingham = new google.maps.LatLng(latitude, longitude);
    var style = [{
            "featureType": "all",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        },
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [{
                "color": "#444444"
            }]
        },
        {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        },
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "all",
            "stylers": [{
                    "visibility": "simplified"
                },
                {
                    "saturation": "-100"
                },
                {
                    "lightness": "30"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                    "visibility": "simplified"
                },
                {
                    "gamma": "0.00"
                },
                {
                    "lightness": "74"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                    "visibility": "simplified"
                },
                {
                    "color": "#ff0000"
                },
                {
                    "saturation": "-15"
                },
                {
                    "lightness": "40"
                },
                {
                    "gamma": "1.25"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        },
        {
            "featureType": "transit",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#ff0000"
                },
                {
                    "lightness": "80"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#efefef"
            }]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }
    ];
    var mapOptions = {
        center: nottingham,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        backgroundColor: "#000",
        zoom: 15,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE
        }
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var mapType = new google.maps.StyledMapType(style, {
        name: "Grayscale"
    });
    map.mapTypes.set('grey', mapType);
    map.setMapTypeId('grey');
    var marker_image = mapMarker;
    var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(40, 55));
    marker = new google.maps.Marker({
        position: nottingham,
        map: map,
        icon: pinIcon,
        title: 'Dizer'
    });
}

var map = document.getElementById('map');
if (map != null) {
    google.maps.event.addDomListener(window, 'load', initialize);
}