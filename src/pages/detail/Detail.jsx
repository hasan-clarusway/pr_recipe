import {
   DetailContainer,
   DetailPart,
   HeaderContainer,
   ImgContainer,
   OtherPart,
   IngContainer,
 } from './Detail.style';
import { useLocation } from 'react-router-dom';
import backgr from '../../assets/backgr.jpg';
import house from '../../assets/house.png';

const Detail = () => {
   const {state} = useLocation();
   console.log(state);
   

   return (
     <DetailContainer>
        <HeaderContainer>
           <h1>{state.label}</h1>
           <img src={backgr} alt="" />
        </HeaderContainer>
        <DetailPart wrap="wrap">
           <OtherPart>
              <h4>NUTRIENTS</h4>
              <p>
                {state.totalNutrients.CA.label} :{''}
                {Math.round(state.totalNutrients.CA.quantity)}
                {state.totalNutrients.CA.unit}
              </p>  
              <p>
                {state.totalNutrients.CHOCDF.label} :{''}
                {Math.round(state.totalNutrients.CHOCDF.quantity)}
                {state.totalNutrients.CHOCDF.unit}
              </p>  
              <p>
                {state.totalNutrients.CHOLE.label} :{' '}
                {Math.round(state.totalNutrients.CHOLE.quantity)}
                {state.totalNutrients.CHOLE.unit}
              </p>
              <p>
                {state.totalNutrients.ENERC_KCAL.label} :{' '}
                {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
                {state.totalNutrients.ENERC_KCAL.unit}
              </p>
              <p>{state.totalWeight}</p>
              <p>Calories: {Math.round(state.calories)}</p>
                {state.digest.slice(0, 4).map((item, index) => (
              <p key={index}>
                {item.label} : {Math.round(item.total)}
              </p>
              ))}
           </OtherPart>

           <ImgContainer>
             <img src={state.image || house} alt={state.label} />
           </ImgContainer>

           <IngContainer>
              {state.ingredientLines.map((line, index) => (
                 <div key={index}>
                   <p>
                    {index + 1} - {line}
                   </p>
                   <br />
                 </div>
               ))}
            </IngContainer>
        </DetailPart>
     </DetailContainer>
   )
};

export default Detail;