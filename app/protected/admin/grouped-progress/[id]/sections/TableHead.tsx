const TableHead = () => {
  const headers = [
    { name: "Section Name", align: "pl-48pt text-left" }, 
    { name: " Average Completion Rate", align: "text-center" }, 
    { name: "Average Time Spent", align: "text-left" },
    { name: "Average Points Collected", align: "text-center" },  
    { name: "Active Students", align: "text-center" }, 
    { name: "Questions Launched", align: "text-center" }, 
    { name: "Notes", align: "text-center" }, 
    { name: "Downloaded Content", align: "text-center" }, 
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
