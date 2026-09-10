var APP_DATA = {
  "scenes": [
    {
      "id": "0-01---driveway",
      "name": "01 - Driveway",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.07806781307848887,
        "pitch": 0.05886801965590749,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.04943659682940549,
          "pitch": 0.2041904715702394,
          "rotation": 0,
          "target": "2-03---entrance-hall"
        },
        {
          "yaw": 0.7329294844504144,
          "pitch": 0.1529100039720248,
          "rotation": 0,
          "target": "1-02---street-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02---street-view",
      "name": "02 - Street View",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.002855993321443151,
        "pitch": 0.04448055385270955,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.9887114053476616,
          "pitch": 0.19508812769013417,
          "rotation": 0,
          "target": "0-01---driveway"
        },
        {
          "yaw": -0.20474080476962975,
          "pitch": 0.13411527412927704,
          "rotation": 0,
          "target": "2-03---entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03---entrance-hall",
      "name": "03 - Entrance Hall",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.096217925175088,
        "pitch": 0.034525481531598956,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -3.1075056513221746,
          "pitch": 0.33432742843188024,
          "rotation": 0,
          "target": "5-06---dining-room"
        },
        {
          "yaw": -2.4490613957363294,
          "pitch": 0.5266451061001121,
          "rotation": 1.5707963267948966,
          "target": "3-04---bedroom-01"
        },
        {
          "yaw": 1.4052328310182531,
          "pitch": 0.4605283504533766,
          "rotation": 0,
          "target": "4-05---bedroom-02"
        },
        {
          "yaw": 0.005415518451428625,
          "pitch": 0.23679601048054444,
          "rotation": 0,
          "target": "0-01---driveway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04---bedroom-01",
      "name": "04 - Bedroom 01",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.0925910215749646,
        "pitch": 0.015608233967451923,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.4421896167170676,
          "pitch": 0.4412874962397293,
          "rotation": 0,
          "target": "2-03---entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-05---bedroom-02",
      "name": "05 - Bedroom 02",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.4413465291654148,
        "pitch": 0.061254136719302466,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 3.0084527619631576,
          "pitch": 0.437835066725075,
          "rotation": 0.7853981633974483,
          "target": "2-03---entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-06---dining-room",
      "name": "06 - Dining Room",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.497677524102837,
        "pitch": 0.022462113339095424,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.2187192860801872,
          "pitch": 0.265276310973551,
          "rotation": 0,
          "target": "13-14---lounge"
        },
        {
          "yaw": -3.0059117613228175,
          "pitch": 0.3310654252597569,
          "rotation": 0,
          "target": "2-03---entrance-hall"
        },
        {
          "yaw": -1.7943560504484335,
          "pitch": 0.310580712544386,
          "rotation": 0,
          "target": "6-07---bedroom-03"
        },
        {
          "yaw": -1.1548532032805952,
          "pitch": 0.3268096314073752,
          "rotation": 0,
          "target": "7-08---passage"
        },
        {
          "yaw": -0.8541980557824882,
          "pitch": 0.39019624357844584,
          "rotation": 1.5707963267948966,
          "target": "10-11---kitchen-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-07---bedroom-03",
      "name": "07 - Bedroom 03",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.08592340783075691,
        "pitch": -0.000950303202930769,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.7638316898490745,
          "pitch": 0.3135087569428272,
          "rotation": 0,
          "target": "5-06---dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-08---passage",
      "name": "08 - Passage",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.235039353669972,
        "pitch": 0.08362098560269615,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 0.321287423690892,
          "pitch": 0.40366310224340474,
          "rotation": 0,
          "target": "9-10---guest-toilet"
        },
        {
          "yaw": 1.7301298106020946,
          "pitch": 0.6794197088386564,
          "rotation": 0,
          "target": "8-09---bathroom"
        },
        {
          "yaw": -2.5959881461078034,
          "pitch": 0.30897799093813916,
          "rotation": 0,
          "target": "5-06---dining-room"
        },
        {
          "yaw": -3.0747012321226226,
          "pitch": 0.607738318063582,
          "rotation": 5.497787143782138,
          "target": "10-11---kitchen-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-09---bathroom",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.04188851162513174,
        "pitch": 0.5471544351851172,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.221530643077724,
          "pitch": 0.5272055279892385,
          "rotation": 0,
          "target": "7-08---passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-10---guest-toilet",
      "name": "10 - Guest Toilet",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.191741138730829,
        "pitch": 0.17362864788083243,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 3.0492292653113076,
          "pitch": 0.3698960911633158,
          "rotation": 0,
          "target": "7-08---passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-11---kitchen-01",
      "name": "11 - Kitchen 01",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.486972109865107,
        "pitch": -0.052327128583026905,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.8955880275860899,
          "pitch": 0.3946586205617031,
          "rotation": 0,
          "target": "12-13---kitchen-02"
        },
        {
          "yaw": 1.2670803065205156,
          "pitch": 0.5439093055618116,
          "rotation": 0,
          "target": "7-08---passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-12---scullery",
      "name": "12 - Scullery",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.4113491245189742,
        "pitch": 0.3948637281111864,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 3.0081060782073017,
          "pitch": 0.5398388922036563,
          "rotation": 0,
          "target": "10-11---kitchen-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-13---kitchen-02",
      "name": "13 - Kitchen 02",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.6991551158796518,
        "pitch": -0.05342159547691239,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.6945103853533627,
          "pitch": 0.27864188435000337,
          "rotation": 0,
          "target": "10-11---kitchen-01"
        },
        {
          "yaw": 2.0440311784224665,
          "pitch": 0.2616688305285031,
          "rotation": 0,
          "target": "11-12---scullery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-14---lounge",
      "name": "14 - Lounge",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.3166470572635287,
        "pitch": 0.09079575595048617,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.744745701606467,
          "pitch": 0.40616594780809123,
          "rotation": 0,
          "target": "14-15---sunroom"
        },
        {
          "yaw": 0.6222058972096871,
          "pitch": 0.2936570017757205,
          "rotation": 0,
          "target": "5-06---dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-15---sunroom",
      "name": "15 - Sunroom",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.0685269505275086,
        "pitch": 0.044326561277765464,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.393260238865329,
          "pitch": 0.1767715272159407,
          "rotation": 0,
          "target": "15-16---back-garden"
        },
        {
          "yaw": 0.34346738904306484,
          "pitch": 0.23814992837816717,
          "rotation": 0,
          "target": "13-14---lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-16---back-garden",
      "name": "16 - Back Garden",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.2067061991787611,
        "pitch": 0.15960921133433104,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.794892104286653,
          "pitch": 0.2601297937055804,
          "rotation": 0,
          "target": "14-15---sunroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "1st Avenue 61, Newton Park",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
