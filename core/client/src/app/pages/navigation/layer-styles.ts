export class LayerStyles {

  constructor() {}

  public styles = [
    [
      {
        "id": "background",
        "type": "background",
        "paint": {
          "background-color": "#E8E0D8"
        }
      }, {
        "id": "landuse",
        "type": "fill",
        "source": "osm",
        "source-layer": "landuse",
        "filter": ["==", "$type", "Polygon"],
        "paint": {
          "fill-color": "#AACBAF"
        }
      }, {
        "id": "landcover",
        "type": "fill",
        "source": "osm",
        "source-layer": "landcover",
        "filter": ["==", "$type", "Polygon"],
        "paint": {
          "fill-color": "#C8FACC"
        }
      }, {
        "id": "park",
        "type": "fill",
        "source": "osm",
        "source-layer": "park",
        "filter": ["==", "$type", "Polygon"],
        "paint": {
          "fill-color": "#ADD19E"
        }
      }, {
        "id": "waterway",
        "type": "line",
        "source": "osm",
        "source-layer": "waterway",
        "filter": ["==", "$type", "LineString"],
        "paint": {
          "line-color": "#73B6E6",
          "line-width": 2
        }
      }, {
        "id": "transportation",
        "type": "line",
        "source": "osm",
        "source-layer": "transportation",
        "filter": ["==", "$type", "LineString"],
        "paint": {
          "line-color": "#FFFFFF",
          "line-width": 2
        }
      }, {
        "id": "transportation_name",
        "type": "line",
        "source": "osm",
        "source-layer": "transportation_name",
        "filter": ["==", "$type", "LineString"],
        "paint": {
          "line-color": "#ccc",
          "line-width": 2
        }
      //   }, {
      //       "id": "place",
      //       "type": "symbol",
      //       "source": "osm",
      //       "source-layer": "place",
      //       "layout": {
      //         "text-field": "{name_en}"
      //       },
      //       "paint": {
      //           "icon-color": "#73B6E6",
      //           "text-color": "black"
      //           // "line-color": "#000000",
      //           // "line-width": 2
      //       }
      }, {
        "id": "building",
        "type": "fill",
        "source": "osm",
        "source-layer": "building",
        "filter": ["==", "$type", "Polygon"],
        "paint": {
          "fill-color": "#D9D0C9"
        }
      }, {
        "id": "water",
        "type": "fill",
        "source": "osm",
        "source-layer": "water",
        "filter": ["==", "$type", "Polygon"],
        "paint": {
          "fill-color": "#73B6E6"
        }
      }
    ],
    [
      {
        "id": "background",
        "type": "background",
        "paint": {
          "background-color": "#111111"
        }
      }, {
        "id": "landuse",
        "type": "fill",
        "source": "osm",
        "source-layer": "landuse",
        "filter": ["==", "$type", "Polygon"],
        "paint": {
          "fill-color": "#161616"
        }
      }, {
        "id": "landcover",
        "type": "fill",
        "source": "osm",
        "source-layer": "landcover",
        "filter": ["==", "$type", "Polygon"],
        "paint": {
          "fill-color": "#161616"
        }
      }, {
        "id": "park",
        "type": "fill",
        "source": "osm",
        "source-layer": "park",
        "filter": ["==", "$type", "Polygon"],
        "paint": {
          "fill-color": "#161616"
        }
      }, {
        "id": "waterway",
        "type": "line",
        "source": "osm",
        "source-layer": "waterway",
        "filter": ["==", "$type", "LineString"],
        "paint": {
          "line-color": "#1F1F1F",
          "line-width": 2
        }
      }, {
        "id": "transportation",
        "type": "line",
        "source": "osm",
        "source-layer": "transportation",
        "filter": ["==", "$type", "LineString"],
        "paint": {
          "line-color": "#494949",
          "line-width": 2
        }
      }, {
        "id": "transportation_name",
        "type": "line",
        "source": "osm",
        "source-layer": "transportation_name",
        "filter": ["==", "$type", "LineString"],
        "paint": {
          "line-color": "#494949",
          "line-width": 2
        }
      }, {
        "id": "building",
        "type": "fill",
        "source": "osm",
        "source-layer": "building",
        "filter": ["==", "$type", "Polygon"],
        "paint": {
          "fill-color": "#2B2B2B"
        }
      }, {
        "id": "water",
        "type": "fill",
        "source": "osm",
        "source-layer": "water",
        "filter": ["==", "$type", "Polygon"],
        "paint": {
          "fill-color": "#1F1F1F"
        }
      }
    ]
  ]
}