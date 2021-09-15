import React from "react";
import {Edit, SimpleForm, TextInput} from 'react-admin';

const PostEdit = (props) => {
    return(
        <Edit title='Edit Post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='modelo' />
                <TextInput source='marca' />
                <TextInput source='descrição' />
                <TextInput source='cor' />
                <TextInput source='preço' />
                <TextInput source='contato' />
            </SimpleForm>
        </Edit>
    )
}

export default PostEdit