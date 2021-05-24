import { createControlComponent } from '@react-leaflet/core';
import { useMapEvents } from 'react-leaflet';
import * as L from 'leaflet';
import 'leaflet.fullscreen';
import screenfull from 'screenfull';
import './Control.FullScreen.css';

function createLeafletControl(props) {
  window.screenfull = screenfull;
  return L.control.fullscreen(props);
}

const Fullscreen = createControlComponent(createLeafletControl);

const getEventsFromProps = ({ enterFullscreen, exitFullscreen }) => {
  const events = {};

  if (enterFullscreen) {
    events.enterFullscreen = enterFullscreen;
  }

  if (exitFullscreen) {
    events.exitFullscreen = exitFullscreen;
  }

  return events;
};

const FullscreenWithEvents = ({ eventHandlers = {}, ...props }) => {
  useMapEvents({ ...getEventsFromProps(eventHandlers) });

  return <Fullscreen {...props} />;
};

export default FullscreenWithEvents;
