import React, { useState } from 'react';
import { Map, Marker } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers';

const MyMap = () => {
    const [center, setCenter] = useState([50.879, 4.6997]);
    const [zoom, setZoom] = useState(10);
    console.log(center, zoom);
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
    return (
        <div className='container'>
            <Map height={300}
                defaultCenter={center}
                defaultZoom={zoom}
                provider={osm}
                onBoundsChanged={
                    ({ center, zoom }) => {
                        setCenter(center)
                        setZoom(zoom)
                    }
                } >
                <Marker width={30}
                    anchor={center}
                    color={color}
                    onClick={
                        () => setHue(hue + 20)
                    }
                />
            </Map>
        </div>
    )
}

export default MyMap;