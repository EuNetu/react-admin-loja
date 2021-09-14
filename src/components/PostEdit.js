import React from "react";
import {Edit, SimpleForm, TextInput, DateInput, TextField, DateField} from 'react-admin';

const PostEdit = (props) => {
    return(
        <Edit title='Edit Post' {...props}>
            <SimpleForm>
                <TextInput source='modelo' />
                <TextInput source='marca' />
                <TextInput source='descrição' />
                <TextInput source='preço' />
                <DateInput label='Data da Publicação' source='data da publicacão' />
            </SimpleForm>
        </Edit>
    )
}

export default PostEdit