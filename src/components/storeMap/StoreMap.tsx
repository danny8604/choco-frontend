import React, { useMemo, useState } from "react";
import styles from "./StoreMap.module.scss";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 25.0066868,
  lng: 121.4739627,
};
const storeA13Center = {
  lat: 25.0358333,
  lng: 121.5678978,
};
const storeStationCenter = {
  lat: 25.049408,
  lng: 121.517341,
};

type mapMarker = {
  center: {
    lat: number;
    lng: number;
  };
  active: number;
};

const StoreMap = React.memo(() => {
  const [map, setMap] = useState<google.maps.Map>();
  const [active, setActive] = useState(1);

  const mapHandler = ({ center, active }: mapMarker) => {
    map?.panTo(center);
    setActive(active);
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB8ZlJF1NmBsicSMQNWQ7_sq7IPruZXU7c",
  });

  return isLoaded ? (
    <section className={styles.mapContainer}>
      <div className={styles.mapInfo}>
        <h4>CHOCO STORE</h4>
        <button
          className={`${styles.mapBtn} ${active === 1 && styles.active}`}
          onClick={() => mapHandler({ center, active: 1 })}
        >
          <h6>GlobalMall 環球購物中心 新北中和 中和環球店</h6>
          <p>235新北市中和區中山路三段122號-3F</p>
        </button>
        <button
          className={`${styles.mapBtn} ${active === 2 && styles.active}`}
          onClick={() => mapHandler({ center: storeA13Center, active: 2 })}
        >
          <h6>遠東百貨 信義A13 A13店</h6>
          <p>110台北市信義區松仁路58號-6F</p>
        </button>
        <button
          className={`${styles.mapBtn} ${active === 3 && styles.active}`}
          onClick={() => mapHandler({ center: storeStationCenter, active: 3 })}
        >
          <h6>京站時尚廣場 京站店</h6>
          <p>103台北市大同區承德路一段1號-2F</p>
        </button>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={(map) => setMap(map)}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        <Marker position={center} />
        <Marker position={storeA13Center} />
        <Marker position={storeStationCenter} />
      </GoogleMap>
    </section>
  ) : (
    <></>
  );
});

export default StoreMap;
