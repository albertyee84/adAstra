import React from "react";
import DatesContainer from "../../components/calendar/dates_container";
import MapContainer from '../map/map_container';
import '../stylesheets/main_page.scss';
import WeatherContainer from "../weather/weather_container";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchEvents()
      .then(() => {
        document.querySelector('.create-event-icon').addEventListener('click', () => {
          document.querySelector('.event-modal-container').classList.remove('hidden');
          document.querySelector('.event-form-modal').classList.remove('hidden');
        })
      })
  }

  render() {   
    return (
      <div className="main">
        <h2>adAstra</h2>
        <div className="main-content">          
          <div className="content-wrapper">
            <WeatherContainer />
            <MapContainer />
          </div>

          <div className="content-wrapper">
            <DatesContainer events={this.props.events} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
