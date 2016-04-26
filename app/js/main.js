/**
 * Controller goes Here
 * @param  {Object} GLOBAL
 * @return {Void}
 */
(function (GLOBAL){
    //asdsadsad
    GLOBAL.controller = GLOBAL.controller || {};

    controller.uiWindowsArray = {};

    controller.currentActiveUIWindow = null;   

    controller.addWindow = function () {

        var objID = "uiw_" + (new Date()).getTime();

        this.uiWindowsArray[objID] = {
            uiWindow: new UIWindow(objID),
            icon: new Icon(objID)
        };
    };

    controller.destroyWindow = function (windowID) {
        
    };

    controller.preloadResources = function () {
        //todo - preload template.
    };

    controller.getElements = function () {
        //"start" button;
        //"start" bar;
    };

    controller.attachEvents = function () {

    };

    controller.dettachIconEvents = function (uiWindowID) {

    };

    function Icon(uiWindowID) {
        this.id = uiWindowID;
    }

})(window);