var config = {
    style: 'mapbox://styles/ed1990/clqf29rn600h701pjdpvb1jct',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNscWV3N3BqbDBxNXkyb21raHd1NjZ4OGwifQ.DT_g4Lk3k7vKZ49prSmVKA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'globe',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:sans; padding: 0.5vh; border-radius: 10px; color:#141414; font-size:1.6rem; background:#ffffff;" >Harta</span>',
    subtitle: '<span style=" font-family: Arial; color:#141414; font-size:2.4rem; background:#ffffff;" ></span>',
    byline: '<p><a href="" target="_blank"></a></p>',
    footer: '<p style="margin-top:1px; margin-bottom:1px;"><b>2023 </b></p> <p style="margin-top:1px; margin-bottom:1px;"><b>Data source:</b> wikipedia.org, britannica.com, blackpast.org, data from the official websites of presidential administrations from multiple countries </p> <p><b>Note:</b> Afghanistan - Head of state`s year of birth is approximate, there is no clear data available. The presidency of Bosnia and Herzegovina is a three-member body, one Bosniak, one Serb, and one Croat. which collectively serves. Although the unsubdivided body is the collective head of state, one member is designated as Chairperson. The position of Chairperson rotates twice around the three members every eight months, with the candidate receiving the most votes overall becoming the first Chairperson over the four-year term.</p>',
    chapters: [
        {
            id: 'Methodology',
            alignment: 'center',        
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 10,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        


        
        

    ]
};