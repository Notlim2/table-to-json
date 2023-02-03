function tableToJson(table) {
  function normalizeStr(str) {
    return str.replace(/[\n\r]/g, "").replace(/(<\w*>)(\w*)(<\/\w*>)/g, "$1");
  }

  const data = [];
  const tableHeaders = table.querySelectorAll("th");
  const tableRows = Array.from(table.rows);
  for (const row of tableRows) {
    const rowData = {};
    const rowCells = Array.from(row.cells);
    let count = 0;
    for (const cell of rowCells) {
      const respectiveHeader = tableHeaders[count];
      rowData[normalizeStr(respectiveHeader.textContent)] = normalizeStr(
        cell.textContent
      );
      count++;
    }
    data.push(rowData);
  }
  return data;
}
