
/**
 * A module defining `JsTestWidget`.
 *
 * @module nmodule/jsTest/rc/JsTestWidget
 */
define([ 'bajaux/Widget', 'jquery', 'Promise', 'nmodule/webEditors/rc/wb/util/ICollectionSupport' ], 
function (Widget, $, Promise, ICollectionSupport) {

  'use strict';

  /**
   * Description of your widget.
   *
   * @class
   * @extends module:bajaux/Widget
   * @alias module:nmodule/jsTest/rc/JsTestWidget1
   */
  var JsTestWidget = function JsTestWidget(params) {
    var that = this,
      options;
    Widget.call(that, {
      params: params
    });
    ICollectionSupport(this);
    that.$firstOrd = null;
    that.$lastOrd = null;
  };

  //extend and set up prototype chain
  JsTestWidget.prototype = Object.create(Widget.prototype);
  JsTestWidget.prototype.constructor = JsTestWidget;

  /**
   * Describe how your widget does its initial setup of the DOM.
   *
   * @param {jQuery} element the DOM element into which to load this widget
   */
  JsTestWidget.prototype.doInitialize = function (dom) {
    dom.html(`
        <div>
            <label>Binding 1:</label>
            <input type="text" class="binding-value1" placeholder="Binding 1">
        </div>
        <div>
            <label>Binding 2:</label>
            <input type="text" class="binding-value2" placeholder="Binding 222">
        </div>
    `);
    console.log('Initialized');
  };

  /**
   * Describe how your widget loads in a value.
   *
   * @param value description of the value to be loaded into this widget
   */
  JsTestWidget.prototype.doLoad = function (value) {
    this.jq().find('.binding-value1').val(String(this.$firstOrd));
    this.jq().find('.binding-value2').val(String(this.$lastOrd));
  };

  /**
   * Resolve the data to something useful.
   * 
   * @param {String|baja.Ord} data The data to resolve
   * 
   * @returns {Promise}
   */
  JsTestWidget.prototype.resolve = function (data, resolveParams) {
    var that = this,
        dataAsString = String(data);
    that.$lastOrd = dataAsString;

    if (!that.$firstOrd) {
      that.$firstOrd = dataAsString;
    } // Check whether we need to skip ORD resolution in that particular case.

    return Widget.prototype.resolve.apply(that, arguments);
  };

  /**
   * Describe what kind of data you can read out of this widget.
   *
   * @returns {Promise} promise to be resolved with the current value
   */
  JsTestWidget.prototype.doRead = function () {
    return Promise.resolve(this.jq().find('input').val());
  };

  return JsTestWidget;
});

