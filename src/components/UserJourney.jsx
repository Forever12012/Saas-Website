import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import axios from "axios";
import FileUploadDemo from "./FileUploadDemo";

const countries = Country.getAllCountries().map((country) => ({
  label: country.name,
  value: country.isoCode,
}));

const getStates = (countryCode) => {
  return State.getStatesOfCountry(countryCode).map((state) => ({
    label: state.name,
    value: state.isoCode,
  }));
};

const getCities = (countryCode, stateCode) => {
  return City.getCitiesOfState(countryCode, stateCode).map((city) => ({
    label: city.name,
    value: city.name,
  }));
};

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Requirement Information",
  ];
}

const BasicForm = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const selectedCountry = watch("country");
  const selectedState = watch("state");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (selectedCountry) {
      setStates(getStates(selectedCountry.value));
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState && selectedCountry) {
      setCities(getCities(selectedCountry.value, selectedState.value));
    }
  }, [selectedState, selectedCountry]);

  return (
    <>
      <Box mt={2}>
        <label htmlFor="companyName">Company Name : </label>
        <Controller
          control={control}
          name="companyName"
          rules={{ required: "Company Name is required" }}
          render={({ field }) => (
            <TextField
              id="company-name"
              label="Company Name"
              variant="outlined"
              placeholder="Enter Your Company Name"
              fullWidth
              error={!!errors.companyName}
              helperText={errors.companyName ? errors.companyName.message : ""}
              {...field}
            />
          )}
        />
      </Box>

      <Box mt={2}>
        <label htmlFor="country">Country : </label>
        <Controller
          control={control}
          name="country"
          rules={{ required: "Country is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={countries}
              placeholder="Select Country"
              styles={{
                control: (provided) => ({
                  ...provided,
                  minHeight: "56px", // Increase the height here
                  borderColor: errors.country ? "red" : provided.borderColor,
                }),
                valueContainer: (provided) => ({
                  ...provided,
                  height: "56px", // Increase the height here
                  display: "flex",
                  alignItems: "center",
                }),
                input: (provided) => ({
                  ...provided,
                  margin: "0px",
                }),
              }}
            />
          )}
        />
        {errors.country && (
          <Typography color="error">{errors.country.message}</Typography>
        )}
      </Box>

      <Box mt={2}>
        <label htmlFor="state">State : </label>
        <Controller
          control={control}
          name="state"
          rules={{ required: "State is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={states}
              placeholder="Select State"
              styles={{
                control: (provided) => ({
                  ...provided,
                  minHeight: "56px", // Increase the height here
                  borderColor: errors.state ? "red" : provided.borderColor,
                }),
                valueContainer: (provided) => ({
                  ...provided,
                  height: "56px", // Increase the height here
                  display: "flex",
                  alignItems: "center",
                }),
                input: (provided) => ({
                  ...provided,
                  margin: "0px",
                }),
              }}
            />
          )}
        />
        {errors.state && (
          <Typography color="error">{errors.state.message}</Typography>
        )}
      </Box>

      <Box mt={2}>
        <label htmlFor="city">City : </label>
        <Controller
          control={control}
          name="city"
          rules={{ required: "City is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={cities}
              placeholder="Select City"
              styles={{
                control: (provided) => ({
                  ...provided,
                  minHeight: "56px", // Increase the height here
                  borderColor: errors.city ? "red" : provided.borderColor,
                }),
                valueContainer: (provided) => ({
                  ...provided,
                  height: "56px", // Increase the height here
                  display: "flex",
                  alignItems: "center",
                }),
                input: (provided) => ({
                  ...provided,
                  margin: "10px",
                }),
              }}
            />
          )}
        />
        {errors.city && (
          <Typography color="error">{errors.city.message}</Typography>
        )}
      </Box>

      <Box mt={2}>
        <label htmlFor="websiteLink">Website Link : </label>
        <Controller
          control={control}
          name="websiteLink"
          render={({ field }) => (
            <TextField
              id="website-link"
              variant="outlined"
              placeholder="Please enter your website's link"
              fullWidth
              error={!!errors.websiteLink}
              helperText={errors.websiteLink ? errors.websiteLink.message : ""}
              {...field}
            />
          )}
        />
      </Box>
    </>
  );
};

const ContactForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Box mt={2}>
        <label htmlFor="email">Email : </label>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              id="email"
              variant="outlined"
              placeholder="Please enter your Email Id"
              fullWidth
              size="small"
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              {...field}
            />
          )}
        />
      </Box>

      <Box mt={2}>
        <label htmlFor="altEmail">Alternative Email : </label>
        <Controller
          control={control}
          name="altEmail"
          rules={{
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              id="alt-email"
              variant="outlined"
              placeholder="Please enter your Alternative Email Id"
              fullWidth
              size="small"
              error={!!errors.altEmail}
              helperText={errors.altEmail ? errors.altEmail.message : ""}
              {...field}
            />
          )}
        />
      </Box>

      <Box mt={2}>
        <Typography>Phone Number : </Typography>
        <Controller
          control={control}
          name="phoneNumber"
          rules={{ required: "Phone Number is required" }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              country={"in"}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              onChange={field.onChange}
              inputStyle={{
                width: "100%",
                height: "40px", // Decreased height
                borderRadius: "4px",
                borderColor: errors.phoneNumber ? "red" : "#c4c4c4",
                padding: "10px",
              }}
            />
          )}
        />
        {errors.phoneNumber && (
          <Typography color="error">{errors.phoneNumber.message}</Typography>
        )}
      </Box>

      <Box mt={2}>
        <Typography>Alternative Phone Number : </Typography>
        <Controller
          control={control}
          name="alternatePhone"
          render={({ field }) => (
            <PhoneInput
              {...field}
              country={"in"}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              onChange={field.onChange}
              inputStyle={{
                width: "100%",
                height: "40px", // Decreased height
                borderRadius: "4px",
                borderColor: errors.alternatePhone ? "red" : "#c4c4c4",
                padding: "10px",
              }}
            />
          )}
        />
        {errors.alternatePhone && (
          <Typography color="error">{errors.alternatePhone.message}</Typography>
        )}
      </Box>

      <Box mt={2}>
        <label htmlFor="fbSocial">Facebook Social Link : </label>
        <Controller
          control={control}
          name="fbSocial"
          rules={{
            // required: "Facebook Social Link is required",
            pattern: {
              value:
                /^(https?:\/\/)?(www\.)?facebook\.com\/[A-Za-z0-9._-]+\/?$/,
              message: "Enter a valid Facebook URL",
            },
          }}
          render={({ field }) => (
            <TextField
              id="facebook-social"
              variant="outlined"
              placeholder="Please enter your Facebook Social Link"
              fullWidth
              size="small"
              error={!!errors.fbSocial}
              helperText={errors.fbSocial ? errors.fbSocial.message : ""}
              {...field}
            />
          )}
        />
      </Box>

      <Box mt={2}>
        <label htmlFor="linkedinSocial">LinkedIn Social Link : </label>
        <Controller
          control={control}
          name="linkedinSocial"
          rules={{
            // required: "LinkedIn Social Link is required",
            pattern: {
              value: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/,
              message: "Enter a valid LinkedIn URL",
            },
          }}
          render={({ field }) => (
            <TextField
              id="linkedin-social"
              variant="outlined"
              placeholder="Please enter your LinkedIn Social Link"
              fullWidth
              size="small"
              error={!!errors.linkedinSocial}
              helperText={
                errors.linkedinSocial ? errors.linkedinSocial.message : ""
              }
              {...field}
            />
          )}
        />
      </Box>

      <Box mt={2}>
        <label htmlFor="instaSocial">Instagram Social Link : </label>
        <Controller
          control={control}
          name="instaSocial"
          rules={{
            // required: "Instagram Social Link is required",
            pattern: {
              value:
                /^(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9._-]+\/?$/,
              message: "Enter a valid Instagram URL",
            },
          }}
          render={({ field }) => (
            <TextField
              id="insta-social"
              variant="outlined"
              placeholder="Please enter your Instagram Social Link"
              fullWidth
              size="small"
              error={!!errors.instaSocial}
              helperText={errors.instaSocial ? errors.instaSocial.message : ""}
              {...field}
            />
          )}
        />
      </Box>
    </>
  );
};

const ReqForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="requirements"
        rules={{ required: "Requirements are required" }}
        render={({ field }) => (
          <TextField
            id="requirements"
            label="Requirements"
            variant="outlined"
            placeholder="Enter your requirements"
            multiline
            rows={6}
            fullWidth
            margin="normal"
            error={!!errors.requirements}
            helperText={errors.requirements ? errors.requirements.message : ""}
            {...field}
          />
        )}
      />
      <Box mt={2}>
        <Typography>Upload Files : </Typography>
        <FileUploadDemo />
      </Box>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <ContactForm />;
    case 2:
      return <ReqForm />;

    default:
      return "unknown step";
  }
}

const UserJourney = () => {
  const location = useLocation(); // Access location
  const { userId } = location.state || {}; // Extract userId from state
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      companyName: "",
      country: null,
      state: null,
      city: null,
      websiteLink: "",
      email: "",
      altEmail: "",
      phoneNumber: "",
      alternatePhone: "",
      fbSocial: "",
      linkedinSocial: "",
      instaSocial: "",
      requirements: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  useEffect(() => {
    if (activeStep === steps.length) {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [activeStep, steps.length, navigate]);

  const handleNext = async (data) => {
    if (activeStep === steps.length - 1) {
      const formData = new FormData();

      // Append userId to the formData
      if (userId) {
        formData.append("userId", parseInt(userId, 10));
      }

      Object.entries(data).forEach(([key, value]) => {
        if (key === "attachments") {
          value.forEach((file, index) => {
            formData.append(`attachments[${index}]`, file);
          });
        } else if (key === "country" || key === "state" || key === "city") {
          if (value) {
            formData.append(key, value.label);
          }
        } else {
          formData.append(key, value);
        }
      });
      console.log(formData);
      try {
        const response = await axios.post(
          "https://intellix-express-backend-awa-g6g0hca5e6ccezds.eastus-01.azurewebsites.net/userjourney/userJourney/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response.data);
        setActiveStep(activeStep + 1);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ overflowY: "auto" }} // Allow vertical scrolling
    >
      <Box
        position="sticky"
        top={0}
        width="100%"
        bgcolor="white"
        zIndex={1}
        py={2}
        boxShadow={3}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Company On-Boarding
        </Typography>

        <Box width="75%" mx="auto">
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ display: "block" }}
                  >
                    optional
                  </Typography>
                );
              }

              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      </Box>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <Box width="50%" mt={3}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Box display="flex" justifyContent="space-between" mt={3}>
                <ButtonStyled disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </ButtonStyled>

                <ButtonStyled variant="contained" color="primary" type="submit">
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </ButtonStyled>
              </Box>
            </form>
          </FormProvider>
        </Box>
      )}
    </Box>
  );
};

export default UserJourney;
