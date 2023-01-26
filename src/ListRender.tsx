
import { Accordion, AccordionDetails, AccordionSummary, Chip, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Invite, Role, Status, TeamMember } from './App';

type Props = {
  array: TeamMember[]
  // inviteArr?: Invite[]
  role: Role
  status?: Status
}

const ListRender = ({array, role, status}: Props) => {
  return (
    <>
    { array.filter(obj => obj.role === role).map((item) => (
    <Accordion key={item.id}>
      <AccordionSummary
        expandIcon={<KeyboardArrowRightIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {status ? (
              <Stack direction="row" alignItems="center" spacing={10}>
      <Typography>{item.user.phone} </Typography>
      <Chip label="Invited" />
    </Stack>
        ) : (
          <Typography>{item.user.name} {item.user.lastName}</Typography>
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          - {status ? `Status - ${status}` : item.user.email} <br />
          - {item.user.phone} <br />
        </Typography>
      </AccordionDetails>
    </Accordion>
    ))}
    
    </>
  )
}

export default ListRender