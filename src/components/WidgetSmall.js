import { VisibilityOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userRows } from "../fakeData";

const Container = styled.div`
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 20px;
  padding: 20px;
  @media screen and (max-width: 955px) {
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;

const Heading = styled.h3`
  font-size: 21px;
  font-weight: 600;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;

  .link {
    text-decoration: none;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin: 0px 2px 0px 8px;
  @media screen and (max-width: 360px) {
    width: 120px;
  }
`;

const Name = styled.span`
  font-weight: 600;
`;

const Desc = styled.span`
  font-weight: 300;
  @media screen and (max-width: 360px) {
    font-size: 13px;
  }
`;

const Button = styled.button`
  background-color: #2061ca;
  color: white;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 5px;
  padding: 6px 10px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    background-color: #2874f0;
  }

  .icon {
    margin-right: 6px;
    font-size: 22px;
    @media screen and (max-width: 360px) {
      display: none;
    }
  }
`;

const WidgetSmall = () => {
  return (
    <Container>
      <Heading>New Users</Heading>
      <List>
        {userRows.slice(0, 5).map((data) => (
          <ListItem key={data.id}>
            <Image src={data.avatar} />
            <InfoContainer>
              <Name>{data.username}</Name>
              <Desc>{data.desc}</Desc>
            </InfoContainer>
            <Link to="/user/:userId" className="link">
              <Button>
                <VisibilityOutlined className="icon" />
                View
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default WidgetSmall;
