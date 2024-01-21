import React, { useState } from "react";
import { Typography, Stack, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReviewSection from "../components/Form/ReviewSection/ReviewSection";
import DemographicSection from "../components/Form/DemographicSection/DemographicSection";
import GeneralSection from "../components/Form/GeneralSection";
import { useForm } from "../contexts/FormContext";
import { useAuth } from "../contexts/AuthContext";
import { createOutgoingDonation } from "../lib/services";
import { ErrorMessage } from "../components/Error";

const Form: React.FC = () => {
  const { demographicDetails, donationDetails } = useForm();
  const { logout, currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currPanel, setCurrPanel] = useState<string>("GeneralSection");

  const onSubmit = async () => {
    setIsLoading(true); // Disables the submit button.

    demographicDetails.numberServed =
      demographicDetails.whiteNum +
      demographicDetails.latinoNum +
      demographicDetails.blackNum +
      demographicDetails.nativeNum +
      demographicDetails.asianNum +
      demographicDetails.otherNum;

    try {
      if (!currentUser) {
        throw new Error("Unable to fetch User");
      }

      const token = await currentUser.getIdToken();

      const request = {
        email: currentUser.email,
        donationDetails: donationDetails,
        ...demographicDetails,
      };

      await createOutgoingDonation(token, request);
    } catch (error) {
      const err = error as Error;
      setError(err.message);
    } finally {
      setIsLoading(false); // Enables the submit button
    }
  };
  return (
    // Top of Outgoing Donations Form
    <Stack direction="column" alignItems="center" spacing={2}>
      <Typography fontSize="25px" fontWeight="700">
        Outgoing Donations
      </Typography>
      <Typography fontSize="15px" style={{ textAlign: "center" }}>
        Select the categories and item types of resources that you would like to
        donate
      </Typography>
      {/* body of the form calls each component, general section,
      review section and demographic */}
      <Stack
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "max-content",
          paddingBottom: "25%",
          backgroundColor: "white",
        }}
      >
        {/* All form components */}
        <div
          style={{
            filter: `${
              currPanel !== "GeneralSection"
                ? "grayscale(100%) opacity(50%)"
                : ""
            }`,
            width: "85%",
          }}
        >
          <GeneralSection
            step={1}
            currPanel={currPanel}
            setCurrPanel={setCurrPanel}
          />
        </div>

        <div
          style={{
            filter: `${
              currPanel !== "ReviewSection"
                ? "grayscale(100%) opacity(50%)"
                : ""
            }`,
            width: "85%",
          }}
        >
          <ReviewSection
            step={2}
            currPanel={currPanel}
            setCurrPanel={setCurrPanel}
          />
        </div>

        <div
          style={{
            filter: `${
              currPanel !== "DemographicSection"
                ? "grayscale(100%) opacity(50%)"
                : ""
            }`,
            width: "85%",
          }}
        >
          <DemographicSection
            currPanel={currPanel}
            setCurrPanel={setCurrPanel}
          />
        </div>

        <ErrorMessage error={error} setError={setError} />
        <Stack justifyContent="center" direction="row" spacing={3}>
          <Button
            onClick={onSubmit}
            type="submit"
            variant="outlined"
            sx={{
              backgroundColor: "#A4A4A4",
              color: "white",
              fontSize: 15,
              border: "1px solid #c1c1c1",
              borderRadius: 2,
              height: "32px",
            }}
            disabled={isLoading}
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              color: "#A4A4A4",
              fontSize: 15,
              border: "1px solid #A4A4A4",
              borderRadius: 2,
              height: "32px",
            }}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Form;
