import React from "react";
import { RowType } from "../../reducers/main";
interface ITableRow {
  backgroundColor?: string;
  item: RowType;
}

const TableRow: React.FC<ITableRow> = ({
  backgroundColor = "#ffffff",
  item,
}) => {
  const {
    company,
    name,
    additional,
    street,
    postalCode,
    country,
    iban,
    bic,
    bankName,
    fax,
    email,
    birthday,
  } = item;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <div></div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
          minWidth: "150px",
          wordWrap: 'break-word'
        }}
      >
        <p>{company}</p>
      </div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
          wordWrap: 'break-word',
          minWidth: "150px",
        }}
      >
        <p>{name}</p>
      </div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
          minWidth: "150px",
        }}
      >
        <p>{additional}</p>
      </div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
          wordWrap: 'break-word'

        }}
      >
        <p>{street}</p>
      </div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
        }}
      >
        <p>{postalCode}</p>
      </div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
        }}
      >
        <p>{country}</p>
      </div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
        }}
      >
        <p>{iban}</p>
      </div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
        }}
      >
        <p>{bic}</p>
      </div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
        }}
      >
        <p>{bankName}</p>
      </div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
          minWidth: "110px",
        }}
      >
        <p>{fax}</p>
      </div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
        }}
      >
        <p>{email}</p>
      </div>
      <div
        style={{
          padding: "5px 5px",
          display: "flex",
          justifyContent: "center",
          backgroundColor,
          alignItems: "center",
        }}
      >
        <p>{birthday}</p>
      </div>
    </div>
  );
};

export default TableRow;
