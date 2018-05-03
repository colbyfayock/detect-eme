import Config from './config';

import * as requestMediaKeySystemAccess from './lib/requestMediaKeySystemAccess';
import * as mediaKeySystemAccess from './lib/mediaKeySystemAccess';

(function() {

  var video = document.createElement('video');

  var supported_drm_systems = [];

  function isEmeSupported(video_element) {

    if ( !video_element ) return false;
    if ( !window.MediaKeys ) return false;

    if ( requestMediaKeySystemAccess.isSupported(video_element) ) return true;
    if ( mediaKeySystemAccess.isSupported(video_element) ) return true;

    return false;

  }

  function handleSupportedKeysystem(drm_system) {
    supported_drm_systems.push(drm_system);
    console.log('drm_system', drm_system);
  }

  function handleError(error) {
    console.log('error', error);
    // Not supported
  }

  if ( !isEmeSupported(video) ) {
    console.log('not supported');
    // return;
  }

  Config.available_drm_systems.forEach(function(drm_system) {

    drm_system.keysystems.forEach(function(keysystem) {

      if ( requestMediaKeySystemAccess.isSupported(video) ) {
        requestMediaKeySystemAccess.getAvailableKeysystems(keysystem, drm_system, handleSupportedKeysystem);
      } else if ( mediaKeySystemAccess.isSupported(video) ) {
        mediaKeySystemAccess.getAvailableKeysystems(video, keysystem, drm_system, handleSupportedKeysystem);
      }

    });

  });

})();