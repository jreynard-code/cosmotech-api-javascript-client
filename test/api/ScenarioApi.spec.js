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
    instance = new CosmotechApi.ScenarioApi();
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

  describe('ScenarioApi', function() {
    describe('addOrReplaceScenarioParameterValues', function() {
      it('should call addOrReplaceScenarioParameterValues successfully', function(done) {
        //uncomment below and update the code to test addOrReplaceScenarioParameterValues
        //instance.addOrReplaceScenarioParameterValues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addOrReplaceUsersInScenario', function() {
      it('should call addOrReplaceUsersInScenario successfully', function(done) {
        //uncomment below and update the code to test addOrReplaceUsersInScenario
        //instance.addOrReplaceUsersInScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('compareScenarios', function() {
      it('should call compareScenarios successfully', function(done) {
        //uncomment below and update the code to test compareScenarios
        //instance.compareScenarios(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createScenario', function() {
      it('should call createScenario successfully', function(done) {
        //uncomment below and update the code to test createScenario
        //instance.createScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAllScenarios', function() {
      it('should call deleteAllScenarios successfully', function(done) {
        //uncomment below and update the code to test deleteAllScenarios
        //instance.deleteAllScenarios(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteScenario', function() {
      it('should call deleteScenario successfully', function(done) {
        //uncomment below and update the code to test deleteScenario
        //instance.deleteScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadScenarioData', function() {
      it('should call downloadScenarioData successfully', function(done) {
        //uncomment below and update the code to test downloadScenarioData
        //instance.downloadScenarioData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findAllScenarios', function() {
      it('should call findAllScenarios successfully', function(done) {
        //uncomment below and update the code to test findAllScenarios
        //instance.findAllScenarios(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findScenarioById', function() {
      it('should call findScenarioById successfully', function(done) {
        //uncomment below and update the code to test findScenarioById
        //instance.findScenarioById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenarioDataDownloadJobInfo', function() {
      it('should call getScenarioDataDownloadJobInfo successfully', function(done) {
        //uncomment below and update the code to test getScenarioDataDownloadJobInfo
        //instance.getScenarioDataDownloadJobInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getScenariosTree', function() {
      it('should call getScenariosTree successfully', function(done) {
        //uncomment below and update the code to test getScenariosTree
        //instance.getScenariosTree(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAllScenarioParameterValues', function() {
      it('should call removeAllScenarioParameterValues successfully', function(done) {
        //uncomment below and update the code to test removeAllScenarioParameterValues
        //instance.removeAllScenarioParameterValues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAllUsersOfScenario', function() {
      it('should call removeAllUsersOfScenario successfully', function(done) {
        //uncomment below and update the code to test removeAllUsersOfScenario
        //instance.removeAllUsersOfScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUserFromScenario', function() {
      it('should call removeUserFromScenario successfully', function(done) {
        //uncomment below and update the code to test removeUserFromScenario
        //instance.removeUserFromScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateScenario', function() {
      it('should call updateScenario successfully', function(done) {
        //uncomment below and update the code to test updateScenario
        //instance.updateScenario(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
