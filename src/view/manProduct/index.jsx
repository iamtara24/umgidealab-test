import React, { useState } from 'react';
import TableView from '../../uiComp/tableView';
import Pagination from '../../uiComp/paginationComp';
// import FormData from './formData';
// import EditFormData from './editFormData';
import Alert from '../../uiComp/alertComp';
import { useFetchData } from '../../utils/fetchApi';

const UserList = () => {
  const [page, setPage] = useState(1);
  const [isFormOpen, setFormOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [alert, setAlert] = useState({ message: '', type: '' });
  const limit = 5; // Limit per page
  
  // Fetch data only with limit, without using page
  const { data, isLoading, error, refetch } = useFetchData('https://fakestoreapi.com/products', limit);
  
  // If loading, show loading state
  if (isLoading) return <div>Loading...</div>;
  // If error, show error state
  if (error) return <div>Error: {error.message}</div>;

  // Calculate total pages based on data length
  const totalPages = Math.ceil(data.length / limit);

  // Get data for current page (manually slicing data for pagination)
  const paginatedData = data.slice((page - 1) * limit, page * limit);

  // Handle edit and delete actions
  const handleEdit = (id) => {
    const user = data.find(user => user.id === id);
    setUserToEdit(user);
    setEditOpen(true);
  };

  const handleSave = (id, userData) => {
    fetch(`https://fakestoreapi.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.json())
    .then(() => {
      setAlert({ message: 'User updated successfully!', type: 'success' });
      setEditOpen(false);
      refetch(); // Refresh data after update
    })
    .catch(() => {
      setAlert({ message: 'Failed to update user.', type: 'error' });
    });
  };

  const handleDelete = (id) => {
    fetch(`https://fakestoreapi.com/users/${id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then(() => {
      setAlert({ message: 'User deleted successfully!', type: 'success' });
      // Refresh data or remove deleted item from local state
      // For simplicity, you might want to refetch data
      // setData(data.filter(user => user.id !== id));
    })
    .catch(() => {
      setAlert({ message: 'Failed to delete user.', type: 'error' });
    });
  };

  const columns = [
  { Header: 'ID', accessor: 'id' },
  { 
    Header: 'Title', accessor: `title`
  },
  { Header: 'Price', accessor: 'price' },
  { Header: 'Category', accessor: 'category' },
  { Header: 'Description', accessor: 'description' },
  // { Header: 'Image', accessor: 'image' },
  {
    Header: 'Actions',
    accessor: (row) => (
      <div className="flex space-x-2">
        <button
          onClick={() => handleEdit(row.id)}
          className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(row.id)}
          className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    )
  },
];
  return (
    <div className="container mx-auto p-4">
      {/* Display Alert */}
      {alert.message && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ message: '', type: '' })}
        />
      )}
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Product Management</h1>
        <button
          onClick={() => setFormOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Tambah Data
        </button>
      </div>

      {/* Table Section with max height */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="overflow-y-auto max-h-80"> {/* Max height and scrollable */}
          <TableView columns={columns} data={data} /> {/* Display fetched data */}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="bg-white shadow-md rounded-lg">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>

      {/* Form Popup */}
      {/* <FormData isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
      <EditFormData
        isOpen={isEditOpen}
        onClose={() => setEditOpen(false)}
        userToEdit={userToEdit}
        onSave={handleSave}
      /> */}
    </div>
  );
};

export default UserList;