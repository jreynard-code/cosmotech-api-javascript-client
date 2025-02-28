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
 * The ValidatorRun model module.
 * @module model/ValidatorRun
 * @version 0.0.12-SNAPSHOT
 */
class ValidatorRun {
    /**
     * Constructs a new <code>ValidatorRun</code>.
     * a Validator Run
     * @alias module:model/ValidatorRun
     * @param datasetId {String} the Dataset id to run the validator on
     */
    constructor(datasetId) { 
        
        ValidatorRun.initialize(this, datasetId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, datasetId) { 
        obj['datasetId'] = datasetId;
    }

    /**
     * Constructs a <code>ValidatorRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidatorRun} obj Optional instance to populate.
     * @return {module:model/ValidatorRun} The populated <code>ValidatorRun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidatorRun();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('validatorId')) {
                obj['validatorId'] = ApiClient.convertToType(data['validatorId'], 'String');
            }
            if (data.hasOwnProperty('validatorName')) {
                obj['validatorName'] = ApiClient.convertToType(data['validatorName'], 'String');
            }
            if (data.hasOwnProperty('datasetId')) {
                obj['datasetId'] = ApiClient.convertToType(data['datasetId'], 'String');
            }
            if (data.hasOwnProperty('datasetName')) {
                obj['datasetName'] = ApiClient.convertToType(data['datasetName'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('containerId')) {
                obj['containerId'] = ApiClient.convertToType(data['containerId'], 'String');
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the Validator Run id
 * @member {String} id
 */
ValidatorRun.prototype['id'] = undefined;

/**
 * the Validator id
 * @member {String} validatorId
 */
ValidatorRun.prototype['validatorId'] = undefined;

/**
 * the validator name
 * @member {String} validatorName
 */
ValidatorRun.prototype['validatorName'] = undefined;

/**
 * the Dataset id to run the validator on
 * @member {String} datasetId
 */
ValidatorRun.prototype['datasetId'] = undefined;

/**
 * the Dataset name
 * @member {String} datasetName
 */
ValidatorRun.prototype['datasetName'] = undefined;

/**
 * the Validator Run state
 * @member {module:model/ValidatorRun.StateEnum} state
 */
ValidatorRun.prototype['state'] = undefined;

/**
 * the Validator Run container id
 * @member {String} containerId
 */
ValidatorRun.prototype['containerId'] = undefined;

/**
 * the Validator Run logs
 * @member {String} logs
 */
ValidatorRun.prototype['logs'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
ValidatorRun['StateEnum'] = {

    /**
     * value: "Running"
     * @const
     */
    "Running": "Running",

    /**
     * value: "Finished"
     * @const
     */
    "Finished": "Finished",

    /**
     * value: "OnError"
     * @const
     */
    "OnError": "OnError"
};



export default ValidatorRun;

