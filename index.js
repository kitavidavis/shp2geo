module.exports = function parseShapefile(url) {
    const L = require("leaflet");
    const shp = require("shpjs");

    let geo;

    shp(url).then(function(data) {
        geo = data
    }).catch((err) => {
        console.log(err);
    })

    return geo;
}