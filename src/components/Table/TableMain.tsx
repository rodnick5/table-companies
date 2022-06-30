import React, { useState } from "react";
import TableHead from "./TableHead";
import { RootState } from "../../shared/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow, RowType } from "../../reducers/main";
import { Ico } from "../../assets/Ico";
import AddressModal from "../Modal/AdressModal/AdressModal";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import BankDataModal from "../Modal/BankDataModal/BankDataModal";
import { FieldValues, useForm } from "react-hook-form";

const TableMain: React.FC = () => {
  const dispatch = useDispatch();
  const [isAdressModalOpen, setIsAdressModalOpen] = useState(false);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const {
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<FieldValues>({ mode: "onBlur" });

  const rows: any = useSelector<RootState>((state) => state.main.rows);

  function resetAllFields(){
    reset({
      IBAN: "",
      BIC: "",
      BankName: "",
      Company: "",
      Name: "",
      Additional: "",
      Street: "",
      PostalCode: "",
      Country: "",
    } as FieldValues)
  }

  function addressToBankModal() {
    setIsAdressModalOpen(false);
    setIsBankModalOpen(true);
  }
  function bankToContactModal() {
    setIsBankModalOpen(false);
    setIsContactModalOpen(true);
  }

  const tableRows = rows.map((item: RowType) => (
    <TableRow key={item.iban}>
      <TableCell
        size="small"
        sx={{
          padding: "5px 10px",
          borderWidth: 0,
          borderColor: "rgb(184, 184, 184)",
          borderStyle: "solid",
          borderBottomWidth: 1,
          maxHeight: 20,
          fontSize: 14,
        }}
        onClick={() => dispatch(deleteRow(item.iban))}
      >
        <Ico name={"trashIcon"} />
      </TableCell>
      {Object.values(item).map((item: string, index: number) => (
        <TableCell
          key={index}
          sx={{
            padding: "0 5px",
            minWidth: 100,
            borderWidth: 0,
            borderColor: "rgb(184, 184, 184)",
            borderStyle: "solid",
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            maxHeight: 20,
            textAlign: "center",
          }}
        >
          {item}
        </TableCell>
      ))}
    </TableRow>
  ));

  return (
    <Box style={{ padding: "20px" }}>
      <Box style={{ marginBottom: "20px" }}>
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: 20 }}
          onClick={() => setIsAdressModalOpen(true)}
        >
          Add
        </Button>
      </Box>
      <Box
        style={{
          borderWidth: 2,
          overflowX: "auto",
          borderColor: "#376b8d",
          borderStyle: "solid",
        }}
      >
        <Table style={{ width: "100%" }}>
          <TableHead />
          <TableBody>{tableRows}</TableBody>
        </Table>
        <AddressModal
          register={register}
          reset={reset}
          errors={errors}
          isValid={isValid}
          isAdressModalOpen={isAdressModalOpen}
          setIsAdressModalOpen={setIsAdressModalOpen}
          modalHandler={addressToBankModal}
        />
        <BankDataModal
          register={register}
          resetAllFields={resetAllFields}
          errors={errors}
          isValid={isValid}
          isBankModalOpen={isBankModalOpen}
          setIsBankModalOpen={setIsBankModalOpen}
          modalHandler={bankToContactModal}
        />
      </Box>
    </Box>
  );
};

export default TableMain;
