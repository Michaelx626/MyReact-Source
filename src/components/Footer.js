import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export default function Footer() {
    return (
        <FooterContainer>
            "👋"
        </FooterContainer>
    );
};