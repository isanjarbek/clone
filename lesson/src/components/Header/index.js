import React from 'react'
import './header.css'

import Button from '@material-ui/core/Button';

import flower from '../../images/497f521d69438031d96a49b6d84611c9.jpg'
import Card from '../Card'

function    Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>

                </ul>
            </nav>

            {/* <Card image={flower} title="flower" /> */}
            <div>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                    </div>
        </div>

    )
}
export default Header