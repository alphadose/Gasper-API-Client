/**
 * Gasper Kaze API
 * Handles authentication, creation/management of applications, databases, users and also provides a superuser API. <br><br> Only a superuser can avail the superuser API. A superuser can **grant/revoke** superuser privileges to other users. A default  superuser is created every time a Gasper instance is launched whose credentials are defined in the `admin` section of `config.toml`, the main configuration file. A sample configuration file is available [here](https://github.com/sdslabs/gasper/blob/develop/config.sample.toml#L37).<br><br> **Note:-** Normally the applications and databases can only be managed by their owners but the superuser can bypass that check.<br><br> **PS:-** If you want to programmatically generate a client for this API, you can find the corresponding OpenAPI specifications [here](https://github.com/sdslabs/gasper/tree/develop/docs/content/api/specs). We recommend using [OpenAPI-Generator](https://openapi-generator.tech/) for generating clients.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: contact@sdslabs.co.in
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreatedDatabase from './CreatedDatabase';

/**
 * The InlineResponse2009 model module.
 * @module model/InlineResponse2009
 * @version 1.0
 */
class InlineResponse2009 {
    /**
     * Constructs a new <code>InlineResponse2009</code>.
     * @alias module:model/InlineResponse2009
     */
    constructor() { 
        
        InlineResponse2009.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2009</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009} The populated <code>InlineResponse2009</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [CreatedDatabase]);
            }
        }
        return obj;
    }

/**
     * @return {Boolean}
     */
    getSuccess() {
        return this.success;
    }

    /**
     * @param {Boolean} success
     */
    setSuccess(success) {
        this['success'] = success;
    }
/**
     * @return {Array.<module:model/CreatedDatabase>}
     */
    getData() {
        return this.data;
    }

    /**
     * @param {Array.<module:model/CreatedDatabase>} data
     */
    setData(data) {
        this['data'] = data;
    }

}

/**
 * @member {Boolean} success
 */
InlineResponse2009.prototype['success'] = undefined;

/**
 * @member {Array.<module:model/CreatedDatabase>} data
 */
InlineResponse2009.prototype['data'] = undefined;






export default InlineResponse2009;

