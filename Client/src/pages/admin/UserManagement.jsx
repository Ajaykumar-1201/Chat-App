import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import { Avatar } from "@mui/material";
import { dashboardData } from "../../constants/sampleData";
import { transformImage } from "../../lib/features";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassNAme: "table-header",
    width: 200,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassNAme: "table-header",
    width: 150,
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    headerClassNAme: "table-header",
    width: 200,
  },
  {
    field: "username",
    headerName: "Username",
    headerClassNAme: "table-header",
    width: 250,
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassNAme: "table-header",
    width: 150,
  },
  {
    field: "groups",
    headerName: "Groups",
    headerClassNAme: "table-header",
    width: 200,
  },
];
const UserManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.users.map((user) => ({
        ...user,
        id: user._id,
        avatar: transformImage(user.avatar, 50),
      }))
    );
  }, []);
  return (
    <AdminLayout>
      <Table heading={"All Users"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default UserManagement;
