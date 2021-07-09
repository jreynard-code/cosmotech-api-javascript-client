/**
 * Cosmo Tech Plaform API
 * Cosmo Tech Platform API
 *
 * The version of the OpenAPI document: 0.0.4-SNAPSHOT
 * Contact: platform@cosmotech.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Organization from '../model/Organization';
import OrganizationService from '../model/OrganizationService';
import OrganizationUser from '../model/OrganizationUser';

/**
* Organization service.
* @module api/OrganizationApi
* @version 0.0.4-SNAPSHOT
*/
export default class OrganizationApi {

    /**
    * Constructs a new OrganizationApi. 
    * @alias module:api/OrganizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addOrReplaceUsersInOrganization operation.
     * @callback module:api/OrganizationApi~addOrReplaceUsersInOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrganizationUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add (or replace) users in the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {Array.<module:model/OrganizationUser>} organizationUser the Users to add. Any User with the same ID is overwritten
     * @param {module:api/OrganizationApi~addOrReplaceUsersInOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrganizationUser>}
     */
    addOrReplaceUsersInOrganization(organizationId, organizationUser, callback) {
      let postBody = organizationUser;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addOrReplaceUsersInOrganization");
      }
      // verify the required parameter 'organizationUser' is set
      if (organizationUser === undefined || organizationUser === null) {
        throw new Error("Missing the required parameter 'organizationUser' when calling addOrReplaceUsersInOrganization");
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

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [OrganizationUser];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllOrganizations operation.
     * @callback module:api/OrganizationApi~findAllOrganizationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Organization>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Organizations
     * @param {module:api/OrganizationApi~findAllOrganizationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Organization>}
     */
    findAllOrganizations(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = [Organization];
      return this.apiClient.callApi(
        '/organizations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findOrganizationById operation.
     * @callback module:api/OrganizationApi~findOrganizationByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of an Organization
     * @param {String} organizationId the Organization identifier
     * @param {module:api/OrganizationApi~findOrganizationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */
    findOrganizationById(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findOrganizationById");
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

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organizations/{organization_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerOrganization operation.
     * @callback module:api/OrganizationApi~registerOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a new organization
     * @param {module:model/Organization} organization the Organization to register
     * @param {module:api/OrganizationApi~registerOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */
    registerOrganization(organization, callback) {
      let postBody = organization;
      // verify the required parameter 'organization' is set
      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling registerOrganization");
      }

      let pathParams = {
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
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organizations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeAllUsersInOrganization operation.
     * @callback module:api/OrganizationApi~removeAllUsersInOrganizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove all users from the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {module:api/OrganizationApi~removeAllUsersInOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeAllUsersInOrganization(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeAllUsersInOrganization");
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

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeUserFromOrganization operation.
     * @callback module:api/OrganizationApi~removeUserFromOrganizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove the specified user from the given Organization
     * @param {String} organizationId the Organization identifier
     * @param {String} userId the User identifier
     * @param {module:api/OrganizationApi~removeUserFromOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeUserFromOrganization(organizationId, userId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeUserFromOrganization");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeUserFromOrganization");
      }

      let pathParams = {
        'organization_id': organizationId,
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
        '/organizations/{organization_id}/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unregisterOrganization operation.
     * @callback module:api/OrganizationApi~unregisterOrganizationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister an organization
     * @param {String} organizationId the Organization identifier
     * @param {module:api/OrganizationApi~unregisterOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unregisterOrganization(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling unregisterOrganization");
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

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/organizations/{organization_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrganization operation.
     * @callback module:api/OrganizationApi~updateOrganizationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Organization
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Organization} organization the new Organization details
     * @param {module:api/OrganizationApi~updateOrganizationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */
    updateOrganization(organizationId, organization, callback) {
      let postBody = organization;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateOrganization");
      }
      // verify the required parameter 'organization' is set
      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling updateOrganization");
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

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json', 'application/yaml'];
      let accepts = ['application/json'];
      let returnType = Organization;
      return this.apiClient.callApi(
        '/organizations/{organization_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSolutionsContainerRegistryByOrganizationId operation.
     * @callback module:api/OrganizationApi~updateSolutionsContainerRegistryByOrganizationIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationService} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the solutions container registry configuration for the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {module:model/OrganizationService} organizationService the new solutions container registry configuration to use
     * @param {module:api/OrganizationApi~updateSolutionsContainerRegistryByOrganizationIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationService}
     */
    updateSolutionsContainerRegistryByOrganizationId(organizationId, organizationService, callback) {
      let postBody = organizationService;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateSolutionsContainerRegistryByOrganizationId");
      }
      // verify the required parameter 'organizationService' is set
      if (organizationService === undefined || organizationService === null) {
        throw new Error("Missing the required parameter 'organizationService' when calling updateSolutionsContainerRegistryByOrganizationId");
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

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json', 'application/yaml'];
      let accepts = ['application/json'];
      let returnType = OrganizationService;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/services/solutionsContainerRegistry', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStorageByOrganizationId operation.
     * @callback module:api/OrganizationApi~updateStorageByOrganizationIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationService} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update storage configuration for the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {module:model/OrganizationService} organizationService the new Storage configuration to use
     * @param {module:api/OrganizationApi~updateStorageByOrganizationIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationService}
     */
    updateStorageByOrganizationId(organizationId, organizationService, callback) {
      let postBody = organizationService;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateStorageByOrganizationId");
      }
      // verify the required parameter 'organizationService' is set
      if (organizationService === undefined || organizationService === null) {
        throw new Error("Missing the required parameter 'organizationService' when calling updateStorageByOrganizationId");
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

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json', 'application/yaml'];
      let accepts = ['application/json'];
      let returnType = OrganizationService;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/services/storage', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTenantCredentialsByOrganizationId operation.
     * @callback module:api/OrganizationApi~updateTenantCredentialsByOrganizationIdCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update tenant credentials for the Organization specified
     * @param {String} organizationId the Organization identifier
     * @param {Object.<String, {String: Object}>} requestBody the new Tenant Credentials to use
     * @param {module:api/OrganizationApi~updateTenantCredentialsByOrganizationIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    updateTenantCredentialsByOrganizationId(organizationId, requestBody, callback) {
      let postBody = requestBody;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateTenantCredentialsByOrganizationId");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling updateTenantCredentialsByOrganizationId");
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

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/organizations/{organization_id}/services/tenantCredentials', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
