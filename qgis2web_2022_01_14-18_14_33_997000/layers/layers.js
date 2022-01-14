var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_kecamatan_0 = new ol.format.GeoJSON();
var features_kecamatan_0 = format_kecamatan_0.readFeatures(json_kecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecamatan_0.addFeatures(features_kecamatan_0);var lyr_kecamatan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecamatan_0, 
                style: style_kecamatan_0,
    title: 'kecamatan<br />\
    <img src="styles/legend/kecamatan_0_0.png" /> < -2.00 Std Dev<br />\
    <img src="styles/legend/kecamatan_0_1.png" /> -2.00 Std Dev - -1.00 Std Dev<br />\
    <img src="styles/legend/kecamatan_0_2.png" /> -1.00 Std Dev - 0.00 Std Dev<br />\
    <img src="styles/legend/kecamatan_0_3.png" /> 0.00 Std Dev - 1.00 Std Dev<br />\
    <img src="styles/legend/kecamatan_0_4.png" /> 1.00 Std Dev - 2.00 Std Dev<br />\
    <img src="styles/legend/kecamatan_0_5.png" /> >= 2.00 Std Dev<br />'
        });

lyr_kecamatan_0.setVisible(true);
var layersList = [baseLayer,lyr_kecamatan_0];
lyr_kecamatan_0.set('fieldAliases', {'kecamatan': 'kecamatan', 'JmlPria': 'JmlPria', 'JmlWanita': 'JmlWanita', 'Total': 'Total', 'id': 'id', 'JmlKTP': 'JmlKTP', });
lyr_kecamatan_0.set('fieldImages', {'kecamatan': 'TextEdit', 'JmlPria': 'TextEdit', 'JmlWanita': 'TextEdit', 'Total': 'TextEdit', 'id': 'TextEdit', 'JmlKTP': 'TextEdit', });
lyr_kecamatan_0.set('fieldLabels', {'kecamatan': 'inline label', 'JmlPria': 'inline label', 'JmlWanita': 'inline label', 'Total': 'inline label', 'id': 'inline label', 'JmlKTP': 'no label', });
lyr_kecamatan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});