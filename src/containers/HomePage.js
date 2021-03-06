import React, { Component } from "react";
import DropDownButton from "../components/DropDownButton";
import "./HomePage.css";
import { data } from "../components/MyData";
import { Helmet } from "react-helmet";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <head>
          <Helmet>
            <title>Quincy's Portfolio</title>
          </Helmet>
        </head>
        <body>
          <header>
            <div className='showcase-content'>
              <h1>Quincy Hill</h1>
              <p>Engineer | Developer</p>
              <div>
                <h3>therealquincyhill@gmail.com</h3>
              </div>
              <div>
                <h3>224-256-0892</h3>
              </div>
              <div>
                <h3>
                  <a href='https://github.com/quincyhill'>Github</a>
                </h3>
              </div>
              <div>
                <h3>
                  <a href='https://www.linkedin.com/in/quincy-hill-4bb550176/'>
                    LinkedIn
                  </a>
                </h3>
              </div>
            </div>
          </header>
          <div className='container'>
            <div>
              <section>
                <DropDownButton name='Goals' content={data.first} />
              </section>
              <section>
                <DropDownButton name='Education' content={data.second} />
              </section>
              <section>
                <DropDownButton
                  name='Projects | Experience'
                  content={data.third}
                />
              </section>
              <section>
                <DropDownButton name='Skill Set' content={data.fourth} />
              </section>
            </div>
          </div>
          <footer className='footer'>
            <p>Copyright &copy; 2019 Quincy Hill</p>
          </footer>
        </body>
      </div>
    );
  }
}
