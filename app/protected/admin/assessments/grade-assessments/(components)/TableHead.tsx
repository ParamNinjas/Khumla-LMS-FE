const TableHead = () => {
  const headers = [
    { name: "Name", align: "w-25 text-center" },
    { name: "Surname", align: "text-center" },
    { name: "Course", align: "pl-112pt text-left" },
  ];

  return (
    <>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.name} className={header.align}>
              <a
                key={header.name}
                className="sort"
                data-sort="js-lists-values-employee-name"
              >
                {header.name}
              </a>
            </th>
          ))}
          <th className="text-center">Action</th>
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
