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
import User from '../model/User';
import UserDetails from '../model/UserDetails';

/**
* User service.
* @module api/UserApi
* @version 0.0.1-SNAPSHOT
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authorizeUser operation.
     * @callback module:api/UserApi~authorizeUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authorize an User with OAuth2. Delegated to configured OAuth2 service
     * @param {module:api/UserApi~authorizeUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    authorizeUser(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/oauth2/authorize', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllUsers operation.
     * @callback module:api/UserApi~findAllUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Users
     * @param {module:api/UserApi~findAllUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */
    findAllUsers(callback) {
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
      let returnType = [User];
      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findUserById operation.
     * @callback module:api/UserApi~findUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of an user
     * @param {String} userId the User identifier
     * @param {module:api/UserApi~findUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDetails}
     */
    findUserById(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling findUserById");
      }

      let pathParams = {
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
      let accepts = ['application/json'];
      let returnType = UserDetails;
      return this.apiClient.callApi(
        '/users/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrentUser operation.
     * @callback module:api/UserApi~getCurrentUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of an user
     * @param {module:api/UserApi~getCurrentUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDetails}
     */
    getCurrentUser(callback) {
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
      let returnType = UserDetails;
      return this.apiClient.callApi(
        '/users/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationCurrentUser operation.
     * @callback module:api/UserApi~getOrganizationCurrentUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of an user with roles for an Organization
     * @param {String} organizationId the Organization identifier
     * @param {module:api/UserApi~getOrganizationCurrentUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDetails}
     */
    getOrganizationCurrentUser(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getOrganizationCurrentUser");
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
      let returnType = UserDetails;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkspaceCurrentUser operation.
     * @callback module:api/UserApi~getWorkspaceCurrentUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of an user with roles for a Workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:api/UserApi~getWorkspaceCurrentUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDetails}
     */
    getWorkspaceCurrentUser(organizationId, workspaceId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getWorkspaceCurrentUser");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling getWorkspaceCurrentUser");
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
      let returnType = UserDetails;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerUser operation.
     * @callback module:api/UserApi~registerUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a new user
     * @param {module:model/User} user the User to register
     * @param {module:api/UserApi~registerUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    registerUser(user, callback) {
      let postBody = user;
      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling registerUser");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unregisterUser operation.
     * @callback module:api/UserApi~unregisterUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregister an user
     * @param {String} userId the User identifier
     * @param {module:api/UserApi~unregisterUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    unregisterUser(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling unregisterUser");
      }

      let pathParams = {
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
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an user
     * @param {String} userId the User identifier
     * @param {module:model/User} user the new User details. Organization membership is handled in Organzation service.
     * @param {module:api/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    updateUser(userId, user, callback) {
      let postBody = user;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUser");
      }
      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling updateUser");
      }

      let pathParams = {
        'user_id': userId
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
      let returnType = User;
      return this.apiClient.callApi(
        '/users/{user_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
