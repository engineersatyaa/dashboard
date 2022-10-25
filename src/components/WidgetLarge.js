import styled from "styled-components";
import { userRows } from "../fakeData";

const Container = styled.div`
  /* border: 1px solid black; ///// */
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 20px;

  h3 {
    font-size: 21px;
    font-weight: 600;
  }
`;

const Table = styled.table`
  /* border: 1px solid black; ///// */
  width: 100%;
  border-spacing: 20px;

  @media screen and (max-width: 426px) {
    border-spacing: 0px 20px;
  }

  th {
    text-align: left;

    @media screen and (max-width: 426px) {
      display: none;
    }
  }
`;

const Td = styled.td`
  /* border: 1px solid black; ///// */
  font-weight: 300;

  @media screen and (max-width: 426px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
    &:last-child {
      border-bottom: 1px solid lightgray;
    }
  }

  &.info {
    display: flex;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Span = styled.span`
  /* border: 1px solid black; ///// */
  display: flex;
  font-weight: 600;
  width: 120px;

  @media screen and (max-width: 426px) {
    text-align: center;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  font-size: 15px;
  width: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.approved {
    color: #1b6046;
    background-color: #b3f6dc;
  }
  &.declined {
    color: #980712;
    background-color: #fecace;
  }
  &.pending {
    color: #123e86;
    background-color: #c0d7fe;
  }

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 426px) {
    margin-bottom: 25px;
  }
`;

const WidgetLarge = () => {
  return (
    <Container>
      <h3>Latest Transactions</h3>
      <Table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userRows.slice(0, 4).map((data) => (
            <tr>
              <Td className="info">
                <Image src={data.avatar} />
                <Span>{data.username}</Span>
              </Td>

              <Td>{data.date}</Td>
              <Td>{data.transaction}</Td>
              <Td>
                <Button className={data.transStatus}>{data.transStatus}</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default WidgetLarge;
