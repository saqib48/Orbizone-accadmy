import React from 'react'

function Contectright() {
  return (
    <div>
      <div id="embed-map-canvas" className="w-full h-full">
        <iframe
          className="h-[400px] w-full border-0"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=al+hafiz+mobile+shop,Garha+Near+Dhol+Sikandar,+Chiniot,+Punjab+35400,+Pakistan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Contectright
