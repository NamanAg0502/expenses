'use client';

import { createContext, useContext, useState } from 'react';

const BalanceDetailsContext = createContext();

export function useBalance() {
  return useContext(BalanceDetailsContext);
}

export function BalanceDetailsProvider({ children }) {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);

  const updateAmount = (count) => {
    setAmount(amount + count);
  };

  const updateBalance = (count) => {
    setBalance(balance + count);
  };

  return (
    <BalanceDetailsContext.Provider
      value={{
        amount,
        balance,
        updateAmount,
        updateBalance,
      }}
    >
      {children}
    </BalanceDetailsContext.Provider>
  );
}
