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
 * The OrganizationUser model module.
 * @module model/OrganizationUser
 * @version 0.0.1-SNAPSHOT
 */
class OrganizationUser {
    /**
     * Constructs a new <code>OrganizationUser</code>.
     * a User
     * @alias module:model/OrganizationUser
     */
    constructor() { 
        
        OrganizationUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationUser} obj Optional instance to populate.
     * @return {module:model/OrganizationUser} The populated <code>OrganizationUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationUser();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the User unique identifier, in response
 * @member {String} id
 */
OrganizationUser.prototype['id'] = undefined;

/**
 * the User name
 * @member {String} name
 */
OrganizationUser.prototype['name'] = undefined;






export default OrganizationUser;

