import styled from 'styled-components';
import media from './media';
import utils from '../utils'

export const Container = styled.div`
  background: lightyellow;
  width: 100%;
  ${({ theme }) => {
    utils.clearLog("theme", theme)
    return media.phone`
      background: ${theme.primary};
    `}
  }
  ${({ theme }) => {
    return media.tv`
      background: ${theme.secondary};
    `}
  }
`;
