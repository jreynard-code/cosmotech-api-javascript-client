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
import PlatformService from './PlatformService';

/**
 * The PlatformServices model module.
 * @module model/PlatformServices
 * @version 0.0.1-SNAPSHOT
 */
class PlatformServices {
    /**
     * Constructs a new <code>PlatformServices</code>.
     * the list of Platform services
     * @alias module:model/PlatformServices
     * @param provider {module:model/PlatformServices.ProviderEnum} the Cloud Provider for the services
     */
    constructor(provider) { 
        
        PlatformServices.initialize(this, provider);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, provider) { 
        obj['provider'] = provider;
    }

    /**
     * Constructs a <code>PlatformServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlatformServices} obj Optional instance to populate.
     * @return {module:model/PlatformServices} The populated <code>PlatformServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformServices();

            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = ApiClient.convertToType(data['credentials'], {'String': Object});
            }
            if (data.hasOwnProperty('storage')) {
                obj['storage'] = PlatformService.constructFromObject(data['storage']);
            }
            if (data.hasOwnProperty('coreContainerRegistry')) {
                obj['coreContainerRegistry'] = PlatformService.constructFromObject(data['coreContainerRegistry']);
            }
            if (data.hasOwnProperty('solutionsContainerRegistry')) {
                obj['solutionsContainerRegistry'] = PlatformService.constructFromObject(data['solutionsContainerRegistry']);
            }
            if (data.hasOwnProperty('eventBusCluster')) {
                obj['eventBusCluster'] = PlatformService.constructFromObject(data['eventBusCluster']);
            }
            if (data.hasOwnProperty('dataWarehouseCluster')) {
                obj['dataWarehouseCluster'] = PlatformService.constructFromObject(data['dataWarehouseCluster']);
            }
            if (data.hasOwnProperty('databaseCluster')) {
                obj['databaseCluster'] = PlatformService.constructFromObject(data['databaseCluster']);
            }
            if (data.hasOwnProperty('keyVault')) {
                obj['keyVault'] = PlatformService.constructFromObject(data['keyVault']);
            }
            if (data.hasOwnProperty('kubernetesCluster')) {
                obj['kubernetesCluster'] = PlatformService.constructFromObject(data['kubernetesCluster']);
            }
            if (data.hasOwnProperty('directory')) {
                obj['directory'] = PlatformService.constructFromObject(data['directory']);
            }
            if (data.hasOwnProperty('monitoring')) {
                obj['monitoring'] = PlatformService.constructFromObject(data['monitoring']);
            }
            if (data.hasOwnProperty('analytic')) {
                obj['analytic'] = PlatformService.constructFromObject(data['analytic']);
            }
        }
        return obj;
    }


}

/**
 * the Cloud Provider for the services
 * @member {module:model/PlatformServices.ProviderEnum} provider
 */
PlatformServices.prototype['provider'] = undefined;

/**
 * a freeform credentials object for the Platform. Structure depends on cloud provider
 * @member {Object.<String, Object>} credentials
 */
PlatformServices.prototype['credentials'] = undefined;

/**
 * @member {module:model/PlatformService} storage
 */
PlatformServices.prototype['storage'] = undefined;

/**
 * @member {module:model/PlatformService} coreContainerRegistry
 */
PlatformServices.prototype['coreContainerRegistry'] = undefined;

/**
 * @member {module:model/PlatformService} solutionsContainerRegistry
 */
PlatformServices.prototype['solutionsContainerRegistry'] = undefined;

/**
 * @member {module:model/PlatformService} eventBusCluster
 */
PlatformServices.prototype['eventBusCluster'] = undefined;

/**
 * @member {module:model/PlatformService} dataWarehouseCluster
 */
PlatformServices.prototype['dataWarehouseCluster'] = undefined;

/**
 * @member {module:model/PlatformService} databaseCluster
 */
PlatformServices.prototype['databaseCluster'] = undefined;

/**
 * @member {module:model/PlatformService} keyVault
 */
PlatformServices.prototype['keyVault'] = undefined;

/**
 * @member {module:model/PlatformService} kubernetesCluster
 */
PlatformServices.prototype['kubernetesCluster'] = undefined;

/**
 * @member {module:model/PlatformService} directory
 */
PlatformServices.prototype['directory'] = undefined;

/**
 * @member {module:model/PlatformService} monitoring
 */
PlatformServices.prototype['monitoring'] = undefined;

/**
 * @member {module:model/PlatformService} analytic
 */
PlatformServices.prototype['analytic'] = undefined;





/**
 * Allowed values for the <code>provider</code> property.
 * @enum {String}
 * @readonly
 */
PlatformServices['ProviderEnum'] = {

    /**
     * value: "Azure"
     * @const
     */
    "Azure": "Azure"
};



export default PlatformServices;

