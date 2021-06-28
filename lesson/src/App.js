// import React, { useState } from 'react'
// import { users as allUsers } from './users'
// import Select from './components/select/main'

// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import Divider from '@material-ui/core/Divider'
// import { makeStyles } from '@material-ui/styles'
// import ListItemText from '@material-ui/core/ListItemText'
// import ListItemAvatar from '@material-ui/core/ListItemAvatar'
// import Avatar from '@material-ui/core/Avatar'


// const useStyles = makeStyles(() => ({
//     cont: { width: '60vw', marginLeft: '20vw' },
//     user: {
//         '&:hover': {
//             cursor: 'pointer',
//             backgroundColor: '#efefef'
//         }
//     },
// }))

// function App() {
//     const classes = useStyles()
//     const [users] = useState(allUsers)
//     return (
//         <div className={classes.cont}>
//             <Users users={users} />
//         </div>
//     )
// }
// function Users(props) {
//     return (
//         <List >
//             {props.users.map(user => (
//                 <User
//                     //  key={user.id.value}
//                     name={`${user.name.first} ${user.name.last}`}
//                     email={user.email}
//                     avatar={user.picture.medium}
//                 />
//             ))}

//         </List>
//     )
// }

// function User(props) {
//     const classes = useStyles()
//     return (
//         <>
//             <div>
//                 <ListItem className={classes.user} alignItems="flex-start">
//                     <ListItemAvatar>
//                         <Avatar alt="Remy Sharp" src={props.avatar} />
//                     </ListItemAvatar>
//                     <ListItemText primary={props.name} secondary={props.email} />
//                 </ListItem>
//                 <Divider variant="inset" component="li" />
//             </div>
//             <div>

//             </div>
//         </>
//     )
// }
// export default App

import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FolderList from './components/List/List'
import Input from './components/Input/Input'

function App() {
    return (
        <div>
            {/* <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/profile" component={() => <Profile authorized={true} />} />
                </Switch>
            </Router> */}
            {/* <FolderList/> */}
            <Input />
        </div>
    )
}
export default App