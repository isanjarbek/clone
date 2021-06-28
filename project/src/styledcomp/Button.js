import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const rotateAnimation = keyframes`
    0%{
        transform: rotateZ(0deg);
    }
    100%{
        transform: rotateZ(360deg);
    }
    `
const StyleButton = styled.button`
    border: none;
    font-size: 18px;
    cursor: pointer;
    &:focus {
        outline: none;

    }
    &: hover {
        animation:  ${rotateAnimation} 1s infinite linear;
    }
    ${props => props.primary && css` 
        color: ${props => props.color || 'white'};
        background: ${props => props.backgorund || 'white'};
    `}
    ${props => props.outlined && css` 
        color: ${props => props.color || 'white'};
        border: 1px solid ${props => props.color || "white"};
        background: ${props => props.backgorund || 'white'};
    `}
`

const LargeButton = styled(StyleButton)`
    font-size: 32px;
    `
const Button = (props) => {
    return <StyleButton {...props} />
}
export default Button