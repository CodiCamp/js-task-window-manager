/**
 * Window goes Here
 * @param  {Object} GLOBAL
 * @return {Void}
 */
var app = require('app'),
    template = require('template-window'),
    Events = require('events');

    
module.exports =  {

    init (uiWindowID) {

        this.uid = uiWindowID;

        console.info('Window inited -> ', this.uid);

        this.render();
        this.attachEvents();
    },

    type: 'uiWindow',

    getElements () {

        this.elements.closeButton = this.elements.root.querySelector('.close-button');
    },

    attachEvents () {

        this.destroy = this.destroy.bind(this);

        Events.subscribe(this.elements.closeButton, 'click', this.destroy)
    },

    detachEvents () {

        Events.unsubscribe(this.elements.closeButton, 'click', this.destroy);
    },

    render () {
        this.elements = {};
        this.elements.root = document.createElement('div');
        this.elements.root.innerHTML = template.replace('{{uid}}', this.uid);

        app.controller.elements.windowsPlaceholder.appendChild(this.elements.root);
        this.getElements();
    },

    destroy () {

        this.detachEvents();
        app.controller.elements.windowsPlaceholder.removeChild(this.elements.root);

        Events.publish(window, 'window-removed-' + this.uid);
        Events.publish(window, 'window-removed', {
            uid: this.uid
        });
    },

    minimize () {
    },

    maximize () {
    },

    resize () {
    },

    dragg () {

    }
};