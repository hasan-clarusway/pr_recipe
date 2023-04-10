import styled from 'styled-components';
import Flex from '../../components/globalStyles/Flex';

export const MainContainer = styled(Flex)`
   height: 750px;
   display: flex;
   margin-left: 25rem;
   background: rgb(250 120 190);
   text-align: center;
   max-width: 60%;
   border: 1px solid white;
   padding: 2rem;
   border-radius: 100px;
   position: absolute;
   @media (max-width: ${({ theme }) => theme.screens.lg}) {
   margin: 61% 15%;
   transform: translate(8%, -40%);
   padding: 3px;
   }
`;

export const Header = styled.div`
   font-size: 40px;
   padding: 2rem;
   border-radius: 5px;
   color: #11c;
`;

export const DateContainer = styled.div`
   font-size: 40px;
   padding: 2rem;
   border-radius: 5px;
   color: #11c;  
`;

export const TimeContainer = styled.div`
   font-size: 40px;
   color: #11c;
   padding: 2rem;
   border-radius: 5px;
`;

