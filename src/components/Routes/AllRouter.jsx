import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyReview from "../../Pages/CompanyReview";
import Findjobs from "../../Pages/Findjobs";
import Profile from "../../Pages/Profile";
import SalaryGuide from "../../Pages/SalaryGuide";
import Signin from "../SignIn/Signin";
import Signup from "../Sign_up/Signup";
import Message from "../../Pages/Message";
import Notification from "../../Pages/Notification";
import { HelpCenter } from "../../Pages/HelpCenter";
import EmployersPostJob from "../../Pages/EmployersPostJob";
import EmployerQuestions from "../../Pages/EmployerQuestions";
import CompanyLandingPage from "../../Pages/CompanyLandingPage";
import Snapshot from "../CompanyLandingPage/Tabs/Snapshot";
import WhyUS from "../CompanyLandingPage/Tabs/WhyUS";
import Reviews from "../CompanyLandingPage/Tabs/Reviews";
import Jobs from "../CompanyLandingPage/Tabs/Jobs";
import Questions from "../CompanyLandingPage/Tabs/Questions";
import Interviews from "../CompanyLandingPage/Tabs/Interviews";
import Photos from "../CompanyLandingPage/Tabs/Photos";
import Salaries from "../CompanyLandingPage/Tabs/Salaries";
import ReqAuth from "../ReqAuth/ReqAuth";
import CompareCompanies from "../../Pages/CompareCompanies";
import ApplyJobs from "../FindJobs/ApplyJobs";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Findjobs />} />
      <Route path="/applyjobs" element={<ApplyJobs />} />
      <Route path="/companies" element={<CompanyReview />} />
      <Route path="/salary" element={<SalaryGuide />} />
      <Route
        path="/profile"
        element={
          <ReqAuth>
            <Profile />
          </ReqAuth>
        }
      />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/message"
        element={
          <ReqAuth>
            <Message />
          </ReqAuth>
        }
      />
      <Route
        path="/notification"
        element={
          <ReqAuth>
            <Notification />
          </ReqAuth>
        }
      />
      <Route path="/postjobs" element={<EmployersPostJob />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/employerquestions" element={<EmployerQuestions />} />
      <Route path="/comparecompanies" element={<CompareCompanies />} />
      <Route path="/companies/:id" element={<CompanyLandingPage />}>
        <Route path="shapshot" element={<Snapshot />} />
        <Route path="whyus" element={<WhyUS />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="salaries" element={<Salaries />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="questions" element={<Questions />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="photos" element={<Photos />} />
      </Route>
    </Routes>
  );
};

export default AllRouter;
