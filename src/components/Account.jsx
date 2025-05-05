import React from "react";
import { useUserContext } from "../context/UserContext";
import PastRentals from "./PastRentals";

const Account = () => {
  const { currentUser } = useUserContext();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">👤 My Account</h2>

      <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 mb-8">
        <div className="space-y-2">
          <p><span className="text-gray-500 font-semibold">Username:</span> {currentUser.username}</p>
          <p><span className="text-gray-500 font-semibold">Email:</span> {currentUser.email}</p>
          <p><span className="text-gray-500 font-semibold">Membership:</span> 
            <span className="ml-2 inline-block bg-indigo-100 text-indigo-700 text-sm px-2 py-1 rounded-md">{currentUser.tier}</span>
          </p>
        </div>
      </div>

      <PastRentals />
    </div>
  );
};

export default Account;
