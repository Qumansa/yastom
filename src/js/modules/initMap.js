function initMap() {
    function init() {
        const map = new ymaps.Map("contacts__map", {
            center: [55.643058, 37.385107],
            zoom: 16
        });

        const placeMark = new ymaps.Placemark([55.643058, 37.391107], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/map-icon.svg',
            iconImageSize: [64, 75],
        });

        map.geoObjects
            .add(placeMark);
    }

    ymaps.ready(init);
}

export default initMap;