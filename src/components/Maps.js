import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from '../assets/mapbox-marker-icon-20px-blue.png'
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
        mapbox.current.on('move', () => {
            setLng(mapbox.current.getCenter().lng.toFixed(4));
            setLat(mapbox.current.getCenter().lat.toFixed(4));
            setZoom(mapbox.current.getZoom().toFixed(2));
        });
    });

    async function getFarmers() {
        try {
            const res = await fetch('http://localhost:5000/posts');
            const data = await res.json();
            console.log(data.length);
            let locations = {};
            if (data.length > 0) {
                locations = data.map(item => {
                    return {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [item.location.coordinates[0], item.location.coordinates[1]]
                        },
                        properties: {
                            famerName: item.firstname,
                            //icon: 'shop',
                            address: item.address
                        }
                    }
                });
            }
            else {
                locations = `type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [${lng},${lat}]
                    },
                    properties: {
                        famerName: 'No Farms',
                        icon: '',
                        address: ''
                    }`
            }
            // console.log(locations);
            loadMap(locations);
        }
        catch (error) {
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
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        mapbox.on("load", function () {
            mapbox.loadImage(
                img1,
                (error, image) => {
                    if (error) throw error;

                    // Add the image to the map style.
                    mapbox.addImage('cat', image);
                    // Add a symbol layer
                    mapbox.addLayer({
                        id: "points",
                        type: "symbol",
                        source: {
                            type: 'geojson',
                            data: {
                                type: 'FeatureCollection',
                                features: locations
                                // features: [
                                //     {
                                //         type: 'Feature',
                                //         geometry: {
                                //             type: 'Point',
                                //             coordinates: [11.43048, 48.75334]
                                //         },
                                //         properties: {
                                //             famerName: "Herish 1",
                                //             icon: 'shop'
                                //         }
                                //     }
                                // ]
                            }
                        },
                        layout: {
                            // "icon-image": "{icon}-15",
                            // "icon-size": 1,
                            "text-field": "{famerName}",
                            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                            "text-offset": [0, 0.9],
                            "text-anchor": "top",
                            'icon-image': 'cat', // reference the image
                            'icon-size': 1
                        },
                    });
                });
        });
        mapbox.on('click', 'points', (e) => {
            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const address = e.features[0].properties.address;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(`<h5>${address}<h5/>`)
                .addTo(mapbox);
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        mapbox.on('mouseenter', 'places', () => {
            mapbox.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        mapbox.on('mouseleave', 'places', () => {
            mapbox.getCanvas().style.cursor = '';
        });
        // Add navigation control (the +/- zoom buttons)
        mapbox.addControl(new mapboxgl.NavigationControl(), "top-right");

        // Clean up on unmount
        return () => mapbox.remove();
    }
    return (<div className="container my-3">
        <h1 className="dispaly-4 text-center"><i className="fas fa-map-marked mr-4"></i>Farmer Locator</h1>
        <br />
        <div>
            {/* <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div> */}
            <div ref={mapContainer} className="map-container" />
        </div>
    </div>);
};

export default MyMap;