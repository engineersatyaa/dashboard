import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Container = styled.div`
  /* border: 1px solid black; // */
  display: flex;
  justify-content: space-between;
  margin: 10px 0px 20px;

  @media screen and (max-width: 955px) {
    flex-direction: column;
    margin: 10px 0px 0px;
  }
`;
const Wrapper = styled.div`
  /* border: 1px solid black; /////// */
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0px 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.73);
  cursor: pointer;
  transition: all 1s ease;

  &:hover {
    background-color: #8bb5fb;
  }

  @media screen and (max-width: 955px) {
    margin-bottom: 20px;
    margin-top: 0px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  @media screen and (max-width: 426px) {
    flex-direction: column;
  }
`;

const Title = styled.span`
  font-size: 20px;
`;

const MoneyContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;

  @media screen and (max-width: 426px) {
    margin: 5px 0px;
  }
`;
const Money = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;

  .icon {
    font-size: 16px;
    margin-left: 5px;
    color: red;
  }
  .upIcon {
    color: green;
  }
`;
const Info = styled.span`
  font-size: 15px;
  color: gray;
`;

const FeaturedInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Revanue</Title>
        <MoneyContainer>
          <Money> &#8377;400</Money>
          <MoneyRate>
            -12 % <ArrowDownward className="icon" />
          </MoneyRate>
        </MoneyContainer>
        <Info>Compared to last month.</Info>
      </Wrapper>
      <Wrapper>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money> &#8377;950</Money>
          <MoneyRate>
            -15 % <ArrowDownward className="icon" />
          </MoneyRate>
        </MoneyContainer>
        <Info>Compared to last month.</Info>
      </Wrapper>
      <Wrapper>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money> &#8377;550</Money>
          <MoneyRate>
            +15 % <ArrowUpward className="icon upIcon" />
          </MoneyRate>
        </MoneyContainer>
        <Info>Compared to last month.</Info>
      </Wrapper>
    </Container>
  );
};

export default FeaturedInfo;
