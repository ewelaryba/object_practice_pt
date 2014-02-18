var expect = require('chai').expect;
var htmlInputElement = require('../html_input_element').htmlInputElement;


describe('html_input_element object tests', function () {
    'use strict';
    var html_input_element;

    beforeEach(function () {
        html_input_element = new htmlInputElement("x", "2", "text");
    });

    describe('html_input_element()', function () {
        it('creates an html input', function () {
            expect(html_input_element).to.be.ok;
        });
        it('expect to have property "name"', function () {
            expect(html_input_element).to.have.property('name');
        });
        it('expect to have property "value"', function () {
            expect(html_input_element).to.have.property('value');
        });
        it('expect to have property "type"', function () {
            expect(html_input_element).to.have.property('type');
        });
    });

    describe('constructor', function () {
        it('element should not change property name from "x"', function () {
            expect(html_input_element.name).to.equal('x');

        }),
        it('element should not change property value from "2"', function () {
            expect(html_input_element.value).to.equal('2');
        })
        it('element should not change property type from "text"', function () {
            expect(html_input_element.type).to.equal('text');
        })
    });
});