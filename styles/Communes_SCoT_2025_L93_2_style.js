var size = 0;
var placement = 'point';

var style_Communes_SCoT_2025_L93_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "9.1px \'Archer Semibold\', sans-serif";
    var labelFill = "#f3f3f3";
    var bufferColor = "#000000";
    var bufferWidth = 0.09;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NOM_M") !== null) {
        labelText = String(feature.get("NOM_M"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.532}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: [2.128,1.064,0.532,1.064], lineCap: 'round', lineJoin: 'bevel', width: 0.532}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
