var APP_DATA = {
  "scenes": [
    {
      "id": "0-01---front-view",
      "name": "01 - Front View",
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
        "yaw": -2.4289480561842307,
        "pitch": 0.18563865955834125,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.641599788848202,
          "pitch": 0.47702290985599305,
          "rotation": 6.283185307179586,
          "target": "1-02---lobby"
        },
        {
          "yaw": 1.1241214947088487,
          "pitch": 0.33530064178441776,
          "rotation": 0,
          "target": "11-12---parking-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02---lobby",
      "name": "02 - Lobby",
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
          "yaw": -0.8016775675766574,
          "pitch": 0.2265507401849991,
          "rotation": 0,
          "target": "2-03---front-of-shop"
        },
        {
          "yaw": 3.047066296833311,
          "pitch": 0.37406001288537283,
          "rotation": 0,
          "target": "0-01---front-view"
        },
        {
          "yaw": -1.9213191563347607,
          "pitch": 0.4108664302325806,
          "rotation": 1.5707963267948966,
          "target": "3-04---back-of-shop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03---front-of-shop",
      "name": "03 - Front of Shop",
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
        "yaw": 0.09023573244058625,
        "pitch": -0.015803594792647147,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.8121456989102498,
          "pitch": 0.2583995410810793,
          "rotation": 0,
          "target": "1-02---lobby"
        },
        {
          "yaw": -0.48490946800454715,
          "pitch": 0.3590444349125157,
          "rotation": 0,
          "target": "6-07---kitchen"
        },
        {
          "yaw": -1.161077562638777,
          "pitch": 0.22804642911913753,
          "rotation": 0,
          "target": "4-05---coffee-bar"
        },
        {
          "yaw": -2.214120774047842,
          "pitch": 0.36329686491776236,
          "rotation": 0,
          "target": "7-08---balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04---back-of-shop",
      "name": "04 - Back of Shop",
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
        "yaw": 3.1018518427116852,
        "pitch": -0.029866166449828313,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.9709960377440066,
          "pitch": 0.3124094647908322,
          "rotation": 6.283185307179586,
          "target": "1-02---lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-05---coffee-bar",
      "name": "05 - Coffee Bar",
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
          "yaw": -0.7323142827961675,
          "pitch": 0.2652511342882864,
          "rotation": 0,
          "target": "5-06---inside-seating"
        },
        {
          "yaw": 2.648745327061585,
          "pitch": 0.19415786045812844,
          "rotation": 0,
          "target": "2-03---front-of-shop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-06---inside-seating",
      "name": "06 - Inside Seating",
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
        "yaw": -0.04479157870384576,
        "pitch": -0.006540891072877031,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.7484809976773246,
          "pitch": 0.3677654468931095,
          "rotation": 0,
          "target": "4-05---coffee-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-07---kitchen",
      "name": "07 - Kitchen",
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
        "yaw": -1.7422534688973919,
        "pitch": 0.01793738930946631,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.07417233943361623,
          "pitch": 0.21387695880141067,
          "rotation": 0,
          "target": "2-03---front-of-shop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-08---balcony",
      "name": "08 - Balcony",
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
        "yaw": -0.5835997672031112,
        "pitch": 0.007750604752907009,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.4868428541248182,
          "pitch": 0.38611767161224186,
          "rotation": 13.351768777756625,
          "target": "2-03---front-of-shop"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-09---outside-seating-01",
      "name": "09 - Outside Seating 01",
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
          "yaw": 0.34260560919294214,
          "pitch": 0.1731084546956616,
          "rotation": 0,
          "target": "10-11---outside-seating-02"
        },
        {
          "yaw": 2.954131575290525,
          "pitch": 0.23834533719376694,
          "rotation": 0,
          "target": "9-10---street-view"
        },
        {
          "yaw": -1.6559968011138757,
          "pitch": 0.2488336305304255,
          "rotation": 0.7853981633974483,
          "target": "7-08---balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-10---street-view",
      "name": "10 - Street View",
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
        "yaw": 0.2715968395426458,
        "pitch": 0.017006316789476728,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.855796570906108,
          "pitch": 0.3964654840243842,
          "rotation": 0.7853981633974483,
          "target": "8-09---outside-seating-01"
        },
        {
          "yaw": -1.7239282610231346,
          "pitch": 0.2860201803961431,
          "rotation": 0,
          "target": "11-12---parking-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-11---outside-seating-02",
      "name": "11 - Outside Seating 02",
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
        "yaw": 3.087450007298025,
        "pitch": 0.003395389215711475,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 3.0638173193766605,
          "pitch": 0.22630570169125086,
          "rotation": 0,
          "target": "8-09---outside-seating-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-12---parking-area",
      "name": "12 - Parking Area",
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
          "yaw": -0.18218532884298178,
          "pitch": -0.14151303484414868,
          "rotation": 0,
          "target": "0-01---front-view"
        },
        {
          "yaw": -0.8830329684853435,
          "pitch": -0.10457181992606124,
          "rotation": 0,
          "target": "9-10---street-view"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Shop 09, Dolphins Leap",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
