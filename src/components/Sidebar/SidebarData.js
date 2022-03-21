
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import PanoramaWideAngleIcon from "@material-ui/icons/PanoramaWideAngle";
import ContactsIcon from "@material-ui/icons/Contacts";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SettingsIcon from "@material-ui/icons/Settings";
import CardMembershipIcon from "@material-ui/icons/CardMembership";





export const SidebarData = [
  {
    title: "Overview",
    img: <ViewCompactIcon />,
    link: "/overview",
  },
  {
    title: "Tickets",
    img: <ConfirmationNumberIcon />,
    link: "/tickets",
  },
  {
    title: "Ideas",
    img: <PanoramaWideAngleIcon/>,
    link: "/ideas",
  },
  {
    title: "Contacts",
    img: <ContactsIcon/>,
    link: "/contacts",
  },
  {
    title: "Agents",
    img: <EmojiPeopleIcon />,
    link: "/agents",
  },
  {
    title: "Articles",
    img: <AssignmentIcon /> ,
    link: "/articles",
  },
  {
    title: "Settings",
    img: <SettingsIcon />,
    link: "/settings",
  }, 
  {
    title: "Subscription",
    img: <CardMembershipIcon />,
    link: "/subscription",
  },
];

