// app/api/spreadsheetData.js

import fetchSpreadsheetData from '@/services/sheetDb';

export async function handler(req, res) {
  try {
    const spreadsheetData = await fetchSpreadsheetData();
    res.status(200).json({ data: spreadsheetData });
  } catch (error) {
    console.error('Error fetching spreadsheet data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
