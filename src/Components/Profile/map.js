import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "300px",
};



export default function Maps(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = {
    lat: parseFloat(props?.userValue?.address?.geo?.lat) ,
    lng: parseFloat(props?.userValue?.address?.geo?.lng),
  };
  const [map, setMap] = React.useState(null);
  const [mapInitialized, setMapInitialized] = React.useState(false);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const handleMarkerClick = () => {
    if (mapInitialized) {
      map.dispose();
    }
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={center} onClick={handleMarkerClick} />
      </>
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
}
