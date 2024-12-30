'use client';

import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';

interface UsersListProps {
    users: { id: number; name: string; email: string }[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const UsersList: React.FC<UsersListProps> = ({ users, onEdit, onDelete }) => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
                <>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => onEdit(params.row.id)}
                        style={{ marginRight: '10px' }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => onDelete(params.row.id)}
                    >
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    const validRows = Array.isArray(users) ? users.filter((user) => user.id) : [];

    return (
        <Box style={{ height: 400, width: '100%' }}>
            <DataGrid 
                rows={validRows} 
                columns={columns} 
                pagination 
                pageSizeOptions={[5]}
                getRowId={(row) => row.id}
                initialState={{ pagination: { paginationModel: { pageSize: 5 }}}} />
        </Box>
    );
};

export default UsersList;