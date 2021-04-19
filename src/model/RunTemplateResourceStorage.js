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
 * The RunTemplateResourceStorage model module.
 * @module model/RunTemplateResourceStorage
 * @version 0.0.1-SNAPSHOT
 */
class RunTemplateResourceStorage {
    /**
     * Constructs a new <code>RunTemplateResourceStorage</code>.
     * @alias module:model/RunTemplateResourceStorage
     * @param storageType {module:model/RunTemplateResourceStorage.StorageTypeEnum} the storage type. Use ${CSM_PROJECT_PATH} or ${CSM_STORAGE_SIMULATOR} behind the scene
     * @param resourcePath {String} the resource path
     */
    constructor(storageType, resourcePath) { 
        
        RunTemplateResourceStorage.initialize(this, storageType, resourcePath);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, storageType, resourcePath) { 
        obj['storageType'] = storageType;
        obj['resourcePath'] = resourcePath;
    }

    /**
     * Constructs a <code>RunTemplateResourceStorage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunTemplateResourceStorage} obj Optional instance to populate.
     * @return {module:model/RunTemplateResourceStorage} The populated <code>RunTemplateResourceStorage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunTemplateResourceStorage();

            if (data.hasOwnProperty('storageType')) {
                obj['storageType'] = ApiClient.convertToType(data['storageType'], 'String');
            }
            if (data.hasOwnProperty('resourcePath')) {
                obj['resourcePath'] = ApiClient.convertToType(data['resourcePath'], 'String');
            }
            if (data.hasOwnProperty('customUri')) {
                obj['customUri'] = ApiClient.convertToType(data['customUri'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the storage type. Use ${CSM_PROJECT_PATH} or ${CSM_STORAGE_SIMULATOR} behind the scene
 * @member {module:model/RunTemplateResourceStorage.StorageTypeEnum} storageType
 */
RunTemplateResourceStorage.prototype['storageType'] = undefined;

/**
 * the resource path
 * @member {String} resourcePath
 */
RunTemplateResourceStorage.prototype['resourcePath'] = undefined;

/**
 * a custom Uri to provide the resource in resourcePath
 * @member {String} customUri
 */
RunTemplateResourceStorage.prototype['customUri'] = undefined;





/**
 * Allowed values for the <code>storageType</code> property.
 * @enum {String}
 * @readonly
 */
RunTemplateResourceStorage['StorageTypeEnum'] = {

    /**
     * value: "local"
     * @const
     */
    "local": "local",

    /**
     * value: "cloud"
     * @const
     */
    "cloud": "cloud",

    /**
     * value: "customUri"
     * @const
     */
    "customUri": "customUri"
};



export default RunTemplateResourceStorage;

