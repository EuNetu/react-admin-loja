import React from "react";
import {Create, SimpleForm, TextInput, DateInput, TextField, DateField} from 'react-admin';

const PostCreate = (props) => {
    return(
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextField source='modelo' />
                <TextField source='marca' />
                <TextField multiline source='descrição' />
                <TextField source='preço' />
                <DateField source='data da publicacao' />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate