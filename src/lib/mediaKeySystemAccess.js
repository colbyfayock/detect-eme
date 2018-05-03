export function isSupported() {
  return !!window.MediaKeySystemAccess && !!window.MediaKeySystemAccess.prototype.getConfiguration;
}

export function getAvailableKeysystems(keysystem, drm_system, callback) {

  console.log('MediaKeySystemAccess', MediaKeySystemAccess.getConfiguration());

}