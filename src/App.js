import React from 'react';
import './App.css';
import * as data from "./data";
import NewLink from "./components/NewsLink";
import Course from "./components/Course";
import BannerSmall from "./components/BannerSmall";
import Search from "./components/Search";
import BannerBig from "./components/BannerBig";
import Weather from "./components/Weather";
import Timetable from "./components/Timetable";
import Widget from "./components/WidgetWithList";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div>
          <NewLink data={data.newsLink} news={data.news}></NewLink>
          <Course data={data.course}></Course>
        </div>
        <BannerSmall data={data.bannerSmall}></BannerSmall>
      </div>
      <div className="search">
        <Search data={data.searchLinks}></Search>
      </div>
      <BannerBig data={data.bannerBig}></BannerBig>
      <div className="footer">
        <Weather data={ data.weather }></Weather>
        <Timetable></Timetable>
        <Widget title={"Эфир"}>
          {data.ether.map(item => 
            <li key={item.id}>
              <span>{item.title}</span>
              <span>{item.channel}</span>
            </li>)}
        </Widget>
        <Widget title={"Посещаемое"}>
          {data.visited.map(item => 
            <li key={item.id}>
              <span>{item.title}</span>
              <span>-</span>
              <span>{item.text}</span>
            </li>)}
        </Widget>
        <Widget title={"Телепрограмма"}>
          {data.programTV.map(item => 
            <li key={item.id}>
              <span>{item.time}</span>
              <span>{item.program}</span>
              <span>{item.channel}</span>
            </li>)}
        </Widget>
      </div>
    </div>
  );
}

export default App;
