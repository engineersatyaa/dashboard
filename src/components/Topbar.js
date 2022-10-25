import styled from "styled-components";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Container = styled.div`
  /* border: 2px solid black; */
  height: 60px;
  position: sticky;
  top: 0px;
  z-index: 111;
  display: flex;
`;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  background-color: #2874f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0px 15px;
`;

const LeftContainer = styled.div`
  /* border: 1px solid black; /// */
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: white;
    text-align: center;
    font-size: 30px;
  }

  @media screen and (max-width: 426px) {
    display: flex;
    order: 2;

    span {
      font-size: 22px;
    }

    .hamburger {
      /* border: 1px solid black; // */
      width: 32px;
      height: 27px;
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      cursor: pointer;

      span {
        background-color: white;
        width: 100%;
        height: 4px;
        transform-origin: left;
        transition: all 0.2s ease;
      }
    }

    .active {
      span {
        &:first-child {
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

const RightContainer = styled.div`
  /* border: 1px solid lightgreen; /// */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.div`
  /* border: 1px solid black; */
  color: white;
  padding: 6px;
  cursor: pointer;
  @media (max-width: 426px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  /* border: 1px solid black; //// */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <span>Admin Dashboard Penal</span>
          <div
            className={`hamburger ${menuOpen && "active"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </LeftContainer>
        <RightContainer>
          <IconContainer>
            <Badge badgeContent={2} color="warning">
              <NotificationsNone />
            </Badge>
          </IconContainer>
          <IconContainer>
            <Language />
          </IconContainer>
          <IconContainer>
            <Settings />
          </IconContainer>
          <ImageContainer>
            <img src="/dashboard/images/boy.jpg" alt="" />
          </ImageContainer>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
