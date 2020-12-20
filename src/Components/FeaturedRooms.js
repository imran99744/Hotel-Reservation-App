import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "../Components/Loading";
import Room from "../Components/Room";
import Title from "../Components/Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms

    return (
      <div className="featured-rooms">
        <Loading />
        </div>
      
    );
  }
}
