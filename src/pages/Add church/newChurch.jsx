import React, { useState } from "react";
import MapPicker from "react-google-map-picker";

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;

const AddChurch = () => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }

  return (
    <>
      <h1>New Church</h1>
      <div
        style={{
          width: "569px",
          height: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          //   marginTop: "1vh",
        }}
      >
        <ul>
          <li
            style={{
              height: "auto",
              width: "100%",
              float: "left",
              marginTop: "2px",
            }}
          >
            <label htmlFor="email" className="label">
              Church Name
            </label>
            <div className="input_dev">
              <input
                type="text"
                placeholder="Enter the church name"
                aria-label="name"
                name="name"
                className="input"
                // value={this.state.email}
                // onChange={(e) => this.change(e)}
              />
            </div>
            <p className="message" aria-label="emailError">
              {/* {this.state.emailError} */}
            </p>
          </li>
          <li className="input_wrap">
            <label htmlFor="email" className="label">
              Location Name
            </label>
            <div className="input_dev">
              <input
                type="text"
                placeholder="Enter the location name"
                aria-label="email"
                name="locationName"
                className="input"
                // value={this.state.email}
                // onChange={(e) => this.change(e)}
              />
            </div>
            <p className="message" aria-label="emailError">
              {/* {this.state.emailError} */}
            </p>
          </li>
        </ul>
      </div>
      <div
        style={{
          marginLeft: "25%",
          marginRight: "25%",
          marginTop: "13%",
          marginBottom: "30%",
        }}
      >
        <button onClick={handleResetLocation}>Reset Location</button>
        <label>Latitute:</label>
        <input type="text" value={location.lat} disabled />
        <label>Longitute:</label>
        <input type="text" value={location.lng} disabled />
        <label>Zoom:</label>
        <input type="text" value={zoom} disabled />

        <MapPicker
          defaultLocation={defaultLocation}
          zoom={zoom}
          mapTypeId="roadmap"
          style={{ height: "300px" }}
          onChangeLocation={handleChangeLocation}
          onChangeZoom={handleChangeZoom}
          apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
        />
        <button
          aria-label="submit"
          style={{
            cursor: "pointer",
            width: "87px",
            height: "38px",
            background: "#02b1d8",
            border: "1px solid #02b1d8",
            boxSizing: "unsetborder-box",
            borderRadius: "4px",
            fontFamily: "Helvetica Neue",
            fontStyle: "normal",
            float: "right",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "21px",
            color: "#ffffff",
            marginLeft: "auto",
            marginTop: "14px",
          }}
        >
          Add Church
        </button>
      </div>
    </>
  );
};

export default AddChurch;
