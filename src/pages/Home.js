import styled from "styled-components";
import { salestData } from "../fakeData";
import ChartBar from "../components/ChartBar";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetSmall from "../components/WidgetSmall";
import WidgetLarge from "../components/WidgetLarge";

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  flex: 4;
`;

const WidgetContainer = styled.div`
  /* border: 1px solid blue;  */
  display: flex;
  margin: 20px;
  @media screen and (max-width: 955px) {
    flex-direction: column;
  }
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <ChartBar data={salestData} />
      <WidgetContainer>
        <WidgetSmall />
        <WidgetLarge />
      </WidgetContainer>
    </Container>
  );
};

export default Home;
