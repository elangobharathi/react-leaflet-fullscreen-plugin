# react-leaflet-fullscreen-plugin

Plugin for [react-leaflet v3](https://github.com/PaulLeCam/react-leaflet) to integrate [leaflet.fullscreen](https://github.com/brunob/leaflet.fullscreen).

Click here to see the [codesandbox demo](https://codesandbox.io/s/react-leaflet-fullscreen-plugin-example-k17g2?file=/src/Example.js).

## Install

`npm install react-leaflet-fullscreen-plugin --save`

or

`yarn add react-leaflet-fullscreen-plugin`

Make sure that you have the following peer dependencies installed.

`npm install leaflet react-leaflet react react-dom --save`

or

`yarn add leaflet react-leaflet react react-dom`

## Getting started

You need to wrap this component into MapContainer component and pass the options as shown below. If you want to do something on the enter and exit fullscreen events, you can either use `eventHandlers` prop as shown in the example below or `useMapEvents` of react-leaflet.

```javascript
import { MapContainer, TileLayer } from 'react-leaflet';
import Fullscreen from 'react-leaflet-fullscreen-plugin';

const Example = () => {
  const options = {
    position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, default topleft
    title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
    titleCancel: 'Exit fullscreen mode', // change the title of the button when fullscreen is on, default Exit Full Screen
    content: null, // change the content of the button, can be HTML, default null
    forceSeparateButton: true, // force separate button to detach from zoom buttons, default false
    forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
    fullscreenElement: false, // Dom element to render in full screen, false by default, fallback to map._container
  };

  return (
    <MapContainer
      className="map"
      center={[20.5937, 78.9629]}
      zoom={5}
      doubleClickZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attribution/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />
      <Fullscreen
        eventHandlers={{
          enterFullscreen: (event) => console.log('entered fullscreen', event),
          exitFullscreen: (event) => console.log('exited fullscreen', event),
        }}
        {...options}
      />
    </MapContainer>
  );
};
```
Using `useMapEvents` of react-leaflet to subscribe to the enter and exit events.

```javascript
import { useMapEvents } from 'react-leaflet';
import Fullscreen from 'react-leaflet-fullscreen-plugin';

const FullscreenWithUseMapEvents = ({ options }) => {
  useMapEvents({
    enterFullscreen(event) {
      console.log('Through UseMapEvents  - entered fullscreen', event);
    },
    exitFullscreen(event) {
      console.log('Through UseMapEvents  - exited fullscreen', event);
    },
  });

  return <Fullscreen {...options} />;
};
```
