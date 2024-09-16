import React, { useState } from 'react';
import TableView from '../../uiComp/tableView';
import Pagination from '../../uiComp/paginationComp';
import { useFetchData } from '../../utils/fetchApi';

const CategoryList = () => {
  const [page, setPage] = useState(1);
  const limit = 5;
  
  // Fetch categories data from Fake Store API
  const { data, isLoading, error } = useFetchData('https://fakestoreapi.com/products/categories', limit);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = Math.ceil(data.length / limit);

  const paginatedData = data.slice((page - 1) * limit, page * limit);

  const columns = [
    { Header: 'Category', accessor: row => row }
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Category Management</h1>
      </div>

      {/* Table Section with max height */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="overflow-y-auto max-h-80">
          <TableView columns={columns} data={paginatedData} />
        </div>
      </div>

      {/* Pagination Section */}
      <div className="bg-white shadow-md rounded-lg">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
};

export default CategoryList;