module.exports = {

  "available_drm_systems": [
    {
      id: 'Widevine',
      keysystems: [
        'com.widevine.alpha'
      ],
      config: {
        videoCapabilities: [
          {
            contentType: 'video/mp4;codecs="avc1.42E01E"',
            robustness: 'SW_SECURE_CRYPTO'
          }
        ]
      }
    },
    {
      id: 'PlayReady',
      keysystems: [
        'com.microsoft.playready',
        'com.youtube.playready'
      ]
    },
    {
      id: 'Primetime',
      keysystems: [
        'com.adobe.primetime',
        'com.adobe.access'
      ]
    },
    {
      id: 'Fairplay',
      keysystems: [
        'com.apple.fairplay',
        'com.apple.fps.1_0',
        'com.apple.fps',
        'com.apple.fps_2_0'
      ]
    },
    {
      id: 'ClearKey',
      keysystems: [
        'webkit-org.w3.clearkey',
        'org.w3.clearkey'
      ],
      config: {
        videoCapabilities: [
          {
            contentType: 'video/mp4;codecs="avc1.42E01E"'
          }
        ]
      }
    }
  ]

}