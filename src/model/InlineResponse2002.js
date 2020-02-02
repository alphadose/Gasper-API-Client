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
import Context from './Context';
import Git from './Git';
import InlineResponse2002Resources from './InlineResponse2002Resources';

/**
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 1.0
 */
class InlineResponse2002 {
    /**
     * Constructs a new <code>InlineResponse2002</code>.
     * @alias module:model/InlineResponse2002
     */
    constructor() { 
        
        InlineResponse2002.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('git')) {
                obj['git'] = Git.constructFromObject(data['git']);
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = Context.constructFromObject(data['context']);
            }
            if (data.hasOwnProperty('env')) {
                obj['env'] = ApiClient.convertToType(data['env'], {'String': 'String'});
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = InlineResponse2002Resources.constructFromObject(data['resources']);
            }
            if (data.hasOwnProperty('container_id')) {
                obj['container_id'] = ApiClient.convertToType(data['container_id'], 'String');
            }
            if (data.hasOwnProperty('container_port')) {
                obj['container_port'] = ApiClient.convertToType(data['container_port'], 'Number');
            }
            if (data.hasOwnProperty('docker_image')) {
                obj['docker_image'] = ApiClient.convertToType(data['docker_image'], 'String');
            }
            if (data.hasOwnProperty('app_url')) {
                obj['app_url'] = ApiClient.convertToType(data['app_url'], 'String');
            }
            if (data.hasOwnProperty('host_ip')) {
                obj['host_ip'] = ApiClient.convertToType(data['host_ip'], 'String');
            }
            if (data.hasOwnProperty('name_servers')) {
                obj['name_servers'] = ApiClient.convertToType(data['name_servers'], ['String']);
            }
            if (data.hasOwnProperty('instance_type')) {
                obj['instance_type'] = ApiClient.convertToType(data['instance_type'], 'String');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('ssh_cmd')) {
                obj['ssh_cmd'] = ApiClient.convertToType(data['ssh_cmd'], 'String');
            }
            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
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
     * Returns Name of the application
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Name of the application
     * @param {String} name Name of the application
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns Password required for SSH access to the application's docker container
     * @return {String}
     */
    getPassword() {
        return this.password;
    }

    /**
     * Sets Password required for SSH access to the application's docker container
     * @param {String} password Password required for SSH access to the application's docker container
     */
    setPassword(password) {
        this['password'] = password;
    }
/**
     * @return {module:model/Git}
     */
    getGit() {
        return this.git;
    }

    /**
     * @param {module:model/Git} git
     */
    setGit(git) {
        this['git'] = git;
    }
/**
     * @return {module:model/Context}
     */
    getContext() {
        return this.context;
    }

    /**
     * @param {module:model/Context} context
     */
    setContext(context) {
        this['context'] = context;
    }
/**
     * Returns Environment variables required by the application
     * @return {Object.<String, String>}
     */
    getEnv() {
        return this.env;
    }

    /**
     * Sets Environment variables required by the application
     * @param {Object.<String, String>} env Environment variables required by the application
     */
    setEnv(env) {
        this['env'] = env;
    }
/**
     * @return {module:model/InlineResponse2002Resources}
     */
    getResources() {
        return this.resources;
    }

    /**
     * @param {module:model/InlineResponse2002Resources} resources
     */
    setResources(resources) {
        this['resources'] = resources;
    }
/**
     * Returns ID of the application's docker container
     * @return {String}
     */
    getContainerId() {
        return this.container_id;
    }

    /**
     * Sets ID of the application's docker container
     * @param {String} containerId ID of the application's docker container
     */
    setContainerId(containerId) {
        this['container_id'] = containerId;
    }
/**
     * Returns Port assigned by the node to the application's docker container
     * @return {Number}
     */
    getContainerPort() {
        return this.container_port;
    }

    /**
     * Sets Port assigned by the node to the application's docker container
     * @param {Number} containerPort Port assigned by the node to the application's docker container
     */
    setContainerPort(containerPort) {
        this['container_port'] = containerPort;
    }
/**
     * Returns Docker image used in building the application's container
     * @return {String}
     */
    getDockerImage() {
        return this.docker_image;
    }

    /**
     * Sets Docker image used in building the application's container
     * @param {String} dockerImage Docker image used in building the application's container
     */
    setDockerImage(dockerImage) {
        this['docker_image'] = dockerImage;
    }
/**
     * Returns The domain name of the application (DNS entry is managed by Hikari 💡)
     * @return {String}
     */
    getAppUrl() {
        return this.app_url;
    }

    /**
     * Sets The domain name of the application (DNS entry is managed by Hikari 💡)
     * @param {String} appUrl The domain name of the application (DNS entry is managed by Hikari 💡)
     */
    setAppUrl(appUrl) {
        this['app_url'] = appUrl;
    }
/**
     * Returns IPv4 address of the node
     * @return {String}
     */
    getHostIp() {
        return this.host_ip;
    }

    /**
     * Sets IPv4 address of the node
     * @param {String} hostIp IPv4 address of the node
     */
    setHostIp(hostIp) {
        this['host_ip'] = hostIp;
    }
/**
     * Returns The DNS NameServers used by the application's docker container
     * @return {Array.<String>}
     */
    getNameServers() {
        return this.name_servers;
    }

    /**
     * Sets The DNS NameServers used by the application's docker container
     * @param {Array.<String>} nameServers The DNS NameServers used by the application's docker container
     */
    setNameServers(nameServers) {
        this['name_servers'] = nameServers;
    }
/**
     * Returns The kind of instance this application belongs to
     * @return {String}
     */
    getInstanceType() {
        return this.instance_type;
    }

    /**
     * Sets The kind of instance this application belongs to
     * @param {String} instanceType The kind of instance this application belongs to
     */
    setInstanceType(instanceType) {
        this['instance_type'] = instanceType;
    }
/**
     * Returns The programming language in which the application is written
     * @return {module:model/InlineResponse2002.LanguageEnum}
     */
    getLanguage() {
        return this.language;
    }

    /**
     * Sets The programming language in which the application is written
     * @param {module:model/InlineResponse2002.LanguageEnum} language The programming language in which the application is written
     */
    setLanguage(language) {
        this['language'] = language;
    }
/**
     * Returns Owner of the application
     * @return {String}
     */
    getOwner() {
        return this.owner;
    }

    /**
     * Sets Owner of the application
     * @param {String} owner Owner of the application
     */
    setOwner(owner) {
        this['owner'] = owner;
    }
/**
     * Returns Command to SSH into the application's docker container
     * @return {String}
     */
    getSshCmd() {
        return this.ssh_cmd;
    }

    /**
     * Sets Command to SSH into the application's docker container
     * @param {String} sshCmd Command to SSH into the application's docker container
     */
    setSshCmd(sshCmd) {
        this['ssh_cmd'] = sshCmd;
    }
/**
     * Returns Application's identifier assigned by MongoDB
     * @return {String}
     */
    getId() {
        return this._id;
    }

    /**
     * Sets Application's identifier assigned by MongoDB
     * @param {String} id Application's identifier assigned by MongoDB
     */
    setId(id) {
        this['_id'] = id;
    }

}

/**
 * @member {Boolean} success
 */
InlineResponse2002.prototype['success'] = undefined;

/**
 * Name of the application
 * @member {String} name
 */
InlineResponse2002.prototype['name'] = undefined;

/**
 * Password required for SSH access to the application's docker container
 * @member {String} password
 */
InlineResponse2002.prototype['password'] = undefined;

/**
 * @member {module:model/Git} git
 */
InlineResponse2002.prototype['git'] = undefined;

/**
 * @member {module:model/Context} context
 */
InlineResponse2002.prototype['context'] = undefined;

/**
 * Environment variables required by the application
 * @member {Object.<String, String>} env
 */
InlineResponse2002.prototype['env'] = undefined;

/**
 * @member {module:model/InlineResponse2002Resources} resources
 */
InlineResponse2002.prototype['resources'] = undefined;

/**
 * ID of the application's docker container
 * @member {String} container_id
 */
InlineResponse2002.prototype['container_id'] = undefined;

/**
 * Port assigned by the node to the application's docker container
 * @member {Number} container_port
 */
InlineResponse2002.prototype['container_port'] = undefined;

/**
 * Docker image used in building the application's container
 * @member {String} docker_image
 */
InlineResponse2002.prototype['docker_image'] = undefined;

/**
 * The domain name of the application (DNS entry is managed by Hikari 💡)
 * @member {String} app_url
 */
InlineResponse2002.prototype['app_url'] = undefined;

/**
 * IPv4 address of the node
 * @member {String} host_ip
 */
InlineResponse2002.prototype['host_ip'] = undefined;

/**
 * The DNS NameServers used by the application's docker container
 * @member {Array.<String>} name_servers
 */
InlineResponse2002.prototype['name_servers'] = undefined;

/**
 * The kind of instance this application belongs to
 * @member {String} instance_type
 */
InlineResponse2002.prototype['instance_type'] = undefined;

/**
 * The programming language in which the application is written
 * @member {module:model/InlineResponse2002.LanguageEnum} language
 */
InlineResponse2002.prototype['language'] = undefined;

/**
 * Owner of the application
 * @member {String} owner
 */
InlineResponse2002.prototype['owner'] = undefined;

/**
 * Command to SSH into the application's docker container
 * @member {String} ssh_cmd
 */
InlineResponse2002.prototype['ssh_cmd'] = undefined;

/**
 * Application's identifier assigned by MongoDB
 * @member {String} _id
 */
InlineResponse2002.prototype['_id'] = undefined;





/**
 * Allowed values for the <code>language</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2002['LanguageEnum'] = {

    /**
     * value: "php"
     * @const
     */
    "php": "php",

    /**
     * value: "nodejs"
     * @const
     */
    "nodejs": "nodejs",

    /**
     * value: "static"
     * @const
     */
    "static": "static",

    /**
     * value: "python2"
     * @const
     */
    "python2": "python2",

    /**
     * value: "python3"
     * @const
     */
    "python3": "python3",

    /**
     * value: "golang"
     * @const
     */
    "golang": "golang",

    /**
     * value: "ruby"
     * @const
     */
    "ruby": "ruby"
};



export default InlineResponse2002;

