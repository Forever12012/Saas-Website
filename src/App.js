import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { ForgetPassword } from "./components/ForgetPassword";
import feather from "feather-icons";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/Homepage";
import { Dashboard } from "./components/Dashboard";
import { Checkout } from "./components/Checkout";
import { ResetPassword } from "./components/ResetPassword";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { FooterPricing } from "./components/FooterPricing";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";
import { TermsServices } from "./components/TermsServices";
import { Privacy } from "./components/Privacy";
import { Docs } from "./components/Docs";
import { Changelog } from "./components/Changelog";
import { EnterCode } from "./components/EnterCode";
import { EmailConfirmation } from "./components/EmailConfirmation";
import { EmailResetPassword } from "./components/EmailResetPassword";
import UserJourney from "./components/UserJourney";
import CalendlyComponent from "./components/CalendlyComponent";
import { Blog1 } from "./components/Blogs/blog1";
import { Blog2 } from "./components/Blogs/blog2";
import { Blog3 } from "./components/Blogs/blog3";
import { Blog4 } from "./components/Blogs/blog4";
import { Blog5 } from "./components/Blogs/blog5";
import { Blog6 } from "./components/Blogs/blog6";
import { Blog7 } from "./components/Blogs/blog7";
import { Blog8 } from "./components/Blogs/blog8";
import FileUploadDemo from "./components/FileUploadDemo";
import Invoice from "./components/Invoice";
import { UpdatedPlans } from "./components/UpdatedPlans";
import { UpdateCheckout } from "./components/UpdateCheckout";
import { GetPricing } from "./components/GetPricing";
import { PrivateRoute } from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  React.useEffect(() => {
    feather.replace();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/checkout/:plan"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/pricing" element={<FooterPricing />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />
        <Route path="/blog5" element={<Blog5 />} />
        <Route path="/blog6" element={<Blog6 />} />
        <Route path="/blog7" element={<Blog7 />} />
        <Route path="/blog8" element={<Blog8 />} />
        <Route path="/terms" element={<TermsServices />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/docs" element={<Docs />}></Route>
        <Route path="/changelog" element={<Changelog />}></Route>
        <Route path="/enter-code" element={<EnterCode />}></Route>
        <Route path="/user-journey" element={<UserJourney />}></Route>
        <Route path="/fileuploaddemo" element={<FileUploadDemo />}></Route>
        <Route path="/invoice/:subscriptionId" element={<Invoice />} />
        <Route path="/updated-plans/:currentPlan" element={<UpdatedPlans />} />
        <Route path="/get-pricing" element={<GetPricing />}></Route>

        <Route
          path="/updated-checkout/:plan"
          element={<UpdateCheckout />}
        ></Route>

        <Route
          path="/email-confirm/:name"
          element={<EmailConfirmation />}
        ></Route>
        <Route
          path="/email-reset-pass"
          element={<EmailResetPassword />}
        ></Route>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/calendly" element={<CalendlyComponent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
