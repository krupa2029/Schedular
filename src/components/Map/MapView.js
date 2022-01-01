import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import topojson from "./world-110m.json";
import classes from "./MapView.module.css";

const MapView = (props) => {
  return (
    <div className={classes.map_container}>
      <ComposableMap width={800} height={560}>
        {/* <ZoomableGroup zoom={1}> */}
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
        {/* </ZoomableGroup> */}
        {props.eventsData.map(({ key, title, coordinates }) => {
          return (
            <Marker key={key} coordinates={coordinates}>
              <circle
                r={9}
                fill="red"
                stroke="#fff"
                strokeWidth={2}
                data-tip={title}
              />
            </Marker>
          );
        })}
      </ComposableMap>
      <ReactTooltip backgroundColor="#3A3B3C"/>
    </div>
  );
};

export default MapView;
