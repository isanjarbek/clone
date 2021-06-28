import React from 'react'

function Navbar() {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/profile" component={Profile}/>
                </Switch>
            </Router>
        </div>
    )
}
export default Navbar