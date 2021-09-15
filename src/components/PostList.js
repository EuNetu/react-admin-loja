import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
} from 'react-admin'
/*
const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="posts" reference="posts" allowEmpty>
        <SelectInput optionText="id" />
    </ReferenceInput>,
];
*/
const PostList = (props) => {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='modelo' />
                <TextField source='marca' />
                <TextField source='descrição' />
                <TextField source='cor' />
                <TextField source='preço' />
                <TextField source='contato' />
                <EditButton basePath='/postagens'/>
                <DeleteButton basePath='/postagens'/>
            </Datagrid>
        </List>
        )
}
export default PostList