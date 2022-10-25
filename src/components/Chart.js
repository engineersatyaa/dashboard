import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.73);

  h3 {
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const Chart = ({ data }) => {
  return (
    <Container>
      <h3>User Analytics</h3>
      <ResponsiveContainer height={245}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#619dff" />
          <Line type="monotone" dataKey="Active Users" stroke="#619dff" />
          <Tooltip />
          <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;
