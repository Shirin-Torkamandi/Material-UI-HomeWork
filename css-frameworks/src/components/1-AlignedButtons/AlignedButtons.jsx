import { Button, Stack } from "@mui/material";
import { PersonOutline } from "@mui/icons-material";
import { useState } from "react";

const MyButtons = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleButtonClick = () => {
    setIsDisabled(true);
  };

  const handleExternalLinkClick = () => {
    window.location.href = "https://mui.com";
  };

  return (
    <Stack direction="row" spacing={2} paddingY={0.5} paddingX={2}>
      <Button
        variant="text"
        color="primary"
        disabled={isDisabled}
        onClick={handleButtonClick}
      >
        Disabled Button
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<PersonOutline />}
      >
        With start Icon
      </Button>
      <Button
        variant="outlined"
        color="success"
        onClick={handleExternalLinkClick}
        target="_blank"
      >
        External Website
      </Button>
    </Stack>
  );
};

export default MyButtons;
