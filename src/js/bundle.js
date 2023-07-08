'use strict';
import initMap from './modules/initMap';
import makeDraggable from './modules/makeDraggable';
import showMoreServices from './modules/showMoreServices';
import showMoreTabheaders from './modules/showMoreTabheaders';
import toggleServicesTabs from './modules/toggleServicesTabs';

document.addEventListener('DOMContentLoaded', () => {
	// initMap();
	toggleServicesTabs();
	showMoreTabheaders();
	showMoreServices();
	makeDraggable('.services .tabheader');
});
