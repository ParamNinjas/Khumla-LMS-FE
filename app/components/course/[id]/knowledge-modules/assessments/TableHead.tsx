const TableHead = () => {
  const headers = ["Topic Element", "Action"];

  return (
    <>
      <thead>
        <tr>
          {headers.map((name) => (
            <th key={name} className="text-center">
              <a
                key={name}
                className="sort"
                data-sort="js-lists-values-employee-name"
              >
                {name}
              </a>
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
