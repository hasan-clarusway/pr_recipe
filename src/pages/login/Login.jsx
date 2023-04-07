import {
  LoginContainer,
  FormContainer,
  Header,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledButton,
} from './Login.style';

import backgr from '../../assets/backgr.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: 'Robert',
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('user', JSON.stringify(userInfo));
    navigate(-1);
  };
  return (
     <LoginContainer>
         <FormContainer>
            <StyledImg src={backgr} />
            <Header>{'<MYPR/>'}Recipes</Header>
            <StyledForm onSubmit={handleSubmit}>
               <StyledInput type="text" placeholder="username" required />
               <StyledInput type="password" placeholder="password" required />
               <StyledButton type="submit">Login</StyledButton>
            </StyledForm>
         </FormContainer>
     </LoginContainer> 
  );
};

export default Login;