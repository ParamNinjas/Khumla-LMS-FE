const TableHead = () => {
  const headers = [
    { name: "Sections", align: "pl-48pt text-left" }, 
    { name: "Time Spent", align: "text-left" }, 
    { name: "Completion Rate", align: "text-center" }, 
    { name: "Comments", align: "text-center" }, 
    { name: "Points Collected", align: "text-center" }, 
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
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
