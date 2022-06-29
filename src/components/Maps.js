import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "../assets/mapbox-marker-icon-20px-blue.png";
//import img1 from '../assets/logo.png'

mapboxgl.accessToken = process.env.REACT_APP_TOKEN;

const MyMap = () => {

    const mapContainer = useRef(null);
    const mapbox = useRef(null);
    const [lng, setLng] = useState(11.3861);
    const [lat, setLat] = useState(50.5527);
    const [zoom, setZoom] = useState(4.5);

    // Initialize map when component mounts
    useEffect(() => {

        getFarmers();
        if (!mapbox.current) return; // wait for map to initialize
        mapbox.current.on("move", () => {
            setLng(mapbox.current.getCenter().lng.toFixed(4));
            setLat(mapbox.current.getCenter().lat.toFixed(4));
            setZoom(mapbox.current.getZoom().toFixed(2));
        });
    });

    async function getFarmers() {
        try {

            const res = await fetch("http://localhost:5000/details");
            const data = await res.json();
            console.log(data);
            let locations = {};
            if (data.length > 0) {
                locations = data.map((item) => {
                    return {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [
                                item.farmer.location.coordinates[0],
                                item.farmer.location.coordinates[1],
                            ],
                        },
                        properties: {
                            farmName: item.farmer.farmName,//label for displaying
                            farmerName: item.farmer.firstname + " " + item.farmer.lastname,//Label for displaying.
                            searchItems: item.farmer.farmName + item.farmer.address + item.farmer.postcode + item.ProductName + item.Category + item.Description,
                            //icon: 'shop',
                            address: item.farmer.address,
                            uniqfarmName: item.farmer.farmName,
                        },

                    };
                });
            } else {
                locations = `type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [${lng},${lat}]
                    },
                    properties: {
                        famerName: 'No Farms',
                        icon: '',
                        address: ''
                    }`;
            }

            loadMap(locations);

        } catch (error) {
            toast.error(error.message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    function loadMap(locations) {
        const mapbox = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });
        mapbox.on("load", function () {
            mapbox.loadImage(img1, (error, image) => {
                if (error) throw error;

                // Add the image to the map style.
                mapbox.addImage("point", image);
                // Add a symbol layer
                mapbox.addLayer({
                    id: "points",
                    type: "symbol",
                    source: {
                        type: "geojson",
                        data: {
                            type: "FeatureCollection",
                            features: locations
                            // features: [
                            //     {
                            //         type: "Feature",
                            //         geometry: {
                            //             type: "Point",
                            //             coordinates: [11.43048, 48.75334],
                            //         },
                            //         properties: {
                            //             famerName: "Herish 1",
                            //             icon: "shop",
                            //         },
                            //     },
                            // ],
                        },
                    },
                    layout: {
                        // "icon-image": "{icon}-15",
                        // "icon-size": 1,
                        "text-field": "{farmName}",
                        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                        "text-offset": [0, 0.9],
                        "text-anchor": "top",
                        "icon-image": "point", // reference the image
                        "icon-size": 1,
                    },


                });
            });
            renderListings(locations); //To display search box initially without mouse movement
        });
        //Search code starts

        const filterEl = document.getElementById('feature-filter');
        const listingEl = document.getElementById('feature-listing');
        function renderListings(locations) {
            // console.log(locations);
            const key = 'uniqfarmName';
            const _uniqlocations = [...new Map(locations.map(item => [item.properties[key], item])).values()];// [...new Set(locations.map(item => item.properties.farmName))];;
            // console.log(_uniqlocations);
            const empty = document.createElement('p');
            // Clear any existing listings
            listingEl.innerHTML = '';
            if (_uniqlocations.length) {
                for (const feature of _uniqlocations) {
                    const itemLink = document.createElement('p');
                    const label = `${feature.properties.farmName} (${feature.properties.address})`;
                    // itemLink.href = '';//feature.properties.wikipedia;
                    // itemLink.target = ''//'_blank';
                    itemLink.textContent = label;
                    itemLink.style.cursor = "pointer"
                    // itemLink.addEventListener('mouseover', () => {
                    //     // mapbox.getCanvas().style.cursor = 'pointer';
                    //     // Highlight corresponding feature on the map
                    //     popup
                    //         .setLngLat(feature.geometry.coordinates)
                    //         .setHTML(`<h5>${feature.properties.farmName} \n ${feature.properties.address}<h5/>`)
                    //         //.setText(label)
                    //         .addTo(mapbox);
                    // });
                    listingEl.appendChild(itemLink);
                }

                // Show the filter input
                filterEl.parentNode.style.display = 'block';
            } else if (_uniqlocations.length === 0 && filterEl.value !== '') {
                empty.textContent = 'No results found';
                listingEl.appendChild(empty);
            } else {
                empty.textContent = 'Drag the map to populate results';
                listingEl.appendChild(empty);

                // Hide the filter input
                filterEl.parentNode.style.display = 'none';

                // remove features filter
                mapbox.setFilter('points', ['has', 'searchItems']);
            }
        }
        const popup = new mapboxgl.Popup({
            closeButton: false
        });
        function normalize(string) {
            return string.trim().toLowerCase();
        }
        function getUniqueFeatures(features, comparatorProperty) {
            const uniqueIds = new Set();
            const uniqueFeatures = [];
            for (const feature of features) {
                const id = feature.properties[comparatorProperty];
                if (!uniqueIds.has(id)) {
                    uniqueIds.add(id);
                    uniqueFeatures.push(feature);
                }
            }
            return uniqueFeatures;
        }
        mapbox.on('movestart', () => {
            // reset features filter as the map starts moving
            mapbox.setFilter('points', ['has', 'searchItems']);
        });
        mapbox.on('moveend', () => {
            //  console.log('rendering locations');

            const tempfeatures = mapbox.queryRenderedFeatures({ layers: ['points'] });
            // console.log(tempfeatures);
            if (tempfeatures) {
                const uniqueFeatures = getUniqueFeatures(tempfeatures, 'searchItems');
                // Populate features for the listing overlay.
                // console.log(uniqueFeatures);
                renderListings(uniqueFeatures);

                // Clear the input container
                filterEl.value = '';

                // Store the current features in sn `airports` variable to
                // later use for filtering on `keyup`.
                locations = uniqueFeatures;
            }
        });
        mapbox.on('mousemove', 'points', (e) => {
            // Change the cursor style as a UI indicator.
            mapbox.getCanvas().style.cursor = 'pointer';

            // Populate the popup and set its coordinates based on the feature.
            const tempfeature = e.features[0];
            popup
                .setLngLat(tempfeature.geometry.coordinates)
                .setHTML(`<h5>${tempfeature.properties.farmName} \n ${tempfeature.properties.address}<h5/>`)
                // .setText(
                //     `${tempfeature.properties.farmerName} 'here' (${tempfeature.properties.address})`
                // )
                .addTo(mapbox);

            // new mapboxgl.Popup()
            //     .setLngLat(coordinates)
            //     .setHTML(`<h5>${address}<h5/>`)
            //     .addTo(mapbox);
        });
        mapbox.on('mouseleave', 'points', () => {
            mapbox.getCanvas().style.cursor = '';
            popup.remove();
        });
        filterEl.addEventListener('keyup', (e) => {
            const value = normalize(e.target.value);

            // Filter visible features that match the input value.
            const filtered = [];
            for (const feature of locations) {
                const name = normalize(feature.properties.searchItems);
                const code = normalize(feature.properties.address);

                if (name.includes(value) || code.includes(value)) {
                    filtered.push(feature);
                }
            }

            // Populate the sidebar with filtered results
            renderListings(filtered);

            // Set the filter to populate features into the layer.
            if (filtered.length) {
                mapbox.setFilter('points', [
                    'match',
                    ['get', 'searchItems'],
                    filtered.map((feature) => {
                        return feature.properties.searchItems;
                    }),
                    true,
                    false
                ]);
            }
        });
        // Add navigation control (the +/- zoom buttons)
        mapbox.addControl(new mapboxgl.NavigationControl(), "top-right");



        mapbox.on("click", "points", (e) => {
            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const address = e.features[0].properties.address;
            const farmName = e.features[0].properties.farmName;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(`<h5>${address} \n ${address}<h5/>`)
                .addTo(mapbox);
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        mapbox.on("mouseenter", "points", () => {
            mapbox.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves.
        mapbox.on("mouseleave", "points", () => {
            mapbox.getCanvas().style.cursor = "";
            popup.remove();
        });
        renderListings([]);
        ////


        // Clean up on unmount
        return () => mapbox.remove();
    }
    return (
        <div ><h1 className="dispaly-4 text-center">
            <i className="fas fa-map-marked mr-4"></i>FARM/PRODUCT LOCATOR</h1>
            <div style={{ display: "flex", border: "1px solid green", borderRadius: "4px" }}>
                <br />
                <div id="map">
                    {/* <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div> */}

                    <div ref={mapContainer} className="map-container" />

                </div>
                <div className="map-overlay">
                    <fieldset>
                        <input id="feature-filter" type="text" placeholder="Search here" />
                    </fieldset>
                    <div id="feature-listing" className="listing"></div>
                </div>

            </div >

            <br />
        </div>

    );
};

export default MyMap;
