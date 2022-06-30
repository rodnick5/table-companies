import { Box, Button, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import ReactModal from "react-modal";
import { Ico } from "../../../assets/Ico";
import TextInput from "../../../shared/inputs/TextInput";

interface BankModalProps {
  register: UseFormRegister<FieldValues>;
  resetAllFields: () => void
  isBankModalOpen: boolean;
  setIsBankModalOpen: Dispatch<SetStateAction<boolean>>;
  modalHandler: () => void;
  isValid: boolean;
  errors: FieldErrors;
}


const BankDataModal: React.FC<BankModalProps> = ({
  isBankModalOpen,
  setIsBankModalOpen,
  modalHandler,
  register,
  resetAllFields,
  errors,
  isValid,
}) => {
  function onCloseModal() {
    setIsBankModalOpen(false)
    resetAllFields()
  }

  return (
    <ReactModal
      overlayClassName={"adress-modal-overlay"}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      isOpen={isBankModalOpen}
      onRequestClose={() => setIsBankModalOpen(false)}
      className="adress-modal-content"
    >
      <Box
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <form >
          <Box
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
            onClick={onCloseModal}
          >
            <Ico name={"cancelIcon"} />
          </Box>
          <Box>
            <Typography
              variant="h2"
              sx={{ fontWeight: "600", fontSize: "32px" }}
            >
              Bank Data
            </Typography>
          </Box>
          <Box style={{ margin: "30px 0" }}>
            <TextInput
              register={register}
              label="IBAN"
              inputName="IBAN"
              inputRequired={true}
              errorVisible={!!errors.IBAN}
              errorText={errors.IBAN?.message}
            />
            <TextInput
              register={register}
              label="BIC"
              inputName="BIC"
              inputRequired={true}
              errorVisible={!!errors.BIC}
              errorText={errors.BIC?.message}
            />
            <TextInput
              register={register}
              label="Bank Name"
              inputName="BankName"
              inputRequired={true}
              errorVisible={!!errors.BankName}
              errorText={errors.BankName?.message}
            />
          </Box>
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            <Box style={{ marginRight: "10px" }}>
              <Button
                  variant="outlined"
                  color="success"
                  sx={{ borderRadius: 20 }}
                  onClick={onCloseModal}
                >
              Previous
                </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="success"
                sx={{ borderRadius: 20 }}
                onClick={modalHandler}
                disabled={!isValid}
              >
                Next
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </ReactModal>
  );
};

export default BankDataModal;
