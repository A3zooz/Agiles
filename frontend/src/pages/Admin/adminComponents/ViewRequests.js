import { TableCell, TableRow, TableHead, Table } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import LoadingScreen from "react-loading-screen";
import spinner from "../../../static/download.gif";

function ViewRequests() {
  const [reports, setReports] = useState([]);
  const [change, setChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    const url = "/admin/accessRequests";
    const res = await axios.get(url);
    setReports(res.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [change]);

  const handleApprove = async (traineeId, courseId, index) => {
    const url = "/admin/grantAccess";
    try {
      axios
        .post(url, { traineeId: traineeId, courseId: courseId })
        .then(setChange(!change));
    } catch (e) {
      console.log(e);
    }
  };
  if (isLoading) return <LoadingScreen loading={true} logoSrc={spinner} />;
  return (
    <Table>
      <TableHead
        style={{
          verticalAlign: "text-top",
          width: "100%",
          paddingLeft: "15px",
          borderBottom: "1px solid gray",
          paddingBottom: "30px",

          boxShadow: "inset 0 -1px 0 rgb(0 0 0 / 13%)",
        }}
      >
        <TableCell style={{ fontSize: "20px", fontWeight: "600" }}>
          Trainee Email
        </TableCell>
        <TableCell style={{ fontSize: "20px", fontWeight: "600" }}>
          Trainee Name
        </TableCell>
        <TableCell style={{ fontSize: "20px", fontWeight: "600" }}>
          Course Title
        </TableCell>
        <TableCell
          style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}
        >
          Status
        </TableCell>
      </TableHead>
      {reports.map((el, index) => {
        if (el.traineeId == null || el.courseId == null) return "";

        return (
          <TableRow style={{ verticalAlign: "text-top" }} key={index}>
            <TableCell>{el.email}</TableCell>
            <TableCell>
              {el.traineeId.firstname + " " + el.traineeId.lastname}
            </TableCell>
            <TableCell>{el.courseId.title}</TableCell>{" "}
            <TableCell style={{ textAlign: "center" }}>
              {el.status}
              {el.status == "pending" ? (
                <Button
                  style={{ marginLeft: "15px" }}
                  onClick={() =>
                    handleApprove(el.traineeId._id, el.courseId._id, index)
                  }
                >
                  {" "}
                  Approve
                </Button>
              ) : (
                ""
              )}
            </TableCell>
          </TableRow>
        );
      })}
    </Table>
  );
}

export default ViewRequests;
