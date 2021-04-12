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

import ApiClient from '../ApiClient';
import ScenarioAnalysis from './ScenarioAnalysis';
import ScenarioAnalysisParameterValue from './ScenarioAnalysisParameterValue';
import ScenarioSuccessfulAnalysisAllOf from './ScenarioSuccessfulAnalysisAllOf';

/**
 * The ScenarioSuccessfulAnalysis model module.
 * @module model/ScenarioSuccessfulAnalysis
 * @version 0.0.1-SNAPSHOT
 */
class ScenarioSuccessfulAnalysis {
    /**
     * Constructs a new <code>ScenarioSuccessfulAnalysis</code>.
     * @alias module:model/ScenarioSuccessfulAnalysis
     * @implements module:model/ScenarioAnalysis
     * @implements module:model/ScenarioSuccessfulAnalysisAllOf
     * @param analysisId {String} the Simulator Analysis Id
     */
    constructor(analysisId) { 
        ScenarioAnalysis.initialize(this, analysisId);ScenarioSuccessfulAnalysisAllOf.initialize(this);
        ScenarioSuccessfulAnalysis.initialize(this, analysisId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, analysisId) { 
        obj['analysisId'] = analysisId;
    }

    /**
     * Constructs a <code>ScenarioSuccessfulAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioSuccessfulAnalysis} obj Optional instance to populate.
     * @return {module:model/ScenarioSuccessfulAnalysis} The populated <code>ScenarioSuccessfulAnalysis</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioSuccessfulAnalysis();
            ScenarioAnalysis.constructFromObject(data, obj);
            ScenarioSuccessfulAnalysisAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('analysisId')) {
                obj['analysisId'] = ApiClient.convertToType(data['analysisId'], 'String');
            }
            if (data.hasOwnProperty('datasetList')) {
                obj['datasetList'] = ApiClient.convertToType(data['datasetList'], ['String']);
            }
            if (data.hasOwnProperty('parametersValues')) {
                obj['parametersValues'] = ApiClient.convertToType(data['parametersValues'], [ScenarioAnalysisParameterValue]);
            }
            if (data.hasOwnProperty('simulationId')) {
                obj['simulationId'] = ApiClient.convertToType(data['simulationId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the Simulator Analysis Id
 * @member {String} analysisId
 */
ScenarioSuccessfulAnalysis.prototype['analysisId'] = undefined;

/**
 * the list of Dataset Id associated to this Scenario Analysis
 * @member {Array.<String>} datasetList
 */
ScenarioSuccessfulAnalysis.prototype['datasetList'] = undefined;

/**
 * the list of Simulator Analysis parameters values
 * @member {Array.<module:model/ScenarioAnalysisParameterValue>} parametersValues
 */
ScenarioSuccessfulAnalysis.prototype['parametersValues'] = undefined;

/**
 * the Simulation Run Id
 * @member {String} simulationId
 */
ScenarioSuccessfulAnalysis.prototype['simulationId'] = undefined;


// Implement ScenarioAnalysis interface:
/**
 * the Simulator Analysis Id
 * @member {String} analysisId
 */
ScenarioAnalysis.prototype['analysisId'] = undefined;
/**
 * the list of Dataset Id associated to this Scenario Analysis
 * @member {Array.<String>} datasetList
 */
ScenarioAnalysis.prototype['datasetList'] = undefined;
/**
 * the list of Simulator Analysis parameters values
 * @member {Array.<module:model/ScenarioAnalysisParameterValue>} parametersValues
 */
ScenarioAnalysis.prototype['parametersValues'] = undefined;
// Implement ScenarioSuccessfulAnalysisAllOf interface:
/**
 * the Simulation Run Id
 * @member {String} simulationId
 */
ScenarioSuccessfulAnalysisAllOf.prototype['simulationId'] = undefined;




export default ScenarioSuccessfulAnalysis;

