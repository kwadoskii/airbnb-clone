import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

export default function Map({ searchResult }) {
  const cordinates = searchResult.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));
  const center = getCenter(cordinates);
  const styles = { position: "sticky", top: "40px" };

  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    height: "calc(100vh - 40px)",
    latitude: center.latitude,
    longitude: center.longitude,
    width: "100%",
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/kwadoskii/ckselp89s7xl517qu74eqn2yu"
      onViewportChange={(viewport) => setViewport(viewport)}
      style={styles}
      {...viewport}
    >
      {searchResult.map((result, i) => (
        <div key={i}>
          <Marker latitude={result.lat} longitude={result.long}>
            <p
              aria-label="push-pin"
              className="text-2xl cursor-pointer"
              onClick={() => setSelectedLocation(result)}
              role="img"
            >
              📍
            </p>
          </Marker>

          {selectedLocation.long === result.long &&
          selectedLocation.lat === result.lat ? (
            <Popup
              className="z-50"
              captureScroll
              closeOnClick
              closeButton
              latitude={selectedLocation.lat}
              longitude={selectedLocation.long}
              onClose={() => setSelectedLocation({})}
              tipSize={8}
            >
              <p className="p-1 text-base">{result.title}</p>
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
}
