"use client";
import { NextPage } from "next";
import TableRow from "./TableRow";

const TableBody: NextPage<{ list: any[] }> = ({ list }) => {
  return (
    <>
      <tbody className="list" id="staff">
        {list &&
          list.map((data: any, key) => <TableRow key={data.id} data={data} />)}
      </tbody>
    </>
  );
};

export default TableBody;
