"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

function FaqTwo() {
  return (
    <div>
      {/* service accordion area */}
      <div className="rts-accordion-area service rts-section-gap">
        <div className="accordion-service-bg bg_image ptb--120 ptb_md--80 ptb_sm--60">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="accordion-service-inner">
                  <div className="title-area-start">
                    <span className="sub color-primary">
                      JUST A CONSULTANCY
                    </span>
                    <h2 className="title">Why should you use our services?</h2>
                  </div>
                  <div className="accordion-area">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How do I ask for construction services in Delhi,
                          India?
                        </Accordion.Header>
                        <Accordion.Body>
                          You can get in touch with us by phone, email, or by
                          filling out the quick contact form. It's easy and
                          quick; we'll get back to you in a day.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Do you work on projects of all sizes?
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes, of course. Our team can handle anything from a
                          single park corner to a multi-level office building.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Do you also design and build things?
                        </Accordion.Header>
                        <Accordion.Body>
                          Yes. We enjoy putting design and construction
                          together. It makes things go more smoothly, quickly,
                          and cheaply.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          What makes your general contracting services
                          trustworthy?
                        </Accordion.Header>
                        <Accordion.Body>
                          We have been doing this for years, using
                          tried-and-true systems to handle vendors, budgets,
                          schedules, and safety.
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <Accordion.Item eventKey="4">
                        <Accordion.Header>Managing Invesment</Accordion.Header>
                        <Accordion.Body>
                          Neque parturient sed nascetur facilisis suscipit
                          ridiculus magna lobortis imperdiet vivamus est aliquam
                          euismod nec quam convallis ornare justo
                        </Accordion.Body>
                      </Accordion.Item> */}
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service accordion area End */}
    </div>
  );
}

export default FaqTwo;
