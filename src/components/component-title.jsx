import { color, typography, space } from 'styled-system';
import styled from '@emotion/styled';

const ComponentTitle = styled.h2(
  `
    text-transform: uppercase;
  `,
  color,
  typography,
  space
);

ComponentTitle.defaultProps = {
  textAlign: 'center',
  py: '3rem',
  px: '0.5rem',
  fontSize: '2.5rem',
  lineHeight: '2.3rem',
  fontFamily: `'Krona One', sans-serif`,
  fontWeight: 600,
  color: '#25282a',
  my: 0
};

export default ComponentTitle;