/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.1-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CosmotechApi);
  }
}(this, function(expect, CosmotechApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CosmotechApi.WorkspaceServices();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WorkspaceServices', function() {
    it('should create an instance of WorkspaceServices', function() {
      // uncomment below and update the code to test WorkspaceServices
      //var instane = new CosmotechApi.WorkspaceServices();
      //expect(instance).to.be.a(CosmotechApi.WorkspaceServices);
    });

    it('should have the property resultsEventBus (base name: "resultsEventBus")', function() {
      // uncomment below and update the code to test the property resultsEventBus
      //var instance = new CosmotechApi.WorkspaceServices();
      //expect(instance).to.be();
    });

    it('should have the property simulationEventBus (base name: "simulationEventBus")', function() {
      // uncomment below and update the code to test the property simulationEventBus
      //var instance = new CosmotechApi.WorkspaceServices();
      //expect(instance).to.be();
    });

    it('should have the property dataWarehouse (base name: "dataWarehouse")', function() {
      // uncomment below and update the code to test the property dataWarehouse
      //var instance = new CosmotechApi.WorkspaceServices();
      //expect(instance).to.be();
    });

    it('should have the property storage (base name: "storage")', function() {
      // uncomment below and update the code to test the property storage
      //var instance = new CosmotechApi.WorkspaceServices();
      //expect(instance).to.be();
    });

  });

}));
