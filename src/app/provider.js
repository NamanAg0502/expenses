'use client';

import { BalanceDetailsProvider } from '@/contexts/balanceDetails';
import { LastFetchedRowProvider } from '@/contexts/lastFetchedData';
import { MantineProvider } from '@mantine/core';

const AppProvider = ({ children }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
      }}
    >
      <LastFetchedRowProvider>
        <BalanceDetailsProvider>{children}</BalanceDetailsProvider>
      </LastFetchedRowProvider>
    </MantineProvider>
  );
};

export default AppProvider;
