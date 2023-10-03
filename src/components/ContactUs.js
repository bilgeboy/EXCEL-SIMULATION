import React from "react";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
  const recipient = "orshi@esop.co.il";
  const subject = "";
  const body = "";

  // should i do it with something that is not gmail?
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const openGmailCompose = () => {
    window.open(gmailLink, "_blank");
  };

  return (
    <Button
      variant="contained"
      color="warning"
      startIcon={<EmailIcon />}
      onClick={openGmailCompose}
    >
      Contact us
    </Button>
  );
};

export default ContactUs;
