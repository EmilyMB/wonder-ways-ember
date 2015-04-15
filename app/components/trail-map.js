/* globals L */

import Ember from 'ember';

export default Ember.Component.extend({

  map: null,
  classNames: ['trail-map'],

  didInsertElement: function () {

    L.mapbox.accessToken = 'pk.eyJ1IjoibHlkaWFzMzAzIiwiYSI6ImM0WG9rY28ifQ.bM1Nx1fsDmbAFLVP1f9Img';

    let map = L.mapbox.map(this.elementId, 'lydias303.4be232dc');
    this.set('map', map);

    let lat = this.get('trail.lat')

    let lng = this.get('trail.lng')

    map.setView([lat, lng], 15);

    var points = { "type": "FeatureCollection",
        "features": [
          { "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [lng, lat]},
            "properties": {"marker-symbol": "park", "marker-color": "#0C5CFE", "marker-size": "large"}
            }
           ]
         }

    var myLayer = L.mapbox.featureLayer(points).addTo(map);
    //
    // var geojson =
    //   {type: "FeatureCollection",
    //   features: [
    //     {type: "Feature", geometry: { type:"point", coordinates: [lat, lng]},
    //     properties: {marker-symbol: "music", marker-color: "#e9620a", marker-size: "large"}
    //   }
    // ]
    // }

//     var points = { "type": "FeatureCollection",
//         "features": [
//           { "type": "Feature",
//             "geometry": {"type": "Point", "coordinates": [lat, lng]},
//             "properties": {"marker-size": "large"}
//             }
//            ]
//          }
// myLayer.setGeoJSON(points)

// myLayer.on('layeradd', function(e) {
//   var marker = e.layer,
//   feature = marker.feature;
// });
//
// myLayer.setGeoJSON(geojson);

}
});
