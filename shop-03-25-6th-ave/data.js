var APP_DATA = {
  "scenes": [
    {
      "id": "0-street-view",
      "name": "Street View",
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
        "yaw": -0.2644240513829743,
        "pitch": 0.035073237100906596,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.3104064353974003,
          "pitch": 0.23220610595639712,
          "rotation": 0,
          "target": "1-front-of-shop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-of-shop",
      "name": "Front of Shop",
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
        "yaw": 0.09995976625058489,
        "pitch": 0.21454122719045188,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.3340726874503286,
          "pitch": 0.475007589154556,
          "rotation": 0,
          "target": "2-back-of-shop"
        },
        {
          "yaw": -3.0084863802283905,
          "pitch": 0.29651240005074797,
          "rotation": 0,
          "target": "0-street-view"
        },
        {
          "yaw": -0.26312207420732747,
          "pitch": 0.14651622931198816,
          "rotation": 0,
          "target": "3-kitchen-and-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-back-of-shop",
      "name": "Back of Shop",
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
          "yaw": -0.45169709457945295,
          "pitch": 0.4858454869682589,
          "rotation": 0,
          "target": "1-front-of-shop"
        },
        {
          "yaw": 1.5327696414118268,
          "pitch": 0.4500072635230623,
          "rotation": 0.7853981633974483,
          "target": "3-kitchen-and-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-and-bathroom",
      "name": "Kitchen and Bathroom",
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
        "yaw": -1.2787699778258883,
        "pitch": 0.07888381268193356,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.998169607000749,
          "pitch": 0.022256323915090803,
          "rotation": 4.71238898038469,
          "target": "2-back-of-shop"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Shop 03, 25 6th Ave",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
