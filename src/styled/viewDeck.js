import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Button = styled.div`
  display: inline-block;
  padding: 0.5em 3em;
  border: ${({ color }) => color ? `0.16em solid ${color}` : `0.16em solid #ffffff`};
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ color }) => color ? `${color}` : `#ffffff`};
  text-align: center;
  transition: all 0.15s;

  &:hover {
    color: blue;
    border-color: blue;
  }

  &:active {
    color: red;
    border-color: red;
  }
`;
