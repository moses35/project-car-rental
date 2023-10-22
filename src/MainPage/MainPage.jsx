import car from '../assets/Main.jpg';
import { Block, Img, Text, Button } from './MainPage.styled';
export const MainPage = () => {
  return (
    <>
      <Block>
        <div>
          <Text>
            Welcome. You can rent a car of almost any class at an affordable
            price.
          </Text>
          <Button to="/catalog">Find car</Button>
        </div>

        <Img src={car} alt="car" />
      </Block>
    </>
  );
};
