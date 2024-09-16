import React, { useState } from 'react';
import TableView from '../../uiComp/tableView';
import Pagination from '../../uiComp/paginationComp';
import FormData from './formData';
import EditFormData from './editFormData';
import Alert from '../../uiComp/alertComp';
import { useFetchData } from '../../utils/fetchApi';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [isFormOpen, setFormOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [alert, setAlert] = useState({ message: '', type: '' });
  const limit = 5;
  
  // Fetch data only with limit, without using page
  const { data, isLoading, error, refetch } = useFetchData('https://fakestoreapi.com/products', limit);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = Math.ceil(data.length / limit);

  const paginatedData = data.slice((page - 1) * limit, page * limit);

  const handleEdit = (id) => {
    const product = data.find(product => product.id === id);
    setProductToEdit(product);
    setEditOpen(true);
  };

  const handleSave = (id, productData) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.json())
    .then(() => {
      setAlert({ message: 'Product updated successfully!', type: 'success' });
      setEditOpen(false);
      refetch();
    })
    .catch(() => {
      setAlert({ message: 'Failed to update product.', type: 'error' });
    });
  };

  const handleDelete = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then(() => {
      setAlert({ message: 'Product deleted successfully!', type: 'success' });
    })
    .catch(() => {
      setAlert({ message: 'Failed to delete user.', type: 'error' });
    });
  };

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Title', accessor: 'title' },
    { Header: 'Price', accessor: 'price' },
    { Header: 'Category', accessor: 'category' },
    { Header: 'Description', accessor: 'description' },
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
        <div className="overflow-y-auto max-h-80">
          <TableView columns={columns} data={data} />
        </div>
      </div>

      {/* Pagination Section */}
      <div className="bg-white shadow-md rounded-lg">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>

      {/* Form Popup */}
      <FormData isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
      <EditFormData
        isOpen={isEditOpen}
        onClose={() => setEditOpen(false)}
        productToEdit={productToEdit}
        onSave={handleSave}
      />
    </div>
  );
};

export default ProductList;