'use client';

import React, { createContext, useContext, useState } from 'react';

const LastFetchedRowContext = createContext();

export function useLastFetchedRow() {
  return useContext(LastFetchedRowContext);
}

export function LastFetchedRowProvider({ children }) {
  const [lastFetchedRow, setLastFetchedRow] = useState(0);

  const updateLastFetchedRow = (value) => {
    setLastFetchedRow(value);
  };

  return (
    <LastFetchedRowContext.Provider
      value={{
        lastFetchedRow,
        updateLastFetchedRow,
      }}
    >
      {children}
    </LastFetchedRowContext.Provider>
  );
}
