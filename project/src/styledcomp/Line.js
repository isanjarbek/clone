import React from 'react'
import styled from 'styled-components'

const StyleLine = styled.div`
    font-size: 24px;
    color: ${props => props.color || 'white'};
    `
const Line = (props) => {
    return <StyleLine {...props} />
};
export default Line