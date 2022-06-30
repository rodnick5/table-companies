import { Box, Button, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { useForm, FieldValues, UseFormRegister, FieldErrors, UseFormReset } from "react-hook-form";
import ReactModal from "react-modal";
import { Ico } from "../../../assets/Ico";
import TextInput from "../../../shared/inputs/TextInput";

interface AddressModalProps {
  reset: UseFormReset<FieldValues>
  register: UseFormRegister<FieldValues>;
  isAdressModalOpen: boolean;
  setIsAdressModalOpen: Dispatch<SetStateAction<boolean>>;
  modalHandler: () => void
  isValid: boolean
  errors: FieldErrors
}

const AddressModal: React.FC<AddressModalProps> = ({
  isAdressModalOpen,
  setIsAdressModalOpen,
  modalHandler,
  register,
  reset,
  errors,
  isValid
}) => {

  const onCloseModal = () => {
    setIsAdressModalOpen(false);
    reset();
  }

  return (
    <ReactModal
      overlayClassName={"adress-modal-overlay"}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      isOpen={isAdressModalOpen}
      onRequestClose={() => setIsAdressModalOpen(false)}
      className="adress-modal-content"
    >
      <Box
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <form>
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
              Invoice Address
            </Typography>
          </Box>
          <Box style={{ margin: "30px 0" }}>
            <TextInput
              register={register}
              label="Company"
              inputName="Company"
              inputRequired={true}
              errorVisible={!!errors.Company}
              errorText={errors.Company?.message}
            />
            <TextInput
              register={register}
              label="Name"
              inputName="Name"
              inputRequired={true}
              errorVisible={!!errors.Name}
              errorText={errors.Name?.message}
            />
            <TextInput
              register={register}
              label="Additional"
              inputName="Additional"
              errorVisible={!!errors.Additional}
              errorText={errors.Additional?.message}
            />
            <TextInput
              register={register}
              label="Street"
              inputName="Street"
              errorVisible={!!errors.Street}
              errorText={errors.Street?.message}
            />
            <TextInput
              register={register}
              label="Postal Code"
              inputName="PostalCode"
              errorVisible={!!errors.PostalCode}
              errorText={errors.PostalCode?.message}
            />
            <TextInput
              register={register}
              label="Country"
              inputName="Country"
              errorVisible={!!errors.Country}
              errorText={errors.Country?.message}
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
                Cancel
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

export default AddressModal;
