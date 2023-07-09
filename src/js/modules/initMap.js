function initMap() {
    function init() {
        let centerOfMap;

        document.documentElement.clientWidth >= 768
            ? centerOfMap = [55.643058, 37.385107]
            : centerOfMap = [55.642058, 37.391107];

        const map = new ymaps.Map("contacts__map", {
            center: centerOfMap,
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