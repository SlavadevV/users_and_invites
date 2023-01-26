
import { FC } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Role, Status, TeamMember } from './App';

type Props = {
  array: TeamMember[]
  role: Role
  status?: Status
}

const ListRender: FC<Props> = ({ array, role }) => {

  return (
    <>
      {array.filter(obj => obj.role === role).map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<KeyboardArrowRightIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.user.name} {item.user.lastName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - {item.user.email} <br />
              - {item.user.phone} <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

    </>
  )
}

export default ListRender