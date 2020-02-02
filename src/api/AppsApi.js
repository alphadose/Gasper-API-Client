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


import ApiClient from "../ApiClient";
import Application from '../model/Application';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';
import InlineResponse2004 from '../model/InlineResponse2004';
import InlineResponse2005 from '../model/InlineResponse2005';
import InlineResponse2006 from '../model/InlineResponse2006';
import InlineResponse2007 from '../model/InlineResponse2007';
import InlineResponse400 from '../model/InlineResponse400';
import InlineResponse401 from '../model/InlineResponse401';
import InlineResponse500 from '../model/InlineResponse500';

/**
* Apps service.
* @module api/AppsApi
* @version 1.0
*/
export default class AppsApi {

    /**
    * Constructs a new AppsApi. 
    * @alias module:api/AppsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an application
     * @param {String} authorization Bearer Token Authentication
     * @param {module:model/String} language The programming language in which the application is written
     * @param {module:model/Application} application 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    createAppWithHttpInfo(authorization, language, application) {
      let postBody = application;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createApp");
      }
      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw new Error("Missing the required parameter 'language' when calling createApp");
      }
      // verify the required parameter 'application' is set
      if (application === undefined || application === null) {
        throw new Error("Missing the required parameter 'application' when calling createApp");
      }

      let pathParams = {
        'language': language
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/apps/{language}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an application
     * @param {String} authorization Bearer Token Authentication
     * @param {module:model/String} language The programming language in which the application is written
     * @param {module:model/Application} application 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    createApp(authorization, language, application) {
      return this.createAppWithHttpInfo(authorization, language, application)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an application owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    deleteAppByUserWithHttpInfo(authorization, app) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteAppByUser");
      }
      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling deleteAppByUser");
      }

      let pathParams = {
        'app': app
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/apps/{app}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an application owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    deleteAppByUser(authorization, app) {
      return this.deleteAppByUserWithHttpInfo(authorization, app)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch a single application owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    fetchAppByUserWithHttpInfo(authorization, app) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling fetchAppByUser");
      }
      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling fetchAppByUser");
      }

      let pathParams = {
        'app': app
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/apps/{app}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch a single application owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    fetchAppByUser(authorization, app) {
      return this.fetchAppByUserWithHttpInfo(authorization, app)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch all applications owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    fetchAppsByUserWithHttpInfo(authorization) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling fetchAppsByUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/apps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch all applications owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    fetchAppsByUser(authorization) {
      return this.fetchAppsByUserWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch logs of an application
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @param {Object} opts Optional parameters
     * @param {Number} opts.tail Fetch the last **n** logs (Fetches all logs if not specified)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
     */
    fetchLogsByUserWithHttpInfo(authorization, app, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling fetchLogsByUser");
      }
      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling fetchLogsByUser");
      }

      let pathParams = {
        'app': app
      };
      let queryParams = {
        'tail': opts['tail']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2006;
      return this.apiClient.callApi(
        '/apps/{app}/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch logs of an application
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @param {Object} opts Optional parameters
     * @param {Number} opts.tail Fetch the last **n** logs (Fetches all logs if not specified)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
     */
    fetchLogsByUser(authorization, app, opts) {
      return this.fetchLogsByUserWithHttpInfo(authorization, app, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch metrics of an application
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @param {Object} opts Optional parameters
     * @param {Number} opts.seconds Fetch metrics in the last **n** seconds
     * @param {Number} opts.minutes Fetch metrics in the last **n** minutes
     * @param {Number} opts.hours Fetch metrics in the last **n** hours
     * @param {Number} opts.days Fetch metrics in the last **n** days
     * @param {Number} opts.weeks Fetch metrics in the last **n** weeks
     * @param {Number} opts.months Fetch metrics in the last **n** months
     * @param {Number} opts.years Fetch metrics in the last **n** years
     * @param {Number} opts.decades Fetch metrics in the last **n** decades
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */
    fetchMetricsByUserWithHttpInfo(authorization, app, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling fetchMetricsByUser");
      }
      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling fetchMetricsByUser");
      }

      let pathParams = {
        'app': app
      };
      let queryParams = {
        'seconds': opts['seconds'],
        'minutes': opts['minutes'],
        'hours': opts['hours'],
        'days': opts['days'],
        'weeks': opts['weeks'],
        'months': opts['months'],
        'years': opts['years'],
        'decades': opts['decades']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2007;
      return this.apiClient.callApi(
        '/apps/{app}/metrics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch metrics of an application
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @param {Object} opts Optional parameters
     * @param {Number} opts.seconds Fetch metrics in the last **n** seconds
     * @param {Number} opts.minutes Fetch metrics in the last **n** minutes
     * @param {Number} opts.hours Fetch metrics in the last **n** hours
     * @param {Number} opts.days Fetch metrics in the last **n** days
     * @param {Number} opts.weeks Fetch metrics in the last **n** weeks
     * @param {Number} opts.months Fetch metrics in the last **n** months
     * @param {Number} opts.years Fetch metrics in the last **n** years
     * @param {Number} opts.decades Fetch metrics in the last **n** decades
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */
    fetchMetricsByUser(authorization, app, opts) {
      return this.fetchMetricsByUserWithHttpInfo(authorization, app, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch a browser terminal instance for an application owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    fetchTerminalByUserWithHttpInfo(authorization, app) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling fetchTerminalByUser");
      }
      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling fetchTerminalByUser");
      }

      let pathParams = {
        'app': app
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2005;
      return this.apiClient.callApi(
        '/apps/{app}/term', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch a browser terminal instance for an application owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    fetchTerminalByUser(authorization, app) {
      return this.fetchTerminalByUserWithHttpInfo(authorization, app)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Rebuild an application
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    rebuildAppByUserWithHttpInfo(authorization, app) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling rebuildAppByUser");
      }
      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling rebuildAppByUser");
      }

      let pathParams = {
        'app': app
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/apps/{app}/rebuild', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Rebuild an application
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    rebuildAppByUser(authorization, app) {
      return this.rebuildAppByUserWithHttpInfo(authorization, app)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Transfer ownership of an application to another user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @param {String} userEmail Email ID of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    transferAppByUserWithHttpInfo(authorization, app, userEmail) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling transferAppByUser");
      }
      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling transferAppByUser");
      }
      // verify the required parameter 'userEmail' is set
      if (userEmail === undefined || userEmail === null) {
        throw new Error("Missing the required parameter 'userEmail' when calling transferAppByUser");
      }

      let pathParams = {
        'app': app,
        'userEmail': userEmail
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/apps/{app}/transfer/{userEmail}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Transfer ownership of an application to another user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @param {String} userEmail Email ID of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    transferAppByUser(authorization, app, userEmail) {
      return this.transferAppByUserWithHttpInfo(authorization, app, userEmail)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an application owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @param {module:model/Application} application 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    updateAppByUserWithHttpInfo(authorization, app, application) {
      let postBody = application;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling updateAppByUser");
      }
      // verify the required parameter 'app' is set
      if (app === undefined || app === null) {
        throw new Error("Missing the required parameter 'app' when calling updateAppByUser");
      }
      // verify the required parameter 'application' is set
      if (application === undefined || application === null) {
        throw new Error("Missing the required parameter 'application' when calling updateAppByUser");
      }

      let pathParams = {
        'app': app
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/apps/{app}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an application owned by a user
     * @param {String} authorization Bearer Token Authentication
     * @param {String} app The name of the application
     * @param {module:model/Application} application 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    updateAppByUser(authorization, app, application) {
      return this.updateAppByUserWithHttpInfo(authorization, app, application)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
