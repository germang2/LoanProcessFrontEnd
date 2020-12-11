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
            loan_decision: ''
        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm() {
        let data = {
            amount: parseFloat(this.state.requested_amount)
        }
        console.log(data)
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
            console.log('Error');
            console.log(error);
        });
    }

    render() {
        return (<div>
            <ApplicationForm onChange={this.onChange} onSubmit={this.submitForm} loanDecision={this.state.loan_decision}>
            </ApplicationForm>
        </div>)
    }
}