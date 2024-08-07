import React from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const CalendlyComponent = () => {
  return (
    <>
      <div style={{ height: "600px" }}>
        <InlineWidget url="https://calendly.com/tushar-harinkhede-nexientai" />
      </div>
    </>
  );
};

export default CalendlyComponent;
