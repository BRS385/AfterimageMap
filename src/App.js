import React from 'react';
import { useRef } from 'react';
import {MapContainer, TileLayer, useMapEvents} from 'react-leaflet'

import "leaflet/dist/leaflet.css";
import SidePanel from './SideMenu/SidePanel';
import ItemMarkers from './Markers/ItemMarkers';
import OtherMarkers from './Markers/OtherMarkers';
import ObstacleMarkers from './Markers/ObstacleMarker';


const position = [81.13394481915842, -27.861328125]
const style = { height: '100vh', width: '100vw', background: 'black'}


const LocationFinderDummy = () => {
  const map = useMapEvents({
      click(e) {
          console.log(e.latlng);
      },
  });
  return null;
};

const SimpleMap = () => {
  const mapRef = useRef(null);
  return ( 
      <div style={{height: '100hw', with: '100vw'}}>
        <SidePanel/>
        <MapContainer center={position} zoom={3} maxZoom={7} minZoom={3} style={style} maxBoundsViscosity={1} 
                      maxBounds={[[69.09993967425089, -194.23828125000003], [87.14993391672198, 204.08203125000003]]}>
          <TileLayer noWrap url={"./Map/{z}-{x}-{y}.jpg"}/>

          <ItemMarkers/>
          <OtherMarkers/>
          <ObstacleMarkers/>
          <LocationFinderDummy />
        </MapContainer>
      </div>
  );
};

export default SimpleMap;
