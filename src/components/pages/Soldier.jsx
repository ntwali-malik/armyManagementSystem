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
    DialogTitle
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SoldiersService from '../service/SoldiersService';

const Soldier = () => {
    const [soldiers, setSoldiers] = useState([]);
    const [newSoldier, setNewSoldier] = useState({
        firstName: '',
        lastName: '',
        rank: '',
        dateOfBirth: '',
        dateOfEnlistment: '',
        contactInfo: ''
    });
    const [editSoldier, setEditSoldier] = useState(null);
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchSoldiers = async () => {
            try {
                const data = await SoldiersService.getAllSoldiers(token);
                setSoldiers(data);
            } catch (error) {
                console.error('Error fetching soldiers', error);
            }
        };

        fetchSoldiers();
    }, [token]);

    const handleAddSoldier = async () => {
        try {
            const data = await SoldiersService.createSoldier(newSoldier, token);
            setSoldiers([...soldiers, data]);
            setNewSoldier({
                firstName: '',
                lastName: '',
                rank: '',
                dateOfBirth: '',
                dateOfEnlistment: '',
                contactInfo: ''
            });
        } catch (error) {
            console.error('Error adding soldier', error);
        }
    };

    const handleUpdateSoldier = async () => {
        try {
            const data = await SoldiersService.updateSoldier(editSoldier.soldierId, editSoldier, token);
            setSoldiers(soldiers.map(soldier => (soldier.soldierId === editSoldier.soldierId ? data : soldier)));
            setEditSoldier(null);
            setOpen(false);
        } catch (error) {
            console.error('Error updating soldier', error);
        }
    };

    const handleDeleteSoldier = async (soldierId) => {
        try {
            await SoldiersService.deleteSoldier(soldierId, token);
            setSoldiers(soldiers.filter(soldier => soldier.soldierId !== soldierId));
        } catch (error) {
            console.error('Error deleting soldier', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSoldier({ ...newSoldier, [name]: value });
    };

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditSoldier({ ...editSoldier, [name]: value });
    };

    const handleClickOpen = (soldier) => {
        setEditSoldier(soldier);
        setOpen(true);
    };

    const handleClose = () => {
        setEditSoldier(null);
        setOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredSoldiers = soldiers.filter(soldier =>
        `${soldier.firstName} ${soldier.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
        soldier.rank.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>Soldiers</h1>
            <TextField
                label="Search Soldiers"
                value={searchQuery}
                onChange={handleSearchChange}
                fullWidth
                margin="normal"
            />
            <TableContainer component={Paper}>
                <Table aria-label="soldier table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Rank</TableCell>
                            <TableCell>Date of Birth</TableCell>
                            <TableCell>Date of Enlistment</TableCell>
                            <TableCell>Contact Info</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredSoldiers.map(soldier => (
                            <TableRow key={soldier.soldierId}>
                                <TableCell>{`${soldier.firstName} ${soldier.lastName}`}</TableCell>
                                <TableCell>{soldier.rank}</TableCell>
                                <TableCell>{soldier.dateOfBirth}</TableCell>
                                <TableCell>{soldier.dateOfEnlistment}</TableCell>
                                <TableCell>{soldier.contactInfo}</TableCell>
                                <TableCell>
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleClickOpen(soldier)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteSoldier(soldier.soldierId)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <h2>Add New Soldier</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddSoldier(); }}>
                <TextField
                    label="First Name"
                    name="firstName"
                    value={newSoldier.firstName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={newSoldier.lastName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Rank"
                    name="rank"
                    value={newSoldier.rank}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={newSoldier.dateOfBirth}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Date of Enlistment"
                    name="dateOfEnlistment"
                    type="date"
                    value={newSoldier.dateOfEnlistment}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Contact Info"
                    name="contactInfo"
                    value={newSoldier.contactInfo}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>Add Soldier</Button>
            </form>

            {editSoldier && (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Soldier</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Edit soldier details below.</DialogContentText>
                        <TextField
                            label="First Name"
                            name="firstName"
                            value={editSoldier.firstName}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Last Name"
                            name="lastName"
                            value={editSoldier.lastName}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                        />
                       
                       <TextField
                            label="Rank"
                            name="rank"
                            value={editSoldier.rank}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Date of Birth"
                            name="dateOfBirth"
                            type="date"
                            value={editSoldier.dateOfBirth}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Date of Enlistment"
                            name="dateOfEnlistment"
                            type="date"
                            value={editSoldier.dateOfEnlistment}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Contact Info"
                            name="contactInfo"
                            value={editSoldier.contactInfo}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">Cancel</Button>
                        <Button onClick={handleUpdateSoldier} color="primary">Update</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

export default Soldier;
