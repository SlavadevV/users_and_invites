
import { Accordion, AccordionDetails, AccordionSummary, Chip, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Invite, Role, Status, TeamMember } from './App';

type Props = {
  array: Invite[] 
  // inviteArr?: Invite[]
  role: Role
  status?: Status
}

const InviteRender = ({array, role, status}: Props) => {
  return (
    <>
    {array.filter(obj => obj.role === role).map((item) => (
    <Accordion key={item.id}>
      <AccordionSummary
        expandIcon={<KeyboardArrowRightIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {/* {status ? ( */}
              <Stack direction="row" alignItems="center" spacing={10}>
      <Typography>{item.phone} </Typography>
      <Chip label="Invited" />
    </Stack>
        {/* // ) : (
        //   <Typography>{item.user.name} {item.user.lastName}</Typography>
        // )} */}
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {/* - {status ? `Status - ${status}` : item.user.email} <br /> */}
          - Status - {status} <br />
          - {item.phone} 
        </Typography>
      </AccordionDetails>
    </Accordion>
    ))}
    
    </>
  )
}

export default InviteRender

