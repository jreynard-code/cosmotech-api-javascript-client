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
import Workspace from '../model/Workspace';
import WorkspaceFile from '../model/WorkspaceFile';
import WorkspaceUser from '../model/WorkspaceUser';

/**
* Workspace service.
* @module api/WorkspaceApi
* @version 0.0.1-SNAPSHOT
*/
export default class WorkspaceApi {

    /**
    * Constructs a new WorkspaceApi. 
    * @alias module:api/WorkspaceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addUsersToOrganizationWorkspace operation.
     * @callback module:api/WorkspaceApi~addUsersToOrganizationWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WorkspaceUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add (or replace) users to the Workspace specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {Array.<module:model/WorkspaceUser>} workspaceUser the Users to add. Any User with the same ID is overwritten
     * @param {module:api/WorkspaceApi~addUsersToOrganizationWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WorkspaceUser>}
     */
    addUsersToOrganizationWorkspace(organizationId, workspaceId, workspaceUser, callback) {
      let postBody = workspaceUser;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addUsersToOrganizationWorkspace");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling addUsersToOrganizationWorkspace");
      }
      // verify the required parameter 'workspaceUser' is set
      if (workspaceUser === undefined || workspaceUser === null) {
        throw new Error("Missing the required parameter 'workspaceUser' when calling addUsersToOrganizationWorkspace");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [WorkspaceUser];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createWorkspace operation.
     * @callback module:api/WorkspaceApi~createWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new workspace
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Workspace} workspace the Workspace to create
     * @param {module:api/WorkspaceApi~createWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workspace}
     */
    createWorkspace(organizationId, workspace, callback) {
      let postBody = workspace;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createWorkspace");
      }
      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling createWorkspace");
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
      let returnType = Workspace;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWorkspace operation.
     * @callback module:api/WorkspaceApi~deleteWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:api/WorkspaceApi~deleteWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workspace}
     */
    deleteWorkspace(organizationId, workspaceId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteWorkspace");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteWorkspace");
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
      let returnType = Workspace;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWorkspaceFile operation.
     * @callback module:api/WorkspaceApi~deleteWorkspaceFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkspaceFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a workspace file
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:model/WorkspaceFile} workspaceFile the file to upload
     * @param {module:api/WorkspaceApi~deleteWorkspaceFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkspaceFile}
     */
    deleteWorkspaceFile(organizationId, workspaceId, workspaceFile, callback) {
      let postBody = workspaceFile;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteWorkspaceFile");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling deleteWorkspaceFile");
      }
      // verify the required parameter 'workspaceFile' is set
      if (workspaceFile === undefined || workspaceFile === null) {
        throw new Error("Missing the required parameter 'workspaceFile' when calling deleteWorkspaceFile");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WorkspaceFile;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/files', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllWorkspaceFiles operation.
     * @callback module:api/WorkspaceApi~findAllWorkspaceFilesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WorkspaceFile>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Workspace files
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:api/WorkspaceApi~findAllWorkspaceFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WorkspaceFile>}
     */
    findAllWorkspaceFiles(organizationId, workspaceId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllWorkspaceFiles");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling findAllWorkspaceFiles");
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
      let returnType = [WorkspaceFile];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllWorkspaces operation.
     * @callback module:api/WorkspaceApi~findAllWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Workspace>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Workspaces
     * @param {String} organizationId the Organization identifier
     * @param {module:api/WorkspaceApi~findAllWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Workspace>}
     */
    findAllWorkspaces(organizationId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllWorkspaces");
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
      let returnType = [Workspace];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findWorkspaceById operation.
     * @callback module:api/WorkspaceApi~findWorkspaceByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of an workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:api/WorkspaceApi~findWorkspaceByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workspace}
     */
    findWorkspaceById(organizationId, workspaceId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findWorkspaceById");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling findWorkspaceById");
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
      let returnType = Workspace;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeAllUsersOfWorkspace operation.
     * @callback module:api/WorkspaceApi~removeAllUsersOfWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove all users from the Workspace specified
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:api/WorkspaceApi~removeAllUsersOfWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    removeAllUsersOfWorkspace(organizationId, workspaceId, callback) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeAllUsersOfWorkspace");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling removeAllUsersOfWorkspace");
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
        '/organizations/{organization_id}/workspaces/{workspace_id}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWorkspace operation.
     * @callback module:api/WorkspaceApi~updateWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {module:model/Workspace} workspace the new Workspace details.
     * @param {module:api/WorkspaceApi~updateWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workspace}
     */
    updateWorkspace(organizationId, workspaceId, workspace, callback) {
      let postBody = workspace;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateWorkspace");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling updateWorkspace");
      }
      // verify the required parameter 'workspace' is set
      if (workspace === undefined || workspace === null) {
        throw new Error("Missing the required parameter 'workspace' when calling updateWorkspace");
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
      let returnType = Workspace;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadWorkspaceFile operation.
     * @callback module:api/WorkspaceApi~uploadWorkspaceFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkspaceFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a file for the Workspace
     * @param {String} organizationId the Organization identifier
     * @param {String} workspaceId the Workspace identifier
     * @param {Object} opts Optional parameters
     * @param {File} opts.fileName 
     * @param {module:api/WorkspaceApi~uploadWorkspaceFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkspaceFile}
     */
    uploadWorkspaceFile(organizationId, workspaceId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling uploadWorkspaceFile");
      }
      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw new Error("Missing the required parameter 'workspaceId' when calling uploadWorkspaceFile");
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
        'fileName': opts['fileName']
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = WorkspaceFile;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/workspaces/{workspace_id}/files', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
