var vg_1 = "choropleth_map.json";  // Location of the vegalite JSON file
var vg_2 = "scatter_plot.json";  // Location of the vegalite JSON file

vegaEmbed("#choropleth_map", vg_1, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#scatter_plot", vg_2, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
