module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://grafana.bremen.freifunk.net/d/000000002/node?var-node={NODE_ID}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/000000002/node?panelId=1&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Entwicklung der Anzahl der Clients innerhalb des letzten Tages'
      },
      {
        'name': 'Trafficstatistik',
        'href': 'https://grafana.bremen.freifunk.net/d/000000002/node?var-node={NODE_ID}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/000000002/node?panelId=2&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Entwicklung des Traffic innerhalb des letzten Tages'
      },
      {
        'name': 'Hardwareauslastung',
        'href': 'https://grafana.bremen.freifunk.net/d/000000002/node?var-node={NODE_ID}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/000000002/node?panelId=4&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Loadavg und Arbeitspeicherauslastung innerhalb des letzten Tages'
      },
      {
        'name': 'Airtime',
        'href': 'https://grafana.bremen.freifunk.net/d/000000002/node?var-node={NODE_ID}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/000000002/node?panelId=5&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Auslastung des WLAN-Frequenz innerhalb des letzten Tages'
      }
    ],
    'linkInfos': [
      {
        'name': 'Statistik für alle Links zwischen diese Knoten',
        'href': 'https://grafana.bremen.freifunk.net/d/000000002/node?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/000000002/node?panelId=7&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Linkstatistik des letzten Tages, min und max aller Links zwischen diesen Knoten'
      }
    ],
    'linkTypeInfos': [
      {
        'name': 'Statistik für {TYPE}',
        'href': 'https://grafana.bremen.freifunk.net/d/000000002/node?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_mac={SOURCE_ADDR}&var-target_mac={TARGET_ADDR}',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/000000002/node?panelId=8&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_mac={SOURCE_ADDR}&var-target_mac={TARGET_ADDR}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Linkstatistik des letzten Tages des einzelnen Links in beide Richtungen'
      }
    ],
    'globalInfos': [
      {
        'name': 'Wochenstatistik',
        'href': 'https://grafana.bremen.freifunk.net/d/000000001/globals',
        'image': 'https://grafana.bremen.freifunk.net/render/d-solo/000000001/globals?panelId=2&from=now-7d&width=650&height=350&theme=light',
        'title': 'Entwicklung der Anzahl der Knoten und der Clients innerhalb der letzten 7 Tage'
      }
    ],
    // Array of data provider are supported
    'dataPath': ['https://downloads.bremen.freifunk.net/data/'],
    'siteName': 'Freifunk Bremen',
    'maxAge': 7,
    'mapLayers': [
      {
        'name': 'Freifunk Regensburg',
        // Please ask Freifunk Regensburg before using its tile server c- example with retina tiles
        'url': 'https://{s}.tiles.ffrgb.net/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': '<a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>'
        }
      },
      {
        'name': 'Freifunk Bremen',
        'url': '//tiles.bremen.freifunk.net/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'type': 'osm',
          'attribution': '<a href="https://github.com/mapbox/mapbox-studio-osm-bright.tm2">Design</a> © <a href="https://www.mapbox.com/">Mapbox</a>, <a href="http://creativecommons.org/licenses/by/3.0/">CC-BY 3.0</a> — Daten © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Freifunk Regensburg Night',
        // Please ask Freifunk Regensburg before using its tile server - example with retina and dark tiles
        'url': 'https://{s}.tiles.ffrgb.net/n/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': ' <a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>',
          'mode': 'night'
        }
      },
      {
        'name': 'OpenStreetMap.HOT',
        'url': 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
    // Northwest
      [
        53.27917,
        8.31390
      ],
      // Southeast
      [
        52.9734,
        9.2037
      ]
    ],
    'siteNames': [
      {
        'site': 'ffhb',
        'name': 'Freifunk Bremen'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://bremen.freifunk.net/impressum.html'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://wiki.bremen.freifunk.net/Infrastruktur/Datenschutz'
      }
    ]
  };
};
