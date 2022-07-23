import React, { Component } from "react";
import axios from "axios";

export default class City extends Component {
  constructor(props) {
    super(props);
  }

  // location : London
  // condition : text,icon
  // humidity , feelslike Celsius , uv , visible km , wind speed , last updated

  render() {
    return (
      <div className='h-50 flex ease-in duration-300 flex-col hover:-translate-x-1 hover:-translate-y-2 hover:shadow-2xl bg-white w-[100%] mt-4 border py-5 items-center rounded-md shadow-xl'>
        <div className='flex jusitfy-between space-x-10 py-4 px-6 border-b'>
          <span className='text-xl font-semibold'>
            {this.props.data.location.name} , {this.props.data.location.country}
          </span>
          <div className='flex items-start'>
            <span className='text-xl'>
              {this.props.data.current.feelslike_c}°C
            </span>
            <img
              width='30px'
              className='-mt-2'
              src={this.props.data.current.condition.icon}
              alt=''
            />
          </div>
        </div>
        <div className='flex px-4 text-left flex-col'>
          <span className=' text-2xl'>
            {this.props.data.current.condition.text}
          </span>
          <span>Humidity : {this.props.data.current.humidity}</span>
          <span>UV index : {this.props.data.current.uv}</span>
          <span>Wind Speed : {this.props.data.current.wind_kph} km/hr</span>
          <span>Wind Direction : {this.props.data.current.wind_dir}</span>
          <span>Visible distance : {this.props.data.current.vis_km} km</span>
          <span>Last updated on : {this.props.data.current.last_updated}</span>
        </div>
      </div>
    );
  }
}
