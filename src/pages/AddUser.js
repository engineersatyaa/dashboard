import styled from "styled-components";
import { Publish } from "@mui/icons-material";

const Container = styled.div`
  /* border: 1px solid red; ////// */
  flex: 4;
  padding: 20px 20px 20px 40px;

  @media screen and (max-width: 426px) {
    padding: 0px 0px 0px 20px;
  }

  h1 {
    font-size: 22px;
    font-weight: 600;
  }
`;

const Form = styled.form`
  margin: 20px 0px;
  display: flex;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div`
  /* border: 1px solid lightgray; ///////// */
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 15px 20px 0px 0px;

  @media screen and (max-width: 426px) {
    width: 100%;
  }

  @media screen and (max-width: 335px) {
    width: 240px;
  }

  #uploadContainer {
    display: flex;
    align-items: center;
    border: 1px solid gray;
    border-radius: 5px;

    img {
      width: 31px;
      height: 31px;
      margin-right: 10px;
      object-fit: cover;
    }

    label {
      display: flex;
      align-items: center;
      font-weight: normal;
      font-size: 13px;
      color: gray;

      .icon {
        margin-right: 5px;
        font-size: 18px;
        color: #64676e;
      }
    }
  }

  label {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 3px;
    color: #98979a;
  }

  input {
    height: 20px;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  button {
    background-color: #2061ca;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    letter-spacing: 0.3px;
    margin-top: 10px;
    width: 32%;
    cursor: pointer;

    @media screen and (max-width: 426px) {
      width: 90px;
      letter-spacing: 0px;
      font-size: 15px;
      margin-bottom: 20px;
    }

    &:hover {
      transform: scale(1.01);
      background-color: #2874f0;
    }
  }
`;

const RadioBtnWrapper = styled.div`
  border: 1px solid gray;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  label {
    color: #555;
    font-size: 14px;
    font-weight: normal;
    margin: 0px 40px 0px 5px;

    @media screen and (max-width: 335px) {
      margin: 0px 20px 0px 3px;
    }
  }
`;

const SelectBtnWrapper = styled.div`
  /* border: 1px solid black;   //// */
  select {
    height: 32px;
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
    color: #555;
  }
`;

const AddUser = () => {
  return (
    <Container>
      <h1>Add New User</h1>
      <Form>
        <InputWrapper>
          <label htmlFor="file">User Image</label>
          <div id="uploadContainer">
            <img src="/dashboard/images/faceless2.jpg" alt="Avatar" />

            <label htmlFor="file">
              <Publish className="icon" /> Upload Photos
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" placeholder="Full Name" id="fullname" />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="username">User Name</label>
          <input type="text" placeholder="User Name" id="username" />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" id="email" />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="address">Address</label>
          <input type="text" placeholder="Address" id="address" />
        </InputWrapper>

        <InputWrapper>
          <label>Gender</label>
          <RadioBtnWrapper>
            <input type="radio" id="male" name="Gender" value="Male" />
            <label htmlFor="male">Male</label>

            <input type="radio" id="female" name="Gender" value="Female" />
            <label htmlFor="female">Female</label>

            <input type="radio" id="other" name="Gender" value="Other" />
            <label htmlFor="other">Other</label>
          </RadioBtnWrapper>
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="active">Active</label>
          <SelectBtnWrapper>
            <select name="Active" id="active">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </SelectBtnWrapper>
        </InputWrapper>
        <InputWrapper>
          <button type="button">Add User</button>
        </InputWrapper>
      </Form>
    </Container>
  );
};

export default AddUser;
