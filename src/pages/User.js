import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CalendarMonthOutlined,
  LocationOnOutlined,
  MailOutline,
  PermIdentity,
  PhoneIphoneOutlined,
  Publish,
} from "@mui/icons-material";

const Container = styled.div`
  /* border: 1px solid black; ///// */
  flex: 4;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
`;

const BtnContainer = styled.div`
  /* border: 1px solid black; ///// */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 426px) {
    flex-direction: column;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 8px;
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: #2061ca;
  color: white;
  font-size: 15px;
  cursor: pointer;

  @media screen and (max-width: 426px) {
    margin-top: 10px;
  }

  &:hover {
    transform: scale(1.01);
    background-color: #2874f0;
  }
`;

const UserContainer = styled.div`
  /* border: 1px solid red; //// */
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 955px) {
    flex-direction: column;
  }
`;

const UserInfo = styled.div`
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  flex: 1;
  padding: 20px;
`;
const UserTop = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserSubInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Job = styled.span`
  font-weight: 300;
`;

const UserBottom = styled.div`
  /* border: 1px solid black; /// */
  margin-top: 20px;
`;

const AccDetails = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #8e9193;
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;

  .icon {
    font-size: 20px;
    margin-right: 5px;
  }
`;

const UserUpdate = styled.div`
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  flex: 2;
  padding: 20px;
  margin-left: 20px;
  @media screen and (max-width: 955px) {
    margin: 20px 0px;
  }
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media screen and (max-width: 955px) {
    flex-direction: column;
  }
`;
const LeftContainer = styled.div`
  /* border: 1px solid black;   */
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Label = styled.label`
  font-size: 15px;
  margin-bottom: 5px;

  .publishIcon {
    cursor: pointer;
  }
`;

const Input = styled.input`
  border: none;
  width: 250px;
  height: 26px;
  border-bottom: 1px solid gray;
  @media screen and (max-width: 955px) {
    width: 100%;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 955px) {
    margin-top: 15px;
  }
`;

const UpdateDetails = styled.div`
  display: flex;
  align-items: center;

  .bigImg {
    width: 350px;
    height: 235px;
    border-radius: 10px;
    object-fit: cover;
    margin: 10px 10px 30px 35px;

    @media screen and (max-width: 426px) {
      width: 100%;
      height: 200px;
    }

    @media screen and (max-width: 335px) {
      margin: 10px 10px 20px 5px;
    }
  }
`;

const User = () => {
  return (
    <Container>
      <BtnContainer>
        <Title>Update User Details</Title>
        <Link to="/addUser">
          <Button>Add User</Button>
        </Link>
      </BtnContainer>
      <UserContainer>
        <UserInfo>
          <UserTop>
            <Image src="/dashboard/images/manmodel.webp" alt="Avatar" />
            <UserSubInfo>
              <Name>Sameer Jadaun</Name>
              <Job>Software Engineer</Job>
            </UserSubInfo>
          </UserTop>
          <UserBottom>
            <AccDetails>Account Details</AccDetails>

            <DetailsContainer>
              <PermIdentity className="icon" />
              <span>samakasatyaa95</span>
            </DetailsContainer>

            <DetailsContainer>
              <CalendarMonthOutlined className="icon" />
              <span>09.12.1995</span>
            </DetailsContainer>

            <AccDetails>Contact Details</AccDetails>

            <DetailsContainer>
              <PhoneIphoneOutlined className="icon" />
              <span>+91 90101112121</span>
            </DetailsContainer>

            <DetailsContainer>
              <MailOutline className="icon" />
              <span>engineersatyaa@gmail.com</span>
            </DetailsContainer>

            <DetailsContainer>
              <LocationOnOutlined className="icon" />
              <span>New Delhi | India</span>
            </DetailsContainer>
          </UserBottom>
        </UserInfo>

        <UserUpdate>
          <Span>Edit User</Span>
          <Form>
            <LeftContainer>
              <ItemContainer>
                <Label>Full Name</Label>
                <Input type="text" placeholder="Sameer Jadaun" />
              </ItemContainer>

              <ItemContainer>
                <Label>User Name</Label>
                <Input type="text" placeholder="samakasatyaa95" />
              </ItemContainer>

              <ItemContainer>
                <Label>Phone</Label>
                <Input type="tel" placeholder="+91 90101112121" />
              </ItemContainer>

              <ItemContainer>
                <Label>Email</Label>
                <Input type="email" placeholder="engineersatyaa@gmail.com" />
              </ItemContainer>

              <ItemContainer>
                <Label>Address</Label>
                <Input type="text" placeholder="New Delhi | India" />
              </ItemContainer>
            </LeftContainer>

            <RightContainer>
              <UpdateDetails>
                <Image
                  src="/dashboard/images/manmodel.webp"
                  alt="Avatar"
                  className="bigImg"
                />

                <Label htmlFor="file">
                  <Publish className="publishIcon" />
                </Label>
                <Input type="file" id="file" style={{ display: "none" }} />
              </UpdateDetails>
              <Button>Update</Button>
            </RightContainer>
          </Form>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;
