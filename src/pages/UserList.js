import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { userRows } from "../fakeData";
import { useState } from "react";

const Container = styled.div`
  flex: 4;
  width: 100%;
  padding: 20px 30px 50px 30px;

  @media screen and (max-width: 426px) {
    height: 100vh;
    padding: 20px;
  }
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;

  .link {
    text-decoration: none;
    color: black;
  }

  .icon {
    color: #d60303;
    font-size: 26px;
    margin-left: 20px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: #c0d7fe;
  color: black;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 5px;
  padding: 6px 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    color: white;
    background-color: #2874f0;
  }
`;

const UserList = () => {
  const [userRowsData, setUserRowsData] = useState(userRows);

  const handleDelete = (id) => {
    setUserRowsData(userRowsData.filter((userData) => userData.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image src={params.row.avatar} alt="Avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "transaction", headerName: "Transaction", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <BtnContainer>
            <Link to={"/user/" + params.row.id} className="link">
              <Button>Edit</Button>
            </Link>
            <DeleteOutline
              className="icon"
              onClick={() => handleDelete(params.row.id)}
            />
          </BtnContainer>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={userRowsData}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </Container>
  );
};

export default UserList;
