import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200, 
    },
  },
}));

export default function ApplicationForm(props) {
  const classes = useStyles();

  return (
    <Container>
      <form className={classes.root} autoComplete="off">
          <div>
              <Box color="primary.main"><h1>APPLY FOR A LOAN</h1></Box>
              <Box><h3>Status of your request</h3></Box>
              <Box color={props.color_decision}><h3><strong>{props.loanDecision}</strong></h3></Box>

          </div>
          <div>
            <Divider></Divider>
            
            <p>Please, fill out the form below</p>

            <h4>Bussiness</h4>
              
          <TextField
              error={false}
              id="tax-id-input"
              name="tax_id"
              label="Tax Id"
              defaultValue=""
              helperText=""
              required
              onChange={props.onChange}
          />
          <TextField
              error={false}
              id="bussiness-input"
              name="bussiness_name"
              label="Bussiness"
              defaultValue=""
              helperText=""
              required
              onChange={props.onChange}
          />
          <TextField
              error={props.requested_amount_validation.hasError}
              id="requested-amount-input"
              name="requested_amount"
              label="Amount"
              defaultValue=""
              helperText={props.requested_amount_validation.errorMessage}
              required
              onChange={props.onChange}
          />
          </div>
          <br/>
          <Divider variant="middle" ></Divider>
          <div>
          <h4>Owner</h4>
          <TextField
              error={false}
              id="social-security-number-input"
              name="social_security"
              label="Social security"
              defaultValue=""
              helperText=""
              required
              onChange={props.onChange}
          />
          <TextField
              error={false}
              id="name=input"
              name='owner_name'
              label="Full name"
              defaultValue=""
              helperText=""
              required
              onChange={props.onChange}
          />
          <TextField
              error={props.email_validation.hasError}
              id="email-input"
              name="email"
              label="Email"
              defaultValue=""
              helperText={props.email_validation.errorMessage}
              type="email"
              required
              onChange={props.onChange}
          />
          </div>
          <div>
          <br/>
          <Button type="button" variant="contained" color="primary" onClick={props.onSubmit}>
              Check loan
          </Button>
          <Box color="error.main"><p>{props.alert}</p></Box>
          </div>
      </form>
      
    </Container>
  );
}
