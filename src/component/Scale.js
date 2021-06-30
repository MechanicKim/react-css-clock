import React from 'react';
import styled, {css} from 'styled-components';

console.log(1);

const hand = css`
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    box-sizing: border-box;
`;

const ScalePair = styled.div`
    width: 3px;
    height: 100%;
    ${hand}

    transform: rotate(${props => props.deg}deg);
`;

const scale = props => css`
    width: 100%;
    height: ${props.height}px;
    background-color: #212121;

    position: absolute;
`;

const Scale1 = styled.div`
    ${scale}
    top: 0;
`;

const Scale2 = styled.div`
    ${scale}
    bottom: 0;
`;

export function HourScale(height) {
    const Scales = [];
    for (let i = 0; i < 6; i++) {
        Scales.push(
            <ScalePair key={i} deg={i * 30}>
                <Scale1 height={height}></Scale1>
                <Scale2 height={height}></Scale2>
            </ScalePair>
        );
    }
    return Scales;
}