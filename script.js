/*--------------------------------------------------------------------
MAP SETUP
--------------------------------------------------------------------*/

mapboxgl.accessToken = "pk.eyJ1IjoidGhlYmVudHdheSIsImEiOiJjbGYxZDF2YzEwNzYyM3lwamZpN2l5bTBvIn0.qbdgGsK7vFgXT89nqeWsOQ"; //bentway account token

const bounds = [
    [-79.432709, 43.615221], // Southwest coordinates (long, lat)
    [-79.301808, 43.900911] // Northeast coordinates (long, lat)
];

// create map
const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/thebentway/clf1fgyov008v01ns3szd1b9z",
    center: [-79.38633, 43.64015], // starting center in [lng, lat]
    zoom: 13,
    // maxBounds: bounds // Set the map's geographical boundaries.
});

// adding title/logo

document.getElementById('info').innerHTML = `
    <svg width="375px" height="24px" viewBox="0 0 330 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>logo</title>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="logo" fill="#6ECCB1" fill-rule="nonzero">
            <path d="M0,14.073957 C0,16.3945269 0.705934458,18.2931505 2.11775081,19.7698817 C3.52961973,21.2465591 5.35324433,22 7.61805825,22 C9.88287218,22 11.7064968,21.2465591 13.1183131,19.7698817 C14.530182,18.2931505 15.2361165,16.3945269 15.2361165,14.073957 L15.2361165,0.452043015 L11.2653074,0.452043015 L11.2653074,14.2548064 C11.2653074,16.5452258 10.0593689,18.0822043 7.61805825,18.0822043 C5.17674757,18.0822043 3.97080906,16.5753226 3.97080906,14.1945054 L3.97080906,0.452043015 L0,0.452043015 L0,14.073957 Z M24.2105928,21.547957 L24.2105928,8.01644086 L31.5933396,21.547957 L35.2111551,21.547957 L35.2111551,0.452043015 L31.210965,0.452043015 L31.210965,13.9835591 L23.9164666,0.452043015 L20.2397837,0.452043015 L20.2397837,21.547957 L24.2105928,21.547957 Z M43.9798061,4.36989246 L47.4799396,4.36989246 C48.8035602,4.36989246 49.6859914,4.82193548 50.1859954,5.69587097 C50.6859995,6.56986022 50.9507446,8.2273871 50.9507446,10.6685054 C50.8624963,16.5150753 49.950684,17.6301613 47.3034954,17.6301613 L43.9798061,17.6301613 L43.9798061,4.36989246 Z M47.3034954,21.547957 C52.3919946,21.547957 54.9216063,17.9315054 54.9216063,10.6685054 C54.9216063,3.85754838 52.4508094,0.452043015 47.4799396,0.452043015 L40.008997,0.452043015 L40.008997,21.547957 L47.3034954,21.547957 Z M73.7791124,21.547957 L73.7791124,17.6301613 L64.7198567,17.6301613 L64.7198567,12.4164301 L72.9554959,12.4164301 L72.9554959,8.49863441 L64.7198567,8.49863441 L64.7198567,4.36989246 L73.7791124,4.36989246 L73.7791124,0.452043015 L60.7489425,0.452043015 L60.7489425,21.547957 L73.7791124,21.547957 Z M84.0183419,21.547957 L84.0183419,13.2602688 L86.3714568,13.2602688 L90.1952027,21.547957 L94.607096,21.547957 L90.4595799,12.5369785 C92.7243939,11.2410968 93.7246122,9.52326882 93.7246122,6.84110752 C93.7246122,5.03288172 93.1070313,3.52605375 91.8713437,2.29041935 C90.6656155,1.05478495 89.1949844,0.452043015 87.4594505,0.452043015 L80.0474277,0.452043015 L80.0474277,21.547957 L84.0183419,21.547957 Z M84.0183419,4.36989246 L87.4594505,4.36989246 C88.6657044,4.36989246 89.753698,5.36437635 89.753698,6.90135484 C89.6653971,8.95067742 88.2536333,9.40272044 87.4594505,9.34247312 L84.0183419,9.34247312 L84.0183419,4.36989246 Z M129.645223,14.284957 C129.61579,16.5753226 128.438969,18.0822043 125.998079,18.0822043 C124.674091,18.0822043 123.733265,17.5397097 123.174026,16.4849247 C122.615312,15.4301398 122.320976,13.4712151 122.320976,10.6685054 C122.320976,5.72602151 123.409495,3.9177957 125.998079,3.9177957 C128.204026,3.9177957 129.409754,5.36437635 129.674657,8.2273871 L133.380668,7.71509676 C133.2335,5.51507527 132.468751,3.67669893 131.086421,2.2000215 C129.733524,0.723290322 128.027424,0 125.998079,0 C121.29185,0 118.350587,3.64660214 118.350587,10.6685054 C118.350587,18.4136989 121.203549,22 125.998079,22 C128.262893,22 130.086202,21.2465591 131.497966,19.7698817 C132.90973,18.2931505 133.616137,16.3945269 133.616137,14.073957 L133.616137,10.5178065 L125.086162,10.5178065 L125.086162,14.284957 L129.645223,14.284957 Z M140.79637,21.547957 L142.002099,17.8712043 L149.032009,17.8712043 L150.237738,21.547957 L154.473555,21.547957 L147.355343,0.452043015 L143.855367,0.452043015 L136.707722,21.547957 L140.79637,21.547957 Z M145.531508,6.72055914 L147.767414,13.9534086 L143.325561,13.9534086 L145.531508,6.72055914 Z M162.859516,21.547957 L162.859516,13.2602688 L165.212631,13.2602688 L169.036377,21.547957 L173.44827,21.547957 L169.301279,12.5369785 C171.566093,11.2410968 172.565786,9.52326882 172.565786,6.84110752 C172.565786,5.03288172 171.948205,3.52605375 170.713043,2.29041935 C169.506789,1.05478495 168.036158,0.452043015 166.30115,0.452043015 L158.888602,0.452043015 L158.888602,21.547957 L162.859516,21.547957 Z M162.859516,4.36989246 L166.30115,4.36989246 C167.506878,4.36989246 168.595398,5.36437635 168.595398,6.90135484 C168.507097,8.95067742 167.095333,9.40272044 166.30115,9.34247312 L162.859516,9.34247312 L162.859516,4.36989246 Z M181.952491,4.36989246 L185.452467,4.36989246 C186.77593,4.36989246 187.658414,4.82193548 188.15826,5.69587097 C188.658632,6.56986022 188.923535,8.2273871 188.923535,10.6685054 C188.835234,16.5150753 187.923316,17.6301613 185.275865,17.6301613 L181.952491,17.6301613 L181.952491,4.36989246 Z M185.275865,21.547957 C190.364732,21.547957 192.893923,17.9315054 192.893923,10.6685054 C192.893923,3.85754838 190.423599,0.452043015 185.452467,0.452043015 L177.981577,0.452043015 L177.981577,21.547957 L185.275865,21.547957 Z M211.31045,21.547957 L211.31045,17.6301613 L206.721955,17.6301613 L206.721955,4.36989246 L211.31045,4.36989246 L211.31045,0.452043015 L198.133112,0.452043015 L198.133112,4.36989246 L202.751041,4.36989246 L202.751041,17.6301613 L198.133112,17.6301613 L198.133112,21.547957 L211.31045,21.547957 Z M221.314211,21.547957 L221.314211,8.01644086 L228.6968,21.547957 L232.315036,21.547957 L232.315036,0.452043015 L228.314688,0.452043015 L228.314688,13.9835591 L221.019874,0.452043015 L217.343297,0.452043015 L217.343297,21.547957 L221.314211,21.547957 Z M251.172016,21.547957 L251.172016,17.6301613 L242.112761,17.6301613 L242.112761,12.4164301 L250.3484,12.4164301 L250.3484,8.49863441 L242.112761,8.49863441 L242.112761,4.36989246 L251.172016,4.36989246 L251.172016,0.452043015 L238.141847,0.452043015 L238.141847,21.547957 L251.172016,21.547957 Z M261.411246,21.547957 L261.411246,13.2602688 L263.764361,13.2602688 L267.588107,21.547957 L272,21.547957 L267.85301,12.5369785 C270.117823,11.2410968 271.118042,9.52326882 271.118042,6.84110752 C271.118042,5.03288172 270.499935,3.52605375 269.264773,2.29041935 C268.059045,1.05478495 266.588414,0.452043015 264.85288,0.452043015 L257.440857,0.452043015 L257.440857,21.547957 L261.411246,21.547957 Z M261.411246,4.36989246 L264.85288,4.36989246 C266.058608,4.36989246 267.147128,5.36437635 267.147128,6.90135484 C267.058827,8.95067742 265.647063,9.40272044 264.85288,9.34247312 L261.411246,9.34247312 L261.411246,4.36989246 Z" id="Fill-7"></path>
            <polygon id="Fill-9" points="277 5 330 5 330 1 277 1"></polygon>
        </g>
    </g>
    </svg>`

/*--------------------------------------------------------------------
PAST MAP
--------------------------------------------------------------------*/

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
const control = new RangeSlider(sliderOptions, 'top-left')

map.addControl(control);

// map load

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
            map.loadImage(img.url, (error, res) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    map.addImage(img.id, res);
                    resolve();
                }
            });
        }))
    ).then(() => console.log("Images Loaded"));

    map.addSource("photos", {
        type: "geojson",
        data: geojson_data,
    });

    map.addLayer({
        id: "photos",
        type: "symbol",
        source: "photos",
        minzoom: 11,
        layout: {
            'icon-image': ['get', 'id'], // reference the image
            'icon-ignore-placement': true,
            'icon-size': 0.25,
            'icon-allow-overlap': true,
            'visibility': 'visible',
        }
    });

    // adding shorelines

    const shoreline_geojson_url = await fetch(
        'https://raw.githubusercontent.com/ananmaysharan/gardinerarchive/main/geojsons/shorelines.geojson'
    );

    const shoreline_geojson_data = await shoreline_geojson_url.json();


    map.addSource('shoreline_overlay', {
        'type': 'vector',
        'url': 'mapbox://thebentway.0ay4buvn'
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
        'source-layer': 'shorelines_polygons-35i1v2',
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
        'source-layer': 'shorelines_polygons-35i1v2',
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
        'source-layer': 'shorelines_polygons-35i1v2',
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
        'source-layer': 'shorelines_polygons-35i1v2',
        filter: ["all", ["==", "year", 2022]]
    });

    //  adding popup for past imagery

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

    // adding shoreline menu

    // If these layers were not added to the map, abort
    if (!map.getLayer('1818') || !map.getLayer('1884') || !map.getLayer('1910')) {
        return;
    }
    // Enumerate ids of the layers.
    const toggleableLayerIds = ['1818', '1884', '1910'];


    function zoomToLayerExtentShoreline(layerId) {
        const layerFeatures = shoreline_geojson_data.features.filter(f => f.properties.year === Number(layerId));
        const bbox = turf.bbox({
            type: 'FeatureCollection',
            features: layerFeatures,
        });

        const bounds = [
            [bbox[0], bbox[1]],
            [bbox[2], bbox[3]]
        ];
        map.fitBounds(bounds, { padding: { top: 0, bottom: 0, left: 0, right: 150 } });
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
                zoomToLayerExtentShoreline(clickedLayer);

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

    // adding theme tag menu filters

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


    /*--------------------------------------------------------------------
    PRESENT MAP
    --------------------------------------------------------------------*/

    // gardiner route

    map.addSource('route', {
        'type': 'vector',
        'url': 'mapbox://thebentway.41ghap1r'
    });

    map.addLayer(
        {
            'id': 'gardiner',
            'name': 'Gardiner Expressway',
            'type': 'line',
            'source': 'route',
            'source-layer': 'gardiner_route-1rrarv',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round',
                'visibility': 'visible'
            },
            'paint': {
                'line-color': '#dbf2eb',
                'line-width': 3,
                'line-opacity': 0.6
            },
        }, 'photos'
    );

    // bentway route
    map.addSource('bentway-route', {
        'type': 'vector',
        'url': 'mapbox://thebentway.494kqvks'
    });

    map.addLayer(
        {
            'id': 'bentway',
            'name': 'The Bentway',
            'type': 'line',
            'source': 'bentway-route',
            'source-layer': 'bentway_route-3j87ns',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round',
                'visibility': 'none'
            },
            'paint': {
                'line-color': '#fdd100',
                'line-width': 10,
                'line-opacity': 0.6
            },
        }
    );

    // green spaces

    map.addSource('green-spaces', {
        'type': 'vector',
        'url': 'mapbox://thebentway.7f6t42ng'
    });

    map.addLayer({
        'id': 'green-spaces',
        'type': 'fill',
        'source': 'green-spaces',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'fill-color': '#166E3A', // green color fill
            'fill-opacity': 0.8
        },
        'source-layer': 'green_spaces_present-84lch6',
    });

    // 3d buildings

    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
    ).id;

    map.addLayer(
        {
            'id': 'add-3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'layout': {
                'visibility': 'none'
            },
            'minzoom': 5,
            'paint': {
                'fill-extrusion-color': '#7d7d7d',

                // Use an 'interpolate' expression to
                // add a smooth transition effect to
                // the buildings as the user zooms in.
                'fill-extrusion-height': //['get', 'height'],
                    [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        13,
                        0,
                        13.05,
                        ['get', 'height']
                    ],
                'fill-extrusion-base': //['get', 'min_height'],
                    [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        13,
                        0,
                        13.05,
                        ['get', 'min_height']
                    ],
                'fill-extrusion-opacity': 0.6
            }
        },
        labelLayerId
    );

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
        minzoom: 11,
        layout: {
            'icon-image': ['get', 'id'], // reference the image
            'icon-ignore-placement': true,
            'icon-size': 0.25,
            'icon-allow-overlap': true,
            'visibility': 'none',
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
            .setHTML("<h3>" + b_title + "</h3>" + b_artist + "<br>" + b_season + " " + b_year + "<br>" + "<img src='" + b_image + "'" + " class=popupImage" + "/>" + "<br>" + b_description)
            .addTo(map);
    });

    // BUTTONS

    // If these layers were not added to the map, abort
    if (!map.getLayer('bentway')) {
        return;
    }
    // Enumerate ids of the layers.
    const PresentToggleableLayerIds = ['bentway', 'green-spaces', 'add-3d-buildings', '2022'];

    const PresentTagIdToTextContent = {
        'bentway': 'The Bentway',
        'green-spaces': 'Green Spaces',
        'add-3d-buildings': 'Buildings',
        '2022': 'Shoreline'
    };


    bentwayBounds = [[
        -79.41142742172009,
        43.63583355687243
    ], [
        -79.40292777889691,
        43.638554567828066
    ]]

    // Set up the corresponding toggle button for each layer.
    for (const id of PresentToggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
            continue;
        }

        // Create a link.
        const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = PresentTagIdToTextContent[id];
        link.className = '';

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
            const clickedLayer = this.id;
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

                if (clickedLayer === 'add-3d-buildings') {
                    map.easeTo({ zoom: 15, pitch: 60 })
                }

            } else {
                this.className = '';
                if (clickedLayer != 'bentway') { // if it isn't the bentway layer, turn off vis and set map extent to gardiner
                    map.setLayoutProperty(
                        clickedLayer,
                        'visibility',
                        'none'
                    );
                    map.easeTo({ zoom: 13, pitch: 0 })
                } else {
                    map.fitBounds(bentwayBounds)
                }
            }
        };

        const layers = document.getElementById('present-menu');
        layers.appendChild(link);
    }


    /*--------------------------------------------------------------------
    FUTURE MAP
    --------------------------------------------------------------------*/

    // ADDING STATION

    const size = 100;

    // This implements `StyleImageInterface`
    // to draw a pulsing dot icon on the map.
    const pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),

        // When the layer is added to the map,
        // get the rendering context for the map canvas.
        onAdd: function () {
            const canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            this.context = canvas.getContext('2d');
        },

        // Call once before every frame where the icon will be used.
        render: function () {
            const duration = 1000;
            const t = (performance.now() % duration) / duration;

            const radius = (size / 2) * 0.3;
            const outerRadius = (size / 2) * 0.7 * t + radius;
            const context = this.context;

            // Draw the outer circle.
            context.clearRect(0, 0, this.width, this.height);
            context.beginPath();
            context.arc(
                this.width / 2,
                this.height / 2,
                outerRadius,
                0,
                Math.PI * 2
            );
            context.fillStyle = `rgba(156, 227, 255, ${1 - t})`;
            context.fill();

            // Draw the inner circle.
            context.beginPath();
            context.arc(
                this.width / 2,
                this.height / 2,
                radius,
                0,
                Math.PI * 2
            );
            context.fillStyle = 'rgba(30, 168, 224, 1)';
            context.strokeStyle = 'white';
            context.lineWidth = 2 + 4 * (1 - t);
            context.fill();
            context.stroke();

            // Update this image's data with data from the canvas.
            this.data = context.getImageData(
                0,
                0,
                this.width,
                this.height
            ).data;

            // Continuously repaint the map, resulting
            // in the smooth animation of the dot.
            map.triggerRepaint();

            // Return `true` to let the map know that the image was updated.
            return true;
        }
    };

    map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

    map.addSource('exhibition-station', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    // feature for Ontario Line
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [
                            -79.419203, 43.635915
                        ]
                    },
                    'properties': {
                        'title': 'Ontario Line Exhibhition Station',
                        'description': "<p>The Ontario Line station at Exhibition will create a connection to the GO Transit rail network and bring the subway system closer to many homes and businesses in the growing and vibrant Liberty Village community. Exhibition Station serves one of the most popular destinations for sports, concerts and trade shows in the country, not to mention family attractions like the CNE.</p>"
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'exhibition-station',
        'type': 'symbol',
        'source': 'exhibition-station',
        'layout': {
            'icon-image': 'pulsing-dot',
            'visibility': 'none'
        }
    });

    // POPUP FOR EXHBI

    // Create a popup, but don't add it to the map yet.
    const future_popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'exhibition-station', (e) => {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
        const title = e.features[0].properties.title;


        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        future_popup.setLngLat(coordinates).setHTML("<b>" + title + "</b>" + "<br>" + description).addTo(map);
    });

    map.on('mouseleave', 'exhibition-station', () => {
        map.getCanvas().style.cursor = '';
        future_popup.remove();
    });

    const ontarioline_geojson_url = await fetch(
        'https://raw.githubusercontent.com/ananmaysharan/gardinerarchive/main/geojsons/ontario-line.geojson'
    );

    const ontarioline_geojson_data = await ontarioline_geojson_url.json();

    map.addSource('ontario-line-route', {
        'type': 'geojson',
        'data': ontarioline_geojson_data
    });

    map.addLayer(
        {
            'id': 'ontario-line',
            'name': 'Ontario Line',
            'type': 'line',
            'source': 'ontario-line-route',
            //'source-layer': 'ontario-line-7ea882',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round',
                'visibility': 'none'
            },
            'paint': {
                'line-color': '#1ea9e0',
                'line-width': 5,
                'line-opacity': 0.6
            },
        }, 'exhibition-station'
    );




    // TURNING ON AND OFF BASED ON PAST PRESENT FUTURE

    // Get the radio button elements
    const radios = document.querySelectorAll('[name="tabs"]');

    // Add event listener to the radio buttons
    radios.forEach(function (radio) {
        radio.addEventListener('click', function () {
            if (radio.id === 'radio-1' && radio.checked) {
                map.setLayoutProperty('bentway_photos', 'visibility', 'none'); // bw photos
                map.setLayoutProperty('photos', 'visibility', 'visible'); // archival photos
                map.setLayoutProperty('bentway', 'visibility', 'none'); // bentway
                map.setLayoutProperty('exhibition-station', 'visibility', 'none'); // ex station ontario line
                map.setLayoutProperty('ontario-line', 'visibility', 'none'); // ex station ontario line
                document.getElementById('tagmenu').style.display = 'flex';
                document.getElementById('menu').style.display = 'flex';
                document.getElementById('present-menu').style.display = 'none';
                document.getElementById('legend').style.display = 'none';
                document.getElementById('future-legend').style.display = 'none';
                document.getElementById('future-action').style.display = 'none';




            } else if (radio.id === 'radio-2' && radio.checked) {
                map.setLayoutProperty('bentway_photos', 'visibility', 'visible'); // bw
                map.setLayoutProperty('photos', 'visibility', 'none'); // archival photos
                map.setLayoutProperty('bentway', 'visibility', 'visible'); // bentway
                map.setLayoutProperty('exhibition-station', 'visibility', 'none'); // ex station ontario line
                map.setLayoutProperty('ontario-line', 'visibility', 'none'); // ex station ontario line
                document.getElementById('present-menu').style.display = 'flex';
                document.getElementById('present-menu').style.top = '10px'; // move layers menu to top
                document.getElementById('tagmenu').style.display = 'none';
                document.getElementById('menu').style.display = 'none';
                document.getElementById('legend').style.display = 'flex';
                document.getElementById('future-legend').style.display = 'none';
                document.getElementById('future-action').style.display = 'none';




            } else if (radio.id === 'radio-3' && radio.checked) {
                map.setLayoutProperty('bentway_photos', 'visibility', 'none'); // bw
                map.setLayoutProperty('photos', 'visibility', 'none'); // archival
                map.setLayoutProperty('bentway', 'visibility', 'visible'); // bentway
                map.setLayoutProperty('exhibition-station', 'visibility', 'visible'); // ex station ontario line
                map.setLayoutProperty('ontario-line', 'visibility', 'visible'); // ex station ontario line
                document.getElementById('tagmenu').style.display = 'none';
                document.getElementById('menu').style.display = 'none';
                document.getElementById('legend').style.display = 'none';
                document.getElementById('future-legend').style.display = 'flex';
                document.getElementById('future-action').style.display = 'inline-block';



            }
        });
    });

    /*--------------------------------------------------------------------
    INDIGGENOUS SETUP
    --------------------------------------------------------------------*/

    // adding Indigenous Territories

    map.addSource('indigenous-territories', {
        'type': 'vector',
        'url': 'mapbox://thebentway.33xedn2f'
    });

    // adding each territory by layer

    map.addLayer({
        'id': 'indigenous-territories',
        'type': 'fill',
        'source': 'indigenous-territories',
        'maxzoom': 10,
        'paint': {
            'fill-color': ['get', 'color'],
            'fill-opacity': 0.2
        },
        'source-layer': 'indigenousTerritories-5pgtk6',
    }
    );

    // adding labels

    map.addSource('territory-labels', {
        type: 'vector',
        url: 'mapbox://thebentway.7w4kspg2'
    });

    map.addLayer({
        'id': 'territory-labels',
        'type': 'symbol',
        'source': 'territory-labels',
        'maxzoom': 11,
        'source-layer': 'indigenousTerritories-labels-b0uafp',
        'layout': {
            'icon-image': 'custom-marker',
            // get the title name from the source's "title" property
            'text-field': ['get', 'Name'],
            'text-font': ['Open Sans Regular'],
            'text-anchor': 'center',
        },
    });

    // INDIGENOUS TERRITORIES ZOOMING
    const start = {
        center: [-79.380331532, 43.646497454], // // starting center in [lng, lat]
        zoom: 13.6,
    };

    const end = {
        center: [-79.380331532, 43.646497454],
        zoom: 7,
    };

    let isAtStart = true;

    document.getElementById('fly').addEventListener('click', () => {
        // Zoom out to show Indigenous Territories
        const target = isAtStart ? end : start;
        isAtStart = !isAtStart;

        const button = document.getElementById('fly');
        button.textContent = isAtStart ? 'View Indigenous Territories' : 'Zoom Back In';

        map.flyTo({
            ...target,
            center: [-79.380331532, 43.646497454], //NE coordinates
            duration: 1000,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });


});

