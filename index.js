module.exports = function parseShapefile(url) {
    const L = require("leaflet");
    const shp = require("shpjs");

    const retrieveExtension = () => {
        return url.substring(url.lastIndexOf('.')+1, url.length) || url;
    }

    if (typeof url !== "string"){
        throw new TypeError("URL must be a string")
    }

    if(retrieveExtension() !== ".zip"){
        throw new TypeError("The shapefile must be a zip file")
    }

    const geo = L.geoJSON(
        { features: []},
        {
            onEachFeature: function popUp(f, l) {
                var out = [];

                if (f.properties) {
                    for (var key in f.properties) {
                        out.push(key + ":" + f.properties[key]);
                    }
                    l.bindPopup(out.join("<br />"));
                }
            }
        }
    )

    shp(url).then(function(data) {
        geo.addData(data);
    }).catch((err) => {
        console.log(err);
    })

    return geo;
}