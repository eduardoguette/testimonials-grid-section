import React from 'react';

import styled from 'styled-components';

const DivFooter = styled.div`
  text-align: center;
  margin: 2em;
`;
export default function Footer() {
  return (
    <DivFooter className="attribution">
      Challenge by
      <a
        href="https://www.frontendmentor.io/challenges/officelite-coming-soon-site-M4DIPNz8g"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        href="https://github.com/eduardoguette"
        target="_blank"
        rel="noreferrer"
      >
        Eduardo Guette
      </a>
      .
    </DivFooter>
  );
}
