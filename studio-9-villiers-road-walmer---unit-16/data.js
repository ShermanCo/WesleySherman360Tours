var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
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
        "yaw": 0.928761359535784,
        "pitch": -0.041083669085882235,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.7055108385178812,
          "pitch": 0.31061320285984806,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -3.0422303577644616,
          "pitch": 0.08333175622719935,
          "rotation": 0,
          "target": "5-parking-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
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
        "yaw": -0.51767386054774,
        "pitch": 0.027317958122203834,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.881796181379646,
          "pitch": 0.6489450607246461,
          "rotation": 4.71238898038469,
          "target": "0-entrance"
        },
        {
          "yaw": -2.2710873537064877,
          "pitch": 0.2851366066534986,
          "rotation": 0,
          "target": "2-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-area",
      "name": "Living Area",
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
        "yaw": 1.9467985329903668,
        "pitch": 0.07664158723104464,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.1926358124984526,
          "pitch": 0.22306692920525073,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -1.058723171684198,
          "pitch": 0.36211078564503296,
          "rotation": 0,
          "target": "4-yard"
        },
        {
          "yaw": 1.017086647365641,
          "pitch": 0.42755316267132315,
          "rotation": 1.5707963267948966,
          "target": "3-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "Bathroom",
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
        "yaw": -0.4849086386575685,
        "pitch": 0.3171573276777089,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.522969717156899,
          "pitch": 0.523532991033548,
          "rotation": 5.497787143782138,
          "target": "2-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-yard",
      "name": "Yard",
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
        "yaw": 1.039024328063661,
        "pitch": 0.029530242854512778,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.9294854783100037,
          "pitch": 0.29782301275170475,
          "rotation": 0.7853981633974483,
          "target": "2-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-parking-area",
      "name": "Parking Area",
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
          "yaw": 0.4687685048780992,
          "pitch": 0.07878474536664726,
          "rotation": 0.7853981633974483,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Studio 9, Villiers Road, Walmer - Unit 16",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
