/*! html_input_element v0.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */

/**
 * Module exports
 */

module.exports = function html_input_element(name, value, type) {
    function Constructor() {
        Constructor.prototype.name = name;
        Constructor.prototype.value = value;
        Constructor.prototype.type = type;
    }
    return new Constructor();

};

/**
 * @param {}
 * @return {}
 * @api public
 */