import { Avatar, Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { dashboardData } from "../../constants/sampleData";
import { fileFormat, transformImage } from "../../lib/features";
import moment from "moment";
import Table from "../../components/shared/Table";
import RenderAttachement from "../../components/shared/RenderAttachement";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassNAme: "table-header",
    width: 200,
  },
  {
    field: "attachements",
    headerName: "Attachements",
    headerClassNAme: "table-header",
    width: 200,
    renderCell: (params) => {
      const { attachements } = params.row;
      return attachements?.length > 0
        ? attachements.map((attachement) => {
            const url = attachement.url;
            const file = fileFormat(url);
            return (
              <Box>
                <a
                  href={url}
                  download
                  target="_blank"
                  style={{
                    color: "black",
                  }}
                >
                  {RenderAttachement(file,url)}
                </a>
              </Box>
            );
          })
        : "No Attachements";
    },
  },
  {
    field: "content",
    headerName: "Content",
    headerClassNAme: "table-header",
    width: 400,
  },
  {
    field: "sender",
    headerName: "Sent By",
    headerClassNAme: "table-header",
    width: 200,
    renderCell: (params) => (
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span> {params.row.sender.name}</span>
      </Stack>
    ),
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClassNAme: "table-header",
    width: 220,
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    headerClassNAme: "table-header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassNAme: "table-header",
    width: 250,
  },
];
const MessageManagement = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(
      dashboardData.messages.map((message) => ({
        ...message,
        id: message._id,
        sender: {
          name: message.sender.name,
          avatar: transformImage(message.sender.avatar, 50),
        },
        createdAt: moment(message.createdAt).format("MMMM Do YYYY h:mm:ss a"),
      }))
    );
  }, []);
  return (
    <AdminLayout>
      <Table heading={"All Messages"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default MessageManagement;
