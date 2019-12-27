import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ReceiptIcon from "@material-ui/icons/Receipt";
import InboxIcon from "@material-ui/icons/Inbox";
import SmsIcon from "@material-ui/icons/Sms";

function Component() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{
        width: "100%",
        maxWidth: 450,
        display: "flex",
        position: "fixed",
        bottom: 0
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Orders" icon={<ReceiptIcon />} />
      <BottomNavigationAction label="Chat" icon={<SmsIcon />} />
      <BottomNavigationAction label="Inbox" icon={<InboxIcon />} />
      <BottomNavigationAction label="Account" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}
export default Component;
