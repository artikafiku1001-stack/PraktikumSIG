var wms_layers = [];

var format_BATAS_DESA_IMUT_0 = new ol.format.GeoJSON();
var features_BATAS_DESA_IMUT_0 = format_BATAS_DESA_IMUT_0.readFeatures(json_BATAS_DESA_IMUT_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_DESA_IMUT_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_DESA_IMUT_0.addFeatures(features_BATAS_DESA_IMUT_0);
var lyr_BATAS_DESA_IMUT_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_DESA_IMUT_0, 
                style: style_BATAS_DESA_IMUT_0,
                popuplayertitle: 'BATAS_DESA_IMUT',
                interactive: true,
                title: '<img src="styles/legend/BATAS_DESA_IMUT_0.png" /> BATAS_DESA_IMUT'
            });

lyr_BATAS_DESA_IMUT_0.setVisible(true);
var layersList = [lyr_BATAS_DESA_IMUT_0];
lyr_BATAS_DESA_IMUT_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BATAS_DESA_IMUT_0.set('fieldImages', {'OBJECTID': '', 'GID_4': '', 'GID_0': '', 'COUNTRY': '', 'GID_1': '', 'NAME_1': '', 'GID_2': '', 'NAME_2': '', 'GID_3': '', 'NAME_3': '', 'NAME_4': '', 'VARNAME_4': '', 'TYPE_4': '', 'ENGTYPE_4': '', 'CC_4': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_BATAS_DESA_IMUT_0.set('fieldLabels', {'OBJECTID': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BATAS_DESA_IMUT_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});