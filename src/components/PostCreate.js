import React from "react";
import {Create, SimpleForm, TextInput, DateInput, TextField, DateField} from 'react-admin';

const PostCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='modelo' />
                <TextInput source='marca' />
                <TextInput multiline source='descrição' />
                <TextInput multiline source='cor' />
                <TextInput source='preço' />
                <TextInput source='contato' />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate