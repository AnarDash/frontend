// frontend/components/LoanForm.js
"use client";

import { useState } from "react";

const LoanForm = ({ user, onLoanAdded }) => {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!user?._id) {
      setError("User information is missing.");
      setLoading(false);
      return;
    }

    const loanData = {
      amount: parseFloat(amount),
      reason: reason,
      dueDate: dueDate,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/loans/addLoan/${user._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loanData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.errors && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
          const firstError = errorData.errors[0].msg; // Display the first error message
          throw new Error(firstError || 'Failed to add loan due to validation errors');
        } else {
          throw new Error(errorData.message || 'Failed to add loan');
        }
      }

      setAmount("");
      setReason("");
      setDueDate("");
      if (onLoanAdded) {
        onLoanAdded();
      }
    } catch (err) {
      console.error('Error adding loan:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Шинэ зээл нэмэх</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Зээлийн хэмжээ:</label>
          <input type="number" id="amount" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">Зээлийн зорилго:</label>
          <textarea id="reason" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={reason} onChange={(e) => setReason(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="dueDate" className="block text-gray-700 text-sm font-bold mb-2">Хугацаа:</label>
          <input type="date" id="dueDate" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        </div>
        <button type="submit" className={`bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-wait' : ''}`} disabled={loading}>
          {loading ? 'Нэмж байна...' : 'Нэмэх'}
        </button>
      </form>
    </div>
  );
};

export default LoanForm;