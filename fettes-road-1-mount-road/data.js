var APP_DATA = {
  "scenes": [
    {
      "id": "0-01---reception",
      "name": "01 - Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.20902112280456997,
        "pitch": 0.05753169693400295,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.6408744590656017,
          "pitch": -0.12176924556107238,
          "rotation": 0,
          "target": "2-03---upstairs-office-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02---upstairs-bathroom",
      "name": "02 - Upstairs Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.790730315573743,
          "pitch": 0.7412762174903289,
          "rotation": 0,
          "target": "4-05---yard"
        },
        {
          "yaw": -2.649041836621775,
          "pitch": 0.9294861213776002,
          "rotation": 4.71238898038469,
          "target": "2-03---upstairs-office-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03---upstairs-office-01",
      "name": "03 - Upstairs Office 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.824288805642359,
          "pitch": 0.4781477903072471,
          "rotation": 1.5707963267948966,
          "target": "1-02---upstairs-bathroom"
        },
        {
          "yaw": -3.063976475608481,
          "pitch": 0.527462244752078,
          "rotation": 4.71238898038469,
          "target": "3-04---upstairs-office-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04---upstairs-office-02",
      "name": "04 - Upstairs Office 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.372787483579007,
          "pitch": 0.5155337987506492,
          "rotation": 0.7853981633974483,
          "target": "2-03---upstairs-office-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-05---yard",
      "name": "05 - Yard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33908621632278724,
          "pitch": 0.14014403815088805,
          "rotation": 0,
          "target": "0-01---reception"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Fettes Road 01, Mount Road",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
