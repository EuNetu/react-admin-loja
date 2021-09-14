import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
    ReferenceInput,
    SelectInput,
    TextInput
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
                <TextField source='preço' />
                <DateField source='data da publicação' />
                <EditButton basePath='/posts'/>
                <DeleteButton basePath='/posts'/>
            </Datagrid>
        </List>
        )
}
export default PostList