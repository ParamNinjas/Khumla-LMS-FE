const TableHead = () => {
  const headers = ["Topic Element", "Embedded Link", "Action", "Preview Video"];

  return (
    <>
      <thead>
        <tr>
          {headers.map((name) => (
            <th key={name} className="text-center">
              {name === "Embedded Link" && (
                <i className="material-icons mr-8pt">link</i>
              )}
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
