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
    MenuItem,
    TablePagination
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UnitService from '../service/UnitService';
import SoldiersService from '../service/SoldiersService';
import { ArrowDropUp as ArrowDropUpIcon, ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';

const Unit = () => {
    const [units, setUnits] = useState([]);
    const [soldiers, setSoldiers] = useState([]);
    const [newUnit, setNewUnit] = useState({
        unitName: '',
        unitType: '',
        baseLocation: '',
        commander: ''
    });
    const [editUnit, setEditUnit] = useState(null);
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('unitName');
    const [sortOrder, setSortOrder] = useState('asc');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchUnits = async () => {
            try {
                const data = await UnitService.getAllUnits(token);
                setUnits(data);
            } catch (error) {
                console.error('Error fetching units', error);
            }
        };

        const fetchSoldiers = async () => {
            try {
                const data = await SoldiersService.getAllSoldiers(token);
                setSoldiers(data);
            } catch (error) {
                console.error('Error fetching soldiers', error);
            }
        };

        fetchUnits();
        fetchSoldiers();
    }, [token]);

    const handleAddUnit = async () => {
        try {
            const data = await UnitService.createUnit(newUnit, token);
            setUnits([...units, data]);
            setNewUnit({
                unitName: '',
                unitType: '',
                baseLocation: '',
                commander: ''
            });
        } catch (error) {
            console.error('Error adding unit', error);
        }
    };

    const handleUpdateUnit = async () => {
        try {
            const data = await UnitService.updateUnit(editUnit.unitID, editUnit, token);
            setUnits(units.map(unit => (unit.unitID === editUnit.unitID ? data : unit)));
            setEditUnit(null);
            setOpen(false);
        } catch (error) {
            console.error('Error updating unit', error);
        }
    };

    const handleDeleteUnit = async (unitID) => {
        try {
            await UnitService.deleteUnit(unitID, token);
            setUnits(units.filter(unit => unit.unitID !== unitID));
        } catch (error) {
            console.error('Error deleting unit', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUnit({ ...newUnit, [name]: value });
    };

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditUnit({ ...editUnit, [name]: value });
    };

    const handleCommanderChange = (e) => {
        const { value } = e.target;
        setNewUnit({ ...newUnit, commander: value });
    };

    const handleEditCommanderChange = (e) => {
        const { value } = e.target;
        setEditUnit({ ...editUnit, commander: value });
    };

    const handleClickOpen = (unit) => {
        setEditUnit(unit);
        setOpen(true);
    };

    const handleClose = () => {
        setEditUnit(null);
        setOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    const renderSortIcon = (column) => {
        if (sortBy === column) {
            return sortOrder === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
        }
        return null;
    };

    const sortedUnits = [...units].sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        if (aValue < bValue) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const paginatedUnits = sortedUnits.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const filteredUnits = paginatedUnits.filter(unit =>
        unit.unitName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.unitType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.baseLocation.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>Units</h1>
            <TextField
                label="Search Units"
                value={searchQuery}
                onChange={handleSearchChange}
                fullWidth
                margin="normal"
            />
            <TableContainer component={Paper}>
                <Table aria-label="unit table">
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={() => handleSort('unitName')}>
                                Unit Name {renderSortIcon('unitName')}
                            </TableCell>
                            <TableCell onClick={() => handleSort('unitType')}>
                                Unit Type {renderSortIcon('unitType')}
                            </TableCell>
                            <TableCell onClick={() => handleSort('baseLocation')}>
                                Base Location {renderSortIcon('baseLocation')}
                            </TableCell>
                            <TableCell onClick={() => handleSort('commander.firstName')}>
                                Commander {renderSortIcon('commander.firstName')}
                            </TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUnits.map(unit => (
                            <TableRow key={unit.unitID}>
                                <TableCell>{unit.unitName}</TableCell>
                                <TableCell>{unit.unitType}</TableCell>
                                <TableCell>{unit.baseLocation}</TableCell>
                                <TableCell>{unit.commander.firstName}</TableCell>
                                <TableCell>
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleClickOpen(unit)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteUnit(unit.unitID)}>
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
                    count={sortedUnits.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                />
            </TableContainer>

            <h2>Add New Unit</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddUnit(); }}>
                <TextField
                    label="Unit Name"
                    name="unitName"
                    value={newUnit.unitName}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Unit Type"
                    name="unitType"
                    value={newUnit.unitType}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Base Location"
                    name="baseLocation"
                    value={newUnit.baseLocation}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <Select
                    label="Commander"
                    name="commander"
                    value={newUnit.commander}
                    onChange={handleCommanderChange}
                    fullWidth
                    margin="normal"
                >
                    {soldiers.map(soldier => (
                        <MenuItem key={soldier.soldierId} value={soldier.soldierId}>
                            {soldier.firstName} {soldier.lastName}
                        </MenuItem>
                    ))}
                </Select>
                <Button type="submit" variant="contained" color="primary" fullWidth>Add Unit</Button>
            </form>

            {editUnit && (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit Unit</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Edit unit details below.</DialogContentText>
                        <TextField
                            label="Unit Name"
                            name="unitName"
                            value={editUnit.unitName}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Unit Type"
                            name="unitType"
                            value={editUnit.unitType}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Base Location"
                            name="baseLocation"
                            value={editUnit.baseLocation}
                            onChange={handleEditInputChange}
                            fullWidth
                            margin="normal"
                        />
                        <Select
                            label="Commander"
                            name="commander"
                            value={editUnit.commander}
                            onChange={handleEditCommanderChange}
                            fullWidth
                            margin="normal"
                        >
                            {soldiers.map(soldier => (
                                <MenuItem key={soldier.soldierId} value={soldier.soldierId}>
                                    {soldier.firstName} {soldier.lastName}
                                </MenuItem>
                            ))}
                        </Select>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">Cancel</Button>
                        <Button onClick={handleUpdateUnit} color="primary">Update</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

export default Unit;
