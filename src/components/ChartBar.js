import styled from "styled-components";
import { scaleOrdinal } from "d3-scale";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const colors = scaleOrdinal([
  "#1f77b4",
  "#aec7e8",
  "#ff7f0e",
  "#ffbb78",
  "#2ca02c",
  "#bf1bbf",
  "#d62728",
  "#ff9896",
  "#f7b6d2",
  "#17becf",
  "#9467bd",
  "#7f7f7f",
  "#bcbd22",
]).range();

const getPath = (x, y, width, height) => {
  return `M${x},
  ${y + height}C ${x + width / 3},
  ${y + height} ${x + width / 2},
  ${y + height / 3} ${x + width / 2},
  ${y}C ${x + width / 2},
  ${y + height / 3} ${x + (2 * width) / 3},
  ${y + height} ${x + width},
  ${y + height}Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  //   console.log(props);
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Container = styled.div`
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  padding: 20px;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  /* border: 1px solid red; */
  margin-bottom: 20px;
  width: 100%;

  h3 {
    font-size: 21px;
    font-weight: 600;
  }
`;

const ChartBar = ({ data }) => {
  return (
    <Container>
      <TitleContainer>
        <h3>Sales Analytics</h3>
      </TitleContainer>
      <ResponsiveContainer width="100%" height={245}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <Tooltip />

          <XAxis dataKey="name" />

          {/* <YAxis /> */}

          <Bar
            dataKey="Sales"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default ChartBar;
