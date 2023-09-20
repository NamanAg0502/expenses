import axios from 'axios'; // Adjust the path as needed

async function fetchSpreadsheetData(lastFetchedRow, updateLastFetchedRow) {
  try {
    // Use the value from the context as the offset
    const response = await axios.get(process.env.NEXT_PUBLIC_SHEETDB_API, {
      params: {
        offset: lastFetchedRow,
      },
    });

    // Update the lastFetchedRow variable with the new value
    updateLastFetchedRow(lastFetchedRow + response.data.length);

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default fetchSpreadsheetData;
