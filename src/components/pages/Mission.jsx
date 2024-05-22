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
import MissionService from '../service/MissionService';
import UnitService from '../service/UnitService';

const Mission = () => {
    const [missions, setMissions] = useState([]);
    const [units, setUnits] = useState([]);
    const [newMission, setNewMission] = useState({
        missionName: '',
        missionType: '',
        startDate: '',
        endDate: '',
        unit: '' // Initialize as empty string
    });
    const [editMission, setEditMission] = useState(null);
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchMissions = async () => {
            try {
                const data = await MissionService.getAllMissions(token);
                setMissions(data);
            } catch (error) {
                console.error('Error fetching missions', error);
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

        fetchMissions();
        fetchUnits();
    }, [token]);

    const handleAddMission = async () => {
        try {
            const missionData = {
                ...newMission,
                unit: newMission.unit, // Ensure this is just the unit ID
            };
            const data = await MissionService.createMission(missionData, token);
            setMissions([...missions, data]);
            setNewMission({
                missionName: '',
                missionType: '',
                startDate: '',
                endDate: '',
                unit: ''
            });
        } catch (error) {
            console.error('Error adding mission', error);
        }
    };

    const handleUpdateMission = async () => {
        try {
            const missionData = {
                ...editMission,
                unit: editMission.unit, // Ensure this is just the unit ID
            };
            const data = await MissionService.updateMission(editMission.missionID, missionData, token);
            setMissions(missions.map(mission => (mission.missionID === editMission.missionID ? data : mission)));
            setEditMission(null);
            setOpen(false);
        } catch (error) {
            console.error('Error updating mission', error);
        }
    };

    const handleDeleteMission = async (missionID) => {
        try {
            await MissionService.deleteMission(missionID, token);
            setMissions(missions.filter(mission => mission.missionID !== missionID));
        } catch (error) {
            console.error('Error deleting mission', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMission({ ...newMission, [name]: value });
    };

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditMission({ ...editMission, [name]: value });
    };

    const handleUnitChange = (e) => {
        const { value } = e.target;
        setNewMission({ ...newMission, unit: value });
    };

    const handleEditUnitChange = (e) => {
        const { value } = e.target;
        setEditMission({ ...editMission, unit: value });
    };

    const handleClickOpen = (mission) => {
        setEditMission(mission);
        setOpen(true);
    };

    const handleClose = () => {
        setEditMission(null);
        setOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredMissions = missions.filter(mission =>
        mission.missionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mission.missionType.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>Missions</h1>
            <TextField
                label="Search Missions"
                value={searchQuery}
                onChange={handleSearchChange}
                fullWidth
                margin="normal"
            />
            <TableContainer component={Paper}>
                <Table aria-label="mission table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Mission Name</TableCell>
                            <TableCell>Mission Type</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell>Unit</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredMissions.map(mission => (
                            <TableRow key={mission.missionID}>
                                <TableCell>{mission.missionName}</TableCell>
                                <TableCell>{mission.missionType}</TableCell>
                                <TableCell>{mission.startDate}</TableCell>
                                <TableCell>{mission.endDate}</TableCell>
                                <TableCell>{mission.unit.unitName}</TableCell>
                                <TableCell>
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleClickOpen(mission)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteMission(mission.missionID)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <h2>Add New Mission</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddMission(); }}>
                <TextField
                    label="Mission Name"
                    name="missionName"
                    value={newMission.missionName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mission Type"
                    name="missionType"
                    value={newMission.missionType}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Start Date"
                    name="startDate"
                    type="date"
                    value={newMission.startDate}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="End Date"
                    name="endDate"
                    type="date"
                    value={newMission.endDate}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Select
                    label="Unit"
                    name="unit"
                    value={newMission.unit}
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
                <Button type="submit" variant="contained" color="primary" fullWidth>Add Mission</Button>
            </form>

            {editMission && (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Mission</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Edit mission details below.</DialogContentText>
                        <TextField
                            label="Mission Name"
                            name="missionName"
                            value={editMission.missionName}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Mission Type"
                            name="missionType"
                            value={editMission.missionType}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Start Date"
                            name="startDate"
                            type="date"
                            value={editMission.startDate}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="End Date"
                            name="endDate"
                            type="date"
                            value={editMission.endDate}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Select
                            label="Unit"
                            name="unit"
                            value={editMission.unit}
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
                        <Button onClick={handleUpdateMission} color="primary">Update</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

export default Mission;
