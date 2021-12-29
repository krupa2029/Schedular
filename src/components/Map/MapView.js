import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import topojson from "./world-110m.json";
import classes from "../Styles/MapView.module.css";

const MapView = () => {
  return (
    <div className={classes.map_container}>
      <ComposableMap width={800} height={560}>
        <ZoomableGroup zoom={1}>
          <Geographies geography={topojson}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  strokeWidth={1}
                  stroke="#01baef"
                  fill="#fff"
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapView;
