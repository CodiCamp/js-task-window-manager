/**
 * Controller goes Here
 * @param  {Object} GLOBAL
 * @return {Void}
 */

var app = require("app"),
    UiWindow = require("./window.js"),
    UiIcon = require("./ui-icon.js"),
    Events = require("events");

    app.controller = {};

    app.controller.uiWindowsStorage = {};

    /**
     * Initialize the application
     */
    app.controller.init = function () {

        this.getElements();
        this.attachEvents();
    };

    /**
     * Dom Storage
     */
    app.controller.elements = {};

    app.controller.currentActiveUIWindow = null;

    app.controller.addWindow = function () {

        var objID = "uiw_" + (new Date()).getTime();

        this.uiWindowsStorage[objID] = {
            uiWindow: Object.create(UiWindow),
            icon: Object.create(UiIcon)
        };

        this.uiWindowsStorage[objID].uiWindow.init(objID);
        this.uiWindowsStorage[objID].icon.init(objID);
    };

    /**
     * Removes Window from storage
     * @param {Custom Event Object} evnt
     * @return {Void}
     */
    app.controller.removeWindow = function (evnt) {

        this.uiWindowsStorage[evnt.detail.uid] = null;
    };


    app.controller.preloadResources = function () {
        //todo - preload template.
    };

    /**
     * Store reference to Dom elements we will use
     */
    app.controller.getElements = function () {
        this.elements.windowsPlaceholder = document.getElementById('windows-placeholder');
        this.elements.createWindowButton = document.getElementById('create-window-button');
        this.elements.statusBar = document.getElementById('status-bar');
    };

    /**
     * Bind global UI specific events
     */
    app.controller.attachEvents = function () {

        this.addWindow = this.addWindow.bind(this);
        this.removeWindow = this.removeWindow.bind(this);

        Events.subscribe(window, 'window-removed', this.removeWindow);
        Events.subscribe(this.elements.createWindowButton, 'click', this.addWindow);
    };

    app.controller.detachIconEvents = function (uiWindowID) {

    };

    app.controller.init();

window.app = app;
window.UiWindow = UiWindow;