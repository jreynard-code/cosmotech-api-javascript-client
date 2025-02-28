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
import ConnectorParameter from './ConnectorParameter';

/**
 * The ConnectorParameterGroup model module.
 * @module model/ConnectorParameterGroup
 * @version 0.0.12-SNAPSHOT
 */
class ConnectorParameterGroup {
    /**
     * Constructs a new <code>ConnectorParameterGroup</code>.
     * a connector parameters group
     * @alias module:model/ConnectorParameterGroup
     * @param id {String} the connector parameter group id
     * @param label {String} the list of translated parameter group labels
     * @param parameters {Array.<module:model/ConnectorParameter>} the list of parameters
     */
    constructor(id, label, parameters) { 
        
        ConnectorParameterGroup.initialize(this, id, label, parameters);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, label, parameters) { 
        obj['id'] = id;
        obj['label'] = label;
        obj['parameters'] = parameters;
    }

    /**
     * Constructs a <code>ConnectorParameterGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConnectorParameterGroup} obj Optional instance to populate.
     * @return {module:model/ConnectorParameterGroup} The populated <code>ConnectorParameterGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConnectorParameterGroup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [ConnectorParameter]);
            }
        }
        return obj;
    }


}

/**
 * the connector parameter group id
 * @member {String} id
 */
ConnectorParameterGroup.prototype['id'] = undefined;

/**
 * the list of translated parameter group labels
 * @member {String} label
 */
ConnectorParameterGroup.prototype['label'] = undefined;

/**
 * the list of parameters
 * @member {Array.<module:model/ConnectorParameter>} parameters
 */
ConnectorParameterGroup.prototype['parameters'] = undefined;






export default ConnectorParameterGroup;

