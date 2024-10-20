import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import { Avatar, Stack } from "@mui/material";
import { dashboardData } from "../../constants/sampleData";
import { transformImage } from "../../lib/features";
import { AvatarCard } from "../../components/shared/AvatarCard";

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
    renderCell: (params) => <AvatarCard avatar={params.row.avatar} />,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassNAme: "table-header",
    width: 300,
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    headerClassNAme: "table-header",
    width: 120,
  },
  {
    field: "members",
    headerName: "Members",
    headerClassNAme: "table-header",
    width: 400,
    renderCell: (params) => (
      <AvatarCard max={100} avatar={params.row.members} />
    ),
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    headerClassNAme: "table-header",
    width: 120,
  },
  {
    field: "creator",
    headerName: "Created By",
    headerClassNAme: "table-header",
    width: 250,
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
        <span>{params.row.creator.name}</span>
      </Stack>
    ),
  },
];
const ChatManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.chats.map((chat) => ({
        ...chat,
        id: chat._id,
        avatar: chat.avatar.map((avatar) => transformImage(avatar, 50)),
        members: chat.members.map((member) => transformImage(member.avatar, 50)),
        creator: {
          name: chat.creator.name,
          avatar: transformImage(chat.creator.avatar, 50),
        }
      }))
    );
  }, []);
  return (
    <AdminLayout>
      <Table heading={"Chats"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default ChatManagement;
