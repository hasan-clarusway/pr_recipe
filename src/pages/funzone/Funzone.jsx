import{ 
    FunzoneContainer,
    Button,
    ImgContainer,
    TextContainer,
} from './Funzone.style';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import foodeat from '../../assets/foodeat.gif';
import React from 'react';

const Funzone = () => {
 
   const navigate = useNavigate(); 
   const [showImage, setShowImage] = useState({foodeat: false});
   const [showText, setShowText] = useState(false);

   const onClickHandler = (order) => {
      setShowImage((prevState) => ({
        [order]: !prevState[order]
      }));
   };
   const clickHandler = (order) => {
      setShowText((prevState) => ({
        [order]:  !prevState[order]
      }));
   };
   
    return (
       <FunzoneContainer>
       <div>
          <Button
            onClick={() => navigate('../Items')}>          
            Date
          </Button>
       </div>
       
       <div>          
          <Button onClick={() =>{ onClickHandler('gif'); clickHandler(); }} className='gif'>
              Fun-Gif
          </Button>  
               
          <ImgContainer>
            {showImage.gif && <img src={foodeat} alt='gif' /> }
          </ImgContainer>
          <TextContainer>
            { showText && <h1>Welcome to Mom's Kitchen</h1> }
          </TextContainer>
       </div>

       </FunzoneContainer>
    );
  }

export default Funzone;
