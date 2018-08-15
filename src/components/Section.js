import React from 'react';
import styled from 'styled-components';
import Wave from './Wave';

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 720px;
    display: grid;
    background-size: cover;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width:640px){
        height:800px;
    }
`
const SectionLogo = styled.img`
    align-self: end;
    width： 100px;
    margin: 0 auto;
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 30px;
    grid-gap: 20px;
    grid-template-ros: auto 100%;

    @media (max-width: 720px){
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    font-size: 60px;
    margin: 0;
    color:white;
    line-height: 1.2;
    @media(max-width:640px){
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color:white;
`

const WaveTop = styled.div`
    transform: rotate(180deg);
    position: absolute;
    width: 100%;
    top: -6px;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const Section = props =>(
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo}></SectionLogo>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)


export default Section
