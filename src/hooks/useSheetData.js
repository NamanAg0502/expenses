// useSpreadsheetData.js
import { useEffect, useState } from 'react';
import fetchSpreadsheetData from '@/services/sheetDb'; // Import your data fetching function here
import { useLastFetchedRow } from '@/contexts/lastFetchedData';

export function useSpreadsheetData() {
  const { lastFetchedRow, updateLastFetchedRow } = useLastFetchedRow();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const spreadsheetData = await fetchSpreadsheetData(
        lastFetchedRow,
        updateLastFetchedRow
      );
      if (spreadsheetData) {
        setData(spreadsheetData);
      }
    }

    fetchData();
  }, [lastFetchedRow, updateLastFetchedRow]);
  return data;
}
