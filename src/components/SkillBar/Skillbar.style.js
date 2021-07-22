import styled from "styled-components"



export const Bar = styled.div`
    height: 1.7rem;
    width: 100%;
    background: #c4c4c4;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${props => props.percent}%;
        background: black;
    }
`

export const Image = styled.img`
    max-width: 100%;
    max-width: 100%;
    height: 100%;
    width: 100px;
    object-fit: contain;
    object-position: center;
    transform: scale(${({ scaleFactor }) => scaleFactor ? scaleFactor : 1});
`