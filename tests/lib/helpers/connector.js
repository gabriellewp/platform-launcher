/**
 * Copyright (c) 2017 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

//-------------------------------------------------------------------------------------------------------
// Helper Functions
//-------------------------------------------------------------------------------------------------------

var chai = require('chai');
var assert = chai.assert;

var config = require("../../test-config.json");
var oispSdk = require("@open-iot-service-platform/oisp-sdk-js");
var api = oispSdk(config).api.rest;



function wsConnect(connector, deviceToken, deviceId, cb) {
    if (!cb) {
        throw "Callback required";
    }

    var deviceInfo = {
        device_id: deviceId,
        device_token: deviceToken
    };

    connector.updateDeviceInfo(deviceInfo)

    var data = {
        deviceId: deviceId
    };

    connector.controlCommandListen(data, cb, function() {});
}

// function mqttConnect(connector, deviceToken, deviceId, cb) {
//     config = require("../../test-config-mqtt.json");
//     api = oispSdk(config).api.mqtt; //what is the use of api, i dont understand
//     console.log("i am hereeee", api)
//     if (!cb) {
//         throw "Callback required";
//     }

//     var data = {
//         deviceId: deviceId
//     };

//     //connector.controlCommandListen(data, cb, function() {});
// }

module.exports={
    wsConnect: wsConnect
   // mqttConnect: mqttConnect
}


