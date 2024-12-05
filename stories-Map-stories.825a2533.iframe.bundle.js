"use strict";(self.webpackChunkmy_storybook_new=self.webpackChunkmy_storybook_new||[]).push([[3823],{"./src/stories/Map.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomZoomMap:()=>CustomZoomMap,DefaultMap:()=>DefaultMap,MultipleMarkersMap:()=>MultipleMarkersMap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Map_stories});__webpack_require__("./node_modules/react/index.js");var MapContainer=__webpack_require__("./node_modules/react-leaflet/lib/MapContainer.js"),TileLayer=__webpack_require__("./node_modules/react-leaflet/lib/TileLayer.js"),Marker=__webpack_require__("./node_modules/react-leaflet/lib/Marker.js"),Popup=__webpack_require__("./node_modules/react-leaflet/lib/Popup.js"),leaflet_src=(__webpack_require__("./node_modules/leaflet/dist/leaflet.css"),__webpack_require__("./node_modules/leaflet/dist/leaflet-src.js")),leaflet_src_default=__webpack_require__.n(leaflet_src),marker_icon=__webpack_require__("./node_modules/leaflet/dist/images/marker-icon.png"),marker_shadow=__webpack_require__("./node_modules/leaflet/dist/images/marker-shadow.png"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let DefaultIcon=leaflet_src_default().icon({iconUrl:marker_icon,shadowUrl:marker_shadow});leaflet_src_default().Marker.prototype.options.icon=DefaultIcon;const Map_Map=_ref=>{let{center=[51.505,-.09],zoom=13,markers=[]}=_ref;return(0,jsx_runtime.jsx)("div",{className:"map-container",children:(0,jsx_runtime.jsxs)(MapContainer.W,{center,zoom,scrollWheelZoom:!1,children:[(0,jsx_runtime.jsx)(TileLayer.e,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),markers.map(((marker,index)=>(0,jsx_runtime.jsx)(Marker.p,{position:marker.position,children:(0,jsx_runtime.jsx)(Popup.z,{children:marker.popupText})},index)))]})})},stories_Map=Map_Map;Map_Map.__docgenInfo={description:"",methods:[],displayName:"Map",props:{center:{defaultValue:{value:"[51.505, -0.09]",computed:!1},required:!1},zoom:{defaultValue:{value:"13",computed:!1},required:!1},markers:{defaultValue:{value:"[]",computed:!1},required:!1}}};const Map_stories={title:"Components/Map Component",component:stories_Map,tags:["autodocs"],argTypes:{center:{control:"array",description:"Center of the map (latitude, longitude)."},zoom:{control:"number",description:"Zoom level of the map."},markers:{control:"object",description:"Array of markers with position and popup text."}}},Template=args=>(0,jsx_runtime.jsx)(stories_Map,{...args}),DefaultMap=Template.bind({});DefaultMap.args={center:[51.505,-.09],zoom:13,markers:[{position:[51.505,-.09],popupText:"Default Marker"}]},DefaultMap.parameters={docs:{source:{code:"import React from 'react';\nimport { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';\nimport 'leaflet/dist/leaflet.css'; // Leaflet default styles\nimport './Map.css'; // Import the custom styles\n\n// If you're not using an icon library, you need to fix the missing marker icons in Leaflet\nimport L from 'leaflet';\nimport markerIcon from 'leaflet/dist/images/marker-icon.png';\nimport markerShadow from 'leaflet/dist/images/marker-shadow.png';\n\nlet DefaultIcon = L.icon({\n  iconUrl: markerIcon,\n  shadowUrl: markerShadow,\n});\n\nL.Marker.prototype.options.icon = DefaultIcon;\n\nconst Map = ({ center = [51.505, -0.09], zoom = 13, markers = [] }) => {\n  return (\n    <div className=\"map-container\">\n      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>\n        <TileLayer\n          url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n        />\n        {markers.map((marker, index) => (\n          <Marker key={index} position={marker.position}>\n            <Popup>{marker.popupText}</Popup>\n          </Marker>\n        ))}\n      </MapContainer>\n    </div>\n  );\n};\n\nexport default Map;\n"}}};const MultipleMarkersMap=Template.bind({});MultipleMarkersMap.args={center:[51.505,-.09],zoom:10,markers:[{position:[51.505,-.09],popupText:"Marker 1"},{position:[51.515,-.1],popupText:"Marker 2"},{position:[51.52,-.08],popupText:"Marker 3"}]},MultipleMarkersMap.parameters={docs:{source:{code:"import React from 'react';\nimport { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';\nimport 'leaflet/dist/leaflet.css'; // Leaflet default styles\nimport './Map.css'; // Import the custom styles\n\n// If you're not using an icon library, you need to fix the missing marker icons in Leaflet\nimport L from 'leaflet';\nimport markerIcon from 'leaflet/dist/images/marker-icon.png';\nimport markerShadow from 'leaflet/dist/images/marker-shadow.png';\n\nlet DefaultIcon = L.icon({\n  iconUrl: markerIcon,\n  shadowUrl: markerShadow,\n});\n\nL.Marker.prototype.options.icon = DefaultIcon;\n\nconst Map = ({ center = [51.505, -0.09], zoom = 13, markers = [] }) => {\n  return (\n    <div className=\"map-container\">\n      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>\n        <TileLayer\n          url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n        />\n        {markers.map((marker, index) => (\n          <Marker key={index} position={marker.position}>\n            <Popup>{marker.popupText}</Popup>\n          </Marker>\n        ))}\n      </MapContainer>\n    </div>\n  );\n};\n\nexport default Map;\n"}}};const CustomZoomMap=Template.bind({});CustomZoomMap.args={center:[51.505,-.09],zoom:5,markers:[{position:[51.505,-.09],popupText:"Zoomed Out Marker"}]},CustomZoomMap.parameters={docs:{source:{code:"import React from 'react';\nimport { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';\nimport 'leaflet/dist/leaflet.css'; // Leaflet default styles\nimport './Map.css'; // Import the custom styles\n\n// If you're not using an icon library, you need to fix the missing marker icons in Leaflet\nimport L from 'leaflet';\nimport markerIcon from 'leaflet/dist/images/marker-icon.png';\nimport markerShadow from 'leaflet/dist/images/marker-shadow.png';\n\nlet DefaultIcon = L.icon({\n  iconUrl: markerIcon,\n  shadowUrl: markerShadow,\n});\n\nL.Marker.prototype.options.icon = DefaultIcon;\n\nconst Map = ({ center = [51.505, -0.09], zoom = 13, markers = [] }) => {\n  return (\n    <div className=\"map-container\">\n      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>\n        <TileLayer\n          url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n        />\n        {markers.map((marker, index) => (\n          <Marker key={index} position={marker.position}>\n            <Popup>{marker.popupText}</Popup>\n          </Marker>\n        ))}\n      </MapContainer>\n    </div>\n  );\n};\n\nexport default Map;\n"}}};const __namedExportsOrder=["DefaultMap","MultipleMarkersMap","CustomZoomMap"];DefaultMap.parameters={...DefaultMap.parameters,docs:{...DefaultMap.parameters?.docs,source:{originalSource:"args => <Map {...args} />",...DefaultMap.parameters?.docs?.source}}},MultipleMarkersMap.parameters={...MultipleMarkersMap.parameters,docs:{...MultipleMarkersMap.parameters?.docs,source:{originalSource:"args => <Map {...args} />",...MultipleMarkersMap.parameters?.docs?.source}}},CustomZoomMap.parameters={...CustomZoomMap.parameters,docs:{...CustomZoomMap.parameters?.docs,source:{originalSource:"args => <Map {...args} />",...CustomZoomMap.parameters?.docs?.source}}}}}]);