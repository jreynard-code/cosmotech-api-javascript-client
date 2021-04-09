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


import ApiClient from "../ApiClient";
import Validator from '../model/Validator';
import ValidatorRun from '../model/ValidatorRun';

/**
* Validator service.
* @module api/ValidatorApi
* @version 0.0.1-SNAPSHOT
*/
export default class ValidatorApi {

    /**
    * Constructs a new ValidatorApi. 
    * @alias module:api/ValidatorApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createValidator operation.
     * @callback module:api/ValidatorApi~createValidatorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Validator} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a new validator
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Validator} validator the Validator to create
     * @param {module:api/ValidatorApi~createValidatorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Validator}
     */
    createValidator(organizationId, validator, callback) {
      let postBody = validator;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createValidator");
      }
      // verify the required parameter 'validator' is set
      if (validator === undefined || validator === null) {
        throw new Error("Missing the required parameter 'validator' when calling createValidator");
      }

      let pathParams = {
        'organization_id': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Validator;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/validators', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createValidatorRun operation.
     * @callback module:api/ValidatorApi~createValidatorRunCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidatorRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a new validator run
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the ValidatorRun identifier
     * @param {module:model/ValidatorRun} validatorRun the Validator Run to create
     * @param {module:api/ValidatorApi~createValidatorRunCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidatorRun}
     */
    createValidatorRun(organizationId, validatorId, validatorRun, callback) {
      let postBody = validatorRun;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createValidatorRun");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling createValidatorRun");
      }
      // verify the required parameter 'validatorRun' is set
      if (validatorRun === undefined || validatorRun === null) {
        throw new Error("Missing the required parameter 'validatorRun' when calling createValidatorRun");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ValidatorRun;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/validators/{validator_id}/history', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteValidator operation.
     * @callback module:api/ValidatorApi~deleteValidatorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Validator} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a validator
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @param {module:api/ValidatorApi~deleteValidatorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Validator}
     */
    deleteValidator(organizationId, validatorId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteValidator");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling deleteValidator");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Validator;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/validators/{validator_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteValidatorRun operation.
     * @callback module:api/ValidatorApi~deleteValidatorRunCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidatorRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a validator run
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @param {String} validatorrunId the Validator Run identifier
     * @param {module:api/ValidatorApi~deleteValidatorRunCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidatorRun}
     */
    deleteValidatorRun(organizationId, validatorId, validatorrunId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteValidatorRun");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling deleteValidatorRun");
      }
      // verify the required parameter 'validatorrunId' is set
      if (validatorrunId === undefined || validatorrunId === null) {
        throw new Error("Missing the required parameter 'validatorrunId' when calling deleteValidatorRun");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId,
        'validatorrun_id': validatorrunId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ValidatorRun;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/validators/{validator_id}/history/{validatorrun_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllValidatorRuns operation.
     * @callback module:api/ValidatorApi~findAllValidatorRunsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ValidatorRun>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Validator Runs
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the ValidatorRun identifier
     * @param {module:api/ValidatorApi~findAllValidatorRunsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ValidatorRun>}
     */
    findAllValidatorRuns(organizationId, validatorId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllValidatorRuns");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling findAllValidatorRuns");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ValidatorRun];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/validators/{validator_id}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllValidators operation.
     * @callback module:api/ValidatorApi~findAllValidatorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Validator>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Validators
     * @param {String} organizationId the Organization identifier
     * @param {module:api/ValidatorApi~findAllValidatorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Validator>}
     */
    findAllValidators(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllValidators");
      }

      let pathParams = {
        'organization_id': organizationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Validator];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/validators', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findValidatorById operation.
     * @callback module:api/ValidatorApi~findValidatorByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Validator} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of a validator
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @param {module:api/ValidatorApi~findValidatorByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Validator}
     */
    findValidatorById(organizationId, validatorId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findValidatorById");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling findValidatorById");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Validator;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/validators/{validator_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findValidatorRunById operation.
     * @callback module:api/ValidatorApi~findValidatorRunByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidatorRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of a validator run
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the Validator identifier
     * @param {String} validatorrunId the Validator Run identifier
     * @param {module:api/ValidatorApi~findValidatorRunByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidatorRun}
     */
    findValidatorRunById(organizationId, validatorId, validatorrunId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findValidatorRunById");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling findValidatorRunById");
      }
      // verify the required parameter 'validatorrunId' is set
      if (validatorrunId === undefined || validatorrunId === null) {
        throw new Error("Missing the required parameter 'validatorrunId' when calling findValidatorRunById");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId,
        'validatorrun_id': validatorrunId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ValidatorRun;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/validators/{validator_id}/history/{validatorrun_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the runValidator operation.
     * @callback module:api/ValidatorApi~runValidatorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidatorRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run a Validator
     * @param {String} organizationId the Organization identifier
     * @param {String} validatorId the ValidatorRun identifier
     * @param {module:model/ValidatorRun} validatorRun the Validator to run
     * @param {module:api/ValidatorApi~runValidatorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ValidatorRun}
     */
    runValidator(organizationId, validatorId, validatorRun, callback) {
      let postBody = validatorRun;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling runValidator");
      }
      // verify the required parameter 'validatorId' is set
      if (validatorId === undefined || validatorId === null) {
        throw new Error("Missing the required parameter 'validatorId' when calling runValidator");
      }
      // verify the required parameter 'validatorRun' is set
      if (validatorRun === undefined || validatorRun === null) {
        throw new Error("Missing the required parameter 'validatorRun' when calling runValidator");
      }

      let pathParams = {
        'organization_id': organizationId,
        'validator_id': validatorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AADOAuth2AuthCode', 'ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ValidatorRun;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/validators/{validator_id}/run', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
