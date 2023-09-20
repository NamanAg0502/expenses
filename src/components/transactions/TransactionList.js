import React from 'react';

const DetailedTransactionList = ({ transactions }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-semibold mb-4">Transaction Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Balance</th>
              <th className="px-4 py-2">To</th>
              <th className="px-4 py-2">Method</th>
              <th className="px-4 py-2">Debit/Credit</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{transaction.Date}</td>
                <td className="px-4 py-2">{transaction.Time}</td>
                <td className="px-4 py-2">{transaction.Amount}</td>
                <td className="px-4 py-2">{transaction.Balance}</td>
                <td className="px-4 py-2">{transaction.To}</td>
                <td className="px-4 py-2">{transaction.Method}</td>
                <td className="px-4 py-2">{transaction['Debit/Credit']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailedTransactionList;
