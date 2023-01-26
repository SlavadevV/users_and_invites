import {
  Container,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import ListRender from "./ListRender";
import InviteRender from "./InviteRender";
import adminIcon from "./assets/images/admin.svg"
import standardIcon from "./assets/images/standard.svg"

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

function App() {
  return (
    <Container sx={{ maxWidth: "375px", pt: 7 }} maxWidth={false}>
      <Box>
        <Stack direction="row" alignItems="center" spacing={1}>
          <img src={adminIcon} alt="admin" />
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
          <img src={standardIcon} alt="standard" />
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
