import React, {Component} from 'react'
import ApplicationForm from './ApplicationForm'


export default class Application extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            server_url: sessionStorage.getItem("server_url"),
            tax_id: '',
            bussiness_name: '',
            requested_amount: '',
            social_security: '',
            owner_name: '',
            email: '',
            loan_decision: '',
            requested_amount_validation: {
                errorMessage: '',
                hasError: false
            },
            email_validation: {
                errorMessage: '',
                hasError: false
            }
        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    validateRequestedAmount(value) {
        let hasError = false;
        let errorMessage = '';
        if (isNaN(value)) {
            hasError = true;
            errorMessage = 'please enter a valid number'
        } else {
            let amount = parseFloat(value);
            if (amount <= 0) {
                hasError = true
                errorMessage = 'the amount must be positive'
            }
        }
        this.setState({requested_amount_validation: {
            hasError: hasError,
            errorMessage: errorMessage
        }});
        return hasError
    }

    validateEmail(value) {
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let isValid = emailPattern.test(value);
        let errorMessage = ''
        let hasError = false;
        if (!isValid) {
            hasError = true;
            errorMessage = 'please enter a valid email'
        } 
        this.setState({email_validation: {
            hasError: hasError,
            errorMessage: errorMessage
        }});
        return hasError;
    }

    onChange(e){
        let field = e.target.name;
        let hasError = false;
        if (field === 'requested_amount' && this.validateRequestedAmount(e.target.value)) {
            hasError = true;
        } else if (field === 'email' && !this.validateEmail(e.target.value)) {
            hasError = true;
        }
        if (!hasError) {
            this.setState({
                [e.target.name] : e.target.value
            });
        }
    }

    submitForm() {
        if (this.state.requested_amount_validation.hasError || isNaN(parseFloat(this.state.requested_amount))) {
            return;
        }
        let data = {
            amount: parseFloat(this.state.requested_amount)
        }
        fetch("http://127.0.0.1:8000/api/checkloan", {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status === 200) {
                response.json().then(json => {
                    console.log(json)
                    let decision = json.decision
                    this.setState({loan_decision: decision})
                }, (error) => {
                    console.log(error);
                });
            }
        }, (error) => {
            console.log(error);
        });
    }

    render() {
        return (<div>
            <ApplicationForm onChange={this.onChange} onSubmit={this.submitForm} 
                loanDecision={this.state.loan_decision}
                requested_amount_validation={this.state.requested_amount_validation}
                email_validation={this.state.email_validation}
            >
            </ApplicationForm>
        </div>)
    }
}