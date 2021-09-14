import React from "react";
import {Edit, EmailField, SimpleForm, TextField, TextInput} from 'react-admin';

const UserEdit = (props) => {
    return(
        <Edit title='Edit User' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='nome' />
                <TextInput source='telefone' />
                <TextInput source='cidade' />
                <TextInput source='email' />
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit