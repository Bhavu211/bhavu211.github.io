import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        {/* <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link> */}
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2022 - Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Bajaj Finserv, Pune
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Unit Manager
          </h6>
          <p>• Revamped the FD Partner Portal by enhancing user experience by design along with introducing new features such as payouts, reports, invoice generation, and help
 section. </p>
 <p>• Increased partner portal utilization from 5% to 55% within five months through a strong go-to-market strategy and cross-cultural collaboration.</p> 
  <p>• Worked on smoothening the FD Partner Onboarding Journey end to end. Reduced tat for onboarding process from 7 days to 1 day including quality
 check. </p>
<p>• Revamped the service section of the Bajaj FinServ app and website which is solely for their customers by introducing Renewal /LAFD journeys and doing major changes in logics as per business requirements. </p>
<p>• Additionally, played a pivotal role in the end-to-end delivery of projects like ACMS(Automated campaign management system for partners) and PCMS (Payout Automaton for product team to reduce manual excel sheet work), significantly contributing to the B2B business objectives! </p>
<p>Product Requirement and Analysis: Developed detailed product requirements, user stories, and specifications, ensuring alignment with business goals and technical feasibility using tools such as Microsoft Azure/Jira. </p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Ericsson, Noida 
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Domain Support Specialist
          </h6>
          <p>• Performed operational activities such as health checks, restoration, and resolution of network administrative requests!</p> 
<p>• Automated processes for taking backups, health checks, and error counts by 100%! </p>
<p>• Performed change requests in the network as per customer requirements and documented methods of procedures</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
