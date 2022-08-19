[![GitHub issues](https://img.shields.io/github/issues/kitavidavis/shp2geo)](https://github.com/kitavidavis/shp2geo/issues)[![GitHub stars](https://img.shields.io/github/stars/kitavidavis/shp2geo)](https://github.com/kitavidavis/shp2geo/stargazers)[![GitHub forks](https://img.shields.io/github/forks/kitavidavis/shp2geo)](https://github.com/kitavidavis/shp2geo/network)

# shp2geo
A simple javascript package that parses zipped shapefile into geojson

```
npm i shp2geo
```

The package requires a .zip shapefile url as parameter.
```
const shp2geo = require("shp2geo")
const geo = shp2geo(<.zip url here>)
console.log(geo)
```
