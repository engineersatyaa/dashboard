import { salestData, userData } from "../fakeData";
import ChartBar from "../components/ChartBar";
import Chart from "../components/Chart";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid black; */
  flex: 4;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const ChartAnalytics = () => {
  return (
    <Container>
      <ChartBar data={salestData} />
      <Chart data={userData} />
    </Container>
  );
};

export default ChartAnalytics;
