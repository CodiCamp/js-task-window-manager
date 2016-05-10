var app = require('app'),
    Events = require('events');

module.exports = {
    /**
     * Initialize Icon
     * @param {String} uid
     */
    init (uid) {
        this.uid = uid;

        console.info('Icon inited for window -> ', this.uid);
        this.render();
        this.attachEvents();
    },

    /**
     * Render dom markup in to the status Bar
     */
    render () {

        this.elements = {};
        this.elements.root = document.createElement('a');
        this.elements.root.href = 'javascript:;';
        this.elements.root.innerText = 'window ' + this.uid;

        app.controller.elements.statusBar.appendChild(this.elements.root);
    },

    destroy() {

        this.detachEvents();
        app.controller.elements.statusBar.removeChild(this.elements.root);
    },

    /**
     * Bind Icon events
     */
    attachEvents () {
        this.handleWindowState = this.handleWindowState.bind(this);
        this.destroy = this.destroy.bind(this);

        Events.subscribe(window, 'window-removed-' + this.uid, this.destroy);
        Events.subscribe(this.elements.root, 'click', this.handleWindowState);
    },

    /**
     * Remove Icon events
     */
    detachEvents () {
        this.handleWindowState = this.handleWindowState.bind(this);

        Events.unsubscribe(this.elements.root, 'click', this.handleWindowState);
    },

    handleWindowState () {

        console.log('toggle window state');
    }
};