!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSupported=function(){return!!window.MediaKeySystemAccess&&!!window.MediaKeySystemAccess.prototype.getConfiguration},t.getAvailableKeysystems=function(e,t){return new Promise(function(e,n){console.log("MediaKeySystemAccess",MediaKeySystemAccess.getConfiguration()),e(t)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSupported=function(){return!!window.navigator&&!!window.navigator.requestMediaKeySystemAccess},t.getAvailableKeysystems=function(e,t){return new Promise(function(n,o){if(e&&t)try{window.navigator.requestMediaKeySystemAccess(e,[t.config]).then(function(e){n(t)}).catch(function(e){o(e)})}catch(e){o(e)}else o("Invalid key or DRM system")})}},function(e,t,n){"use strict";e.exports={available_drm_systems:[{id:"Widevine",keysystems:["com.widevine.alpha"],config:{videoCapabilities:[{contentType:'video/mp4;codecs="avc1.42E01E"',robustness:"SW_SECURE_CRYPTO"}]}},{id:"PlayReady",keysystems:["com.microsoft.playready","com.youtube.playready"]},{id:"Primetime",keysystems:["com.adobe.primetime","com.adobe.access"]},{id:"Fairplay",keysystems:["com.apple.fairplay","com.apple.fps.1_0","com.apple.fps","com.apple.fps_2_0"]},{id:"ClearKey",keysystems:["webkit-org.w3.clearkey","org.w3.clearkey"],config:{videoCapabilities:[{contentType:'video/mp4;codecs="avc1.42E01E"'}]}}]}},function(e,t,n){"use strict";var o,i=n(3),s=(o=i)&&o.__esModule?o:{default:o},r=a(n(2)),c=a(n(1));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}!function(){var e=document.createElement("video"),t=[];e&&window.MediaKeys&&(r.isSupported()||c.isSupported())?(s.default.available_drm_systems.forEach(function(e){e.keysystems.forEach(function(n){t.push({keysystem:n,drm_system:e})})}),window.getSupportedEME=function(){return new Promise(function(e,t){n().then(function(t){e(t.filter(function(e){return void 0!==e}))},t)})}):console.log("not supported");function n(n){var o=t.map(function(t){return n=t.keysystem,o=t.drm_system,new Promise(function(t,i){r.isSupported(e)?r.getAvailableKeysystems(n,o).then(function(e){t(e)},function(e){i(e)}):c.isSupported(e)&&c.getAvailableKeysystems(n,o).then(function(e){t(e)},function(e){i(e)})});var n,o});return Promise.all(o.map(function(e){return e.catch(function(){})}))}}()}]);