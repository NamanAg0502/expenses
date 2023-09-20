export function formatDate(date) {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export function extractInfoFromEmail(emailBody) {
  // Define regular expressions to extract information
  const amountRegex =
    /INR (\d+(?:,\d+)*(?:\.\d{2})?) has been (debited|credited|deposited)/;
  const balanceRegex = /Clear Bal is INR (\d+(?:,\d+)*(?:\.\d{2})?)/;
  const toRegex = /(P2M|P2A|P2P) (.*?) value/;
  const methodRegex = /UPI REF NO (\d+) (\w+)/;

  // Extract information using regular expressions
  const amountMatch = emailBody.match(amountRegex);
  const balanceMatch = emailBody.match(balanceRegex);
  const toMatch = emailBody.match(toRegex);
  const methodMatch = emailBody.match(methodRegex);

  // Create a JSON object with extracted information
  const result = {
    amount: amountMatch ? parseFloat(amountMatch[1].replace(/,/g, '')) : null,
    balance: balanceMatch
      ? parseFloat(balanceMatch[1].replace(/,/g, ''))
      : null,
    to: toMatch ? `${toMatch[1]} ${toMatch[2]}` : null,
    method: methodMatch ? methodMatch[2] : null,
  };

  return result;
}

export function calculateTotalAmount(data) {
  // Calculate the total amount
  const amounts = data.map((item) => parseFloat(item.Amount));
  return amounts.reduce((acc, val) => acc + val, 0);
}

export function calculateTotalBalance(data) {
  const lastItem = data[0];
  return lastItem?.Balance;
}

export function calculateTotalDebit(data) {
  // Calculate the total debit
  const debitTransactions = data.filter(
    (item) => item['Debit/Credit'].toLowerCase() === 'debit'
  );
  return calculateTotalAmount(debitTransactions);
}

export function calculateTotalInvest(data) {
  // Calculate the total debit
  const investTransactions = data.filter(
    (item) => item['Debit/Credit'].toLowerCase() === 'invest'
  );
  return calculateTotalAmount(investTransactions);
}

export function calculateTotalCredit(data) {
  // Calculate the total credit
  const creditTransactions = data.filter(
    (item) => item['Debit/Credit'].toLowerCase() === 'credit'
  );
  return calculateTotalAmount(creditTransactions);
}

export function getLastFetchDateTime(data) {
  // Find the last date and time
  const lastItem = data[0];
  return `${lastItem?.Date} ${lastItem?.Time}`;
}
