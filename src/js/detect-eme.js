import Config from './config';

import * as requestMediaKeySystemAccess from './lib/requestMediaKeySystemAccess';
import * as mediaKeySystemAccess from './lib/mediaKeySystemAccess';

(function() {

  const video = document.createElement('video');

  let available_drm_systems = [];

  if ( !isEmeSupported(video) ) {
    console.log('not supported');
    return;
  }

  function isEmeSupported(video_element) {

    if ( !video_element ) return false;
    if ( !window.MediaKeys ) return false;

    if ( requestMediaKeySystemAccess.isSupported() ) return true;
    if ( mediaKeySystemAccess.isSupported() ) return true;

    return false;

  }

  function getEmeByKeysystem(keysystem, drm_system) {

    return new Promise(function(resolve, reject) {

      if ( requestMediaKeySystemAccess.isSupported(video) ) {

        requestMediaKeySystemAccess.getAvailableKeysystems(keysystem, drm_system).then(function(data) {
          resolve(data);
        }, function(error) {
          reject(error);
        });

      } else if ( mediaKeySystemAccess.isSupported(video) ) {

        mediaKeySystemAccess.getAvailableKeysystems(keysystem, drm_system).then(function(data) {
          resolve(data);
        }, function(error) {
          reject(error);
        });
      }

    });

  }

  function getSupportedKeysystems(keystems) {

    const keysystem_map = available_drm_systems.map(system => getEmeByKeysystem(system.keysystem, system.drm_system))

    return Promise.all(keysystem_map.map(keysystem => keysystem.catch(() => undefined)))

  }

  Config.available_drm_systems.forEach(function(drm_system) {
    drm_system.keysystems.forEach(function(keysystem) {
      available_drm_systems.push({
        keysystem: keysystem,
        drm_system: drm_system
      });
    });
  });

  window.getSupportedEME = function() {

    return new Promise(function(resolve, reject) {
      getSupportedKeysystems(available_drm_systems).then(function(results) {
        resolve(results.filter(result => typeof result !== 'undefined'));
      }, reject);
    });

  }

})();