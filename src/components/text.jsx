import { color, space, typography, position } from 'styled-system';
import styled from '@emotion/styled';

const Text = styled.p(
  `
    font-family: 'Josefin Sans', sans-serif;
  `,
  color,
  space,
  typography,
  position
);

export default Text;