import React from 'react';
import styled, {css, keyframes} from 'styled-components';

const rotate = (deg) => keyframes`
    to {
        transform: rotate(${deg + 360}deg);
    }
`;

const hand = (deg) => css`
    height: 100%;
    position: absolute;
    transform: rotate(${deg}deg);
    left: 0;
    right: 0;
    margin: 0 auto;
    box-sizing: border-box;
`;

const SecondsHand = styled.div`
    width: 3px;
    ${props => hand(props.deg)}

    animation: ${props => rotate(props.deg)} 60s infinite steps(60);
`;

const MinuteHand = styled.div`
    width: 4px;
    ${props => hand(props.deg)}

    animation: ${props => rotate(props.deg)} 3600s infinite linear;
`;

const HourHand = styled.div`
    width: 6px;
    ${props => hand(props.deg)}

    animation: ${props => rotate(props.deg)} 216000s infinite linear;
`;

const Hand = styled.div`
    width: 100%;
    height: ${props => props.height}px;
    margin-top: ${props => (props.size / 2) - props.height}px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background-color: #212121;
`;

export function Hour({deg, size, height}) {
    return (
        <HourHand deg={deg}>
            <Hand size={size} height={height}/>
        </HourHand>
    );
}

export function Minute({deg, size, height}) {
    return (
        <MinuteHand deg={deg}>
            <Hand size={size} height={height}/>
        </MinuteHand>
    );
}

export function Seconds({deg, size, height}) {
    return (
        <SecondsHand deg={deg}>
            <Hand size={size} height={height}/>
        </SecondsHand>
    );
}