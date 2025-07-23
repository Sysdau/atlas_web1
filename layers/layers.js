var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Primtre_SCoT_2025_L93_1 = new ol.format.GeoJSON();
var features_Primtre_SCoT_2025_L93_1 = format_Primtre_SCoT_2025_L93_1.readFeatures(json_Primtre_SCoT_2025_L93_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primtre_SCoT_2025_L93_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primtre_SCoT_2025_L93_1.addFeatures(features_Primtre_SCoT_2025_L93_1);
var lyr_Primtre_SCoT_2025_L93_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primtre_SCoT_2025_L93_1, 
                style: style_Primtre_SCoT_2025_L93_1,
                popuplayertitle: 'Périmètre_SCoT_2025_L93',
                interactive: true,
                title: 'Périmètre_SCoT_2025_L93'
            });
var format_Communes_SCoT_2025_L93_2 = new ol.format.GeoJSON();
var features_Communes_SCoT_2025_L93_2 = format_Communes_SCoT_2025_L93_2.readFeatures(json_Communes_SCoT_2025_L93_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_SCoT_2025_L93_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_SCoT_2025_L93_2.addFeatures(features_Communes_SCoT_2025_L93_2);
var lyr_Communes_SCoT_2025_L93_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_SCoT_2025_L93_2, 
                style: style_Communes_SCoT_2025_L93_2,
                popuplayertitle: 'Communes_SCoT_2025_L93',
                interactive: true,
                title: '<img src="styles/legend/Communes_SCoT_2025_L93_2.png" /> Communes_SCoT_2025_L93'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_Primtre_SCoT_2025_L93_1.setVisible(true);lyr_Communes_SCoT_2025_L93_2.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_Primtre_SCoT_2025_L93_1,lyr_Communes_SCoT_2025_L93_2];
lyr_Primtre_SCoT_2025_L93_1.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', });
lyr_Communes_SCoT_2025_L93_2.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', });
lyr_Primtre_SCoT_2025_L93_1.set('fieldImages', {'ID': '', 'NOM': '', 'NOM_M': '', 'INSEE_COM': '', 'STATUT': '', 'POPULATION': '', 'INSEE_CAN': '', 'INSEE_ARR': '', 'INSEE_DEP': '', 'INSEE_REG': '', 'SIREN_EPCI': '', });
lyr_Communes_SCoT_2025_L93_2.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'NOM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'POPULATION': 'Range', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'SIREN_EPCI': 'TextEdit', });
lyr_Primtre_SCoT_2025_L93_1.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'NOM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', });
lyr_Communes_SCoT_2025_L93_2.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'NOM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', });
lyr_Communes_SCoT_2025_L93_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});