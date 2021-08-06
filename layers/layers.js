ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([-1.288749, 49.577312, 392489.100000, 6954686.100000]);
var wms_layers = [];

var format_sensinterdit_0 = new ol.format.GeoJSON();
var features_sensinterdit_0 = format_sensinterdit_0.readFeatures(json_sensinterdit_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_sensinterdit_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sensinterdit_0.addFeatures(features_sensinterdit_0);
var lyr_sensinterdit_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sensinterdit_0, 
                style: style_sensinterdit_0,
                interactive: true,
                title: '<img src="styles/legend/sensinterdit_0.png" /> sens interdit'
            });
var format_Pistecyclablevraie_1 = new ol.format.GeoJSON();
var features_Pistecyclablevraie_1 = format_Pistecyclablevraie_1.readFeatures(json_Pistecyclablevraie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Pistecyclablevraie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pistecyclablevraie_1.addFeatures(features_Pistecyclablevraie_1);
var lyr_Pistecyclablevraie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pistecyclablevraie_1, 
                style: style_Pistecyclablevraie_1,
                interactive: true,
                title: '<img src="styles/legend/Pistecyclablevraie_1.png" /> Piste cyclable (vraie)'
            });
var format_Zone30_2 = new ol.format.GeoJSON();
var features_Zone30_2 = format_Zone30_2.readFeatures(json_Zone30_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Zone30_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone30_2.addFeatures(features_Zone30_2);
var lyr_Zone30_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zone30_2, 
                style: style_Zone30_2,
                interactive: true,
                title: '<img src="styles/legend/Zone30_2.png" /> Zone 30'
            });
var format_ajout2016_3 = new ol.format.GeoJSON();
var features_ajout2016_3 = format_ajout2016_3.readFeatures(json_ajout2016_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ajout2016_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ajout2016_3.addFeatures(features_ajout2016_3);
var lyr_ajout2016_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ajout2016_3, 
                style: style_ajout2016_3,
                interactive: true,
                title: '<img src="styles/legend/ajout2016_3.png" /> ajout 2016'
            });
var format_ajout2019_4 = new ol.format.GeoJSON();
var features_ajout2019_4 = format_ajout2019_4.readFeatures(json_ajout2019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ajout2019_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ajout2019_4.addFeatures(features_ajout2019_4);
var lyr_ajout2019_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ajout2019_4, 
                style: style_ajout2019_4,
                interactive: true,
                title: '<img src="styles/legend/ajout2019_4.png" /> ajout 2019'
            });
var format_ajout2015_5 = new ol.format.GeoJSON();
var features_ajout2015_5 = format_ajout2015_5.readFeatures(json_ajout2015_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ajout2015_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ajout2015_5.addFeatures(features_ajout2015_5);
var lyr_ajout2015_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ajout2015_5, 
                style: style_ajout2015_5,
                interactive: true,
                title: '<img src="styles/legend/ajout2015_5.png" /> ajout 2015'
            });
var format_MasterColour_6 = new ol.format.GeoJSON();
var features_MasterColour_6 = format_MasterColour_6.readFeatures(json_MasterColour_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_MasterColour_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterColour_6.addFeatures(features_MasterColour_6);
var lyr_MasterColour_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MasterColour_6, 
                style: style_MasterColour_6,
                interactive: true,
                title: '<img src="styles/legend/MasterColour_6.png" /> Master Colour'
            });
var format_MBF_7 = new ol.format.GeoJSON();
var features_MBF_7 = format_MBF_7.readFeatures(json_MBF_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_MBF_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBF_7.addFeatures(features_MBF_7);
var lyr_MBF_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBF_7, 
                style: style_MBF_7,
                interactive: true,
                title: '<img src="styles/legend/MBF_7.png" /> MBF'
            });
var format_MasterSonTPIA_8 = new ol.format.GeoJSON();
var features_MasterSonTPIA_8 = format_MasterSonTPIA_8.readFeatures(json_MasterSonTPIA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_MasterSonTPIA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterSonTPIA_8.addFeatures(features_MasterSonTPIA_8);
var lyr_MasterSonTPIA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MasterSonTPIA_8, 
                style: style_MasterSonTPIA_8,
                interactive: true,
                title: '<img src="styles/legend/MasterSonTPIA_8.png" /> Master Son-T PIA'
            });
var format_LED_9 = new ol.format.GeoJSON();
var features_LED_9 = format_LED_9.readFeatures(json_LED_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_LED_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LED_9.addFeatures(features_LED_9);
var lyr_LED_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LED_9, 
                style: style_LED_9,
                interactive: true,
                title: '<img src="styles/legend/LED_9.png" /> LED'
            });
var format_IM70_10 = new ol.format.GeoJSON();
var features_IM70_10 = format_IM70_10.readFeatures(json_IM70_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_IM70_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IM70_10.addFeatures(features_IM70_10);
var lyr_IM70_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IM70_10, 
                style: style_IM70_10,
                interactive: true,
                title: '<img src="styles/legend/IM70_10.png" /> IM 70'
            });
var format_FortimoFastflex_11 = new ol.format.GeoJSON();
var features_FortimoFastflex_11 = format_FortimoFastflex_11.readFeatures(json_FortimoFastflex_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_FortimoFastflex_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FortimoFastflex_11.addFeatures(features_FortimoFastflex_11);
var lyr_FortimoFastflex_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FortimoFastflex_11, 
                style: style_FortimoFastflex_11,
                interactive: true,
                title: '<img src="styles/legend/FortimoFastflex_11.png" /> Fortimo Fastflex'
            });
var format_SHP_12 = new ol.format.GeoJSON();
var features_SHP_12 = format_SHP_12.readFeatures(json_SHP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_SHP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_12.addFeatures(features_SHP_12);
var lyr_SHP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SHP_12, 
                style: style_SHP_12,
                interactive: true,
                title: '<img src="styles/legend/SHP_12.png" /> SHP'
            });
var format_DPM_13 = new ol.format.GeoJSON();
var features_DPM_13 = format_DPM_13.readFeatures(json_DPM_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_DPM_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPM_13.addFeatures(features_DPM_13);
var lyr_DPM_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DPM_13, 
                style: style_DPM_13,
                interactive: true,
                title: '<img src="styles/legend/DPM_13.png" /> DPM'
            });
var format_priv_14 = new ol.format.GeoJSON();
var features_priv_14 = format_priv_14.readFeatures(json_priv_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_priv_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_priv_14.addFeatures(features_priv_14);
var lyr_priv_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_priv_14, 
                style: style_priv_14,
                interactive: true,
                title: '<img src="styles/legend/priv_14.png" /> privé'
            });
var format_routecommu_15 = new ol.format.GeoJSON();
var features_routecommu_15 = format_routecommu_15.readFeatures(json_routecommu_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_routecommu_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routecommu_15.addFeatures(features_routecommu_15);
var lyr_routecommu_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routecommu_15, 
                style: style_routecommu_15,
                interactive: true,
                title: '<img src="styles/legend/routecommu_15.png" /> route commu'
            });
var format_routedp_16 = new ol.format.GeoJSON();
var features_routedp_16 = format_routedp_16.readFeatures(json_routedp_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_routedp_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routedp_16.addFeatures(features_routedp_16);
var lyr_routedp_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routedp_16, 
                style: style_routedp_16,
                interactive: true,
                title: '<img src="styles/legend/routedp_16.png" /> route dép'
            });
var format_rseauplivialpublic_17 = new ol.format.GeoJSON();
var features_rseauplivialpublic_17 = format_rseauplivialpublic_17.readFeatures(json_rseauplivialpublic_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_rseauplivialpublic_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rseauplivialpublic_17.addFeatures(features_rseauplivialpublic_17);
var lyr_rseauplivialpublic_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rseauplivialpublic_17, 
                style: style_rseauplivialpublic_17,
                interactive: true,
                title: '<img src="styles/legend/rseauplivialpublic_17.png" /> réseau plivial public'
            });
var format_rseaupluvialpriv_18 = new ol.format.GeoJSON();
var features_rseaupluvialpriv_18 = format_rseaupluvialpriv_18.readFeatures(json_rseaupluvialpriv_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_rseaupluvialpriv_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rseaupluvialpriv_18.addFeatures(features_rseaupluvialpriv_18);
var lyr_rseaupluvialpriv_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rseaupluvialpriv_18, 
                style: style_rseaupluvialpriv_18,
                interactive: true,
                title: '<img src="styles/legend/rseaupluvialpriv_18.png" /> réseau pluvial privé'
            });
var format_Marquage_19 = new ol.format.GeoJSON();
var features_Marquage_19 = format_Marquage_19.readFeatures(json_Marquage_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Marquage_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marquage_19.addFeatures(features_Marquage_19);
var lyr_Marquage_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marquage_19, 
                style: style_Marquage_19,
                interactive: true,
                title: '<img src="styles/legend/Marquage_19.png" /> Marquage'
            });
var format_Sanstrottoires_20 = new ol.format.GeoJSON();
var features_Sanstrottoires_20 = format_Sanstrottoires_20.readFeatures(json_Sanstrottoires_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Sanstrottoires_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sanstrottoires_20.addFeatures(features_Sanstrottoires_20);
var lyr_Sanstrottoires_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sanstrottoires_20, 
                style: style_Sanstrottoires_20,
                interactive: true,
                title: '<img src="styles/legend/Sanstrottoires_20.png" /> Sans trottoires'
            });
var format_marquagefixe_21 = new ol.format.GeoJSON();
var features_marquagefixe_21 = format_marquagefixe_21.readFeatures(json_marquagefixe_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_marquagefixe_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_marquagefixe_21.addFeatures(features_marquagefixe_21);
var lyr_marquagefixe_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_marquagefixe_21, 
                style: style_marquagefixe_21,
                interactive: true,
                title: '<img src="styles/legend/marquagefixe_21.png" /> marquage fixe'
            });
var format_Avectrottoires_22 = new ol.format.GeoJSON();
var features_Avectrottoires_22 = format_Avectrottoires_22.readFeatures(json_Avectrottoires_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Avectrottoires_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avectrottoires_22.addFeatures(features_Avectrottoires_22);
var lyr_Avectrottoires_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Avectrottoires_22, 
                style: style_Avectrottoires_22,
                interactive: true,
                title: '<img src="styles/legend/Avectrottoires_22.png" /> Avec trottoires'
            });
var format_Placeremorquebateau_23 = new ol.format.GeoJSON();
var features_Placeremorquebateau_23 = format_Placeremorquebateau_23.readFeatures(json_Placeremorquebateau_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Placeremorquebateau_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Placeremorquebateau_23.addFeatures(features_Placeremorquebateau_23);
var lyr_Placeremorquebateau_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Placeremorquebateau_23, 
                style: style_Placeremorquebateau_23,
                interactive: true,
                title: '<img src="styles/legend/Placeremorquebateau_23.png" /> Place remorque bateau'
            });
var format_PlaceGIC_24 = new ol.format.GeoJSON();
var features_PlaceGIC_24 = format_PlaceGIC_24.readFeatures(json_PlaceGIC_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_PlaceGIC_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlaceGIC_24.addFeatures(features_PlaceGIC_24);
var lyr_PlaceGIC_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PlaceGIC_24, 
                style: style_PlaceGIC_24,
                interactive: true,
                title: '<img src="styles/legend/PlaceGIC_24.png" /> Place GIC'
            });
var format_livraison_25 = new ol.format.GeoJSON();
var features_livraison_25 = format_livraison_25.readFeatures(json_livraison_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_livraison_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_livraison_25.addFeatures(features_livraison_25);
var lyr_livraison_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_livraison_25, 
                style: style_livraison_25,
                interactive: true,
                title: '<img src="styles/legend/livraison_25.png" /> livraison'
            });
var format_emplacementsminute_26 = new ol.format.GeoJSON();
var features_emplacementsminute_26 = format_emplacementsminute_26.readFeatures(json_emplacementsminute_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_emplacementsminute_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_emplacementsminute_26.addFeatures(features_emplacementsminute_26);
var lyr_emplacementsminute_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_emplacementsminute_26, 
                style: style_emplacementsminute_26,
                interactive: true,
                title: '<img src="styles/legend/emplacementsminute_26.png" /> emplacements minute'
            });
var format_Rechargevoitureelectrique_27 = new ol.format.GeoJSON();
var features_Rechargevoitureelectrique_27 = format_Rechargevoitureelectrique_27.readFeatures(json_Rechargevoitureelectrique_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Rechargevoitureelectrique_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rechargevoitureelectrique_27.addFeatures(features_Rechargevoitureelectrique_27);
var lyr_Rechargevoitureelectrique_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rechargevoitureelectrique_27, 
                style: style_Rechargevoitureelectrique_27,
                interactive: true,
                title: '<img src="styles/legend/Rechargevoitureelectrique_27.png" /> Recharge voiture electrique'
            });
var format_RouteUse_28 = new ol.format.GeoJSON();
var features_RouteUse_28 = format_RouteUse_28.readFeatures(json_RouteUse_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_RouteUse_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteUse_28.addFeatures(features_RouteUse_28);
var lyr_RouteUse_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteUse_28, 
                style: style_RouteUse_28,
                interactive: true,
                title: '<img src="styles/legend/RouteUse_28.png" /> Route Usée'
            });
var format_Routeneuves_29 = new ol.format.GeoJSON();
var features_Routeneuves_29 = format_Routeneuves_29.readFeatures(json_Routeneuves_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Routeneuves_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routeneuves_29.addFeatures(features_Routeneuves_29);
var lyr_Routeneuves_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Routeneuves_29, 
                style: style_Routeneuves_29,
                interactive: true,
                title: '<img src="styles/legend/Routeneuves_29.png" /> Route neuves'
            });
var format_RouteCommeNeuve_30 = new ol.format.GeoJSON();
var features_RouteCommeNeuve_30 = format_RouteCommeNeuve_30.readFeatures(json_RouteCommeNeuve_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_RouteCommeNeuve_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteCommeNeuve_30.addFeatures(features_RouteCommeNeuve_30);
var lyr_RouteCommeNeuve_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteCommeNeuve_30, 
                style: style_RouteCommeNeuve_30,
                interactive: true,
                title: '<img src="styles/legend/RouteCommeNeuve_30.png" /> Route Comme Neuve'
            });
var format_RoutesAnciennes_31 = new ol.format.GeoJSON();
var features_RoutesAnciennes_31 = format_RoutesAnciennes_31.readFeatures(json_RoutesAnciennes_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_RoutesAnciennes_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesAnciennes_31.addFeatures(features_RoutesAnciennes_31);
var lyr_RoutesAnciennes_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoutesAnciennes_31, 
                style: style_RoutesAnciennes_31,
                interactive: true,
                title: '<img src="styles/legend/RoutesAnciennes_31.png" /> Routes Anciennes'
            });
var group_tatroutes = new ol.layer.Group({
                                layers: [lyr_RouteUse_28,lyr_Routeneuves_29,lyr_RouteCommeNeuve_30,lyr_RoutesAnciennes_31,],
                                title: "état routes"});
var group_stationnements = new ol.layer.Group({
                                layers: [lyr_Placeremorquebateau_23,lyr_PlaceGIC_24,lyr_livraison_25,lyr_emplacementsminute_26,lyr_Rechargevoitureelectrique_27,],
                                title: "stationnements"});
var group_typotrottoirs = new ol.layer.Group({
                                layers: [lyr_Marquage_19,lyr_Sanstrottoires_20,lyr_marquagefixe_21,lyr_Avectrottoires_22,],
                                title: "typo trottoirs"});
var group_rseaupluvial = new ol.layer.Group({
                                layers: [lyr_rseauplivialpublic_17,lyr_rseaupluvialpriv_18,],
                                title: "réseau pluvial"});
var group_propritaires = new ol.layer.Group({
                                layers: [lyr_DPM_13,lyr_priv_14,lyr_routecommu_15,lyr_routedp_16,],
                                title: "propriétaires"});
var group_clairagepublic = new ol.layer.Group({
                                layers: [lyr_MasterColour_6,lyr_MBF_7,lyr_MasterSonTPIA_8,lyr_LED_9,lyr_IM70_10,lyr_FortimoFastflex_11,lyr_SHP_12,],
                                title: "éclairage public"});
var group_Ajoutvoirie = new ol.layer.Group({
                                layers: [lyr_ajout2016_3,lyr_ajout2019_4,lyr_ajout2015_5,],
                                title: "Ajout voirie"});
var group_dplacementsdoux = new ol.layer.Group({
                                layers: [lyr_sensinterdit_0,lyr_Pistecyclablevraie_1,lyr_Zone30_2,],
                                title: "déplacements doux"});

lyr_sensinterdit_0.setVisible(true);lyr_Pistecyclablevraie_1.setVisible(true);lyr_Zone30_2.setVisible(true);lyr_ajout2016_3.setVisible(true);lyr_ajout2019_4.setVisible(true);lyr_ajout2015_5.setVisible(true);lyr_MasterColour_6.setVisible(true);lyr_MBF_7.setVisible(true);lyr_MasterSonTPIA_8.setVisible(true);lyr_LED_9.setVisible(true);lyr_IM70_10.setVisible(true);lyr_FortimoFastflex_11.setVisible(true);lyr_SHP_12.setVisible(true);lyr_DPM_13.setVisible(true);lyr_priv_14.setVisible(true);lyr_routecommu_15.setVisible(true);lyr_routedp_16.setVisible(true);lyr_rseauplivialpublic_17.setVisible(true);lyr_rseaupluvialpriv_18.setVisible(true);lyr_Marquage_19.setVisible(true);lyr_Sanstrottoires_20.setVisible(true);lyr_marquagefixe_21.setVisible(true);lyr_Avectrottoires_22.setVisible(true);lyr_Placeremorquebateau_23.setVisible(true);lyr_PlaceGIC_24.setVisible(true);lyr_livraison_25.setVisible(true);lyr_emplacementsminute_26.setVisible(true);lyr_Rechargevoitureelectrique_27.setVisible(true);lyr_RouteUse_28.setVisible(true);lyr_Routeneuves_29.setVisible(true);lyr_RouteCommeNeuve_30.setVisible(true);lyr_RoutesAnciennes_31.setVisible(true);
var layersList = [group_dplacementsdoux,group_Ajoutvoirie,group_clairagepublic,group_propritaires,group_rseaupluvial,group_typotrottoirs,group_stationnements,group_tatroutes];
lyr_sensinterdit_0.set('fieldAliases', {'id': 'id', });
lyr_Pistecyclablevraie_1.set('fieldAliases', {'id': 'id', });
lyr_Zone30_2.set('fieldAliases', {'id': 'id', });
lyr_ajout2016_3.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NOM_1_G': 'NOM_1_G', 'NOM_1_D': 'NOM_1_D', 'NOM_2_G': 'NOM_2_G', 'NOM_2_D': 'NOM_2_D', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_VOIES': 'NB_VOIES', 'LARGEUR': 'LARGEUR', 'IT_VERT': 'IT_VERT', 'PRIVE': 'PRIVE', 'SENS': 'SENS', 'CYCLABLE': 'CYCLABLE', 'BUS': 'BUS', 'URBAIN': 'URBAIN', 'VIT_MOY_VL': 'VIT_MOY_VL', 'ACCES_VL': 'ACCES_VL', 'ACCES_PED': 'ACCES_PED', 'FERMETURE': 'FERMETURE', 'NAT_RESTR': 'NAT_RESTR', 'RESTR_H': 'RESTR_H', 'RESTR_P': 'RESTR_P', 'RESTR_PPE': 'RESTR_PPE', 'RESTR_LAR': 'RESTR_LAR', 'RESTR_LON': 'RESTR_LON', 'RESTR_MAT': 'RESTR_MAT', 'BORNEDEB_G': 'BORNEDEB_G', 'BORNEDEB_D': 'BORNEDEB_D', 'BORNEFIN_G': 'BORNEFIN_G', 'BORNEFIN_D': 'BORNEFIN_D', 'INSEECOM_G': 'INSEECOM_G', 'INSEECOM_D': 'INSEECOM_D', 'TYP_ADRES': 'TYP_ADRES', 'ALIAS_G': 'ALIAS_G', 'ALIAS_D': 'ALIAS_D', 'C_POSTAL_G': 'C_POSTAL_G', 'C_POSTAL_D': 'C_POSTAL_D', 'DATE_SERV': 'DATE_SERV', 'ID_VOIE_G': 'ID_VOIE_G', 'ID_VOIE_D': 'ID_VOIE_D', 'ID_RN': 'ID_RN', 'NUMERO': 'NUMERO', 'NUM_EUROP': 'NUM_EUROP', 'CL_ADMIN': 'CL_ADMIN', 'GESTION': 'GESTION', 'TOPONYME': 'TOPONYME', 'ITI_CYCL': 'ITI_CYCL', 'VOIE_VERTE': 'VOIE_VERTE', });
lyr_ajout2019_4.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NOM_1_G': 'NOM_1_G', 'NOM_1_D': 'NOM_1_D', 'NOM_2_G': 'NOM_2_G', 'NOM_2_D': 'NOM_2_D', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_VOIES': 'NB_VOIES', 'LARGEUR': 'LARGEUR', 'IT_VERT': 'IT_VERT', 'PRIVE': 'PRIVE', 'SENS': 'SENS', 'CYCLABLE': 'CYCLABLE', 'BUS': 'BUS', 'URBAIN': 'URBAIN', 'VIT_MOY_VL': 'VIT_MOY_VL', 'ACCES_VL': 'ACCES_VL', 'ACCES_PED': 'ACCES_PED', 'FERMETURE': 'FERMETURE', 'NAT_RESTR': 'NAT_RESTR', 'RESTR_H': 'RESTR_H', 'RESTR_P': 'RESTR_P', 'RESTR_PPE': 'RESTR_PPE', 'RESTR_LAR': 'RESTR_LAR', 'RESTR_LON': 'RESTR_LON', 'RESTR_MAT': 'RESTR_MAT', 'BORNEDEB_G': 'BORNEDEB_G', 'BORNEDEB_D': 'BORNEDEB_D', 'BORNEFIN_G': 'BORNEFIN_G', 'BORNEFIN_D': 'BORNEFIN_D', 'INSEECOM_G': 'INSEECOM_G', 'INSEECOM_D': 'INSEECOM_D', 'TYP_ADRES': 'TYP_ADRES', 'ALIAS_G': 'ALIAS_G', 'ALIAS_D': 'ALIAS_D', 'C_POSTAL_G': 'C_POSTAL_G', 'C_POSTAL_D': 'C_POSTAL_D', 'DATE_SERV': 'DATE_SERV', 'ID_VOIE_G': 'ID_VOIE_G', 'ID_VOIE_D': 'ID_VOIE_D', 'ID_RN': 'ID_RN', 'NUMERO': 'NUMERO', 'NUM_EUROP': 'NUM_EUROP', 'CL_ADMIN': 'CL_ADMIN', 'GESTION': 'GESTION', 'TOPONYME': 'TOPONYME', 'ITI_CYCL': 'ITI_CYCL', 'VOIE_VERTE': 'VOIE_VERTE', });
lyr_ajout2015_5.set('fieldAliases', {'id': 'id', });
lyr_MasterColour_6.set('fieldAliases', {'id': 'id', });
lyr_MBF_7.set('fieldAliases', {'id': 'id', });
lyr_MasterSonTPIA_8.set('fieldAliases', {'id': 'id', });
lyr_LED_9.set('fieldAliases', {'id': 'id', });
lyr_IM70_10.set('fieldAliases', {'id': 'id', });
lyr_FortimoFastflex_11.set('fieldAliases', {'id': 'id', });
lyr_SHP_12.set('fieldAliases', {'id': 'id', });
lyr_DPM_13.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NOM_1_G': 'NOM_1_G', 'NOM_1_D': 'NOM_1_D', 'NOM_2_G': 'NOM_2_G', 'NOM_2_D': 'NOM_2_D', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_VOIES': 'NB_VOIES', 'LARGEUR': 'LARGEUR', 'IT_VERT': 'IT_VERT', 'PRIVE': 'PRIVE', 'SENS': 'SENS', 'CYCLABLE': 'CYCLABLE', 'BUS': 'BUS', 'URBAIN': 'URBAIN', 'VIT_MOY_VL': 'VIT_MOY_VL', 'ACCES_VL': 'ACCES_VL', 'ACCES_PED': 'ACCES_PED', 'FERMETURE': 'FERMETURE', 'NAT_RESTR': 'NAT_RESTR', 'RESTR_H': 'RESTR_H', 'RESTR_P': 'RESTR_P', 'RESTR_PPE': 'RESTR_PPE', 'RESTR_LAR': 'RESTR_LAR', 'RESTR_LON': 'RESTR_LON', 'RESTR_MAT': 'RESTR_MAT', 'BORNEDEB_G': 'BORNEDEB_G', 'BORNEDEB_D': 'BORNEDEB_D', 'BORNEFIN_G': 'BORNEFIN_G', 'BORNEFIN_D': 'BORNEFIN_D', 'INSEECOM_G': 'INSEECOM_G', 'INSEECOM_D': 'INSEECOM_D', 'TYP_ADRES': 'TYP_ADRES', 'ALIAS_G': 'ALIAS_G', 'ALIAS_D': 'ALIAS_D', 'C_POSTAL_G': 'C_POSTAL_G', 'C_POSTAL_D': 'C_POSTAL_D', 'DATE_SERV': 'DATE_SERV', 'ID_VOIE_G': 'ID_VOIE_G', 'ID_VOIE_D': 'ID_VOIE_D', 'ID_RN': 'ID_RN', 'ID_ITI': 'ID_ITI', 'NUMERO': 'NUMERO', 'NUM_EUROP': 'NUM_EUROP', 'CL_ADMIN': 'CL_ADMIN', 'GESTION': 'GESTION', 'TOPONYME': 'TOPONYME', 'ITI_CYCL': 'ITI_CYCL', 'VOIE_VERTE': 'VOIE_VERTE', 'NATURE_ITI': 'NATURE_ITI', 'NOM_ITI': 'NOM_ITI', });
lyr_priv_14.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NOM_1_G': 'NOM_1_G', 'NOM_1_D': 'NOM_1_D', 'NOM_2_G': 'NOM_2_G', 'NOM_2_D': 'NOM_2_D', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_VOIES': 'NB_VOIES', 'LARGEUR': 'LARGEUR', 'IT_VERT': 'IT_VERT', 'PRIVE': 'PRIVE', 'SENS': 'SENS', 'CYCLABLE': 'CYCLABLE', 'BUS': 'BUS', 'URBAIN': 'URBAIN', 'VIT_MOY_VL': 'VIT_MOY_VL', 'ACCES_VL': 'ACCES_VL', 'ACCES_PED': 'ACCES_PED', 'FERMETURE': 'FERMETURE', 'NAT_RESTR': 'NAT_RESTR', 'RESTR_H': 'RESTR_H', 'RESTR_P': 'RESTR_P', 'RESTR_PPE': 'RESTR_PPE', 'RESTR_LAR': 'RESTR_LAR', 'RESTR_LON': 'RESTR_LON', 'RESTR_MAT': 'RESTR_MAT', 'BORNEDEB_G': 'BORNEDEB_G', 'BORNEDEB_D': 'BORNEDEB_D', 'BORNEFIN_G': 'BORNEFIN_G', 'BORNEFIN_D': 'BORNEFIN_D', 'INSEECOM_G': 'INSEECOM_G', 'INSEECOM_D': 'INSEECOM_D', 'TYP_ADRES': 'TYP_ADRES', 'ALIAS_G': 'ALIAS_G', 'ALIAS_D': 'ALIAS_D', 'C_POSTAL_G': 'C_POSTAL_G', 'C_POSTAL_D': 'C_POSTAL_D', 'DATE_SERV': 'DATE_SERV', 'ID_VOIE_G': 'ID_VOIE_G', 'ID_VOIE_D': 'ID_VOIE_D', 'ID_RN': 'ID_RN', 'ID_ITI': 'ID_ITI', 'NUMERO': 'NUMERO', 'NUM_EUROP': 'NUM_EUROP', 'CL_ADMIN': 'CL_ADMIN', 'GESTION': 'GESTION', 'TOPONYME': 'TOPONYME', 'ITI_CYCL': 'ITI_CYCL', 'VOIE_VERTE': 'VOIE_VERTE', 'NATURE_ITI': 'NATURE_ITI', 'NOM_ITI': 'NOM_ITI', });
lyr_routecommu_15.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NOM_1_G': 'NOM_1_G', 'NOM_1_D': 'NOM_1_D', 'NOM_2_G': 'NOM_2_G', 'NOM_2_D': 'NOM_2_D', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_VOIES': 'NB_VOIES', 'LARGEUR': 'LARGEUR', 'IT_VERT': 'IT_VERT', 'PRIVE': 'PRIVE', 'SENS': 'SENS', 'CYCLABLE': 'CYCLABLE', 'BUS': 'BUS', 'URBAIN': 'URBAIN', 'VIT_MOY_VL': 'VIT_MOY_VL', 'ACCES_VL': 'ACCES_VL', 'ACCES_PED': 'ACCES_PED', 'FERMETURE': 'FERMETURE', 'NAT_RESTR': 'NAT_RESTR', 'RESTR_H': 'RESTR_H', 'RESTR_P': 'RESTR_P', 'RESTR_PPE': 'RESTR_PPE', 'RESTR_LAR': 'RESTR_LAR', 'RESTR_LON': 'RESTR_LON', 'RESTR_MAT': 'RESTR_MAT', 'BORNEDEB_G': 'BORNEDEB_G', 'BORNEDEB_D': 'BORNEDEB_D', 'BORNEFIN_G': 'BORNEFIN_G', 'BORNEFIN_D': 'BORNEFIN_D', 'INSEECOM_G': 'INSEECOM_G', 'INSEECOM_D': 'INSEECOM_D', 'TYP_ADRES': 'TYP_ADRES', 'ALIAS_G': 'ALIAS_G', 'ALIAS_D': 'ALIAS_D', 'C_POSTAL_G': 'C_POSTAL_G', 'C_POSTAL_D': 'C_POSTAL_D', 'DATE_SERV': 'DATE_SERV', 'ID_VOIE_G': 'ID_VOIE_G', 'ID_VOIE_D': 'ID_VOIE_D', 'ID_RN': 'ID_RN', 'ID_ITI': 'ID_ITI', 'NUMERO': 'NUMERO', 'NUM_EUROP': 'NUM_EUROP', 'CL_ADMIN': 'CL_ADMIN', 'GESTION': 'GESTION', 'TOPONYME': 'TOPONYME', 'ITI_CYCL': 'ITI_CYCL', 'VOIE_VERTE': 'VOIE_VERTE', 'NATURE_ITI': 'NATURE_ITI', 'NOM_ITI': 'NOM_ITI', });
lyr_routedp_16.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NOM_1_G': 'NOM_1_G', 'NOM_1_D': 'NOM_1_D', 'NOM_2_G': 'NOM_2_G', 'NOM_2_D': 'NOM_2_D', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_VOIES': 'NB_VOIES', 'LARGEUR': 'LARGEUR', 'IT_VERT': 'IT_VERT', 'PRIVE': 'PRIVE', 'SENS': 'SENS', 'CYCLABLE': 'CYCLABLE', 'BUS': 'BUS', 'URBAIN': 'URBAIN', 'VIT_MOY_VL': 'VIT_MOY_VL', 'ACCES_VL': 'ACCES_VL', 'ACCES_PED': 'ACCES_PED', 'FERMETURE': 'FERMETURE', 'NAT_RESTR': 'NAT_RESTR', 'RESTR_H': 'RESTR_H', 'RESTR_P': 'RESTR_P', 'RESTR_PPE': 'RESTR_PPE', 'RESTR_LAR': 'RESTR_LAR', 'RESTR_LON': 'RESTR_LON', 'RESTR_MAT': 'RESTR_MAT', 'BORNEDEB_G': 'BORNEDEB_G', 'BORNEDEB_D': 'BORNEDEB_D', 'BORNEFIN_G': 'BORNEFIN_G', 'BORNEFIN_D': 'BORNEFIN_D', 'INSEECOM_G': 'INSEECOM_G', 'INSEECOM_D': 'INSEECOM_D', 'TYP_ADRES': 'TYP_ADRES', 'ALIAS_G': 'ALIAS_G', 'ALIAS_D': 'ALIAS_D', 'C_POSTAL_G': 'C_POSTAL_G', 'C_POSTAL_D': 'C_POSTAL_D', 'DATE_SERV': 'DATE_SERV', 'ID_VOIE_G': 'ID_VOIE_G', 'ID_VOIE_D': 'ID_VOIE_D', 'ID_RN': 'ID_RN', 'ID_ITI': 'ID_ITI', 'NUMERO': 'NUMERO', 'NUM_EUROP': 'NUM_EUROP', 'CL_ADMIN': 'CL_ADMIN', 'GESTION': 'GESTION', 'TOPONYME': 'TOPONYME', 'ITI_CYCL': 'ITI_CYCL', 'VOIE_VERTE': 'VOIE_VERTE', 'NATURE_ITI': 'NATURE_ITI', 'NOM_ITI': 'NOM_ITI', });
lyr_rseauplivialpublic_17.set('fieldAliases', {'id': 'id', });
lyr_rseaupluvialpriv_18.set('fieldAliases', {'id': 'id', });
lyr_Marquage_19.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NOM_1_G': 'NOM_1_G', 'NOM_1_D': 'NOM_1_D', 'NOM_2_G': 'NOM_2_G', 'NOM_2_D': 'NOM_2_D', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_VOIES': 'NB_VOIES', 'LARGEUR': 'LARGEUR', 'IT_VERT': 'IT_VERT', 'PRIVE': 'PRIVE', 'SENS': 'SENS', 'CYCLABLE': 'CYCLABLE', 'BUS': 'BUS', 'URBAIN': 'URBAIN', 'VIT_MOY_VL': 'VIT_MOY_VL', 'ACCES_VL': 'ACCES_VL', 'ACCES_PED': 'ACCES_PED', 'FERMETURE': 'FERMETURE', 'NAT_RESTR': 'NAT_RESTR', 'RESTR_H': 'RESTR_H', 'RESTR_P': 'RESTR_P', 'RESTR_PPE': 'RESTR_PPE', 'RESTR_LAR': 'RESTR_LAR', 'RESTR_LON': 'RESTR_LON', 'RESTR_MAT': 'RESTR_MAT', 'BORNEDEB_G': 'BORNEDEB_G', 'BORNEDEB_D': 'BORNEDEB_D', 'BORNEFIN_G': 'BORNEFIN_G', 'BORNEFIN_D': 'BORNEFIN_D', 'INSEECOM_G': 'INSEECOM_G', 'INSEECOM_D': 'INSEECOM_D', 'TYP_ADRES': 'TYP_ADRES', 'ALIAS_G': 'ALIAS_G', 'ALIAS_D': 'ALIAS_D', 'C_POSTAL_G': 'C_POSTAL_G', 'C_POSTAL_D': 'C_POSTAL_D', 'DATE_SERV': 'DATE_SERV', 'ID_VOIE_G': 'ID_VOIE_G', 'ID_VOIE_D': 'ID_VOIE_D', 'ID_RN': 'ID_RN', 'ID_ITI': 'ID_ITI', 'NUMERO': 'NUMERO', 'NUM_EUROP': 'NUM_EUROP', 'CL_ADMIN': 'CL_ADMIN', 'GESTION': 'GESTION', 'TOPONYME': 'TOPONYME', 'ITI_CYCL': 'ITI_CYCL', 'VOIE_VERTE': 'VOIE_VERTE', 'NATURE_ITI': 'NATURE_ITI', 'NOM_ITI': 'NOM_ITI', });
lyr_Sanstrottoires_20.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NOM_1_G': 'NOM_1_G', 'NOM_1_D': 'NOM_1_D', 'NOM_2_G': 'NOM_2_G', 'NOM_2_D': 'NOM_2_D', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_VOIES': 'NB_VOIES', 'LARGEUR': 'LARGEUR', 'IT_VERT': 'IT_VERT', 'PRIVE': 'PRIVE', 'SENS': 'SENS', 'CYCLABLE': 'CYCLABLE', 'BUS': 'BUS', 'URBAIN': 'URBAIN', 'VIT_MOY_VL': 'VIT_MOY_VL', 'ACCES_VL': 'ACCES_VL', 'ACCES_PED': 'ACCES_PED', 'FERMETURE': 'FERMETURE', 'NAT_RESTR': 'NAT_RESTR', 'RESTR_H': 'RESTR_H', 'RESTR_P': 'RESTR_P', 'RESTR_PPE': 'RESTR_PPE', 'RESTR_LAR': 'RESTR_LAR', 'RESTR_LON': 'RESTR_LON', 'RESTR_MAT': 'RESTR_MAT', 'BORNEDEB_G': 'BORNEDEB_G', 'BORNEDEB_D': 'BORNEDEB_D', 'BORNEFIN_G': 'BORNEFIN_G', 'BORNEFIN_D': 'BORNEFIN_D', 'INSEECOM_G': 'INSEECOM_G', 'INSEECOM_D': 'INSEECOM_D', 'TYP_ADRES': 'TYP_ADRES', 'ALIAS_G': 'ALIAS_G', 'ALIAS_D': 'ALIAS_D', 'C_POSTAL_G': 'C_POSTAL_G', 'C_POSTAL_D': 'C_POSTAL_D', 'DATE_SERV': 'DATE_SERV', 'ID_VOIE_G': 'ID_VOIE_G', 'ID_VOIE_D': 'ID_VOIE_D', 'ID_RN': 'ID_RN', 'ID_ITI': 'ID_ITI', 'NUMERO': 'NUMERO', 'NUM_EUROP': 'NUM_EUROP', 'CL_ADMIN': 'CL_ADMIN', 'GESTION': 'GESTION', 'TOPONYME': 'TOPONYME', 'ITI_CYCL': 'ITI_CYCL', 'VOIE_VERTE': 'VOIE_VERTE', 'NATURE_ITI': 'NATURE_ITI', 'NOM_ITI': 'NOM_ITI', });
lyr_marquagefixe_21.set('fieldAliases', {'id': 'id', });
lyr_Avectrottoires_22.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NOM_1_G': 'NOM_1_G', 'NOM_1_D': 'NOM_1_D', 'NOM_2_G': 'NOM_2_G', 'NOM_2_D': 'NOM_2_D', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_VOIES': 'NB_VOIES', 'LARGEUR': 'LARGEUR', 'IT_VERT': 'IT_VERT', 'PRIVE': 'PRIVE', 'SENS': 'SENS', 'CYCLABLE': 'CYCLABLE', 'BUS': 'BUS', 'URBAIN': 'URBAIN', 'VIT_MOY_VL': 'VIT_MOY_VL', 'ACCES_VL': 'ACCES_VL', 'ACCES_PED': 'ACCES_PED', 'FERMETURE': 'FERMETURE', 'NAT_RESTR': 'NAT_RESTR', 'RESTR_H': 'RESTR_H', 'RESTR_P': 'RESTR_P', 'RESTR_PPE': 'RESTR_PPE', 'RESTR_LAR': 'RESTR_LAR', 'RESTR_LON': 'RESTR_LON', 'RESTR_MAT': 'RESTR_MAT', 'BORNEDEB_G': 'BORNEDEB_G', 'BORNEDEB_D': 'BORNEDEB_D', 'BORNEFIN_G': 'BORNEFIN_G', 'BORNEFIN_D': 'BORNEFIN_D', 'INSEECOM_G': 'INSEECOM_G', 'INSEECOM_D': 'INSEECOM_D', 'TYP_ADRES': 'TYP_ADRES', 'ALIAS_G': 'ALIAS_G', 'ALIAS_D': 'ALIAS_D', 'C_POSTAL_G': 'C_POSTAL_G', 'C_POSTAL_D': 'C_POSTAL_D', 'DATE_SERV': 'DATE_SERV', 'ID_VOIE_G': 'ID_VOIE_G', 'ID_VOIE_D': 'ID_VOIE_D', 'ID_RN': 'ID_RN', 'ID_ITI': 'ID_ITI', 'NUMERO': 'NUMERO', 'NUM_EUROP': 'NUM_EUROP', 'CL_ADMIN': 'CL_ADMIN', 'GESTION': 'GESTION', 'TOPONYME': 'TOPONYME', 'ITI_CYCL': 'ITI_CYCL', 'VOIE_VERTE': 'VOIE_VERTE', 'NATURE_ITI': 'NATURE_ITI', 'NOM_ITI': 'NOM_ITI', });
lyr_Placeremorquebateau_23.set('fieldAliases', {'id': 'id', });
lyr_PlaceGIC_24.set('fieldAliases', {'id': 'id', });
lyr_livraison_25.set('fieldAliases', {'id': 'id', });
lyr_emplacementsminute_26.set('fieldAliases', {'id': 'id', });
lyr_Rechargevoitureelectrique_27.set('fieldAliases', {'id': 'id', });
lyr_RouteUse_28.set('fieldAliases', {'id': 'id', });
lyr_Routeneuves_29.set('fieldAliases', {'id': 'id', });
lyr_RouteCommeNeuve_30.set('fieldAliases', {'id': 'id', });
lyr_RoutesAnciennes_31.set('fieldAliases', {'id': 'id', });
lyr_sensinterdit_0.set('fieldImages', {'id': '', });
lyr_Pistecyclablevraie_1.set('fieldImages', {'id': '', });
lyr_Zone30_2.set('fieldImages', {'id': '', });
lyr_ajout2016_3.set('fieldImages', {'ID': '', 'NATURE': '', 'NOM_1_G': '', 'NOM_1_D': '', 'NOM_2_G': '', 'NOM_2_D': '', 'IMPORTANCE': '', 'FICTIF': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'PREC_PLANI': '', 'PREC_ALTI': '', 'NB_VOIES': '', 'LARGEUR': '', 'IT_VERT': '', 'PRIVE': '', 'SENS': '', 'CYCLABLE': '', 'BUS': '', 'URBAIN': '', 'VIT_MOY_VL': '', 'ACCES_VL': '', 'ACCES_PED': '', 'FERMETURE': '', 'NAT_RESTR': '', 'RESTR_H': '', 'RESTR_P': '', 'RESTR_PPE': '', 'RESTR_LAR': '', 'RESTR_LON': '', 'RESTR_MAT': '', 'BORNEDEB_G': '', 'BORNEDEB_D': '', 'BORNEFIN_G': '', 'BORNEFIN_D': '', 'INSEECOM_G': '', 'INSEECOM_D': '', 'TYP_ADRES': '', 'ALIAS_G': '', 'ALIAS_D': '', 'C_POSTAL_G': '', 'C_POSTAL_D': '', 'DATE_SERV': '', 'ID_VOIE_G': '', 'ID_VOIE_D': '', 'ID_RN': '', 'NUMERO': '', 'NUM_EUROP': '', 'CL_ADMIN': '', 'GESTION': '', 'TOPONYME': '', 'ITI_CYCL': '', 'VOIE_VERTE': '', });
lyr_ajout2019_4.set('fieldImages', {'ID': '', 'NATURE': '', 'NOM_1_G': '', 'NOM_1_D': '', 'NOM_2_G': '', 'NOM_2_D': '', 'IMPORTANCE': '', 'FICTIF': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'PREC_PLANI': '', 'PREC_ALTI': '', 'NB_VOIES': '', 'LARGEUR': '', 'IT_VERT': '', 'PRIVE': '', 'SENS': '', 'CYCLABLE': '', 'BUS': '', 'URBAIN': '', 'VIT_MOY_VL': '', 'ACCES_VL': '', 'ACCES_PED': '', 'FERMETURE': '', 'NAT_RESTR': '', 'RESTR_H': '', 'RESTR_P': '', 'RESTR_PPE': '', 'RESTR_LAR': '', 'RESTR_LON': '', 'RESTR_MAT': '', 'BORNEDEB_G': '', 'BORNEDEB_D': '', 'BORNEFIN_G': '', 'BORNEFIN_D': '', 'INSEECOM_G': '', 'INSEECOM_D': '', 'TYP_ADRES': '', 'ALIAS_G': '', 'ALIAS_D': '', 'C_POSTAL_G': '', 'C_POSTAL_D': '', 'DATE_SERV': '', 'ID_VOIE_G': '', 'ID_VOIE_D': '', 'ID_RN': '', 'NUMERO': '', 'NUM_EUROP': '', 'CL_ADMIN': '', 'GESTION': '', 'TOPONYME': '', 'ITI_CYCL': '', 'VOIE_VERTE': '', });
lyr_ajout2015_5.set('fieldImages', {'id': '', });
lyr_MasterColour_6.set('fieldImages', {'id': '', });
lyr_MBF_7.set('fieldImages', {'id': '', });
lyr_MasterSonTPIA_8.set('fieldImages', {'id': '', });
lyr_LED_9.set('fieldImages', {'id': '', });
lyr_IM70_10.set('fieldImages', {'id': '', });
lyr_FortimoFastflex_11.set('fieldImages', {'id': '', });
lyr_SHP_12.set('fieldImages', {'id': '', });
lyr_DPM_13.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NOM_1_G': 'TextEdit', 'NOM_1_D': 'TextEdit', 'NOM_2_G': 'TextEdit', 'NOM_2_D': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'FICTIF': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_VOIES': 'Range', 'LARGEUR': 'TextEdit', 'IT_VERT': 'TextEdit', 'PRIVE': 'TextEdit', 'SENS': 'TextEdit', 'CYCLABLE': 'TextEdit', 'BUS': 'TextEdit', 'URBAIN': 'TextEdit', 'VIT_MOY_VL': 'Range', 'ACCES_VL': 'TextEdit', 'ACCES_PED': 'TextEdit', 'FERMETURE': 'TextEdit', 'NAT_RESTR': 'TextEdit', 'RESTR_H': 'TextEdit', 'RESTR_P': 'TextEdit', 'RESTR_PPE': 'TextEdit', 'RESTR_LAR': 'TextEdit', 'RESTR_LON': 'TextEdit', 'RESTR_MAT': 'TextEdit', 'BORNEDEB_G': 'TextEdit', 'BORNEDEB_D': 'TextEdit', 'BORNEFIN_G': 'TextEdit', 'BORNEFIN_D': 'TextEdit', 'INSEECOM_G': 'TextEdit', 'INSEECOM_D': 'TextEdit', 'TYP_ADRES': 'TextEdit', 'ALIAS_G': 'TextEdit', 'ALIAS_D': 'TextEdit', 'C_POSTAL_G': 'TextEdit', 'C_POSTAL_D': 'TextEdit', 'DATE_SERV': 'DateTime', 'ID_VOIE_G': 'TextEdit', 'ID_VOIE_D': 'TextEdit', 'ID_RN': 'TextEdit', 'ID_ITI': 'TextEdit', 'NUMERO': 'TextEdit', 'NUM_EUROP': 'TextEdit', 'CL_ADMIN': 'TextEdit', 'GESTION': 'TextEdit', 'TOPONYME': 'TextEdit', 'ITI_CYCL': 'TextEdit', 'VOIE_VERTE': 'TextEdit', 'NATURE_ITI': 'TextEdit', 'NOM_ITI': 'TextEdit', });
lyr_priv_14.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NOM_1_G': 'TextEdit', 'NOM_1_D': 'TextEdit', 'NOM_2_G': 'TextEdit', 'NOM_2_D': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'FICTIF': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_VOIES': 'Range', 'LARGEUR': 'TextEdit', 'IT_VERT': 'TextEdit', 'PRIVE': 'TextEdit', 'SENS': 'TextEdit', 'CYCLABLE': 'TextEdit', 'BUS': 'TextEdit', 'URBAIN': 'TextEdit', 'VIT_MOY_VL': 'Range', 'ACCES_VL': 'TextEdit', 'ACCES_PED': 'TextEdit', 'FERMETURE': 'TextEdit', 'NAT_RESTR': 'TextEdit', 'RESTR_H': 'TextEdit', 'RESTR_P': 'TextEdit', 'RESTR_PPE': 'TextEdit', 'RESTR_LAR': 'TextEdit', 'RESTR_LON': 'TextEdit', 'RESTR_MAT': 'TextEdit', 'BORNEDEB_G': 'TextEdit', 'BORNEDEB_D': 'TextEdit', 'BORNEFIN_G': 'TextEdit', 'BORNEFIN_D': 'TextEdit', 'INSEECOM_G': 'TextEdit', 'INSEECOM_D': 'TextEdit', 'TYP_ADRES': 'TextEdit', 'ALIAS_G': 'TextEdit', 'ALIAS_D': 'TextEdit', 'C_POSTAL_G': 'TextEdit', 'C_POSTAL_D': 'TextEdit', 'DATE_SERV': 'DateTime', 'ID_VOIE_G': 'TextEdit', 'ID_VOIE_D': 'TextEdit', 'ID_RN': 'TextEdit', 'ID_ITI': 'TextEdit', 'NUMERO': 'TextEdit', 'NUM_EUROP': 'TextEdit', 'CL_ADMIN': 'TextEdit', 'GESTION': 'TextEdit', 'TOPONYME': 'TextEdit', 'ITI_CYCL': 'TextEdit', 'VOIE_VERTE': 'TextEdit', 'NATURE_ITI': 'TextEdit', 'NOM_ITI': 'TextEdit', });
lyr_routecommu_15.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NOM_1_G': 'TextEdit', 'NOM_1_D': 'TextEdit', 'NOM_2_G': 'TextEdit', 'NOM_2_D': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'FICTIF': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_VOIES': 'Range', 'LARGEUR': 'TextEdit', 'IT_VERT': 'TextEdit', 'PRIVE': 'TextEdit', 'SENS': 'TextEdit', 'CYCLABLE': 'TextEdit', 'BUS': 'TextEdit', 'URBAIN': 'TextEdit', 'VIT_MOY_VL': 'Range', 'ACCES_VL': 'TextEdit', 'ACCES_PED': 'TextEdit', 'FERMETURE': 'TextEdit', 'NAT_RESTR': 'TextEdit', 'RESTR_H': 'TextEdit', 'RESTR_P': 'TextEdit', 'RESTR_PPE': 'TextEdit', 'RESTR_LAR': 'TextEdit', 'RESTR_LON': 'TextEdit', 'RESTR_MAT': 'TextEdit', 'BORNEDEB_G': 'TextEdit', 'BORNEDEB_D': 'TextEdit', 'BORNEFIN_G': 'TextEdit', 'BORNEFIN_D': 'TextEdit', 'INSEECOM_G': 'TextEdit', 'INSEECOM_D': 'TextEdit', 'TYP_ADRES': 'TextEdit', 'ALIAS_G': 'TextEdit', 'ALIAS_D': 'TextEdit', 'C_POSTAL_G': 'TextEdit', 'C_POSTAL_D': 'TextEdit', 'DATE_SERV': 'DateTime', 'ID_VOIE_G': 'TextEdit', 'ID_VOIE_D': 'TextEdit', 'ID_RN': 'TextEdit', 'ID_ITI': 'TextEdit', 'NUMERO': 'TextEdit', 'NUM_EUROP': 'TextEdit', 'CL_ADMIN': 'TextEdit', 'GESTION': 'TextEdit', 'TOPONYME': 'TextEdit', 'ITI_CYCL': 'TextEdit', 'VOIE_VERTE': 'TextEdit', 'NATURE_ITI': 'TextEdit', 'NOM_ITI': 'TextEdit', });
lyr_routedp_16.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NOM_1_G': 'TextEdit', 'NOM_1_D': 'TextEdit', 'NOM_2_G': 'TextEdit', 'NOM_2_D': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'FICTIF': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_VOIES': 'Range', 'LARGEUR': 'TextEdit', 'IT_VERT': 'TextEdit', 'PRIVE': 'TextEdit', 'SENS': 'TextEdit', 'CYCLABLE': 'TextEdit', 'BUS': 'TextEdit', 'URBAIN': 'TextEdit', 'VIT_MOY_VL': 'Range', 'ACCES_VL': 'TextEdit', 'ACCES_PED': 'TextEdit', 'FERMETURE': 'TextEdit', 'NAT_RESTR': 'TextEdit', 'RESTR_H': 'TextEdit', 'RESTR_P': 'TextEdit', 'RESTR_PPE': 'TextEdit', 'RESTR_LAR': 'TextEdit', 'RESTR_LON': 'TextEdit', 'RESTR_MAT': 'TextEdit', 'BORNEDEB_G': 'TextEdit', 'BORNEDEB_D': 'TextEdit', 'BORNEFIN_G': 'TextEdit', 'BORNEFIN_D': 'TextEdit', 'INSEECOM_G': 'TextEdit', 'INSEECOM_D': 'TextEdit', 'TYP_ADRES': 'TextEdit', 'ALIAS_G': 'TextEdit', 'ALIAS_D': 'TextEdit', 'C_POSTAL_G': 'TextEdit', 'C_POSTAL_D': 'TextEdit', 'DATE_SERV': 'DateTime', 'ID_VOIE_G': 'TextEdit', 'ID_VOIE_D': 'TextEdit', 'ID_RN': 'TextEdit', 'ID_ITI': 'TextEdit', 'NUMERO': 'TextEdit', 'NUM_EUROP': 'TextEdit', 'CL_ADMIN': 'TextEdit', 'GESTION': 'TextEdit', 'TOPONYME': 'TextEdit', 'ITI_CYCL': 'TextEdit', 'VOIE_VERTE': 'TextEdit', 'NATURE_ITI': 'TextEdit', 'NOM_ITI': 'TextEdit', });
lyr_rseauplivialpublic_17.set('fieldImages', {'id': '', });
lyr_rseaupluvialpriv_18.set('fieldImages', {'id': '', });
lyr_Marquage_19.set('fieldImages', {'ID': '', 'NATURE': '', 'NOM_1_G': '', 'NOM_1_D': '', 'NOM_2_G': '', 'NOM_2_D': '', 'IMPORTANCE': '', 'FICTIF': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'PREC_PLANI': '', 'PREC_ALTI': '', 'NB_VOIES': '', 'LARGEUR': '', 'IT_VERT': '', 'PRIVE': '', 'SENS': '', 'CYCLABLE': '', 'BUS': '', 'URBAIN': '', 'VIT_MOY_VL': '', 'ACCES_VL': '', 'ACCES_PED': '', 'FERMETURE': '', 'NAT_RESTR': '', 'RESTR_H': '', 'RESTR_P': '', 'RESTR_PPE': '', 'RESTR_LAR': '', 'RESTR_LON': '', 'RESTR_MAT': '', 'BORNEDEB_G': '', 'BORNEDEB_D': '', 'BORNEFIN_G': '', 'BORNEFIN_D': '', 'INSEECOM_G': '', 'INSEECOM_D': '', 'TYP_ADRES': '', 'ALIAS_G': '', 'ALIAS_D': '', 'C_POSTAL_G': '', 'C_POSTAL_D': '', 'DATE_SERV': '', 'ID_VOIE_G': '', 'ID_VOIE_D': '', 'ID_RN': '', 'ID_ITI': '', 'NUMERO': '', 'NUM_EUROP': '', 'CL_ADMIN': '', 'GESTION': '', 'TOPONYME': '', 'ITI_CYCL': '', 'VOIE_VERTE': '', 'NATURE_ITI': '', 'NOM_ITI': '', });
lyr_Sanstrottoires_20.set('fieldImages', {'ID': '', 'NATURE': '', 'NOM_1_G': '', 'NOM_1_D': '', 'NOM_2_G': '', 'NOM_2_D': '', 'IMPORTANCE': '', 'FICTIF': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'PREC_PLANI': '', 'PREC_ALTI': '', 'NB_VOIES': '', 'LARGEUR': '', 'IT_VERT': '', 'PRIVE': '', 'SENS': '', 'CYCLABLE': '', 'BUS': '', 'URBAIN': '', 'VIT_MOY_VL': '', 'ACCES_VL': '', 'ACCES_PED': '', 'FERMETURE': '', 'NAT_RESTR': '', 'RESTR_H': '', 'RESTR_P': '', 'RESTR_PPE': '', 'RESTR_LAR': '', 'RESTR_LON': '', 'RESTR_MAT': '', 'BORNEDEB_G': '', 'BORNEDEB_D': '', 'BORNEFIN_G': '', 'BORNEFIN_D': '', 'INSEECOM_G': '', 'INSEECOM_D': '', 'TYP_ADRES': '', 'ALIAS_G': '', 'ALIAS_D': '', 'C_POSTAL_G': '', 'C_POSTAL_D': '', 'DATE_SERV': '', 'ID_VOIE_G': '', 'ID_VOIE_D': '', 'ID_RN': '', 'ID_ITI': '', 'NUMERO': '', 'NUM_EUROP': '', 'CL_ADMIN': '', 'GESTION': '', 'TOPONYME': '', 'ITI_CYCL': '', 'VOIE_VERTE': '', 'NATURE_ITI': '', 'NOM_ITI': '', });
lyr_marquagefixe_21.set('fieldImages', {'id': '', });
lyr_Avectrottoires_22.set('fieldImages', {'ID': '', 'NATURE': '', 'NOM_1_G': '', 'NOM_1_D': '', 'NOM_2_G': '', 'NOM_2_D': '', 'IMPORTANCE': '', 'FICTIF': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'PREC_PLANI': '', 'PREC_ALTI': '', 'NB_VOIES': '', 'LARGEUR': '', 'IT_VERT': '', 'PRIVE': '', 'SENS': '', 'CYCLABLE': '', 'BUS': '', 'URBAIN': '', 'VIT_MOY_VL': '', 'ACCES_VL': '', 'ACCES_PED': '', 'FERMETURE': '', 'NAT_RESTR': '', 'RESTR_H': '', 'RESTR_P': '', 'RESTR_PPE': '', 'RESTR_LAR': '', 'RESTR_LON': '', 'RESTR_MAT': '', 'BORNEDEB_G': '', 'BORNEDEB_D': '', 'BORNEFIN_G': '', 'BORNEFIN_D': '', 'INSEECOM_G': '', 'INSEECOM_D': '', 'TYP_ADRES': '', 'ALIAS_G': '', 'ALIAS_D': '', 'C_POSTAL_G': '', 'C_POSTAL_D': '', 'DATE_SERV': '', 'ID_VOIE_G': '', 'ID_VOIE_D': '', 'ID_RN': '', 'ID_ITI': '', 'NUMERO': '', 'NUM_EUROP': '', 'CL_ADMIN': '', 'GESTION': '', 'TOPONYME': '', 'ITI_CYCL': '', 'VOIE_VERTE': '', 'NATURE_ITI': '', 'NOM_ITI': '', });
lyr_Placeremorquebateau_23.set('fieldImages', {'id': '', });
lyr_PlaceGIC_24.set('fieldImages', {'id': '', });
lyr_livraison_25.set('fieldImages', {'id': '', });
lyr_emplacementsminute_26.set('fieldImages', {'id': '', });
lyr_Rechargevoitureelectrique_27.set('fieldImages', {'id': '', });
lyr_RouteUse_28.set('fieldImages', {'id': '', });
lyr_Routeneuves_29.set('fieldImages', {'id': '', });
lyr_RouteCommeNeuve_30.set('fieldImages', {'id': '', });
lyr_RoutesAnciennes_31.set('fieldImages', {'id': 'TextEdit', });
lyr_sensinterdit_0.set('fieldLabels', {});
lyr_Pistecyclablevraie_1.set('fieldLabels', {});
lyr_Zone30_2.set('fieldLabels', {});
lyr_ajout2016_3.set('fieldLabels', {});
lyr_ajout2019_4.set('fieldLabels', {});
lyr_ajout2015_5.set('fieldLabels', {});
lyr_MasterColour_6.set('fieldLabels', {});
lyr_MBF_7.set('fieldLabels', {});
lyr_MasterSonTPIA_8.set('fieldLabels', {});
lyr_LED_9.set('fieldLabels', {});
lyr_IM70_10.set('fieldLabels', {});
lyr_FortimoFastflex_11.set('fieldLabels', {});
lyr_SHP_12.set('fieldLabels', {});
lyr_DPM_13.set('fieldLabels', {});
lyr_priv_14.set('fieldLabels', {});
lyr_routecommu_15.set('fieldLabels', {});
lyr_routedp_16.set('fieldLabels', {});
lyr_rseauplivialpublic_17.set('fieldLabels', {});
lyr_rseaupluvialpriv_18.set('fieldLabels', {});
lyr_Marquage_19.set('fieldLabels', {});
lyr_Sanstrottoires_20.set('fieldLabels', {});
lyr_marquagefixe_21.set('fieldLabels', {});
lyr_Avectrottoires_22.set('fieldLabels', {});
lyr_Placeremorquebateau_23.set('fieldLabels', {});
lyr_PlaceGIC_24.set('fieldLabels', {});
lyr_livraison_25.set('fieldLabels', {});
lyr_emplacementsminute_26.set('fieldLabels', {});
lyr_Rechargevoitureelectrique_27.set('fieldLabels', {});
lyr_RouteUse_28.set('fieldLabels', {});
lyr_Routeneuves_29.set('fieldLabels', {});
lyr_RouteCommeNeuve_30.set('fieldLabels', {});
lyr_RoutesAnciennes_31.set('fieldLabels', {});
lyr_RoutesAnciennes_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});