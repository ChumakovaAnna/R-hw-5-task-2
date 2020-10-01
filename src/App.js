import React from 'react';
import './App.css';
import * as data from "./data";
import NewLink from "./components/NewsLink";
import Course from "./components/Course";
import BannerSmall from "./components/BannerSmall";
import Search from "./components/Search";
import BannerBig from "./components/BannerBig";
import Footer from "./components/Footer";

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
      <Footer data={data}></Footer>
    </div>
  );
}

export default App;
