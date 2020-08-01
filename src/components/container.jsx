import { color, space } from 'styled-system';
import styled from '@emotion/styled';

const Container = styled.div(
  `
    width: 100%;
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 576px) {
      max-width: 540px;
    }
  `,
  color,
  space
);

Container.defaultProps = {
  px: '15px',
  mx: 'auto'
};

export default Container;