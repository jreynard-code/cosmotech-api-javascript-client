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
    instance = new CosmotechApi.RunTemplate();
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

  describe('RunTemplate', function() {
    it('should create an instance of RunTemplate', function() {
      // uncomment below and update the code to test RunTemplate
      //var instane = new CosmotechApi.RunTemplate();
      //expect(instance).to.be.a(CosmotechApi.RunTemplate);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property csmSimulation (base name: "csmSimulation")', function() {
      // uncomment below and update the code to test the property csmSimulation
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property computeSize (base name: "computeSize")', function() {
      // uncomment below and update the code to test the property computeSize
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property parametersHandlerResource (base name: "parametersHandlerResource")', function() {
      // uncomment below and update the code to test the property parametersHandlerResource
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property datasetValidatorResource (base name: "datasetValidatorResource")', function() {
      // uncomment below and update the code to test the property datasetValidatorResource
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property preRunResource (base name: "preRunResource")', function() {
      // uncomment below and update the code to test the property preRunResource
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property engineResource (base name: "engineResource")', function() {
      // uncomment below and update the code to test the property engineResource
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property postRunResource (base name: "postRunResource")', function() {
      // uncomment below and update the code to test the property postRunResource
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property sendDatasetsToDataWarehouse (base name: "sendDatasetsToDataWarehouse")', function() {
      // uncomment below and update the code to test the property sendDatasetsToDataWarehouse
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property sendInputParametersToDataWarehouse (base name: "sendInputParametersToDataWarehouse")', function() {
      // uncomment below and update the code to test the property sendInputParametersToDataWarehouse
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

    it('should have the property parameterGroups (base name: "parameterGroups")', function() {
      // uncomment below and update the code to test the property parameterGroups
      //var instance = new CosmotechApi.RunTemplate();
      //expect(instance).to.be();
    });

  });

}));
