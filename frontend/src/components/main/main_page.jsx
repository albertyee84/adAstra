import React from "react";
import DatesContainer from "../../components/calendar/dates_container";
import MapContainer from '../map/map_container';
import '../stylesheets/main_page.scss';
import WeatherContainer from "../weather/weather_container";

class MainPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {   
    return (
      <div className="main">
        <h2>adAstra</h2>
        <div className="content-wrapper">
          <WeatherContainer />
        </div>
        <div className="main-content">
          <div className="content-wrapper">
           <DatesContainer events={this.props.events} />
          </div>
          <div className="content-wrapper">
            <h3>Constellation Map</h3>
            <MapContainer />
            <p>
              Share your location to find constellations you can currently view.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
