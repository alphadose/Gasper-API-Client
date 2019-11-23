/**
 * Gasper API
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GasperApi);
  }
}(this, function(expect, GasperApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GasperApi.AdminApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AdminApi', function() {
    describe('deleteAppByAdmin', function() {
      it('should call deleteAppByAdmin successfully', function(done) {
        //uncomment below and update the code to test deleteAppByAdmin
        //instance.deleteAppByAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDbByAdmin', function() {
      it('should call deleteDbByAdmin successfully', function(done) {
        //uncomment below and update the code to test deleteDbByAdmin
        //instance.deleteDbByAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserByAdmin', function() {
      it('should call deleteUserByAdmin successfully', function(done) {
        //uncomment below and update the code to test deleteUserByAdmin
        //instance.deleteUserByAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchAppByAdmin', function() {
      it('should call fetchAppByAdmin successfully', function(done) {
        //uncomment below and update the code to test fetchAppByAdmin
        //instance.fetchAppByAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchAppsByAdmin', function() {
      it('should call fetchAppsByAdmin successfully', function(done) {
        //uncomment below and update the code to test fetchAppsByAdmin
        //instance.fetchAppsByAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchDbByAdmin', function() {
      it('should call fetchDbByAdmin successfully', function(done) {
        //uncomment below and update the code to test fetchDbByAdmin
        //instance.fetchDbByAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchDbsByAdmin', function() {
      it('should call fetchDbsByAdmin successfully', function(done) {
        //uncomment below and update the code to test fetchDbsByAdmin
        //instance.fetchDbsByAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchNodeByAdmin', function() {
      it('should call fetchNodeByAdmin successfully', function(done) {
        //uncomment below and update the code to test fetchNodeByAdmin
        //instance.fetchNodeByAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchNodesByAdmin', function() {
      it('should call fetchNodesByAdmin successfully', function(done) {
        //uncomment below and update the code to test fetchNodesByAdmin
        //instance.fetchNodesByAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchUserByAdmin', function() {
      it('should call fetchUserByAdmin successfully', function(done) {
        //uncomment below and update the code to test fetchUserByAdmin
        //instance.fetchUserByAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchUsersByAdmin', function() {
      it('should call fetchUsersByAdmin successfully', function(done) {
        //uncomment below and update the code to test fetchUsersByAdmin
        //instance.fetchUsersByAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('grantSuperuserPrivilege', function() {
      it('should call grantSuperuserPrivilege successfully', function(done) {
        //uncomment below and update the code to test grantSuperuserPrivilege
        //instance.grantSuperuserPrivilege(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('revokeSuperuserPrivilege', function() {
      it('should call revokeSuperuserPrivilege successfully', function(done) {
        //uncomment below and update the code to test revokeSuperuserPrivilege
        //instance.revokeSuperuserPrivilege(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
