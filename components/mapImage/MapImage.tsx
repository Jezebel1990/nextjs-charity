import { useState } from "react";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;  

const MapImage = () => {
  const [showPopup, setShowPopup] = useState(true); 
  const position = { latitude: -23.7131, longitude: -46.8508 }; 

  return (
    <Map
      initialViewState={{
        latitude: position.latitude,
        longitude: position.longitude,
        zoom: 15,
      }}
      style={{ width: "100%", height: "250px" }}  
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <NavigationControl position="top-right" />  

      <Marker latitude={position.latitude} longitude={position.longitude} anchor="bottom">
        <img
          src="/location.svg"
          alt="Localização"
          width={30}
          height={30}
        />
      </Marker>

      {showPopup && (
        <Popup
          latitude={position.latitude}
          longitude={position.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
          anchor="top"
        >
          <div>Cão Sem Dono</div>
        </Popup>
      )}
    </Map>
  );
};

export default MapImage;
