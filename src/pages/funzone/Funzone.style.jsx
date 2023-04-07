import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex';

export const FunzoneContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.mainColor};
  flex-direction: column; 
`;

export const Button = styled.button`
  flex-direction: column;
  justify-content: center;
  background-color: #e1f1dd;
  padding: 50px;
  outline: none;
  height: 3rem;
  border: none;
  margin: 5px; 
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background: ${({ theme }) => theme.colors.mainColor};
    transition: all 0.3s ease-in;
    border: 3px solid white;
  }
`;

export const ImgContainer = styled.div`
   margin-left: -200px;
   height: 50px;
   width: 100px;
`; 

export const TextContainer = styled.div`
   margin-left: -150px;
   color: #00adb5;
   width: 300px;
`; 

