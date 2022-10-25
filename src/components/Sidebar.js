import styled from "styled-components";
import {
  AddShoppingCartOutlined,
  BarChart,
  CachedOutlined,
  ChatBubbleOutline,
  CurrencyRupee,
  Group,
  Home,
  LocalMallOutlined,
  MailOutline,
  ManageAccounts,
  PersonAddAltOutlined,
  QuestionAnswerOutlined,
  ReportGmailerrorredOutlined,
  Storefront,
  Timeline,
  UpdateOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
  /* border: 1px solid black; */
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.73);
  border-radius: 0px 10px 0px 0px;
  background-color: #fbfbff;
  position: sticky;
  top: 60px;
  /* flex: 1; */
  width: 200px;
  height: calc(100vh - 60px);
  overflow-y: scroll;

  @media screen and (max-width: 426px) {
    position: absolute;
    top: 60px;
    right: 0px;
    flex: none;
    box-shadow: none;
    width: 0px;
    border-radius: 0px;
    z-index: 10;
    transition: all 0.2s ease;

    &.active {
      width: 200px;
    }
  }
`;

const Wrapper = styled.div`
  padding: 25px 15px 20px;

  @media screen and (max-width: 426px) {
    position: fixed;
    background-color: #e4eeff;
    width: 100%;
    border-left: 1px solid lightgray;
    height: calc(100vh - 60px);
    overflow-y: scroll;
  }
`;

const MenuContainer = styled.div`
  margin-bottom: 10px;
`;
const Heading = styled.h3`
  font-size: 16px;
  font-weight: 500;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 10px 0px;
  cursor: pointer;

  .link {
    text-decoration: none;
    color: black;
  }
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
  font-size: 15px;

  &:hover {
    background-color: #e2efff;
  }

  .icon {
    color: black;
    margin-right: 9px;
  }
`;

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <Container className={`${menuOpen && "active"}`}>
      <Wrapper>
        <MenuContainer>
          <Heading>Dashboard</Heading>
          <List>
            <Link to="/dashboard" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <Home className="icon" />
                Home
              </ListItem>
            </Link>
            <Link to="/products" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <LocalMallOutlined className="icon" />
                Sales
              </ListItem>
            </Link>
            <Link to="/analytics" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <Timeline className="icon" />
                Analytics
              </ListItem>
            </Link>
            <Link to="/users" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <CurrencyRupee className="icon" />
                Transactions
              </ListItem>
            </Link>
            <Link to="/analytics" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <BarChart className="icon" />
                Reports
              </ListItem>
            </Link>
          </List>
        </MenuContainer>
        <MenuContainer>
          <Heading>Quick Menu</Heading>
          <List>
            <Link to="/users" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <Group className="icon" />
                Users
              </ListItem>
            </Link>

            <Link to="/addUser" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <PersonAddAltOutlined className="icon" />
                Add User
              </ListItem>
            </Link>

            <Link to="/user/:userId" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <UpdateOutlined className="icon" />
                User Update
              </ListItem>
            </Link>

            <Link to="/products" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <Storefront className="icon" />
                Products
              </ListItem>
            </Link>

            <Link to="/addProduct" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <AddShoppingCartOutlined className="icon" />
                Add Product
              </ListItem>
            </Link>

            <Link to="/product/:productId" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <CachedOutlined className="icon" />
                Product Update
              </ListItem>
            </Link>
          </List>
        </MenuContainer>
        <MenuContainer>
          <Heading>Notifications</Heading>
          <List>
            <Link to="/user/:userId" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <MailOutline className="icon" />
                Mails
              </ListItem>
            </Link>
            <Link to="/product/:productId" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <ChatBubbleOutline className="icon" />
                Messages
              </ListItem>
            </Link>

            <Link to="/addUser" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <QuestionAnswerOutlined className="icon" />
                Feedback
              </ListItem>
            </Link>
          </List>
        </MenuContainer>
        <MenuContainer>
          <Heading>Services</Heading>
          <List>
            <Link to="user/:userId" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <ManageAccounts className="icon" />
                Manage
              </ListItem>
            </Link>

            <Link to="/analytics" className="link">
              <ListItem onClick={() => setMenuOpen(false)}>
                <ReportGmailerrorredOutlined className="icon" />
                Reports
              </ListItem>
            </Link>
          </List>
        </MenuContainer>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
