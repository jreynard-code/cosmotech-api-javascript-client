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

import ApiClient from '../ApiClient';
import RunTemplateStepSource from './RunTemplateStepSource';

/**
 * The RunTemplate model module.
 * @module model/RunTemplate
 * @version 0.0.12-SNAPSHOT
 */
class RunTemplate {
    /**
     * Constructs a new <code>RunTemplate</code>.
     * a Solution Run Template
     * @alias module:model/RunTemplate
     * @param id {String} the Solution Run Template id
     * @param name {String} the Run Template name
     */
    constructor(id, name) { 
        
        RunTemplate.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>RunTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunTemplate} obj Optional instance to populate.
     * @return {module:model/RunTemplate} The populated <code>RunTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunTemplate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('csmSimulation')) {
                obj['csmSimulation'] = ApiClient.convertToType(data['csmSimulation'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('computeSize')) {
                obj['computeSize'] = ApiClient.convertToType(data['computeSize'], 'String');
            }
            if (data.hasOwnProperty('noDataIngestionState')) {
                obj['noDataIngestionState'] = ApiClient.convertToType(data['noDataIngestionState'], 'Boolean');
            }
            if (data.hasOwnProperty('fetchDatasets')) {
                obj['fetchDatasets'] = ApiClient.convertToType(data['fetchDatasets'], 'Boolean');
            }
            if (data.hasOwnProperty('scenarioDataDownloadTransform')) {
                obj['scenarioDataDownloadTransform'] = ApiClient.convertToType(data['scenarioDataDownloadTransform'], 'Boolean');
            }
            if (data.hasOwnProperty('fetchScenarioParameters')) {
                obj['fetchScenarioParameters'] = ApiClient.convertToType(data['fetchScenarioParameters'], 'Boolean');
            }
            if (data.hasOwnProperty('applyParameters')) {
                obj['applyParameters'] = ApiClient.convertToType(data['applyParameters'], 'Boolean');
            }
            if (data.hasOwnProperty('validateData')) {
                obj['validateData'] = ApiClient.convertToType(data['validateData'], 'Boolean');
            }
            if (data.hasOwnProperty('sendDatasetsToDataWarehouse')) {
                obj['sendDatasetsToDataWarehouse'] = ApiClient.convertToType(data['sendDatasetsToDataWarehouse'], 'Boolean');
            }
            if (data.hasOwnProperty('sendInputParametersToDataWarehouse')) {
                obj['sendInputParametersToDataWarehouse'] = ApiClient.convertToType(data['sendInputParametersToDataWarehouse'], 'Boolean');
            }
            if (data.hasOwnProperty('preRun')) {
                obj['preRun'] = ApiClient.convertToType(data['preRun'], 'Boolean');
            }
            if (data.hasOwnProperty('run')) {
                obj['run'] = ApiClient.convertToType(data['run'], 'Boolean');
            }
            if (data.hasOwnProperty('postRun')) {
                obj['postRun'] = ApiClient.convertToType(data['postRun'], 'Boolean');
            }
            if (data.hasOwnProperty('parametersJson')) {
                obj['parametersJson'] = ApiClient.convertToType(data['parametersJson'], 'Boolean');
            }
            if (data.hasOwnProperty('parametersHandlerSource')) {
                obj['parametersHandlerSource'] = RunTemplateStepSource.constructFromObject(data['parametersHandlerSource']);
            }
            if (data.hasOwnProperty('datasetValidatorSource')) {
                obj['datasetValidatorSource'] = RunTemplateStepSource.constructFromObject(data['datasetValidatorSource']);
            }
            if (data.hasOwnProperty('preRunSource')) {
                obj['preRunSource'] = RunTemplateStepSource.constructFromObject(data['preRunSource']);
            }
            if (data.hasOwnProperty('runSource')) {
                obj['runSource'] = RunTemplateStepSource.constructFromObject(data['runSource']);
            }
            if (data.hasOwnProperty('postRunSource')) {
                obj['postRunSource'] = RunTemplateStepSource.constructFromObject(data['postRunSource']);
            }
            if (data.hasOwnProperty('scenariodataTransformSource')) {
                obj['scenariodataTransformSource'] = RunTemplateStepSource.constructFromObject(data['scenariodataTransformSource']);
            }
            if (data.hasOwnProperty('parameterGroups')) {
                obj['parameterGroups'] = ApiClient.convertToType(data['parameterGroups'], ['String']);
            }
            if (data.hasOwnProperty('stackSteps')) {
                obj['stackSteps'] = ApiClient.convertToType(data['stackSteps'], 'Boolean');
            }
            if (data.hasOwnProperty('gitRepositoryUrl')) {
                obj['gitRepositoryUrl'] = ApiClient.convertToType(data['gitRepositoryUrl'], 'String');
            }
            if (data.hasOwnProperty('gitBranchName')) {
                obj['gitBranchName'] = ApiClient.convertToType(data['gitBranchName'], 'String');
            }
            if (data.hasOwnProperty('runTemplateSourceDir')) {
                obj['runTemplateSourceDir'] = ApiClient.convertToType(data['runTemplateSourceDir'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the Solution Run Template id
 * @member {String} id
 */
RunTemplate.prototype['id'] = undefined;

/**
 * the Run Template name
 * @member {String} name
 */
RunTemplate.prototype['name'] = undefined;

/**
 * the Run Template description
 * @member {String} description
 */
RunTemplate.prototype['description'] = undefined;

/**
 * the Cosmo Tech simulation name. This information is send to the Engine. Mandatory information if no Engine is defined
 * @member {String} csmSimulation
 */
RunTemplate.prototype['csmSimulation'] = undefined;

/**
 * the list of Run Template tags
 * @member {Array.<String>} tags
 */
RunTemplate.prototype['tags'] = undefined;

/**
 * the compute size needed for this Run Template. Standard sizes are basic and highcpu. Default is basic
 * @member {String} computeSize
 */
RunTemplate.prototype['computeSize'] = undefined;

/**
 * set to true if the run template does not want to check data ingestion state (no probes or not control plane)
 * @member {Boolean} noDataIngestionState
 */
RunTemplate.prototype['noDataIngestionState'] = undefined;

/**
 * whether or not the fetch dataset step is done
 * @member {Boolean} fetchDatasets
 */
RunTemplate.prototype['fetchDatasets'] = undefined;

/**
 * whether or not the scenario data download transform step step is done
 * @member {Boolean} scenarioDataDownloadTransform
 */
RunTemplate.prototype['scenarioDataDownloadTransform'] = undefined;

/**
 * whether or not the fetch parameters step is done
 * @member {Boolean} fetchScenarioParameters
 */
RunTemplate.prototype['fetchScenarioParameters'] = undefined;

/**
 * whether or not the apply parameter step is done
 * @member {Boolean} applyParameters
 */
RunTemplate.prototype['applyParameters'] = undefined;

/**
 * whether or not the validate step is done
 * @member {Boolean} validateData
 */
RunTemplate.prototype['validateData'] = undefined;

/**
 * whether or not the Datasets values are send to the DataWarehouse prior to Simulation Run. If not set follow the Workspace setting
 * @member {Boolean} sendDatasetsToDataWarehouse
 */
RunTemplate.prototype['sendDatasetsToDataWarehouse'] = undefined;

/**
 * whether or not the input parameters values are send to the DataWarehouse prior to Simulation Run. If not set follow the Workspace setting
 * @member {Boolean} sendInputParametersToDataWarehouse
 */
RunTemplate.prototype['sendInputParametersToDataWarehouse'] = undefined;

/**
 * whether or not the pre-run step is done
 * @member {Boolean} preRun
 */
RunTemplate.prototype['preRun'] = undefined;

/**
 * whether or not the run step is done
 * @member {Boolean} run
 */
RunTemplate.prototype['run'] = undefined;

/**
 * whether or not the post-run step is done
 * @member {Boolean} postRun
 */
RunTemplate.prototype['postRun'] = undefined;

/**
 * whether or not to store the scenario parameters in json instead of csv
 * @member {Boolean} parametersJson
 */
RunTemplate.prototype['parametersJson'] = undefined;

/**
 * @member {module:model/RunTemplateStepSource} parametersHandlerSource
 */
RunTemplate.prototype['parametersHandlerSource'] = undefined;

/**
 * @member {module:model/RunTemplateStepSource} datasetValidatorSource
 */
RunTemplate.prototype['datasetValidatorSource'] = undefined;

/**
 * @member {module:model/RunTemplateStepSource} preRunSource
 */
RunTemplate.prototype['preRunSource'] = undefined;

/**
 * @member {module:model/RunTemplateStepSource} runSource
 */
RunTemplate.prototype['runSource'] = undefined;

/**
 * @member {module:model/RunTemplateStepSource} postRunSource
 */
RunTemplate.prototype['postRunSource'] = undefined;

/**
 * @member {module:model/RunTemplateStepSource} scenariodataTransformSource
 */
RunTemplate.prototype['scenariodataTransformSource'] = undefined;

/**
 * the ordered list of parameters groups for the Run Template
 * @member {Array.<String>} parameterGroups
 */
RunTemplate.prototype['parameterGroups'] = undefined;

/**
 * whether or not to stack adjacent scenario run steps in one container run which will chain steps
 * @member {Boolean} stackSteps
 */
RunTemplate.prototype['stackSteps'] = undefined;

/**
 * an optional URL to the git repository
 * @member {String} gitRepositoryUrl
 */
RunTemplate.prototype['gitRepositoryUrl'] = undefined;

/**
 * an optional git branch name
 * @member {String} gitBranchName
 */
RunTemplate.prototype['gitBranchName'] = undefined;

/**
 * an optional directory where to find the run template source
 * @member {String} runTemplateSourceDir
 */
RunTemplate.prototype['runTemplateSourceDir'] = undefined;






export default RunTemplate;

