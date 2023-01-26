
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ListRender from "./ListRender";
import InviteRender from "./InviteRender";

// React Users & Invites

// This task is to create a React Class or Functional component where we need to render users and invites that we send to users.

// We need to show all users and invites together, split into to 2 sections like in this Figma design:

// https://www.figma.com/file/r6Y0zKifCDFtLdUh7Lemqi/Untitled?node-id=0%3A1

// Please use 375px width for the screen (do not worry about other resolutions)

// Imagine that you have an API:

// 1) Users.getUsers(): Promise<TeamMember[]>

export type Status =
  | "request"
  | "pending"
  | "approved"
  | "declined"
  | "invited";
export type Role = "Administrator" | "Standard";

export interface UserShortData {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}
export interface TeamMember {
  id: number;
  status: Status;
  role: Role;
  user: UserShortData;
}

// 2) Users.getInvites(): Promise<Invite[]>

export interface Invite {
  id: number;
  phone: string;
  role: Role;
}

const users = [
  {
    id: 1,
    name: "Joe",
    lastName: "Bloggs",
    phone: "+353 1234561",
    email: "bloggs@gmail.com",
  },
  {
    id: 2,
    name: "Sarah",
    lastName: "Connors",
    phone: "+353 1234562",
    email: "connors@gmail.com",
  },

  {
    id: 3,
    name: "Joespeh",
    lastName: "Bloggs",
    phone: "+353 1234563",
    email: "bloggs2@gmail.com",
  },
  {
    id: 4,
    name: "Sarah",
    lastName: "Connors",
    phone: "+353 1234564",
    email: "connors2@gmail.com",
  },
  {
    id: 5,
    name: "Mathew",
    lastName: "Murphy",
    phone: "+353 1234565",
    email: "murphy@gmail.com",
  },
  {
    id: 6,
    name: "Joespeh",
    lastName: "Bloggs",
    phone: "+353 1234566",
    email: "bloggs3@gmail.com",
  },
  {
    id: 7,
    name: "Sarah",
    lastName: "Connors",
    phone: "+353 1234568",
    email: "connors3@gmail.com",
  },
  {
    id: 8,
    name: "Mathew",
    lastName: "Murphy",
    phone: "+353 1234569",
    email: "murphy2@gmail.com",
  },
  {
    id: 9,
    name: "Joespeh",
    lastName: "Bloggs",
    phone: "+353 1234570",
    email: "bloggs4@gmail.com",
  },
];

const invites = [
  { id: 1, phone: "+353 1234571", role: "Administrator" },
  { id: 2, phone: "+353 1234572", role: "Administrator" },

  { id: 3, phone: "+353 1234573", role: "Standard" },
  { id: 4, phone: "+353 1234574", role: "Standard" },
];

const team = [
  { id: 1, status: "approved", user: 1, role: "Administrator" },
  { id: 2, status: "approved", user: 2, role: "Administrator" },

  { id: 3, status: "approved", user: 3, role: "Standard" },
  { id: 4, status: "approved", user: 4, role: "Standard" },
  { id: 5, status: "approved", user: 5, role: "Standard" },
  { id: 6, status: "approved", user: 6, role: "Standard" },
  { id: 7, status: "approved", user: 7, role: "Standard" },
  { id: 8, status: "approved", user: 8, role: "Standard" },
  { id: 9, status: "approved", user: 9, role: "Standard" },
];

const res = team.map(({ id, status, role, user }) => ({
  id: id,
  status: status,
  role: role,
  user: users.find((el2) => el2.id === user),
}));
// const foo = res.filter(obj => obj.role === "Administrator").map((item: TeamMember) => console.log(item))
//  console.log(foo);

function App() {
  return (
    <Container sx={{ maxWidth: "375px", pt: 7 }} maxWidth={false}>
      <Box>
        <Stack direction="row" alignItems="center" spacing={1}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33333 5.33329C9.56 5.33329 9.78 5.35996 10 5.39329V3.05329C10 2.51996 9.68667 2.03996 9.2 1.83329L5.53333 0.233291C5.19333 0.0866243 4.80667 0.0866243 4.46667 0.233291L0.8 1.83329C0.313333 2.04662 0 2.52662 0 3.05329V5.45329C0 8.47996 2.13333 11.3133 5 12C5.36667 11.9133 5.72 11.7866 6.06667 11.6333C5.60667 10.98 5.33333 10.1866 5.33333 9.33329C5.33333 7.12663 7.12667 5.33329 9.33333 5.33329Z"
              fill="#828B97"
            />
            <path
              d="M9.33333 6.66663C7.86 6.66663 6.66666 7.85996 6.66666 9.33329C6.66666 10.8066 7.86 12 9.33333 12C10.8067 12 12 10.8066 12 9.33329C12 7.85996 10.8067 6.66663 9.33333 6.66663ZM9.33333 7.58663C9.74666 7.58663 10.08 7.92663 10.08 8.33329C10.08 8.73996 9.74 9.07996 9.33333 9.07996C8.92666 9.07996 8.58666 8.73996 8.58666 8.33329C8.58666 7.92663 8.92 7.58663 9.33333 7.58663ZM9.33333 11.1666C8.71333 11.1666 8.17333 10.86 7.84 10.3866C7.87333 9.90663 8.84666 9.66663 9.33333 9.66663C9.82 9.66663 10.7933 9.90663 10.8267 10.3866C10.4933 10.86 9.95333 11.1666 9.33333 11.1666Z"
              fill="#828B97"
            />
          </svg>
          <Typography sx={{ color: "text.secondary" }} variant="body2">
            Administrators
          </Typography>
        </Stack>
        <Box sx={{ borderBottom: 1 }}>
          <ListRender array={res as TeamMember[]} role="Administrator" />
        </Box>
        <Box>
          <InviteRender
            array={invites as Invite[]}
            role="Administrator"
            status="invited"
          />
        </Box>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 7 }}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 5.99999C7.47333 5.99999 8.66666 4.80666 8.66666 3.33332C8.66666 1.85999 7.47333 0.666656 6 0.666656C4.52666 0.666656 3.33333 1.85999 3.33333 3.33332C3.33333 4.80666 4.52666 5.99999 6 5.99999ZM6 7.33332C4.22 7.33332 0.666664 8.22666 0.666664 9.99999V10.6667C0.666664 11.0333 0.966664 11.3333 1.33333 11.3333H10.6667C11.0333 11.3333 11.3333 11.0333 11.3333 10.6667V9.99999C11.3333 8.22666 7.78 7.33332 6 7.33332Z"
              fill="#828B97"
            />
          </svg>
          <Typography sx={{ color: "text.secondary" }} variant="body2">
            Standard Users
          </Typography>
        </Stack>
        <Box sx={{ borderBottom: 1 }}>
          <ListRender array={res as TeamMember[]} role="Standard" />
        </Box>
        <Box>
          <InviteRender
            array={invites as Invite[]}
            role="Standard"
            status="invited"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
