import React from "react";
import { enumTableHead } from "../../shared/enums/enumTableHead";

const tableHeadList = enumTableHead.map((item: string, index: number) => (
  <th
    style={{
      color: "#ffffff",
      fontWeight: "400",
      fontSize: 14,
      padding: "0 5px",
      minWidth: 100,
      borderWidth: 0,
      borderColor: "rgb(184, 184, 184)",
      borderStyle: "solid",
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      maxHeight: 20,
      textAlign: 'center'
    }}
    key={index}
  >
    {item}
  </th>
));

const TableHead = () => {
  return (
    <thead>
      <tr style={{ backgroundColor: "#376b8d" }}>
        <th
          style={{
            padding: "0 10px",
            borderWidth: 0,
            borderColor: "rgb(184, 184, 184)",
            borderStyle: "solid",
            borderBottomWidth: 1,
          }}
        ></th>
        {tableHeadList}
      </tr>
    </thead>
  );
};

export default TableHead;
