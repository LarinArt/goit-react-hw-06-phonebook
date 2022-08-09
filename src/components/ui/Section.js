import styled from 'styled-components';

export const Section = styled.div`
  min-height: 700px;
  width: 500px;
  margin-top: 100px;
  padding: 50px;
  box-shadow: ${({ theme }) => theme.colors.mainShadow};
`;
