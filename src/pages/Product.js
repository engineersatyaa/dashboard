import styled from "styled-components";
import { Link } from "react-router-dom";
import { Publish } from "@mui/icons-material";
import { salestData } from "../fakeData";
import ChartBar from "../components/ChartBar";

const Container = styled.div`
  /* border: 1px solid red;  */
  flex: 4;
`;

const BtnContainer = styled.div`
  /* border: 1px solid black;  */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;

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

const TopContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  margin: 20px 20px 0px 0px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    margin: 20px 0px 0px;
  }
`;
const ChartContainer = styled.div`
  flex: 1.5;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  @media screen and (max-width: 750px) {
    margin: 20px 20px 0px;
  }
`;

const ImgContainer = styled.div`
  /* border: 1px solid black; //// */
  border-bottom: 1px solid #d4d8ea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    font-weight: 600;
    margin: 5px;
  }
`;
const ProductInfo = styled.div`
  /* border: 1px solid black;  //// */
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 600;
  }

  span.value {
    font-weight: 400;
  }
`;

const BottomContainer = styled.div`
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
`;

const Form = styled.form`
  /* border: 1px solid black; /// */
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  /* border: 1px solid yellow; /// */
  display: flex;
  flex-direction: column;
  flex: 1.3;

  label {
    font-weight: 600;
    margin-bottom: 3px;
  }

  input {
    border: none;
    border-bottom: 1px solid #98979a;
    margin-bottom: 15px;
    padding: 5px;
  }
  select {
    margin-bottom: 25px;
  }
`;

const BtnImgContainer = styled.div`
  /* border: 1px solid blue;   ///// */
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    background-color: #2061ca;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 9px;
    font-size: 16px;
    margin-top: 10px;
    width: 120px;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
      background-color: #2874f0;
    }
  }
`;

const UploadContainer = styled.div`
  /* border: 1px solid red; /// */
  display: flex;
  align-items: center;

  img {
    width: 310px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
    margin: 10px 10px 10px 20px;

    @media screen and (max-width: 426px) {
      width: 200px;
      margin: 10px 10px 10px 10px;
    }
  }

  input {
    display: none;
  }
`;

const Product = () => {
  return (
    <Container>
      <BtnContainer>
        <Title>Update Product Details</Title>
        <Link to="/addProduct">
          <Button>Add Product</Button>
        </Link>
      </BtnContainer>

      <TopContainer>
        <ChartContainer>
          <ChartBar data={salestData.slice(0, 6)} />
        </ChartContainer>

        <InfoContainer>
          <ImgContainer>
            <img src="/dashboard/images/girl.webp" alt="" />
            <span>Jacket</span>
          </ImgContainer>

          <ProductInfo>
            <span>ID:</span>
            <span className="value">255</span>
          </ProductInfo>
          <ProductInfo>
            <span>Price:</span>
            <span className="value">4500</span>
          </ProductInfo>
          <ProductInfo>
            <span>Active:</span>
            <span className="value">Yes</span>
          </ProductInfo>
          <ProductInfo>
            <span>In Stock:</span>
            <span className="value">No</span>
          </ProductInfo>
        </InfoContainer>
      </TopContainer>

      <BottomContainer>
        <Form>
          <FormContainer>
            <label>Product Name</label>
            <input type="text" placeholder="name" />

            <label>Product Price</label>
            <input type="text" placeholder="price" />

            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label htmlFor="inStock">In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </FormContainer>
          <BtnImgContainer>
            <UploadContainer>
              <img src="/dashboard/images/girl.webp" alt="" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" />
            </UploadContainer>
            <button type="button">Update</button>
          </BtnImgContainer>
        </Form>
      </BottomContainer>
    </Container>
  );
};

export default Product;
