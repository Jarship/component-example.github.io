import { color, space } from 'styled-system';
import styled from '@emotion/styled';

const Card = styled.div(
  () => `
    border-width: 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 0.25rem;
  `,
  color,
  space,
  {
    label: 'Card'
  }
);

export default Card;