import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../const'
import {privateRoutes} from '../routes'
import {publicRoutes} from '../routes'

function AppRouter() {
    const user = false
    return user ? (
        <Switch>
            {privateRoutes.map(({path, Component}) =>
             <Route path={path} component={Component} exact={true}/>
            )}
            <Redirect to={CHAT_ROUTE}/>
        </Switch>
    )
    : (
        <Switch>
             {publicRoutes.map(({path, Component}) =>
            <Route path={path} component={Component} exact={true}/>
            )}
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
    )
}
export default AppRouter