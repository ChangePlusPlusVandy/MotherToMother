import React, { useEffect, useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  Button,
  Box,
  Grid,
  Stack,
  CircularProgress,
} from "@mui/material";
import { PrimaryMainTheme } from "./Theme";
import FormHeader from "./FormHeader";
import { useNavigate } from "react-router-dom";
import { getAllItems } from "../../lib/services";
import { type ItemResponse } from "../../types/FormTypes";
import { useAuth } from "../../contexts/AuthContext";
import { ErrorMessage } from "../../components/Error";

const buttonStyles = {
  width: "100%",
  margin: "10px",
  height: "80px",
  borderRadius: "20px",
  border: "outlined",
  fontSize: "22px",
  color: "var(--mtmNavy)",
  borderColor: "var(--mtmNavy)",
} as const;

const getBottomNavActionValue = (category: string) =>
  `/home/form/specificItem?category=${encodeURIComponent(category)}`;

interface CategoryGenProps {
  broadCategories: string[];
}

const CategoryGen: React.FC<CategoryGenProps> = ({ broadCategories }) => {
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    const categoryName = broadCategories[index]!;
    navigate(getBottomNavActionValue(categoryName));
  };

  const getAllRows = (broadCategories: string[]) => {
    const rows = [];

    for (let i = 0; i < broadCategories.length; i += 2) {
      rows.push(
        <Stack direction="row" spacing={2} key={i}>
          <Button
            style={buttonStyles}
            fullWidth={true}
            variant="outlined"
            onClick={() => handleClick(i)}
          >
            {broadCategories[i]}
          </Button>

          {i + 1 < broadCategories.length ? (
            <Button
              style={buttonStyles}
              fullWidth={true}
              variant="outlined"
              onClick={() => handleClick(i + 1)}
            >
              {broadCategories[i + 1]}
            </Button>
          ) : (
            <Button fullWidth={true}></Button>
          )}
        </Stack>,
      );
    }

    return <Grid>{rows}</Grid>;
  };

  return <Box width="90%">{getAllRows(broadCategories)}</Box>;
};

interface GeneralSectionProps {
  step: number;
  currPanel: string;
  setCurrPanel: React.Dispatch<React.SetStateAction<string>>;
}

const GeneralSection: React.FC<GeneralSectionProps> = ({
  step,
  currPanel,
  setCurrPanel,
}) => {
  const { logout, currentUser } = useAuth();
  const [broadCategories, setBroadCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handlePanelChange = () => {
    setCurrPanel("GeneralSection");
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (!currentUser) {
          throw new Error("Current user not found");
        }
        const token = await currentUser.getIdToken();

        const response = await getAllItems(token);
        if (!response.ok) {
          throw new Error("Error fetching items");
        }

        const itemsData = (await response.json()) as ItemResponse[];
        setBroadCategories(
          Array.from(
            new Set(itemsData.map((item: ItemResponse) => item.category)),
          ),
        );
      } catch (error) {
        const err = error as Error;
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={PrimaryMainTheme}>
        <Box width="100%" onClick={handlePanelChange}>
          <FormHeader number={step} header="Choose a category" />

          <ErrorMessage error={error} setError={setError} />
          {isLoading ? (
            <CircularProgress />
          ) : (
            <CategoryGen broadCategories={broadCategories} />
          )}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default GeneralSection;
