export function isSupported() {
  return !!window.navigator && !!window.navigator.requestMediaKeySystemAccess;
}

export function getAvailableKeysystems(keysystem, drm_system, callback) {

  if ( !keysystem || !drm_system ) return false;

  try {
    window.navigator.requestMediaKeySystemAccess(keysystem, [drm_system.config]).then(function(keySystemAccess) {
      callback(drm_system);
    }).catch(function(e) {
      // handleError(e);
    });
  } catch (e) {
    // handleError(e);
  }

}