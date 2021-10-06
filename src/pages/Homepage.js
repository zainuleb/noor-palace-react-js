import React from "react";
import BookingForm from "../components/bookingForm/BookingForm";
import CardCollection from "../components/cardCollection/CardCollection";
import Hero from "../components/hero/Hero";
import RoomsBanner from "../components/roomsBanner/RoomsBanner.js";
import ServiceList from "../components/serviceList/ServiceList";

const Homepage = () => {
  return (
    <>
      <Hero />
      <CardCollection />
      <BookingForm />
      <RoomsBanner />
      <ServiceList />
    </>
  );
};

export default Homepage;
