export function isSupported() {
  return !!window.navigator && !!window.navigator.requestMediaKeySystemAccess;
}

export function getAvailableKeysystems(keysystem, drm_system) {

  return new Promise(function(resolve, reject) {

    if ( !keysystem || !drm_system ) {
      reject('Invalid key or DRM system');
      return;
    }

    try {
      window.navigator.requestMediaKeySystemAccess(keysystem, [drm_system.config]).then(function(keySystemAccess) {
        resolve(drm_system);
      }).catch(function(e) {
        reject(e);
      });
    } catch (e) {
      reject(e);
    }

  });

}