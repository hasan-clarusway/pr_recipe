import { MainContainer, Card, Header, Image, Button } from './Cards.style';
import house from '../../assets/house.png';
import { useNavigate } from "react-router-dom";

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  return (
     <MainContainer wrap='wrap'>

     {recipes.map(({recipe}, index) =>(
         <Card key={index}>
            <Header>{recipe.label}</Header>
            <Image src={recipe.image || house} />
            <Button
               onClick={() =>
               navigate('detail', {state: recipe, replace: false})
                } >
               View More
            </Button>

         </Card>
     ))}

     </MainContainer>
  );
};

export default Cards;