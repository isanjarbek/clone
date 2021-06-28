import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Line from './Line'

const StyledConsole = styled.textarea`
    width: 100%;
    height: 40vh;
    font-size: 24px;
    border: none;
    color: ${({ color }) => color || 'blue'};
    &:focus {
        outline: none;
    }
    
`
const Console = (color, ...props) => {
    const [lines, setLines] = useState(['+998 '])
    return (
        <Flex>
            <Flex direction={"column"}>
                {lines.map(line =>
                    <Line color={color}>{line}</Line>
                )}
            </Flex>
            <StyledConsole color={color} {...props} />
        </Flex>
    )
}
export default Console