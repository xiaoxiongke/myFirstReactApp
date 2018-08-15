import React from 'react';
import styled from 'styled-components'

const CellsGroup = styled.div`
    display: grid;
    grid-template-columns:60px auto;
    grid-gap: 25px;
    align-items:center;
    padding:20px;
`

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background:black;
    background-image:url(${props => props.image});
    background-size: 60px;
`

const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding: 30px 0;
`

const Cell = props => (
    <CellsGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellsGroup>
)

export default Cell