
import { Accordion, AccordionDetails, AccordionSummary, Chip, Stack, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Invite, Role, Status } from './App';

type Props = {
  array: Invite[]
  role: Role
  status?: Status
}

const InviteRender = ({ array, role, status }: Props) => {
  return (
    <>
      {array.filter(obj => obj.role === role).map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<KeyboardArrowRightIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Stack direction="row" alignItems="center" spacing={10}>
              <Typography>{item.phone} </Typography>
              <Chip label="Invited" />
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
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

