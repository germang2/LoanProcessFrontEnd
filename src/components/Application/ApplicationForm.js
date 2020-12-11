import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
    <form className={classes.root} autoComplete="off">
        <div>
            <h2>Apply for loan</h2>
            <h4>{props.loanDecision}</h4>
        </div>
        <div>
            
        <TextField
            error={false}
            id="tax-id-input"
            name="tax_id"
            label="Tax-id"
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
            error={false}
            id="requested-amount-input"
            name="requested_amount"
            label="Amount"
            defaultValue=""
            helperText=""
            type="Number"
            required
            onChange={props.onChange}
        />
        </div>
        <div>
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
            error={false}
            id="email-input"
            name="email"
            label="Email"
            defaultValue=""
            helperText=""
            type="email"
            required
            onChange={props.onChange}
        />
        </div>
        <div>
        <Button type="button" variant="contained" color="primary" onClick={props.onSubmit}>
            Check loan
        </Button>
        </div>
    </form>
  );
}
