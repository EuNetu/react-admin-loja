import React from 'react'
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import PhoneAndroidSharpIcon from '@material-ui/icons/PhoneAndroidSharp'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Admin dashboard={Dashboard} dataProvider={restProvider('http://localhost:3000')}>
        <Resource
            name='postagens'
            list={PostList}
            create={PostCreate}
            edit={PostEdit}
            icon={PhoneAndroidSharpIcon}
        />
        <Resource
            name='users'
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
        />
    </Admin>
  );
}

export default App;
