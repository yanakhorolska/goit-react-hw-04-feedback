import styled from 'styled-components';

export const Button = styled.button`
  padding: 15px;
  font-size: 15px;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  font-weight: 600;
  :hover {
    scale: 1.05;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
