import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Map, NavigationControl, Layer, GeoJSONSourceRaw } from 'mapbox-gl/dist/mapbox-gl';

import { StatusBarService } from '../../status-bar/status-bar.service';

import { LayerStyles } from './layer-styles';

// declare var mapboxgl: any;

@Component({
  styleUrls: ['./navigation.component.scss'],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit, AfterViewInit {

  private LayerStyles = new LayerStyles();

  constructor(private statusBarService:StatusBarService) { 

  }

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
      "layers": this.LayerStyles.styles[1]
    };

    var map = new Map({
      container: 'map',
      style: simple,
      zoom: 13,
      center: [-105.082614,39.805396]
    });

    map.addControl(new NavigationControl());

    let FeatureData:GeoJSON.Feature<GeoJSON.LineString> = {
        type: "Feature",
        properties: {},
        geometry: {
            type: "LineString",
            coordinates: [
                [
                    -105.082614,
                    39.805566
                ],
                [
                    -105.081435,
                    39.805564
                ],
                [
                    -105.081456,
                    39.801936
                ],
                [
                    -105.062894,
                    39.801677
                ],
                [
                    -105.056905,
                    39.799341
                ],
                [
                    -105.053442,
                    39.799157
                ],
                [
                    -105.053336,
                    39.795428
                ],
                [
                    -105.041498,
                    39.798974
                ],
                [
                    -105.024263,
                    39.800774
                ],
                [
                    -105.009842,
                    39.807696
                ],
                [
                    -104.991537,
                    39.81272
                ],
                [
                    -104.981014,
                    39.818155
                ],
                [
                    -104.980858,
                    39.827779
                ],
                [
                    -104.983153,
                    39.833619
                ],
                [
                    -104.987403,
                    39.858673
                ],
                [
                    -104.987486,
                    39.897614
                ],
                [
                    -104.99061,
                    39.908771
                ],
                [
                    -104.988914,
                    39.914201
                ],
                [
                    -104.994692,
                    39.91404
                ],
                [
                    -104.994448,
                    39.9178
                ]
            ]
        }
    };

    let source:GeoJSONSourceRaw = {
        type: "geojson",
        data: FeatureData
    };

    let layer:Layer = {
      "id": "route",
      "type": "line",
      "source": "route",
      "layout": {
          "line-join": "round",
          "line-cap": "round"
      },
      "paint": {
          "line-color": "#04DFDF",
          "line-width": 6
      }
    };

    map.on('load', function () {
    //   console.log(JSON.stringify(source));
      map.addSource('route', source);
      map.addLayer(layer);
    });
  }

}