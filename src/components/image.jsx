import { layout, space, flexbox, border, position, compose } from 'styled-system';
import styled from '@emotion/styled';

const Image = styled.img(
  `
    vertical-align: middle;
    border-style: none;
  `,
  compose(
    layout,
    space,
    flexbox,
    border,
    position
  )
);

Image.defaultProps = {
  maxWidth: '100%',
  height: 'auto'
};

export default Image;