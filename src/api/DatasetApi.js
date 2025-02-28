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


import ApiClient from "../ApiClient";
import Dataset from '../model/Dataset';
import DatasetCompatibility from '../model/DatasetCompatibility';
import DatasetCopyParameters from '../model/DatasetCopyParameters';
import DatasetSearch from '../model/DatasetSearch';

/**
* Dataset service.
* @module api/DatasetApi
* @version 0.0.12-SNAPSHOT
*/
export default class DatasetApi {

    /**
    * Constructs a new DatasetApi. 
    * @alias module:api/DatasetApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add Dataset Compatibility elements.
     * @param {String} organizationId the Organization identifier
     * @param {String} datasetId the Dataset identifier
     * @param {Array.<module:model/DatasetCompatibility>} datasetCompatibility the Dataset Compatibility elements
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DatasetCompatibility>} and HTTP response
     */
    addOrReplaceDatasetCompatibilityElementsWithHttpInfo(organizationId, datasetId, datasetCompatibility) {
      let postBody = datasetCompatibility;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling addOrReplaceDatasetCompatibilityElements");
      }
      // verify the required parameter 'datasetId' is set
      if (datasetId === undefined || datasetId === null) {
        throw new Error("Missing the required parameter 'datasetId' when calling addOrReplaceDatasetCompatibilityElements");
      }
      // verify the required parameter 'datasetCompatibility' is set
      if (datasetCompatibility === undefined || datasetCompatibility === null) {
        throw new Error("Missing the required parameter 'datasetCompatibility' when calling addOrReplaceDatasetCompatibilityElements");
      }

      let pathParams = {
        'organization_id': organizationId,
        'dataset_id': datasetId
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
      let returnType = [DatasetCompatibility];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/{dataset_id}/compatibility', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add Dataset Compatibility elements.
     * @param {String} organizationId the Organization identifier
     * @param {String} datasetId the Dataset identifier
     * @param {Array.<module:model/DatasetCompatibility>} datasetCompatibility the Dataset Compatibility elements
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DatasetCompatibility>}
     */
    addOrReplaceDatasetCompatibilityElements(organizationId, datasetId, datasetCompatibility) {
      return this.addOrReplaceDatasetCompatibilityElementsWithHttpInfo(organizationId, datasetId, datasetCompatibility)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Copy a Dataset to another Dataset. Source must have a read capable connector and Target a write capable connector.
     * @param {String} organizationId the Organization identifier
     * @param {module:model/DatasetCopyParameters} datasetCopyParameters the Dataset copy parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DatasetCopyParameters} and HTTP response
     */
    copyDatasetWithHttpInfo(organizationId, datasetCopyParameters) {
      let postBody = datasetCopyParameters;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling copyDataset");
      }
      // verify the required parameter 'datasetCopyParameters' is set
      if (datasetCopyParameters === undefined || datasetCopyParameters === null) {
        throw new Error("Missing the required parameter 'datasetCopyParameters' when calling copyDataset");
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
      let returnType = DatasetCopyParameters;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/copy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Copy a Dataset to another Dataset. Source must have a read capable connector and Target a write capable connector.
     * @param {String} organizationId the Organization identifier
     * @param {module:model/DatasetCopyParameters} datasetCopyParameters the Dataset copy parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DatasetCopyParameters}
     */
    copyDataset(organizationId, datasetCopyParameters) {
      return this.copyDatasetWithHttpInfo(organizationId, datasetCopyParameters)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new Dataset
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Dataset} dataset the Dataset to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Dataset} and HTTP response
     */
    createDatasetWithHttpInfo(organizationId, dataset) {
      let postBody = dataset;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling createDataset");
      }
      // verify the required parameter 'dataset' is set
      if (dataset === undefined || dataset === null) {
        throw new Error("Missing the required parameter 'dataset' when calling createDataset");
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
      let returnType = Dataset;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new Dataset
     * @param {String} organizationId the Organization identifier
     * @param {module:model/Dataset} dataset the Dataset to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Dataset}
     */
    createDataset(organizationId, dataset) {
      return this.createDatasetWithHttpInfo(organizationId, dataset)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a dataset
     * @param {String} organizationId the Organization identifier
     * @param {String} datasetId the Dataset identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDatasetWithHttpInfo(organizationId, datasetId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling deleteDataset");
      }
      // verify the required parameter 'datasetId' is set
      if (datasetId === undefined || datasetId === null) {
        throw new Error("Missing the required parameter 'datasetId' when calling deleteDataset");
      }

      let pathParams = {
        'organization_id': organizationId,
        'dataset_id': datasetId
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
        '/organizations/{organization_id}/datasets/{dataset_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a dataset
     * @param {String} organizationId the Organization identifier
     * @param {String} datasetId the Dataset identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDataset(organizationId, datasetId) {
      return this.deleteDatasetWithHttpInfo(organizationId, datasetId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all Datasets
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Dataset>} and HTTP response
     */
    findAllDatasetsWithHttpInfo(organizationId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findAllDatasets");
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
      let returnType = [Dataset];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all Datasets
     * @param {String} organizationId the Organization identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Dataset>}
     */
    findAllDatasets(organizationId) {
      return this.findAllDatasetsWithHttpInfo(organizationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the details of a Dataset
     * @param {String} organizationId the Organization identifier
     * @param {String} datasetId the Dataset identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Dataset} and HTTP response
     */
    findDatasetByIdWithHttpInfo(organizationId, datasetId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling findDatasetById");
      }
      // verify the required parameter 'datasetId' is set
      if (datasetId === undefined || datasetId === null) {
        throw new Error("Missing the required parameter 'datasetId' when calling findDatasetById");
      }

      let pathParams = {
        'organization_id': organizationId,
        'dataset_id': datasetId
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
      let returnType = Dataset;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/{dataset_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the details of a Dataset
     * @param {String} organizationId the Organization identifier
     * @param {String} datasetId the Dataset identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Dataset}
     */
    findDatasetById(organizationId, datasetId) {
      return this.findDatasetByIdWithHttpInfo(organizationId, datasetId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove all Dataset Compatibility elements from the Dataset specified
     * @param {String} organizationId the Organization identifier
     * @param {String} datasetId the Dataset identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removeAllDatasetCompatibilityElementsWithHttpInfo(organizationId, datasetId) {
      let postBody = null;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling removeAllDatasetCompatibilityElements");
      }
      // verify the required parameter 'datasetId' is set
      if (datasetId === undefined || datasetId === null) {
        throw new Error("Missing the required parameter 'datasetId' when calling removeAllDatasetCompatibilityElements");
      }

      let pathParams = {
        'organization_id': organizationId,
        'dataset_id': datasetId
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
        '/organizations/{organization_id}/datasets/{dataset_id}/compatibility', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove all Dataset Compatibility elements from the Dataset specified
     * @param {String} organizationId the Organization identifier
     * @param {String} datasetId the Dataset identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeAllDatasetCompatibilityElements(organizationId, datasetId) {
      return this.removeAllDatasetCompatibilityElementsWithHttpInfo(organizationId, datasetId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Datasets
     * @param {String} organizationId the Organization identifier
     * @param {module:model/DatasetSearch} datasetSearch the Dataset search parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Dataset>} and HTTP response
     */
    searchDatasetsWithHttpInfo(organizationId, datasetSearch) {
      let postBody = datasetSearch;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling searchDatasets");
      }
      // verify the required parameter 'datasetSearch' is set
      if (datasetSearch === undefined || datasetSearch === null) {
        throw new Error("Missing the required parameter 'datasetSearch' when calling searchDatasets");
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
      let returnType = [Dataset];
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search Datasets
     * @param {String} organizationId the Organization identifier
     * @param {module:model/DatasetSearch} datasetSearch the Dataset search parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Dataset>}
     */
    searchDatasets(organizationId, datasetSearch) {
      return this.searchDatasetsWithHttpInfo(organizationId, datasetSearch)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a dataset
     * @param {String} organizationId the Organization identifier
     * @param {String} datasetId the Dataset identifier
     * @param {module:model/Dataset} dataset the new Dataset details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Dataset} and HTTP response
     */
    updateDatasetWithHttpInfo(organizationId, datasetId, dataset) {
      let postBody = dataset;
      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling updateDataset");
      }
      // verify the required parameter 'datasetId' is set
      if (datasetId === undefined || datasetId === null) {
        throw new Error("Missing the required parameter 'datasetId' when calling updateDataset");
      }
      // verify the required parameter 'dataset' is set
      if (dataset === undefined || dataset === null) {
        throw new Error("Missing the required parameter 'dataset' when calling updateDataset");
      }

      let pathParams = {
        'organization_id': organizationId,
        'dataset_id': datasetId
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
      let returnType = Dataset;
      return this.apiClient.callApi(
        '/organizations/{organization_id}/datasets/{dataset_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a dataset
     * @param {String} organizationId the Organization identifier
     * @param {String} datasetId the Dataset identifier
     * @param {module:model/Dataset} dataset the new Dataset details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Dataset}
     */
    updateDataset(organizationId, datasetId, dataset) {
      return this.updateDatasetWithHttpInfo(organizationId, datasetId, dataset)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
