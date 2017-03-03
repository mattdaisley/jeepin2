import { Component, OnInit, AfterViewInit } from '@angular/core';

import { StatusBarService } from '../../status-bar/status-bar.service';

import { Map, NavigationControl } from 'mapbox-gl/dist/mapbox-gl';

// declare var mapboxgl: any;

@Component({
  styleUrls: ['./navigation.component.scss'],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit, AfterViewInit {

  constructor(private statusBarService:StatusBarService) { }

  ngOnInit() {
    this.statusBarService.currentPage = 'Navigation';
  }

  ngAfterViewInit() {
    // console.log(mapboxGl);
    var simple = {
      "version": 8,
      "sources": {
          "osm": {
              "type": "vector",
              "tiles": ["http://127.0.0.1:7777/v2/tiles/{z}/{x}/{y}.pbf"],
              "maxzoom": 14
          }
      },
      "layers": [
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
      ]
    };

    var map = new Map({
      container: 'map',
      style: simple,
      zoom: 13,
      center: [-105.082614,39.805396]
    });

    map.addControl(new NavigationControl());
  }

}