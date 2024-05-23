import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  MenuItem,
  TablePagination,
} from "@mui/material";
import {
  ArrowDropUp as ArrowDropUpIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TrainingService from "../service/TrainingService";
import SoldierService from "../service/SoldiersService";

const Training = () => {
  const [trainingSessions, setTrainingSessions] = useState([]);
  const [soldiers, setSoldiers] = useState([]);
  const [newTraining, setNewTraining] = useState({
    trainingName: "",
    trainingType: "",
    startDate: "",
    endDate: "",
    soldier: "",
  });
  const [editTraining, setEditTraining] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("trainingName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTrainingSessions = async () => {
      try {
        const data = await TrainingService.getAllTraining(token);
        setTrainingSessions(data);
      } catch (error) {
        console.error("Error fetching training sessions", error);
      }
    };

    const fetchSoldiers = async () => {
      try {
        const data = await SoldierService.getAllSoldiers(token);
        setSoldiers(data);
      } catch (error) {
        console.error("Error fetching soldiers", error);
      }
    };

    fetchTrainingSessions();
    fetchSoldiers();
  }, [token]);

  const handleAddTraining = async () => {
    try {
      const data = await TrainingService.createTraining(newTraining, token);
      setTrainingSessions([...trainingSessions, data]);
      setNewTraining({
        trainingName: "",
        trainingType: "",
        startDate: "",
        endDate: "",
        soldier: "",
      });
    } catch (error) {
      console.error("Error adding training", error);
    }
  };

  const handleUpdateTraining = async () => {
    try {
      const data = await TrainingService.updateTraining(
        editTraining.trainingID,
        editTraining,
        token
      );
      setTrainingSessions(
        trainingSessions.map((item) =>
          item.trainingID === editTraining.trainingID ? data : item
        )
      );
      setEditTraining(null);
      setOpen(false);
    } catch (error) {
      console.error("Error updating training", error);
    }
  };

  const handleDeleteTraining = async (trainingID) => {
    try {
      await TrainingService.deleteTraining(trainingID, token);
      setTrainingSessions(
        trainingSessions.filter((item) => item.trainingID !== trainingID)
      );
    } catch (error) {
      console.error("Error deleting training", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTraining({ ...newTraining, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditTraining({ ...editTraining, [name]: value });
  };

  const handleSoldierChange = (e) => {
    const { value } = e.target;
    setNewTraining({ ...newTraining, soldier: value });
  };

  const handleEditSoldierChange = (e) => {
    const { value } = e.target;
    setEditTraining({ ...editTraining, soldier: value });
  };

  const handleClickOpen = (training) => {
    setEditTraining(training);
    setOpen(true);
  };

  const handleClose = () => {
    setEditTraining(null);
    setOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const renderSortIcon = (column) => {
    if (sortBy === column) {
      return sortOrder === "asc" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
    }
    return null;
  };

  const filteredTrainingSessions = trainingSessions.filter(
    (item) =>
      item.trainingName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.trainingType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTrainingSessions = [...filteredTrainingSessions].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (aValue < bValue) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  const paginatedTrainingSessions = sortedTrainingSessions.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Trainings</h1>
      <TextField
        label="Search Training"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table aria-label="training table">
          <TableHead>
            <TableRow>
              <TableCell onClick={() => handleSort("trainingName")}>
                Training Name {renderSortIcon("trainingName")}
              </TableCell>
              <TableCell onClick={() => handleSort("trainingType")}>
                Training Type {renderSortIcon("trainingType")}
              </TableCell>
              <TableCell onClick={() => handleSort("startDate")}>
                Start Date {renderSortIcon("startDate")}
              </TableCell>
              <TableCell onClick={() => handleSort("endDate")}>
                End Date {renderSortIcon("endDate")}
              </TableCell>
              <TableCell onClick={() => handleSort("soldier.firstName")}>
                Soldier {renderSortIcon("soldier.firstName")}
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedTrainingSessions.map((item) => (
              <TableRow key={item.trainingID}>
                <TableCell>{item.trainingName}</TableCell>
                <TableCell>{item.trainingType}</TableCell>
                <TableCell>{item.startDate}</TableCell>
                <TableCell>{item.endDate}</TableCell>
                <TableCell>
                  {item.soldier.firstName} {item.soldier.lastName}
                </TableCell>
                <TableCell>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleClickOpen(item)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteTraining(item.trainingID)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sortedTrainingSessions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </TableContainer>
      <h2>Add New Training</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTraining();
        }}
      >
        <TextField
          label="Training Name"
          name="trainingName"
          value={newTraining.trainingName}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Training Type"
          name="trainingType"
          value={newTraining.trainingType}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Start Date"
          name="startDate"
          type="date"
          value={newTraining.startDate}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          name="endDate"
          type="date"
          value={newTraining.endDate}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <Select
          label="Soldier"
          name="soldier"
          value={newTraining.soldier}
          onChange={handleSoldierChange}
          fullWidth
          margin="normal"
        >
          {soldiers.map((soldier) => (
            <MenuItem key={soldier.soldierId} value={soldier.soldierId}>
              {soldier.firstName} {soldier.lastName}
            </MenuItem>
          ))}
        </Select>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Training
        </Button>
      </form>

      {editTraining && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Training</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit training details below.</DialogContentText>
            <TextField
              label="Training Name"
              name="trainingName"
              value={editTraining.trainingName}
              onChange={handleEditInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Training Type"
              name="trainingType"
              value={editTraining.trainingType}
              onChange={handleEditInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Start Date"
              name="startDate"
              type="date"
              value={editTraining.startDate}
              onChange={handleEditInputChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="End Date"
              name="endDate"
              type="date"
              value={editTraining.endDate}
              onChange={handleEditInputChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <Select
              label="Soldier"
              name="soldier"
              value={editTraining.soldier}
              onChange={handleEditSoldierChange}
              fullWidth
              margin="normal"
            >
              {soldiers.map((soldier) => (
                <MenuItem key={soldier.soldierId} value={soldier.soldierId}>
                  {soldier.firstName} {soldier.lastName}
                </MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleUpdateTraining} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Training;
