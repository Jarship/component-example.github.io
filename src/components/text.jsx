import { color, space, typography } from 'styled-system';
import styled from '@emotion/styled';

const Text = styled.p(
  `
    font-family: 'Josefin Sans', sans-serif;
  `,
  color,
  space,
  typography
);

export default Text;