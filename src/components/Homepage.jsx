import React from "react";
import { Header } from "./Header";
import { Carousel } from "./Carousel";
import { Business } from "./Business";
import { Footer } from "./Footer";
import { FAQDetails } from "./FAQDetails";
import { Pricing } from "./Pricing";

const HomePage = () => (
  <>
    <Header />
    <Carousel />
    <Business />
    <Pricing />
    <FAQDetails />
    <Footer />
  </>
);

export default HomePage;
