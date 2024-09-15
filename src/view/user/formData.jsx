import React, { useState } from 'react';

const FormData = ({ isOpen, onClose }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({
    city: '',
    street: '',
    number: '',
    zipcode: '',
    geolocation: {
      lat: '',
      long: ''
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Construct the user data object
    const userData = {
      email,
      username,
      password,
      name: {
        firstname,
        lastname
      },
      address,
      phone
    };

    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const result = await response.json();
      console.log(result);
      // You might want to do something with the result here
    } catch (error) {
      console.error('Error:', error);
    }

    // Close the popup after submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Add User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              id="city"
              type="text"
              value={address.city}
              onChange={(e) => setAddress(prev => ({ ...prev, city: e.target.value }))}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="street" className="block text-sm font-medium text-gray-700">
              Street
            </label>
            <input
              id="street"
              type="text"
              value={address.street}
              onChange={(e) => setAddress(prev => ({ ...prev, street: e.target.value }))}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
              Number
            </label>
            <input
              id="number"
              type="number"
              value={address.number}
              onChange={(e) => setAddress(prev => ({ ...prev, number: e.target.value }))}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">
              Zipcode
            </label>
            <input
              id="zipcode"
              type="text"
              value={address.zipcode}
              onChange={(e) => setAddress(prev => ({ ...prev, zipcode: e.target.value }))}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lat" className="block text-sm font-medium text-gray-700">
              Latitude
            </label>
            <input
              id="lat"
              type="text"
              value={address.geolocation.lat}
              onChange={(e) => setAddress(prev => ({ 
                ...prev, 
                geolocation: { ...prev.geolocation, lat: e.target.value } 
              }))}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="long" className="block text-sm font-medium text-gray-700">
              Longitude
            </label>
            <input
              id="long"
              type="text"
              value={address.geolocation.long}
              onChange={(e) => setAddress(prev => ({ 
                ...prev, 
                geolocation: { ...prev.geolocation, long: e.target.value } 
              }))}
              className="mt-1 block w-full border-black border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormData;