import React from 'react';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
//import PageNav from '../../common/PageNav';

const downloadAddress =
  'https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv';
const readMoreAddress =
  'https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="graphs-section">
        <div className="graph-container">
          <img
            src={GrantRatesByOfficeImg}
            alt="bar chart"
            className="gr-office-img"
          />

          <h2>Search Grant Rates By Office</h2>
        </div>

        <div className="graph-container">
          <img
            className="gr-nationality-img"
            src={GrantRatesByNationalityImg}
            alt="pie chart"
          />

          <h2>Search Grant Rates By Nationality</h2>
        </div>

        <div className="graph-container">
          <img
            src={GrantRatesOverTimeImg}
            alt="line chart"
            className="gr-time-img"
          />

          <h2>Search Grant Rates Over Time</h2>
        </div>
      </div>
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <div className="download-data-btn-container">
          <a href={downloadAddress}>
            <Button
              type="default"
              style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
              onClick={() => history.push('/graphs')}
            >
              Download the Data
            </Button>
          </a>
        </div>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <h1>Systemic Disparity Insights</h1>
        <div className="data-container">
          <div className="first-data-point-container">
            <h2>36%</h2>
            <h3>
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36 percent from an average of 44 percent in
              fiscal year 2016 to 28 percent in fiscal year 2020.
            </h3>
          </div>
          <div className="second-data-point-container">
            <h2>5%</h2>
            <h3>
              The New York asylum office grant rate dropped to 5 percent in
              fiscal year 2020.
            </h3>
          </div>
          <div className="third-data-point-container">
            <h2>6x Lower</h2>
            <h3>
              Between fiscal year 2017 and 2020, the New York asylum office's
              average grant rate was six times lower than the San Francisco
              asylum office's.
            </h3>
          </div>
        </div>
        <a href={readMoreAddress}>
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          >
            Read More
          </Button>
        </a>

        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
