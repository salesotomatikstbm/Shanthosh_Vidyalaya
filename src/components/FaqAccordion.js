import { useState } from "react";
import { Accordion } from "react-bootstrap";

const FaqAccordion = () => {
  const [activeToggle, setActiveToggle] = useState("1st");
  const setToggle = (value) =>
      value === activeToggle ? setActiveToggle("") : setActiveToggle(value),
    setActive = (value) => (value === activeToggle ? "active" : "");
  return (
    <Accordion defaultActiveKey="1st">
      <div className="flat-accordion">
        <div className="flat-toggle">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("1st")}
            eventKey="1st"
            className={`toggle-title ${setActive("1st")}`}
          >
            What is the admission process for new students?
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="1st">
            <div className="toggle-content">
              <p>
                The admission process involves filling out an application form,
                submitting necessary documents (birth certificate, previous
                school records), and attending an interaction or entrance test.
                For more details, contact the school office.
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="flat-toggle">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("2nd")}
            eventKey="2nd"
            className={`toggle-title ${setActive("2nd")}`}
          >
            What curriculum does the school follow?
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="2nd">
            <div className="toggle-content">
              <p>
                The school follows the Matriculation curriculum for grades up
                to 10th and the Higher Secondary curriculum for grades 11th and
                12th, as prescribed by the Tamil Nadu State Education Board.
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="flat-toggle">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("3rd")}
            eventKey="3rd"
            className={`toggle-title ${setActive("3rd")}`}
          >
            What extracurricular activities are offered?
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="3rd">
            <div className="toggle-content">
              <p>
                The school offers a range of extracurricular activities,
                including sports, music, dance, arts and crafts, debates, and
                science club activities to ensure holistic development of
                students.
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="flat-toggle">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("4th")}
            eventKey="4th"
            className={`toggle-title ${setActive("4th")}`}
          >
            Does the school provide transportation facilities?
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="4th">
            <div className="toggle-content">
              <p>
                Yes, the school provides transportation facilities covering key
                areas in and around Tambaram. The buses are equipped with GPS
                tracking and a support staff member for student safety.
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="flat-toggle">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("5th")}
            eventKey="5th"
            className={`toggle-title ${setActive("5th")}`}
          >
            What are the school timings?
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="5th">
            <div className="toggle-content">
              <p>
                The school operates from Monday to Friday, 9:00 AM to 3:30 PM.
                Saturday classes are conducted for grades 9 to 12, from 9:00 AM
                to 1:00 PM. Kindergarten classes follow a half-day schedule,
                ending at 12:30 PM.
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="flat-toggle">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("6th")}
            eventKey="6th"
            className={`toggle-title ${setActive("6th")}`}
          >
            Are meals provided in the school?
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="6th">
            <div className="toggle-content">
              <p>
                No, the school does not provide meals. Students are encouraged
                to bring their own healthy snacks and lunch from home. Drinking
                water is available on campus.
              </p>
            </div>
          </Accordion.Collapse>
        </div>
      </div>
    </Accordion>
  );
};

export default FaqAccordion;
