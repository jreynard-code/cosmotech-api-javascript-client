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
    instance = new CosmotechApi.ScenarioRun();
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

  describe('ScenarioRun', function() {
    it('should create an instance of ScenarioRun', function() {
      // uncomment below and update the code to test ScenarioRun
      //var instane = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be.a(CosmotechApi.ScenarioRun);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property jobId (base name: "jobId")', function() {
      // uncomment below and update the code to test the property jobId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property workspaceId (base name: "workspaceId")', function() {
      // uncomment below and update the code to test the property workspaceId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property workspaceName (base name: "workspaceName")', function() {
      // uncomment below and update the code to test the property workspaceName
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property scenarioId (base name: "scenarioId")', function() {
      // uncomment below and update the code to test the property scenarioId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property scenarioName (base name: "scenarioName")', function() {
      // uncomment below and update the code to test the property scenarioName
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property solutionId (base name: "solutionId")', function() {
      // uncomment below and update the code to test the property solutionId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property solutionName (base name: "solutionName")', function() {
      // uncomment below and update the code to test the property solutionName
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property solutionVersion (base name: "solutionVersion")', function() {
      // uncomment below and update the code to test the property solutionVersion
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property runTemplateId (base name: "runTemplateId")', function() {
      // uncomment below and update the code to test the property runTemplateId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property runTemplateName (base name: "runTemplateName")', function() {
      // uncomment below and update the code to test the property runTemplateName
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property computeSize (base name: "computeSize")', function() {
      // uncomment below and update the code to test the property computeSize
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property failedStep (base name: "failedStep")', function() {
      // uncomment below and update the code to test the property failedStep
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property failedContainerId (base name: "failedContainerId")', function() {
      // uncomment below and update the code to test the property failedContainerId
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property endTime (base name: "endTime")', function() {
      // uncomment below and update the code to test the property endTime
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property datasetList (base name: "datasetList")', function() {
      // uncomment below and update the code to test the property datasetList
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property parametersValues (base name: "parametersValues")', function() {
      // uncomment below and update the code to test the property parametersValues
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property sendInputToDataWarehouse (base name: "sendInputToDataWarehouse")', function() {
      // uncomment below and update the code to test the property sendInputToDataWarehouse
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property dataWarehouseDB (base name: "dataWarehouseDB")', function() {
      // uncomment below and update the code to test the property dataWarehouseDB
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property resultsEventBusResourceUri (base name: "resultsEventBusResourceUri")', function() {
      // uncomment below and update the code to test the property resultsEventBusResourceUri
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property scenariorunEventBusResourceUri (base name: "scenariorunEventBusResourceUri")', function() {
      // uncomment below and update the code to test the property scenariorunEventBusResourceUri
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property nodeLabel (base name: "nodeLabel")', function() {
      // uncomment below and update the code to test the property nodeLabel
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property fetchDatasetContainers (base name: "fetchDatasetContainers")', function() {
      // uncomment below and update the code to test the property fetchDatasetContainers
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property fetchScenarioParametersContainer (base name: "fetchScenarioParametersContainer")', function() {
      // uncomment below and update the code to test the property fetchScenarioParametersContainer
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property applyParametersContainer (base name: "applyParametersContainer")', function() {
      // uncomment below and update the code to test the property applyParametersContainer
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property validateDataContainer (base name: "validateDataContainer")', function() {
      // uncomment below and update the code to test the property validateDataContainer
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property sendDataWarehouseContainer (base name: "sendDataWarehouseContainer")', function() {
      // uncomment below and update the code to test the property sendDataWarehouseContainer
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property preRunContainer (base name: "preRunContainer")', function() {
      // uncomment below and update the code to test the property preRunContainer
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property runContainer (base name: "runContainer")', function() {
      // uncomment below and update the code to test the property runContainer
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

    it('should have the property postRunContainer (base name: "postRunContainer")', function() {
      // uncomment below and update the code to test the property postRunContainer
      //var instance = new CosmotechApi.ScenarioRun();
      //expect(instance).to.be();
    });

  });

}));
