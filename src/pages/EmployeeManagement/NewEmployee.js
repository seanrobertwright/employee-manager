import React, { Component } from 'react'
// import { useFormik } from 'formik';

import { Label, Button, Input, Form, FormGroup, FormItem, Dialog } from '@ui5/webcomponents-react'

class NewEmployee extends Component {
    
    
    //const formik = useFormik({})
    render(){
    return (
        <div>
            <Dialog ref={{current: '[Circular]'}} 
                footer={<Button>Submit</Button>}
                headerText="New Employee">
                <Form>
                    <FormGroup title="Personal Information">
                            <FormItem label={<Label>First Name:</Label>}>
                                <Input />
                            </FormItem>
                            <FormItem label={<Label>Last Name:</Label>}>
                                <Input />
                            </FormItem>
                            <FormItem label={<Label>Email:</Label>}>
                                <Input />
                            </FormItem>
                            <FormItem label={<Label>Manager:</Label>}>
                                <Input />
                            </FormItem> 
                    </FormGroup>
                </Form>
            </Dialog>
            
        </div>
    )};
}

export default NewEmployee
