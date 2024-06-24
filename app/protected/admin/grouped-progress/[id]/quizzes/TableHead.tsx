const TableHead = () => {
  const headers = [
    { name: "Quiz Name", align: "w-25 text-center" }, 
    { name: "Average Attempts", align: "text-center" }, 
    { name: "Average Result", align: "text-center" }, 
    { name: "Average Time Spent", align: "text-center" }, 
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
