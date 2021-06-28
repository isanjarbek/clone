import React, { useState } from 'react'
import Menu from './change/menu'
import Heartcheck from './heart-checkbox/checkh'
import Modal from './modal/main';
import './style.css'
import Use from './useMemo/main';
import Effects from './useEffect/main';
import UseRef from './useRef/main';
import Alert from './Alert/alert';

const AlertContext = React.createContext()
const toggleAlert = () => setAlert(prev => !prev)

function Components() {
    const [alert, setAlert] = useState(false)
    return (
        <AlertContext.Provider value={alert}>
            <div className="components">
                {/* <Heartcheck />
                <Menu />
                <Modal />
                <Effects />
                <UseRef />
                <Use /> */}

                <Alert toggle={toggleAlert} />
            </div>
        </AlertContext.Provider>
    )
}

export default Components