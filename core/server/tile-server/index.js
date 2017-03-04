
var path     = require('path'),
    tilelive = require('tilelive'),

    http;

http = {
  getTile: () => {
    return (req, res) => {
      var z = req.params[0];
      var x = req.params[1];
      var y = req.params[2];

      http.source.getTile(z, x, y, (err, tile, headers) => {
          if (err) {
              res.status(404)
              res.send(err.message);
              console.log(err.message);
          } else {
            // res.set(headers);
            // console.log(headers);
            // res.send(tile);
            for (header in headers) {
                if (!headers.hasOwnProperty(header)) {
                    //The current property is not a direct property of p
                    continue;
                }
                res.setHeader(header, headers[header]);
            }
            res.send(tile);
          }
      });
    }
  }
}

require('mbtiles').registerProtocols(tilelive);

console.log('mbtiles://' + path.join(__dirname, './data/denver-boulder_colorado.mbtiles'));
tilelive.load('mbtiles://' + path.join(__dirname, './data/denver-boulder_colorado.mbtiles'), (err, source) => {
  http.source = source;
});

/**
 * ## Public API
 */
module.exports = {
    // Extras
    http: http
};