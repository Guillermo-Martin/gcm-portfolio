import React from 'react';
import HeroImage from './HeroImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ImageCard from './../components/ImageCard';
import passwordGenerator from './../assets/images/passwordGenerator.png';
import codeQuiz from './../assets/images/codeQuiz.png';
import workdayScheduler from './../assets/images/workdayScheduler.png';
import weatherDashboard from './../assets/images/weatherDashboard.png';
import goodReadme from './../assets/images/goodReadme.png';
import teamProfile from './../assets/images/teamProfile.png';
import noteTaker from './../assets/images/noteTaker.png';
import employeeManagement from './../assets/images/employeeManagement.png';
import fitnessTracker from './../assets/images/fitnessTracker.png';
import employeeDirectory from './../assets/images/employeeDirectory.png';
import blogSite from './../assets/images/blogSite.png';

function PortfolioPage() {
  return (
    <div className="PortfolioPage-container">

      {/* Hero image */}
      <HeroImage />

      {/* Starting Out Section  */}
      <h2 className="PortfolioPage-header">Starting Out.</h2>
      <p>We've all got to start somewhere.</p>
      <p>A collection of projects I did as a student.</p>
      <Container fluid >
        <Row className="PortfolioPage-row">
          <ImageCard
            src={passwordGenerator} 
            title="Password Generator"
            description="A web application that uses prompts to generate a random password."
            tech="Made using: HTML, CSS, JavaScript, and GitHub Pages."
            link="https://guillermo-martin.github.io/passwordGenerator/"
            github="https://github.com/Guillermo-Martin/passwordGenerator"
          />
          <ImageCard
            src={codeQuiz} 
            title="Code Quiz"
            description="A web application that tests a user's JavaScript knowledge."
            tech="HTML, JavaScript, Bootstrap, and GitHub Pages."
            link="https://guillermo-martin.github.io/codeQuiz/"
            github="https://github.com/Guillermo-Martin/codeQuiz"
          />
          <ImageCard
            src={workdayScheduler} 
            title="Work Day Scheduler"
            description="A web application that allows a user to plan their workday."
            tech="HTML, JavaScript, jQuery, Bootstrap, and Moment.js."
            link="https://guillermo-martin.github.io/dayPlanner/"
            github="https://github.com/Guillermo-Martin/dayPlanner"
          />
          <ImageCard
            src={weatherDashboard} 
            title="Weather Dashboard"
            description="A web application that provides the current weather and a 5-day forecast for a city."
            tech="HTML, CSS, JavaScript, jQuery, Bootstrap, OpenWeather API, Moment.js, and GitHub Pages."
            link="https://guillermo-martin.github.io/weatherDashboard/"
            github="https://github.com/Guillermo-Martin/weatherDashboard"
          />
          <ImageCard
            src={goodReadme} 
            title="Good ReadMe Generator"
            description="A command-line application that will create a 'readme' file based off user input."
            tech="Node.js, Axios, Dotenv, and Inquirer."
            link="https://github.com/Guillermo-Martin/goodReadMeGenerator"
            github="https://github.com/Guillermo-Martin/goodReadMeGenerator"
          />
          <ImageCard
            src={teamProfile} 
            title="Team Profile Generator"
            description="A command-line application that will create an HTML file with employee information gathered from a series of prompts."
            tech="Node.js, Inquirer, and Jest."
            link="https://github.com/Guillermo-Martin/teamProfileGenerator"
            github="https://github.com/Guillermo-Martin/teamProfileGenerator"
          />
          <ImageCard
            src={noteTaker} 
            title="Note Taker"
            description="A web application that allows a user to take notes using Express."
            tech="HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Express, UUID, and Heroku."
            link="https://immense-dusk-60188.herokuapp.com/"
            github="https://github.com/Guillermo-Martin/noteTaker"
          />
          <ImageCard
            src={employeeManagement} 
            title="Employee Management System"
            description="A command-line application for adding, viewing, updating, and deleting employee information."
            tech="Node.js, Inquirer, mySQL, mySQL Workbench, and ESLint."
            link="https://github.com/Guillermo-Martin/employeeManagementSystem"
            github="https://github.com/Guillermo-Martin/employeeManagementSystem"
          />
          <ImageCard
            src={fitnessTracker} 
            title="Fitness Tracker"
            description="A web application that allows a user to create and track their workouts."
            tech="Express, MongoDB, Mongoose, Morgan, and Heroku."
            link="https://peaceful-forest-29536.herokuapp.com/"
            github="https://github.com/Guillermo-Martin/workoutTracker"
          />
          <ImageCard
            src={employeeDirectory} 
            title="Employee Directory"
            description="A web application that lists employee information."
            tech="React, Random User Generator API, and Heroku."
            link="https://infinite-thicket-84161.herokuapp.com/"
            github="https://github.com/Guillermo-Martin/employeeDirectory"
          />
          
        </Row>
      </Container>

      {/* Teamwork Section */}
      <h2 className="PortfolioPage-header">Teamwork.</h2>
      <p>Makes the dreams work.</p>
      <p>A collection of projects that I collaborated on.</p>
      <Container fluid className="PortfolioPage-row">
        <Row> 
          
        </Row>
      </Container>

      {/* Personal Projects */}
      {/* <h2 className="PortfolioPage-header">Growing.</h2>
      <p>Continuing the journey.</p>
      <p>A collection of some of my work.</p>
      <Container fluid className="PortfolioPage-row">
        <Row> 
          
        </Row>
      </Container> */}

    </div>
  );
}

export default PortfolioPage;
