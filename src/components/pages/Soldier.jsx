import React, { useEffect, useState } from 'react';
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
            const data = await SoldiersService.updateSoldier(editSoldier.id, editSoldier, token);
            setSoldiers(soldiers.map(soldier => (soldier.id === editSoldier.id ? data : soldier)));
            setEditSoldier(null);
        } catch (error) {
            console.error('Error updating soldier', error);
        }
    };

    const handleDeleteSoldier = async (id) => {
        try {
            await SoldiersService.deleteSoldier(id, token);
            setSoldiers(soldiers.filter(soldier => soldier.id !== id));
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

    return (
        <div>
            <h1>Soldiers</h1>
            <ul>
                {soldiers.map(soldier => (
                    <li key={soldier.id}>
                        {soldier.firstName} {soldier.lastName} ({soldier.rank})
                        <button onClick={() => setEditSoldier(soldier)}>Edit</button>
                        <button onClick={() => handleDeleteSoldier(soldier.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h2>Add New Soldier</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddSoldier(); }}>
                <input
                    type="text"
                    name="firstName"
                    value={newSoldier.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    value={newSoldier.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    name="rank"
                    value={newSoldier.rank}
                    onChange={handleInputChange}
                    placeholder="Rank"
                />
                <input
                    type="date"
                    name="dateOfBirth"
                    value={newSoldier.dateOfBirth}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="dateOfEnlistment"
                    value={newSoldier.dateOfEnlistment}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="contactInfo"
                    value={newSoldier.contactInfo}
                    onChange={handleInputChange}
                    placeholder="Contact Info"
                />
                <button type="submit">Add Soldier</button>
            </form>

            {editSoldier && (
                <>
                    <h2>Edit Soldier</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleUpdateSoldier(); }}>
                        <input
                            type="text"
                            name="firstName"
                            value={editSoldier.firstName}
                            onChange={handleEditInputChange}
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={editSoldier.lastName}
                            onChange={handleEditInputChange}
                            placeholder="Last Name"
                        />
                        <input
                            type="text"
                            name="rank"
                            value={editSoldier.rank}
                            onChange={handleEditInputChange}
                            placeholder="Rank"
                        />
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={editSoldier.dateOfBirth}
                            onChange={handleEditInputChange}
                        />
                        <input
                            type="date"
                            name="dateOfEnlistment"
                            value={editSoldier.dateOfEnlistment}
                            onChange={handleEditInputChange}
                        />
                        <input
                            type="text"
                            name="contactInfo"
                            value={editSoldier.contactInfo}
                            onChange={handleEditInputChange}
                            placeholder="Contact Info"
                        />
                        <button type="submit">Update Soldier</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Soldier;
