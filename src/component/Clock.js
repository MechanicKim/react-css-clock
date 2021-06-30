import React from 'react';
import styled from 'styled-components';

import {HourScale} from './Scale';
import {Hour, Minute, Seconds} from './Hand';

const Body = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: 3px solid #212121;
    border-radius: 100%;

    position: relative;
    box-sizing: border-box;
`;

export default function Clock({size, scaleHeight = 10}) {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    return (
        <Body size={size}>
            {HourScale(scaleHeight)}
            <Seconds deg={sec * 6} size={size} height={size * 0.4} />
            <Minute deg={(min * 6) + (sec / 10)} size={size} height={size * 0.3} />
            <Hour deg={(hour * 30) + (min / 2)} size={size} height={size * 0.2} />
        </Body>
    );
}

