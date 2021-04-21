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

/**
 * The ScenarioRunContainer model module.
 * @module model/ScenarioRunContainer
 * @version 0.0.1-SNAPSHOT
 */
class ScenarioRunContainer {
    /**
     * Constructs a new <code>ScenarioRunContainer</code>.
     * a ScenarioRun container description
     * @alias module:model/ScenarioRunContainer
     */
    constructor() { 
        
        ScenarioRunContainer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScenarioRunContainer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScenarioRunContainer} obj Optional instance to populate.
     * @return {module:model/ScenarioRunContainer} The populated <code>ScenarioRunContainer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScenarioRunContainer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('envVars')) {
                obj['envVars'] = ApiClient.convertToType(data['envVars'], {'String': Object});
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('runArgs')) {
                obj['runArgs'] = ApiClient.convertToType(data['runArgs'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * the container Id
 * @member {String} id
 */
ScenarioRunContainer.prototype['id'] = undefined;

/**
 * a freeform environment variable map
 * @member {Object.<String, Object>} envVars
 */
ScenarioRunContainer.prototype['envVars'] = undefined;

/**
 * the container image URI
 * @member {String} image
 */
ScenarioRunContainer.prototype['image'] = undefined;

/**
 * the list of run arguments for the container
 * @member {Array.<String>} runArgs
 */
ScenarioRunContainer.prototype['runArgs'] = undefined;






export default ScenarioRunContainer;

