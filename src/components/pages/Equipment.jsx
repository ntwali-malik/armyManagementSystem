import React, { useEffect, useState } from 'react';
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
    MenuItem
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EquipmentService from '../service/EquipmentService';
import UnitService from '../service/UnitService'; // Import UnitService

const Equipment = () => {
    const [equipment, setEquipment] = useState([]);
    const [newEquipment, setNewEquipment] = useState({
        equipmentName: '',
        equipmentType: '',
        quantity: 0,
        condition: '',
        unit: '' // Initialize as empty string
    });
    const [editEquipment, setEditEquipment] = useState(null);
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [units, setUnits] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchEquipment = async () => {
            try {
                const data = await EquipmentService.getAllEquipment(token);
                setEquipment(data);
            } catch (error) {
                console.error('Error fetching equipment', error);
            }
        };

        const fetchUnits = async () => {
            try {
                const data = await UnitService.getAllUnits(token);
                setUnits(data);
            } catch (error) {
                console.error('Error fetching units', error);
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
                equipmentName: '',
                equipmentType: '',
                quantity: 0,
                condition: '',
                unit: ''
            });
        } catch (error) {
            console.error('Error adding equipment', error);
        }
    };

    const handleUpdateEquipment = async () => {
        try {
            const equipmentData = {
                ...editEquipment,
                unit: editEquipment.unit,
            };
            const data = await EquipmentService.updateEquipment(editEquipment.equipmentID, equipmentData, token);
            setEquipment(equipment.map(item => (item.equipmentID === editEquipment.equipmentID ? data : item)));
            setEditEquipment(null);
            setOpen(false);
        } catch (error) {
            console.error('Error updating equipment', error);
        }
    };

    const handleDeleteEquipment = async (equipmentID) => {
        try {
            await EquipmentService.deleteEquipment(equipmentID, token);
            setEquipment(equipment.filter(item => item.equipmentID !== equipmentID));
        } catch (error) {
            console.error('Error deleting equipment', error);
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

    const filteredEquipment = equipment.filter(item =>
        item.equipmentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.equipmentType.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
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
                            <TableCell>Equipment Name</TableCell>
                            <TableCell>Equipment Type</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Condition</TableCell>
                            <TableCell>Unit</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredEquipment.map(item => (
                            <TableRow key={item.equipmentID}>
                                <TableCell>{item.equipmentName}</TableCell>
                                <TableCell>{item.equipmentType}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.condition}</TableCell>
                                <TableCell>{item.unit.unitName}</TableCell>
                                <TableCell>
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleClickOpen(item)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteEquipment(item.equipmentID)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <h2>Add New Equipment</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddEquipment(); }}>
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
                    {units.map(unit => (
                        <MenuItem key={unit.unitID} value={unit.unitID}>
                            {unit.unitName}
                        </MenuItem>
                    ))}
                </Select>
                <Button type="submit" variant="contained" color="primary" fullWidth>Add Equipment</Button>
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
                            {units.map(unit => (
                                <MenuItem key={unit.unitID} value={unit.unitID}>
                                    {unit.unitName}
                                </MenuItem>
                            ))}
                        </Select>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">Cancel</Button>
                        <Button onClick={handleUpdateEquipment} color="primary">Update</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

export default Equipment;

