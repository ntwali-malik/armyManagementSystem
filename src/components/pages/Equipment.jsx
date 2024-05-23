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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ArrowDropUp as ArrowDropUpIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
import EquipmentService from "../service/EquipmentService";
import UnitService from "../service/UnitService";

const Equipment = () => {
  const [equipment, setEquipment] = useState([]);
  const [newEquipment, setNewEquipment] = useState({
    equipmentName: "",
    equipmentType: "",
    quantity: 0,
    condition: "",
    unit: "",
  });
  const [editEquipment, setEditEquipment] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [units, setUnits] = useState([]);
  const [sortBy, setSortBy] = useState("equipmentName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const data = await EquipmentService.getAllEquipment(token);
        setEquipment(data);
      } catch (error) {
        console.error("Error fetching equipment", error);
      }
    };

    const fetchUnits = async () => {
      try {
        const data = await UnitService.getAllUnits(token);
        setUnits(data);
      } catch (error) {
        console.error("Error fetching units", error);
      }
    };

    fetchEquipment();
    fetchUnits();
  }, [token]);

  const handleAddEquipment = async () => {
    try {
      const equipmentData = {
        ...newEquipment,
        unit: newEquipment.unit,
      };
      const data = await EquipmentService.createEquipment(equipmentData, token);
      setEquipment([...equipment, data]);
      setNewEquipment({
        equipmentName: "",
        equipmentType: "",
        quantity: 0,
        condition: "",
        unit: "",
      });
    } catch (error) {
      console.error("Error adding equipment", error);
    }
  };

  const handleUpdateEquipment = async () => {
    try {
      const equipmentData = {
        ...editEquipment,
        unit: editEquipment.unit,
      };
      const data = await EquipmentService.updateEquipment(
        editEquipment.equipmentID,
        equipmentData,
        token
      );
      setEquipment(
        equipment.map((item) =>
          item.equipmentID === editEquipment.equipmentID ? data : item
        )
      );
      setEditEquipment(null);
      setOpen(false);
    } catch (error) {
      console.error("Error updating equipment", error);
    }
  };

  const handleDeleteEquipment = async (equipmentID) => {
    try {
      await EquipmentService.deleteEquipment(equipmentID, token);
      setEquipment(
        equipment.filter((item) => item.equipmentID !== equipmentID)
      );
    } catch (error) {
      console.error("Error deleting equipment", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEquipment({ ...newEquipment, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditEquipment({ ...editEquipment, [name]: value });
  };

  const handleUnitChange = (e) => {
    const { value } = e.target;
    setNewEquipment({ ...newEquipment, unit: value });
  };

  const handleEditUnitChange = (e) => {
    const { value } = e.target;
    setEditEquipment({ ...editEquipment, unit: value });
  };

  const handleClickOpen = (equipment) => {
    setEditEquipment(equipment);
    setOpen(true);
  };

  const handleClose = () => {
    setEditEquipment(null);
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

  const sortedEquipment = [...equipment].sort((a, b) => {
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

  const paginatedEquipment = sortedEquipment.slice(
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

  const filteredEquipment = paginatedEquipment.filter(
    (item) =>
      item.equipmentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.equipmentType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Equipment</h1>
      <TextField
        label="Search Equipment"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table aria-label="equipment table">
          <TableHead>
            <TableRow>
              <TableCell onClick={() => handleSort("equipmentName")}>
                Equipment Name {renderSortIcon("equipmentName")}
              </TableCell>
              <TableCell onClick={() => handleSort("equipmentType")}>
                Equipment Type {renderSortIcon("equipmentType")}
              </TableCell>
              <TableCell onClick={() => handleSort("quantity")}>
                Quantity {renderSortIcon("quantity")}
              </TableCell>
              <TableCell onClick={() => handleSort("condition")}>
                Condition {renderSortIcon("condition")}
              </TableCell>
              <TableCell onClick={() => handleSort("unit.unitName")}>
                Unit {renderSortIcon("unit.unitName")}
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEquipment.map((item) => (
              <TableRow key={item.equipmentID}>
                <TableCell>{item.equipmentName}</TableCell>
                <TableCell>{item.equipmentType}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.condition}</TableCell>
                <TableCell>{item.unit.unitName}</TableCell>
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
                    onClick={() => handleDeleteEquipment(item.equipmentID)}
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
          count={sortedEquipment.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </TableContainer>
      <h2>Add New Equipment</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddEquipment();
        }}
      >
        <TextField
          label="Equipment Name"
          name="equipmentName"
          value={newEquipment.equipmentName}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Equipment Type"
          name="equipmentType"
          value={newEquipment.equipmentType}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Quantity"
          name="quantity"
          type="number"
          value={newEquipment.quantity}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Condition"
          name="condition"
          value={newEquipment.condition}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Select
          label="Unit"
          name="unit"
          value={newEquipment.unit}
          onChange={handleUnitChange}
          fullWidth
          margin="normal"
        >
          {units.map((unit) => (
            <MenuItem key={unit.unitID} value={unit.unitID}>
              {unit.unitName}
            </MenuItem>
          ))}
        </Select>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Equipment
        </Button>
      </form>

      {editEquipment && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Equipment</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit equipmentdetails below.</DialogContentText>
            <TextField
              label="Equipment Name"
              name="equipmentName"
              value={editEquipment.equipmentName}
              onChange={handleEditInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Equipment Type"
              name="equipmentType"
              value={editEquipment.equipmentType}
              onChange={handleEditInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Quantity"
              name="quantity"
              type="number"
              value={editEquipment.quantity}
              onChange={handleEditInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Condition"
              name="condition"
              value={editEquipment.condition}
              onChange={handleEditInputChange}
              fullWidth
              margin="normal"
            />
            <Select
              label="Unit"
              name="unit"
              value={editEquipment.unit}
              onChange={handleEditUnitChange}
              fullWidth
              margin="normal"
            >
              {units.map((unit) => (
                <MenuItem key={unit.unitID} value={unit.unitID}>
                  {unit.unitName}
                </MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleUpdateEquipment} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Equipment;
