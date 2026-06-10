var APP_DATA = {
  "scenes": [
    {
      "id": "0-01---parking-area",
      "name": "01 - Parking Area",
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
        "yaw": 0.4928060020462901,
        "pitch": 0.0013113759157050708,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.23879131045818802,
          "pitch": 0.17497252377712513,
          "rotation": 0,
          "target": "1-02---entrance-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02---entrance-area",
      "name": "02 - Entrance Area",
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
        "yaw": 2.2992891040384844,
        "pitch": 0.012617354711029094,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.034394526182882856,
          "pitch": 0.172662754048428,
          "rotation": 0,
          "target": "0-01---parking-area"
        },
        {
          "yaw": 1.998806201757306,
          "pitch": 0.258999126369142,
          "rotation": 0,
          "target": "5-06---kitchen"
        },
        {
          "yaw": 2.5305803348811473,
          "pitch": 0.307955342826034,
          "rotation": 0,
          "target": "6-09---bathroom"
        },
        {
          "yaw": -0.9454789429407207,
          "pitch": 0.45190026515483694,
          "rotation": 0,
          "target": "2-03---board-room-01"
        },
        {
          "yaw": -2.172309795893476,
          "pitch": 0.3206068676035727,
          "rotation": 0.7853981633974483,
          "target": "3-04---board-room-02"
        },
        {
          "yaw": -2.771734206004661,
          "pitch": 0.41214130234093105,
          "rotation": 0,
          "target": "4-05---upstairs-office-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03---board-room-01",
      "name": "03 - Board Room 01",
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
        "yaw": 1.624314299621581,
        "pitch": 0.3536031038599745,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -1.4468131512276816,
          "pitch": 0.3043806255293191,
          "rotation": 0,
          "target": "1-02---entrance-area"
        },
        {
          "yaw": 0.01066912153045152,
          "pitch": 0.2662464588600777,
          "rotation": 0,
          "target": "3-04---board-room-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04---board-room-02",
      "name": "04 - Board Room 02",
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
        "yaw": 0.3169423047051758,
        "pitch": 0.00895602216797542,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.018276770073983428,
          "pitch": 0.28433367031538914,
          "rotation": 0,
          "target": "2-03---board-room-01"
        },
        {
          "yaw": 1.1949668887200282,
          "pitch": 0.30367510851380786,
          "rotation": 0,
          "target": "1-02---entrance-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-05---upstairs-office-02",
      "name": "05 - Upstairs Office 02",
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
        "yaw": 0.05161477356291044,
        "pitch": 0.00491421701276451,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.9759392697460907,
          "pitch": 0.2862990080098289,
          "rotation": 3.141592653589793,
          "target": "1-02---entrance-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-06---kitchen",
      "name": "06 - Kitchen",
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
        "yaw": -0.2789353477278489,
        "pitch": 0.04557906237404907,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 3.036020448967193,
          "pitch": 0.260964972567475,
          "rotation": 0,
          "target": "1-02---entrance-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-09---bathroom",
      "name": "09 - Bathroom",
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
        "yaw": -0.32273336787800666,
        "pitch": -0.03138786390258019,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.3578876334886694,
          "pitch": 0.3924294504665937,
          "rotation": 0,
          "target": "1-02---entrance-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "8th Avenue 29, Walmer - Unit 4",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
