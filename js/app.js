jQuery(function ($) {
	'use strict';

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

    window._log = window.console.log.bind && window.console.log.bind( window.console ) || function () {};
    window._wrn = window.console.warn.bind && window.console.warn.bind( window.console ) || function () {};
    window._err = window.console.error.bind && window.console.error.bind( window.console ) || function () {};
    window._info = window.console.info.bind && window.console.info.bind( window.console ) || function () {};

	var utils = {
		
	};

	var App = {
		init: function () {
			_log("Init app!");

			this.cacheElements();
			this.bindEvents();
		},
		cacheElements: function () {
			// this.bla = $("#bla");
		},
		bindEvents: function () {
			// $("#bla").on("mouseenter", this.bla); 
		},
	
	};
	
	window.App = App;
	App.init();
});