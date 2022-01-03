import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import topojson from './world-110m.json';
import classes from './MapView.module.css';

// Render Map with markers and tooltip of events

const MapView = (props) => {
  return (
    <div className={classes.map_container} data-testid="map_container">
      <ComposableMap width={800} height={560}>
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

        {props.eventsData.map((data) => {
          return (
            <Marker key={data.key} coordinates={data.coordinates}>
              <circle
                r={9}
                fill="red"
                stroke="#fff"
                strokeWidth={2}
                data-tip={data.title}
              />
            </Marker>
          );
        })}
      </ComposableMap>

      <ReactTooltip backgroundColor="#3A3B3C" />
    </div>
  );
};

export default MapView;
