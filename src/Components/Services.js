import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../Components/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttlesection",
        info:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
      },
    ],
  };

  render() {
    return (
      <section className="section">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
