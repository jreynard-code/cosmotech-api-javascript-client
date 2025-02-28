/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.12-SNAPSHOT
 * Contact: platform@cosmotech.com
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
    instance = new CosmotechApi.ScenarioRunSearch();
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

  describe('ScenarioRunSearch', function() {
    it('should create an instance of ScenarioRunSearch', function() {
      // uncomment below and update the code to test ScenarioRunSearch
      //var instance = new CosmotechApi.ScenarioRunSearch();
      //expect(instance).to.be.a(CosmotechApi.ScenarioRunSearch);
    });

    it('should have the property solutionId (base name: "solutionId")', function() {
      // uncomment below and update the code to test the property solutionId
      //var instance = new CosmotechApi.ScenarioRunSearch();
      //expect(instance).to.be();
    });

    it('should have the property runTemplateId (base name: "runTemplateId")', function() {
      // uncomment below and update the code to test the property runTemplateId
      //var instance = new CosmotechApi.ScenarioRunSearch();
      //expect(instance).to.be();
    });

    it('should have the property workspaceId (base name: "workspaceId")', function() {
      // uncomment below and update the code to test the property workspaceId
      //var instance = new CosmotechApi.ScenarioRunSearch();
      //expect(instance).to.be();
    });

    it('should have the property scenarioId (base name: "scenarioId")', function() {
      // uncomment below and update the code to test the property scenarioId
      //var instance = new CosmotechApi.ScenarioRunSearch();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new CosmotechApi.ScenarioRunSearch();
      //expect(instance).to.be();
    });

    it('should have the property workflowId (base name: "workflowId")', function() {
      // uncomment below and update the code to test the property workflowId
      //var instance = new CosmotechApi.ScenarioRunSearch();
      //expect(instance).to.be();
    });

    it('should have the property workflowName (base name: "workflowName")', function() {
      // uncomment below and update the code to test the property workflowName
      //var instance = new CosmotechApi.ScenarioRunSearch();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new CosmotechApi.ScenarioRunSearch();
      //expect(instance).to.be();
    });

  });

}));
