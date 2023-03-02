mapboxgl.accessToken = "pk.eyJ1IjoiYW5hbm1heSIsImEiOiJjbDk0azVhbWMwMmNzM3dyNWpraW5pYXo3In0.ABTXYKit9qNDRvSBlFcalA";

const bounds = [
    [-79.432709, 43.615221], // Southwest coordinates (long, lat)
    [-79.301808, 43.900911] // Northeast coordinates (long, lat)
];

// create map
const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/ananmay/clb46qysm000l14kyvn8q1gjh", // style URL 
    center: [-79.38633, 43.64015], // starting center in [lng, lat]
    zoom: 13,
    // pitch: 60, // pitch in degrees
    // bearing: -20, // bearing in degrees
    // maxBounds: bounds // Set the map's geographical boundaries.
});

// PAST MAP

// slider

const sliderOptions = {
    elm: 'slider-control',
    layer: 'photos',
    source: 'photos',
    input: false,
    controlWidth: '400px',
    minProperty: 'date',
    maxProperty: 'date',
    // sliderMin: '1878-01-01T00:00:00.000Z',
    // sliderMax: '2000-12-31T00:00:00.000Z',
    // filterMin: '1878-01-01T00:00:00.000Z',
    // filterMax: '2000-12-31T00:00:00.000Z',
    propertyType: 'iso8601',
    rangeDescriptionFormat: 'shortDate',
    descriptionPrefix: 'Date:',
    dontFilterOnLoad: true
}

map.addControl(new RangeSlider(sliderOptions, 'top-left'));

map.on("load", async () => {

    const geojson_url = await fetch(
        'https://ananmaysharan.github.io/gardinerarchive/combined_images.geojson'
    );

    const geojson_data = await geojson_url.json();

    // adding images

    const images = geojson_data.features.map(feature => ({
        url: feature.properties.thumb_url,
        id: feature.properties.id
    }));

    Promise.all(
        images.map(img => new Promise((resolve, reject) => {
            map.loadImage(img.url, function (error, res) {
                if (error) throw error;
                map.addImage(img.id, res)
                resolve();
            })
        }))
    ).then(console.log("Images Loaded"));

    map.addSource("photos", {
        type: "geojson",
        data: geojson_data,
    });

    map.addLayer({
        id: "photos",
        type: "symbol",
        source: "photos",
        layout: {
            'icon-image': ['get', 'id'], // reference the image
            'icon-ignore-placement': true,
            'icon-size': 0.25,
            'icon-allow-overlap': true,
        }
    });

    // map.addLayer({
    //     id: "photospoints",
    //     type: "circle",
    //     source: "photos",
    //     paint: {
    //             'circle-radius': 6,
    //             'circle-color': '#B42222'
    //     }
    // });

    // adding shorelines

    const shoreline_geojson_url = await fetch(
        'https://raw.githubusercontent.com/ananmaysharan/gardinerarchive/main/shorelines_polygons.geojson'
    );

    const shoreline_geojson_data = await shoreline_geojson_url.json();

    map.addSource('shoreline_overlay', {
        type: 'geojson',
        data: shoreline_geojson_data,
    });

    

    map.addLayer({
        'id': '1818',
        'type': 'fill',
        'source': 'shoreline_overlay',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'fill-color': '#409cf7', // blue color fill
            'fill-opacity': 0.8
        },
        filter: ["all", ["==", "year", 1818]]
    });

    map.addLayer({
        'id': '1884',
        'type': 'fill',
        'source': 'shoreline_overlay',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'fill-color': '#01468a', // blue color fill
            'fill-opacity': 0.8
        },
        filter: ["all", ["==", "year", 1884]]
    });

    map.addLayer({
        'id': '1910',
        'type': 'fill',
        'source': 'shoreline_overlay',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'fill-color': '#00264d', // blue color fill
            'fill-opacity': 0.8
        },
        filter: ["all", ["==", "year", 1910]]
    });

    map.addLayer({
        'id': '2022',
        'type': 'fill',
        'source': 'shoreline_overlay',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'fill-color': '#001429', // blue color fill
            'fill-opacity': 0.8
        },
        filter: ["all", ["==", "year", 2022]]
    });



    // adding indigenous territories / testing zone

    //  adding popup

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'photos', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const title = e.features[0].properties.title;
        const year = e.features[0].properties.date.substring(0, 4);
        const image = e.features[0].properties.url;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(title + "<br>" + year + "<img src='" + image + "'" + " class=popupImage " + "/>")
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the photos layer.
    map.on('mouseenter', 'photos', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'photos', () => {
        map.getCanvas().style.cursor = '';
    });


    // adding title/logo

    // document.getElementById('info').innerHTML = `
    //     <svg width="360px" height="82px" viewBox="0 0 360 82" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    //         <title>maplogo</title>
    //             <g id="maplogo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    //                 <g transform="translate(15.000000, 15.000000)">
    //                 <path d="M0,14.073957 C0,16.3945269 0.705934458,18.2931505 2.11775081,19.7698817 C3.52961973,21.2465591 5.35324433,22 7.61805825,22 C9.88287218,22 11.7064968,21.2465591 13.1183131,19.7698817 C14.530182,18.2931505 15.2361165,16.3945269 15.2361165,14.073957 L15.2361165,0.452043015 L11.2653074,0.452043015 L11.2653074,14.2548064 C11.2653074,16.5452258 10.0593689,18.0822043 7.61805825,18.0822043 C5.17674757,18.0822043 3.97080906,16.5753226 3.97080906,14.1945054 L3.97080906,0.452043015 L0,0.452043015 L0,14.073957 Z M24.2105928,21.547957 L24.2105928,8.01644086 L31.5933396,21.547957 L35.2111551,21.547957 L35.2111551,0.452043015 L31.210965,0.452043015 L31.210965,13.9835591 L23.9164666,0.452043015 L20.2397837,0.452043015 L20.2397837,21.547957 L24.2105928,21.547957 Z M43.9798061,4.36989246 L47.4799396,4.36989246 C48.8035602,4.36989246 49.6859914,4.82193548 50.1859954,5.69587097 C50.6859995,6.56986022 50.9507446,8.2273871 50.9507446,10.6685054 C50.8624963,16.5150753 49.950684,17.6301613 47.3034954,17.6301613 L43.9798061,17.6301613 L43.9798061,4.36989246 Z M47.3034954,21.547957 C52.3919946,21.547957 54.9216063,17.9315054 54.9216063,10.6685054 C54.9216063,3.85754838 52.4508094,0.452043015 47.4799396,0.452043015 L40.008997,0.452043015 L40.008997,21.547957 L47.3034954,21.547957 Z M73.7791124,21.547957 L73.7791124,17.6301613 L64.7198567,17.6301613 L64.7198567,12.4164301 L72.9554959,12.4164301 L72.9554959,8.49863441 L64.7198567,8.49863441 L64.7198567,4.36989246 L73.7791124,4.36989246 L73.7791124,0.452043015 L60.7489425,0.452043015 L60.7489425,21.547957 L73.7791124,21.547957 Z M84.0183419,21.547957 L84.0183419,13.2602688 L86.3714568,13.2602688 L90.1952027,21.547957 L94.607096,21.547957 L90.4595799,12.5369785 C92.7243939,11.2410968 93.7246122,9.52326882 93.7246122,6.84110752 C93.7246122,5.03288172 93.1070313,3.52605375 91.8713437,2.29041935 C90.6656155,1.05478495 89.1949844,0.452043015 87.4594505,0.452043015 L80.0474277,0.452043015 L80.0474277,21.547957 L84.0183419,21.547957 Z M84.0183419,4.36989246 L87.4594505,4.36989246 C88.6657044,4.36989246 89.753698,5.36437635 89.753698,6.90135484 C89.6653971,8.95067742 88.2536333,9.40272044 87.4594505,9.34247312 L84.0183419,9.34247312 L84.0183419,4.36989246 Z M129.645223,14.284957 C129.61579,16.5753226 128.438969,18.0822043 125.998079,18.0822043 C124.674091,18.0822043 123.733265,17.5397097 123.174026,16.4849247 C122.615312,15.4301398 122.320976,13.4712151 122.320976,10.6685054 C122.320976,5.72602151 123.409495,3.9177957 125.998079,3.9177957 C128.204026,3.9177957 129.409754,5.36437635 129.674657,8.2273871 L133.380668,7.71509676 C133.2335,5.51507527 132.468751,3.67669893 131.086421,2.2000215 C129.733524,0.723290322 128.027424,0 125.998079,0 C121.29185,0 118.350587,3.64660214 118.350587,10.6685054 C118.350587,18.4136989 121.203549,22 125.998079,22 C128.262893,22 130.086202,21.2465591 131.497966,19.7698817 C132.90973,18.2931505 133.616137,16.3945269 133.616137,14.073957 L133.616137,10.5178065 L125.086162,10.5178065 L125.086162,14.284957 L129.645223,14.284957 Z M140.79637,21.547957 L142.002099,17.8712043 L149.032009,17.8712043 L150.237738,21.547957 L154.473555,21.547957 L147.355343,0.452043015 L143.855367,0.452043015 L136.707722,21.547957 L140.79637,21.547957 Z M145.531508,6.72055914 L147.767414,13.9534086 L143.325561,13.9534086 L145.531508,6.72055914 Z M162.859516,21.547957 L162.859516,13.2602688 L165.212631,13.2602688 L169.036377,21.547957 L173.44827,21.547957 L169.301279,12.5369785 C171.566093,11.2410968 172.565786,9.52326882 172.565786,6.84110752 C172.565786,5.03288172 171.948205,3.52605375 170.713043,2.29041935 C169.506789,1.05478495 168.036158,0.452043015 166.30115,0.452043015 L158.888602,0.452043015 L158.888602,21.547957 L162.859516,21.547957 Z M162.859516,4.36989246 L166.30115,4.36989246 C167.506878,4.36989246 168.595398,5.36437635 168.595398,6.90135484 C168.507097,8.95067742 167.095333,9.40272044 166.30115,9.34247312 L162.859516,9.34247312 L162.859516,4.36989246 Z M181.952491,4.36989246 L185.452467,4.36989246 C186.77593,4.36989246 187.658414,4.82193548 188.15826,5.69587097 C188.658632,6.56986022 188.923535,8.2273871 188.923535,10.6685054 C188.835234,16.5150753 187.923316,17.6301613 185.275865,17.6301613 L181.952491,17.6301613 L181.952491,4.36989246 Z M185.275865,21.547957 C190.364732,21.547957 192.893923,17.9315054 192.893923,10.6685054 C192.893923,3.85754838 190.423599,0.452043015 185.452467,0.452043015 L177.981577,0.452043015 L177.981577,21.547957 L185.275865,21.547957 Z M211.31045,21.547957 L211.31045,17.6301613 L206.721955,17.6301613 L206.721955,4.36989246 L211.31045,4.36989246 L211.31045,0.452043015 L198.133112,0.452043015 L198.133112,4.36989246 L202.751041,4.36989246 L202.751041,17.6301613 L198.133112,17.6301613 L198.133112,21.547957 L211.31045,21.547957 Z M221.314211,21.547957 L221.314211,8.01644086 L228.6968,21.547957 L232.315036,21.547957 L232.315036,0.452043015 L228.314688,0.452043015 L228.314688,13.9835591 L221.019874,0.452043015 L217.343297,0.452043015 L217.343297,21.547957 L221.314211,21.547957 Z M251.172016,21.547957 L251.172016,17.6301613 L242.112761,17.6301613 L242.112761,12.4164301 L250.3484,12.4164301 L250.3484,8.49863441 L242.112761,8.49863441 L242.112761,4.36989246 L251.172016,4.36989246 L251.172016,0.452043015 L238.141847,0.452043015 L238.141847,21.547957 L251.172016,21.547957 Z M261.411246,21.547957 L261.411246,13.2602688 L263.764361,13.2602688 L267.588107,21.547957 L272,21.547957 L267.85301,12.5369785 C270.117823,11.2410968 271.118042,9.52326882 271.118042,6.84110752 C271.118042,5.03288172 270.499935,3.52605375 269.264773,2.29041935 C268.059045,1.05478495 266.588414,0.452043015 264.85288,0.452043015 L257.440857,0.452043015 L257.440857,21.547957 L261.411246,21.547957 Z M261.411246,4.36989246 L264.85288,4.36989246 C266.058608,4.36989246 267.147128,5.36437635 267.147128,6.90135484 C267.058827,8.95067742 265.647063,9.40272044 264.85288,9.34247312 L261.411246,9.34247312 L261.411246,4.36989246 Z" id="Fill-7" fill="#6ECCB1"></path>
    //                 <path d="M244.490781,30 C246.273845,30 247.789741,30.6299631 249.068215,31.9200098 C250.346157,33.1799895 251,34.7399974 251,36.5999801 C251,38.4600164 250.375901,40.0200243 249.157447,41.3100175 C247.938463,42.5699972 246.363078,43.2000138 244.490781,43.2000138 L244.490781,43.2000138 L241.012823,43.2000138 L241.012823,51 L237,51 L237,30 Z M244.520525,33.8999931 L241.012823,33.8999931 L241.012823,39.2999671 L244.520525,39.2999671 C245.917444,39.2999671 246.987177,38.070001 246.987177,36.5999801 C246.987177,34.9199716 245.828212,33.8999931 244.520525,33.8999931 L244.520525,33.8999931 Z" id="Combined-Shape" fill="#022423"></path>
    //                 <polygon id="Path" fill="#022423" points="175 51 175 47.1000069 166.139203 47.1000069 166.139203 30 162 30 162 51"></polygon>
    //                 <path d="M152.787965,30 L160,51 L155.708884,51 L154.486731,47.3400081 L147.364161,47.3400081 L146.14254,51 L142,51 L149.241857,30 L152.787965,30 Z M150.940623,36.2399783 L148.7056,43.440015 L153.205467,43.440015 L150.940623,36.2399783 Z" id="Combined-Shape" fill="#022423"></path>
    //                 <path d="M227.787965,30 L235,51 L230.708884,51 L229.486731,47.3400081 L222.364161,47.3400081 L221.14254,51 L217,51 L224.241857,30 L227.787965,30 Z M225.940623,36.2399783 L223.7056,43.440015 L228.205467,43.440015 L225.940623,36.2399783 Z" id="Combined-Shape" fill="#022423"></path>
    //                 <path d="M134.547979,43.1465659 C134.301231,45.8794464 133.178137,47.2602768 131.123374,47.2602768 C129.890124,47.2602768 129.013778,46.7424911 128.492866,45.7356484 C127.972444,44.7287545 127.698279,42.8589185 127.698279,40.1835469 C127.698279,35.4657612 128.712198,33.7397232 131.123374,33.7397232 C133.178137,33.7397232 134.301231,35.1205536 134.547979,37.8534341 L138,37.249308 C137.890334,35.2068426 137.205413,33.4808047 135.917821,32.0999743 C134.657644,30.6904152 133.068471,30 131.123374,30 C126.739684,30 124,33.4808047 124,40.1835469 C124,47.5767042 126.657435,51 131.123374,51 C133.068471,51 134.657644,50.3095848 135.917821,48.9287545 C137.205413,47.5191953 137.890334,45.7931574 138,43.750692 L134.547979,43.1465659 Z" id="Path" fill="#022423"></path>
    //                 <path d="M96.1271073,30 C97.7959279,30 99.2100285,30.6000031 100.369409,31.8299692 C101.557597,33.0599888 102.151439,34.5599697 102.151439,36.3599789 C102.151439,39.0300059 101.189668,40.7399745 99.0119129,42.0300212 L99.0119129,42.0300212 L103,51 L98.7571929,51 L95.0804303,42.7499713 L92.8182737,42.7499713 L92.8182737,51 L89,51 L89,30 Z M96.1271073,33.8999931 L92.8182737,33.8999931 L92.8182737,38.8499782 L96.1271073,38.8499782 C96.8907621,38.9100053 98.2482582,38.4600164 98.3331649,36.420006 C98.3331649,34.8900115 97.2864879,33.8999931 96.1271073,33.8999931 L96.1271073,33.8999931 Z" id="Combined-Shape" fill="#022423"></path>
    //                 <polygon id="Path" fill="#022423" points="202.795256 51 202.795256 37.9800139 204.791094 44.2199922 207.208906 44.2199922 209.204744 37.9800139 209.204744 51 213 51 213 30 209.373533 30 206.000251 40.769988 202.626467 30 199 30 199 51"></polygon>
    //                 <polygon id="Path" fill="#022423" points="30 51 30 47.1000069 25.473256 47.1000069 25.473256 33.8999931 30 33.8999931 30 30 17 30 17 33.8999931 21.5557816 33.8999931 21.5557816 47.1000069 17 47.1000069 17 51"></polygon>
    //                 <polygon id="Path" fill="#022423" points="120 51 120 47.1000069 115.473256 47.1000069 115.473256 33.8999931 120 33.8999931 120 30 107 30 107 33.8999931 111.555782 33.8999931 111.555782 47.1000069 107 47.1000069 107 51"></polygon>
    //                 <polygon id="Fill-9" fill="#6ECCB1" points="277 5 330 5 330 1 277 1"></polygon>
    //                 <g id="S" transform="translate(34.000000, 30.000000)" fill="#022423" fill-rule="nonzero">
    //                     <path d="M7.22047244,21 C11.3818898,21 14,18.9547325 14,14.7201646 C14,10.2839506 11.2716535,8.67078189 7.41338583,8.18106996 C4.79527559,7.83539095 4.24409449,6.97119342 4.24409449,5.76131687 C4.24409449,4.55144033 5.07086614,3.62962963 6.77952756,3.62962963 C8.37795276,3.62962963 9.59055118,4.26337449 9.75590551,5.84773663 L13.476378,5.84773663 C13.2559055,1.4691358 10.3897638,0 6.80708661,0 C3.19685039,0 0.523622047,2.36213992 0.523622047,5.93415638 C0.523622047,9.50617284 2.59055118,11.5514403 6.2007874,12.0123457 C9.42519685,12.4444444 10.1141732,13.2222222 10.1141732,14.9218107 C10.1141732,16.4485597 9.09448819,17.3127572 7.33070866,17.3127572 C5.51181102,17.3127572 4.02362205,16.4485597 3.80314961,14.1440329 L0,14.1440329 C0.137795276,19.2427984 3.52755906,21 7.22047244,21 Z" id="Path"></path>
    //                 </g>
    //                 <g id="H" transform="translate(0.000000, 30.000000)" fill="#022423" fill-rule="nonzero">
    //                     <polygon id="Path" points="0 20.9704225 4.16299559 21 4.16299559 12.156338 9.83700441 12.156338 9.83700441 21 14 21 14 0 9.83700441 0 9.83700441 8.37042254 4.16299559 8.37042254 4.16299559 0 0 0"></polygon>
    //                 </g>
    //                 <g id="T" transform="translate(51.000000, 30.000000)" fill="#022423" fill-rule="nonzero">
    //                     <polygon id="Path" points="5.60037523 21 9.37148218 21 9.37148218 3.75633803 15 3.75633803 15 0 0 0 0 3.75633803 5.60037523 3.75633803"></polygon>
    //                 </g>
    //                 <g id="O" transform="translate(70.000000, 30.000000)" fill="#022423" fill-rule="nonzero">
    //                     <path d="M14,8.7739726 C14,2.15753425 11.1558185,0 7.04142012,0 C3.00986193,0 0,2.30136986 0,8.68767123 L0,12.5712329 C0,18.669863 3.20315582,21 7.04142012,21 C11.1558185,21 14,18.669863 14,12.5712329 L14,8.7739726 Z M10.2998028,12.5712329 C10.2169625,15.8794521 9.08481262,17.260274 7.04142012,17.260274 C5.13609467,17.260274 3.70019724,15.8506849 3.70019724,12.5712329 L3.70019724,8.86027397 C3.70019724,4.94794521 5.05325444,3.73972603 7.04142012,3.73972603 C9.00197239,3.73972603 10.2998028,5.0630137 10.2998028,8.7739726 L10.2998028,12.5712329 Z" id="Shape"></path>
    //                 </g>
    //             </g>
    //         </g>
    //     </svg>`

    // adding menu

    // If these two layers were not added to the map, abort
    if (!map.getLayer('1818') || !map.getLayer('1884') || !map.getLayer('1910') || !map.getLayer('2022')) {
        return;
    }

      // const shorelineIdToZoomExtent = {
    //     '1818': 'All',
    //     '1884': 'Under Gardiner',
    //     '1910': 'Transit',
    //     '2022': 'People',
    // };

    // Enumerate ids of the layers.
    const toggleableLayerIds = ['1818', '1884', '1910', '2022'];

  
    function zoomToLayerExtent(layerId) {
        const source = map.getSource('shoreline_overlay');
        const layerFeatures = source._data.features.filter(f => f.properties.year === Number(layerId));
        const bbox = turf.bbox({
            type: 'FeatureCollection',
            features: layerFeatures,
          });
    
        const bounds = [
            [bbox[0], bbox[3]-0.01],
            [bbox[2], bbox[3]-0.01]
        ];
        map.fitBounds(bounds);
    }

    // Set up the corresponding toggle button for each layer.
    for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
            continue;
        }

        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = '';

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
            const clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            const visibility = map.getLayoutProperty(
                clickedLayer,
                'visibility'
            );

            // Toggle layer visibility by changing the layout object's visibility property.
            if (visibility === 'none') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                this.className = 'active';

                if (clickedLayer != '2022') {
                zoomToLayerExtent(clickedLayer);
                }

            } else {
                this.className = '';
                map.setLayoutProperty(
                    clickedLayer,
                    'visibility',
                    'none'
                );
            }
        };

        const layers = document.getElementById('menu');
        layers.appendChild(link);
    }

    // adding theme / tag filters

    function getTagsFilter(tags) {

        //no tags set
        if ((tags || []).length === 0) return;

        //expression for each tag
        const tagFilters = tags.map(tag => ['in', tag, ['get', 'tags']])

        return ['any'].concat(tagFilters);

    }

    const toggleabletagIds = ['all', 'undergardiner', 'transit', 'people', 'aerial', 'construction', 'traffic'];

    const tagIdToTextContent = {
        'all': 'All',
        'undergardiner': 'Under Gardiner',
        'transit': 'Transit',
        'people': 'People',
        'aerial': 'Aerial',
        'construction': 'Construction',
        'traffic': 'Traffic'
    };

    // Set up the corresponding toggle button for each layer.
    for (const id of toggleabletagIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
            continue;
        }

        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = tagIdToTextContent[id];
        link.className = 'active';

        // Filter layer when the tag toggle is clicked.
        link.onclick = function (e) {
            const clickedTag = this.id;
            e.preventDefault();
            e.stopPropagation();

            if (clickedTag == 'all') {
                map.setFilter("photos", null); //yeepee!
            } else {
                const allowedTags = []
                allowedTags.push(clickedTag)
                map.setFilter("photos", getTagsFilter(allowedTags)); //yeepee!
            }
        };

        const layers = document.getElementById('tagmenu');
        layers.appendChild(link);
    }


// PRESENT MAP

const bentway_geojson_url = await fetch(
    'https://ananmaysharan.github.io/gardinerarchive/bentway_projects.geojson'
);

const bentway_geojson_data = await bentway_geojson_url.json();

// adding images

const bentway_images = bentway_geojson_data.features.map(feature => ({
    url: feature.properties.thumb_url,
    id: feature.properties.id
}));

Promise.all(
    bentway_images.map(img => new Promise((resolve, reject) => {
        map.loadImage(img.url, function (error, res) {
            if (error) throw error;
            map.addImage(img.id, res)
            resolve();
        })
    }))
).then(console.log("Bentway Images Loaded"));

map.addSource("bentway_photos", {
    type: "geojson",
    data: bentway_geojson_data,
});

map.addLayer({
    id: "bentway_photos",
    type: "symbol",
    source: "bentway_photos",
    layout: {
        'icon-image': ['get', 'id'], // reference the image
        'icon-ignore-placement': true,
        'icon-size': 0.25,
        'icon-allow-overlap': true,
    }
});

//  adding popup

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'bentway_photos', (e) => {
        // Copy coordinates array.
        const b_coordinates = e.features[0].geometry.coordinates.slice();
        const b_title = e.features[0].properties.title;
        const b_year = e.features[0].properties.date;
        const b_season = e.features[0].properties.season;
        const b_artist = e.features[0].properties.artist;
        const b_description = e.features[0].properties.description;
        const b_image = e.features[0].properties.url;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - b_coordinates[0]) > 180) {
            b_coordinates[0] += e.lngLat.lng > b_coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(b_coordinates)
            .setHTML(b_title + "<br>" + b_artist + "<br>" + b_season + " " + b_year + "<br>" +  "<img src='" + b_image + "'" + " class=popupImage " + "/>" + "<br>" + b_description)
            .addTo(map);
    });

});




