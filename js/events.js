 /***
 * Subsciing and Publishing application events
 * - Extend to can pass data with the events
 * - Optional: trigger events on object
 */
var Events = {

    /***
     * Create event
     * @param {String} eventName
     * returns {Event Object}
     */
    create: function(eventName){

        var event = new CustomEvent(eventName);

        return event;
    },

    /***
     * Subscribes a listener to event and trigger a handler
     * @param {Dom Object} el
     * @param {String} eventName
     * @param {Function} handler
     * returns void
     */
    subscribe: function (el,eventName,handler) {

        el.addEventListener(eventName,handler,false);
    },

    /***
     * Publishes an event to the listneres
     * @param {Dom Object} el
     * @param {String} eventName
     * returns void
     */
    publish: function (el,eventName) {

        var event = this.create(eventName);
        el.dispatchEvent(event);

    },

    /***
     * Removes a listener from element and detach handler function
     * @param {Dom Object} el
     * @param {String} eventName
     * @param {Function} handler
     * returns void
     */
    unsubscribe: function (el,eventName,handler) {
        el.removeEventListener(eventName,handler,false);
    }
};