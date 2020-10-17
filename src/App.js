import React from 'react';
import $ from 'jquery';
import './App.css';
import {VectorMap} from 'react-jvectormap';
import PropTypes from 'prop-types';
import $ from 'jquery-mousewheel';

function App() {

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

const regionStyle = {
  initial: {
    fill: "#e4e4e4",
    "fill-opacity": 0.9,
    stroke: "none",
    "stroke-width": 0,
    "stroke-opacity": 0
  }
};

const series = {
  regions: [
    {
      values: mapData,
      scale: ["#AAAAAA", "#444444"],
      normalizeFunction: "polynomial"
    }
  ]
}

const containerStyle = {
  width: "100%",
  height: "100%"
};

  return (
    <div className="jvectormap-custom">
      
        
      <VectorMap
      map={"world_mill"}
      backgroundColor="transparent"
      zoomOnScroll={false}
      containerStyle={containerStyle}
      containerClassName="map"
      regionStyle={regionStyle}
      series={series}
    />
      
    </div>
  );
}

export default App;
