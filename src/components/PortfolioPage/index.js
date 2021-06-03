import React from 'react';
import HeroImage from '../HeroImage';
import HorizontalRule from '../HorizontalRule';
import Credit from '../Credit';
import { Container, Row } from 'react-bootstrap';
import ImageCard from '../ImageCard';
import passwordGenerator from './../../assets/images/passwordGenerator.png';
import codeQuiz from './../../assets/images/codeQuiz.png';
import workdayScheduler from './../../assets/images/workdayScheduler.png';
import weatherDashboard from './../../assets/images/weatherDashboard.png';
import goodReadme from './../../assets/images/goodReadme.png';
import teamProfile from './../../assets/images/teamProfile.png';
import noteTaker from './../../assets/images/noteTaker.png';
import employeeManagement from './../../assets/images/employeeManagement.png';
import fitnessTracker from './../../assets/images/fitnessTracker.png';
import employeeDirectory from './../../assets/images/employeeDirectory.png';
import blogSite from './../../assets/images/blogSite.png';
import planet from './../../assets/images/planet.png';
import gameWebsite from "./../../assets/images/gameWebsite.png";
import oaklandPeaceCenter from "./../../assets/images/oaklandPeaceCenter.png";
import './styles.css';

function PortfolioPage() {
  return (
    <div className="PortfolioPage-container">

      {/* Hero image */}
      <HeroImage 
        name="Portfolio"
        intro="A collection of work I've done."
        className="PortfolioPage-HeroImage-img"
      />

      <Credit 
        name="Joshua Sortino"
        link="https://unsplash.com/@sortino"
      />

      {/* Teamwork Section */}
      <h2 className="PortfolioPage-header">Teamwork.</h2>
      <p>A collection of projects that I collaborated on.</p>
      <Container fluid >
        <Row className="PortfolioPage-row">
        <ImageCard
          src={gameWebsite} 
          title="The Board Game Project"
          description="A full stack Web application used to enhance a client’s online presence within the board gaming community."
          tech="MongoDB, Mongoose, Express.js, React.js, Node.js, React Bootstrap, Axios, React Router DOM, HTML5, CSS3, JavaScript (ES6), Figma, Postman, NPM, and GitHub. ( Note: Use the following guest account to try out the application: Email: testing123@gmail.com, Password: 123123 )"
          link="https://gamewebsiteapp.herokuapp.com/"
          github="https://github.com/jngo2013/gameWebsite"
        />
          <ImageCard
            src={blogSite} 
            title="Blog Site"
            description="A web application for posting thoughts, learning new recipes, and facts about Pokemon."
            tech="HTML, CSS, JavaScript, React, Bootstrap, TravisCI, ESLint, Express, mySQL2, Node.js, and Heroku."
            link="https://project02blog.herokuapp.com/"
            github="https://github.com/Kerry-Jr/Project02"
          />
          <ImageCard
            src={planet} 
            title="Planet"
            description="A web application for planning and keeping track of events."
            tech="MongoDB, Express.js, React, Node.js, Semantic UI React, Redux, Mongoose, TravisCI, User Authentication Technologies, and Heroku. ( Note: Use the following guest account to try out the application: Email: testuser@test.com, Password: 1234567 )"
            link="https://ucbext-planet.herokuapp.com/"
            github="https://github.com/jngo2013/Planet"
          />
        </Row>
      </Container>

      <HorizontalRule />

      {/* Personal Projects */}
      <h2 className="PortfolioPage-header">Personal Projects</h2>
      <p>A collection of some of my work.</p>
      <Container fluid className="PortfolioPage-row">
        <Row>
        <ImageCard
          src={oaklandPeaceCenter} 
          title="Oakland Peace Center"
          description="I completely redesigned Oakland Peace Center's Website."
          tech="HTML, CSS, Squarespace"
          link="https://www.oaklandpeacecenter.org/"
          github={false}
        /> 
        </Row>
      </Container>

      <HorizontalRule />

      {/* Starting Out Section  */}
      <h2 className="PortfolioPage-start">Starting Out.</h2>
      <p>A collection of projects I did as a student.</p>
      <Container fluid >
        <Row className="PortfolioPage-row">
          <ImageCard
            src={passwordGenerator} 
            title="Password Generator"
            description="A web application that uses prompts to generate a random password."
            tech="HTML, CSS, JavaScript, and GitHub Pages."
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
            link={false}
            github="https://github.com/Guillermo-Martin/goodReadMeGenerator"
          />
          <ImageCard
            src={teamProfile} 
            title="Team Profile Generator"
            description="A command-line application that will create an HTML file with employee information gathered from a series of prompts."
            tech="Node.js, Inquirer, and Jest."
            link={false}
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
            link={false}
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
    </div>
  );
}

export default PortfolioPage;
