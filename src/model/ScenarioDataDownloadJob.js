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

/**
 * The ScenarioDataDownloadJob model module.
 * @module model/ScenarioDataDownloadJob
 * @version 0.0.12-SNAPSHOT
 */
class ScenarioDataDownloadJob {
    /**
     * Constructs a new <code>ScenarioDataDownloadJob</code>.
     * Scenario data download job
     * @alias module:model/ScenarioDataDownloadJob
     */
    constructor() { 
        
        ScenarioDataDownloadJob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioDataDownloadJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioDataDownloadJob} obj Optional instance to populate.
     * @return {module:model/ScenarioDataDownloadJob} The populated <code>ScenarioDataDownloadJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioDataDownloadJob();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the Scenario Data Download job identifier
 * @member {String} id
 */
ScenarioDataDownloadJob.prototype['id'] = undefined;






export default ScenarioDataDownloadJob;

