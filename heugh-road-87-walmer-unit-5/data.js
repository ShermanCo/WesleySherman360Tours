var APP_DATA = {
  "scenes": [
    {
      "id": "0-01---private-parking",
      "name": "01 - Private Parking",
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
        "yaw": -2.511087152703489,
        "pitch": 0.0038843293633661347,
        "fov": 1.399216861657028
      },
      "linkHotspots": [
        {
          "yaw": -2.6793363821484277,
          "pitch": 0.17566062801408222,
          "rotation": 0,
          "target": "1-02---reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02---reception",
      "name": "02 - Reception",
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
        "yaw": -0.5070972269349703,
        "pitch": 0.026446690625753888,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -0.6394905995915785,
          "pitch": 0.2636093931912402,
          "rotation": 0,
          "target": "0-01---private-parking"
        },
        {
          "yaw": -3.027607073979498,
          "pitch": 0.5657174278752244,
          "rotation": 0,
          "target": "2-03---office-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03---office-01",
      "name": "03 - Office 01",
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
        "yaw": 2.984192103815955,
        "pitch": 0.04116564439769732,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.3210033002864705,
          "pitch": 0.5126817658510348,
          "rotation": 0.7853981633974483,
          "target": "1-02---reception"
        },
        {
          "yaw": -2.7856112856665263,
          "pitch": 0.42367004179369516,
          "rotation": 0,
          "target": "5-06---passage"
        },
        {
          "yaw": 2.341474228837633,
          "pitch": 0.35621615171480414,
          "rotation": 0,
          "target": "4-05---office-03"
        },
        {
          "yaw": 2.109802758645257,
          "pitch": 0.5928579441617039,
          "rotation": 5.497787143782138,
          "target": "3-04---office-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04---office-02",
      "name": "04 - Office 02",
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
        "yaw": -0.20753729287831213,
        "pitch": 0.11119636997764104,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -2.2718029072964026,
          "pitch": 0.4915505745092652,
          "rotation": 1.5707963267948966,
          "target": "2-03---office-01"
        },
        {
          "yaw": -2.6139598714470313,
          "pitch": 0.49097563344597894,
          "rotation": 5.497787143782138,
          "target": "4-05---office-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-05---office-03",
      "name": "05 - Office 03",
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
        "yaw": -0.5378787422055211,
        "pitch": 0.04971077215387609,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -3.0923180177120333,
          "pitch": 0.44862328186517964,
          "rotation": 0,
          "target": "3-04---office-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-06---passage",
      "name": "06 - Passage",
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
        "yaw": 1.0684735452246628,
        "pitch": 0.0006529189116619705,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 1.6485395017954971,
          "pitch": 0.4259807775135904,
          "rotation": 0,
          "target": "6-07---kitchen"
        },
        {
          "yaw": 0.8275281916352402,
          "pitch": 0.4618537462009993,
          "rotation": 0,
          "target": "7-08---bathroom"
        },
        {
          "yaw": -2.856835516396476,
          "pitch": 0.4718330990937698,
          "rotation": 0,
          "target": "2-03---office-01"
        },
        {
          "yaw": 2.6019204612445836,
          "pitch": 0.5775742375043933,
          "rotation": 5.497787143782138,
          "target": "1-02---reception"
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": -3.056819627745716,
          "pitch": 0.5309548592483058,
          "rotation": 0,
          "target": "5-06---passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-08---bathroom",
      "name": "08 - Bathroom",
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
        "yaw": 0.37983747380479826,
        "pitch": 0.4029215388672327,
        "fov": 1.4010588678110822
      },
      "linkHotspots": [
        {
          "yaw": 2.5442440115025162,
          "pitch": 0.5783429651162528,
          "rotation": 0,
          "target": "5-06---passage"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Heugh Road 87, Walmer - Unit 5",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
