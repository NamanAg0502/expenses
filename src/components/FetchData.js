'use client';

import { Loader } from '@mantine/core';
import {
  calculateTotalAmount,
  calculateTotalBalance,
  calculateTotalDebit,
  calculateTotalCredit,
  getLastFetchDateTime,
  calculateTotalInvest,
} from '../utils/utils'; // Import your utility functions here
import { useEffect, useState } from 'react';
import { useSpreadsheetData } from '@/hooks/useSheetData';

function FetchData() {
  const data = useSpreadsheetData();
  console.log(data);
  const [totals, setTotals] = useState({
    totalAmount: 0,
    totalBalance: 0,
    totalDebit: 0,
    totalCredit: 0,
    totalInvest: 0,
    lastFetchDateTime: '',
  });

  useEffect(() => {
    if (data) {
      // Calculate total amounts and last fetch date/time
      const totals = {
        totalAmount: calculateTotalAmount(data),
        totalBalance: calculateTotalBalance(data),
        totalDebit: calculateTotalDebit(data),
        totalCredit: calculateTotalCredit(data),
        totalInvest: calculateTotalInvest(data),
        lastFetchDateTime: getLastFetchDateTime(data),
      };

      setTotals(totals);
    }
  }, [data]);

  if (!data) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-8 m-4">
        <p className="p-4 rounded-lg bg-white shadow-md">
          Total Amount: {totals.totalAmount}
        </p>
        <p className="p-4 rounded-lg bg-white shadow-md">
          Total Balance: {totals.totalBalance}
        </p>
        <p className="p-4 rounded-lg bg-white shadow-md">
          Date and Time: {totals.lastFetchDateTime}
        </p>
        <p className="p-4 rounded-lg bg-white shadow-md">
          Total Debit: {totals.totalDebit}
        </p>
        <p className="p-4 rounded-lg bg-white shadow-md">
          Total Credit: {totals.totalCredit}
        </p>
        <p className="p-4 rounded-lg bg-white shadow-md">
          Total Invest: {totals.totalInvest}
        </p>
      </div>
    </div>
  );
}

export default FetchData;
