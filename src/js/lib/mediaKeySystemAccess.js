export function isSupported() {
  return !!window.MediaKeySystemAccess && !!window.MediaKeySystemAccess.prototype.getConfiguration;
}

export function getAvailableKeysystems(keysystem, drm_system) {

  return new Promise(function(resolve, reject) {
    console.log('MediaKeySystemAccess', MediaKeySystemAccess.getConfiguration());
    resolve(drm_system);
  });

}