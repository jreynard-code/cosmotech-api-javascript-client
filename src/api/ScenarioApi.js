/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.4-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Scenario from '../model/Scenario';
import ScenarioComparisonResult from '../model/ScenarioComparisonResult';
import ScenarioRunTemplateParameterValue from '../model/ScenarioRunTemplateParameterValue';
import ScenarioUser from '../model/ScenarioUser';

/**
* Scenario service.
* @module api/ScenarioApi
* @version 0.0.4-SNAPSHOT
*/
export default class ScenarioApi {

    /**
    * Constructs a new ScenarioApi. 
    * @alias module:api/ScenarioApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addOrReplaceScenarioParameterValues operation.
     * @callback module:api/ScenarioApi~addOrReplaceScenarioParameterValuesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScenarioRunTemplateParameterValue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add (or replace) Parameter Values for the Scenario specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {Array.<module:model/ScenarioRunTemplateParameterValue>} scenarioRunTemplateParameterValue the Parameter Value to add. Any Parameter Value with the same ID is overwritten
     * @param {module:api/ScenarioApi~addOrReplaceScenarioParameterValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ScenarioRunTemplateParameterValue>}
     */
    addOrReplaceScenarioParameterValues(organizationId, workspaceId, scenarioId, scenarioRunTemplateParameterValue, callback) {
      let postBody = scenarioRunTemplateParameterValue;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addOrReplaceScenarioParameterValues");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling addOrReplaceScenarioParameterValues");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling addOrReplaceScenarioParameterValues");
      }
      // verify the required parameter 'scenarioRunTemplateParameterValue' is set
      if (scenarioRunTemplateParameterValue === undefined || scenarioRunTemplateParameterValue === null) {
        throw new Error("Missing the required parameter 'scenarioRunTemplateParameterValue' when calling addOrReplaceScenarioParameterValues");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [ScenarioRunTemplateParameterValue];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/parameterValues', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addOrReplaceUsersInScenario operation.
     * @callback module:api/ScenarioApi~addOrReplaceUsersInScenarioCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScenarioUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add (or replace) users in the Scenario specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {Array.<module:model/ScenarioUser>} scenarioUser the Users to add. Any User with the same ID is overwritten
     * @param {module:api/ScenarioApi~addOrReplaceUsersInScenarioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ScenarioUser>}
     */
    addOrReplaceUsersInScenario(organizationId, workspaceId, scenarioId, scenarioUser, callback) {
      let postBody = scenarioUser;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addOrReplaceUsersInScenario");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling addOrReplaceUsersInScenario");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling addOrReplaceUsersInScenario");
      }
      // verify the required parameter 'scenarioUser' is set
      if (scenarioUser === undefined || scenarioUser === null) {
        throw new Error("Missing the required parameter 'scenarioUser' when calling addOrReplaceUsersInScenario");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [ScenarioUser];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the compareScenarios operation.
     * @callback module:api/ScenarioApi~compareScenariosCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScenarioComparisonResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compare the Scenario with another one and returns the difference for parameters values
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {String} comparedScenarioId the Scenario identifier to compare to
     * @param {module:api/ScenarioApi~compareScenariosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScenarioComparisonResult}
     */
    compareScenarios(organizationId, workspaceId, scenarioId, comparedScenarioId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling compareScenarios");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling compareScenarios");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling compareScenarios");
      }
      // verify the required parameter 'comparedScenarioId' is set
      if (comparedScenarioId === undefined || comparedScenarioId === null) {
        throw new Error("Missing the required parameter 'comparedScenarioId' when calling compareScenarios");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId,
        'compared_scenario_id': comparedScenarioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScenarioComparisonResult;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/compare/{compared_scenario_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createScenario operation.
     * @callback module:api/ScenarioApi~createScenarioCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Scenario} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Scenario
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:model/Scenario} scenario the Scenario to create
     * @param {module:api/ScenarioApi~createScenarioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Scenario}
     */
    createScenario(organizationId, workspaceId, scenario, callback) {
      let postBody = scenario;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createScenario");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling createScenario");
      }
      // verify the required parameter 'scenario' is set
      if (scenario === undefined || scenario === null) {
        throw new Error("Missing the required parameter 'scenario' when calling createScenario");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json', 'application/yaml'];
      let accepts = ['application/json'];
      let returnType = Scenario;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAllScenarios operation.
     * @callback module:api/ScenarioApi~deleteAllScenariosCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all Scenarios of the Workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:api/ScenarioApi~deleteAllScenariosCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAllScenarios(organizationId, workspaceId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteAllScenarios");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteAllScenarios");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteScenario operation.
     * @callback module:api/ScenarioApi~deleteScenarioCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a scenario
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {module:api/ScenarioApi~deleteScenarioCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteScenario(organizationId, workspaceId, scenarioId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteScenario");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteScenario");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling deleteScenario");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllScenarios operation.
     * @callback module:api/ScenarioApi~findAllScenariosCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Scenario>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Scenarios
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:api/ScenarioApi~findAllScenariosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Scenario>}
     */
    findAllScenarios(organizationId, workspaceId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllScenarios");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling findAllScenarios");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Scenario];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findScenarioById operation.
     * @callback module:api/ScenarioApi~findScenarioByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Scenario} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of an scenario
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {module:api/ScenarioApi~findScenarioByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Scenario}
     */
    findScenarioById(organizationId, workspaceId, scenarioId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findScenarioById");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling findScenarioById");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling findScenarioById");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Scenario;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getScenariosTree operation.
     * @callback module:api/ScenarioApi~getScenariosTreeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Scenario>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Scenarios Tree
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:api/ScenarioApi~getScenariosTreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Scenario>}
     */
    getScenariosTree(organizationId, workspaceId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getScenariosTree");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getScenariosTree");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Scenario];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/tree', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeAllScenarioParameterValues operation.
     * @callback module:api/ScenarioApi~removeAllScenarioParameterValuesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove all Parameter Values from the Scenario specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {module:api/ScenarioApi~removeAllScenarioParameterValuesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeAllScenarioParameterValues(organizationId, workspaceId, scenarioId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeAllScenarioParameterValues");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling removeAllScenarioParameterValues");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling removeAllScenarioParameterValues");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/parameterValues', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeAllUsersOfScenario operation.
     * @callback module:api/ScenarioApi~removeAllUsersOfScenarioCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove all users from the Scenario specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {module:api/ScenarioApi~removeAllUsersOfScenarioCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeAllUsersOfScenario(organizationId, workspaceId, scenarioId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeAllUsersOfScenario");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling removeAllUsersOfScenario");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling removeAllUsersOfScenario");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeUserFromScenario operation.
     * @callback module:api/ScenarioApi~removeUserFromScenarioCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove the specified user from the given Scenario
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {String} userId the User identifier
     * @param {module:api/ScenarioApi~removeUserFromScenarioCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeUserFromScenario(organizationId, workspaceId, scenarioId, userId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeUserFromScenario");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling removeUserFromScenario");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling removeUserFromScenario");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUserFromScenario");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId,
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateScenario operation.
     * @callback module:api/ScenarioApi~updateScenarioCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Scenario} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a scenario
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {String} scenarioId the Scenario identifier
     * @param {module:model/Scenario} scenario the new Scenario details.
     * @param {module:api/ScenarioApi~updateScenarioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Scenario}
     */
    updateScenario(organizationId, workspaceId, scenarioId, scenario, callback) {
      let postBody = scenario;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateScenario");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling updateScenario");
      }
      // verify the required parameter 'scenarioId' is set
      if (scenarioId === undefined || scenarioId === null) {
        throw new Error("Missing the required parameter 'scenarioId' when calling updateScenario");
      }
      // verify the required parameter 'scenario' is set
      if (scenario === undefined || scenario === null) {
        throw new Error("Missing the required parameter 'scenario' when calling updateScenario");
      }

      let pathParams = {
        'organization_id': organizationId,
        'workspace_id': workspaceId,
        'scenario_id': scenarioId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json', 'application/yaml'];
      let accepts = ['application/json'];
      let returnType = Scenario;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/scenarios/{scenario_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
