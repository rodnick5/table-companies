import { Box, TextField } from "@mui/material";
import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface TextInputProps {
  label: string;
  inputRequired?: boolean;
  inputName: string;
  register: UseFormRegister<FieldValues>;
  errorText: string;
  errorVisible: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  inputRequired = false,
  inputName,
  register,
  errorText,
  errorVisible
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "5px 0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontSize: "12px" }}>{label}</p>
        {inputRequired ? (
          <p style={{ lineHeight: "0.4", marginLeft: "3px" }}>*</p>
        ) : null}
      </div>
      <TextField
      helperText={errorText}
      error={errorVisible}
      inputProps={{
        style:{
         padding: '5px',
         width: 250,
         fontSize: 12
        }
      }}
      variant="outlined"
        {...register(inputName, {
          minLength: { value: 5, message: "Минимум 5 символов" },
          maxLength: {value: 30, message: "Максимум 30 символов"},
          required: {
            value: inputRequired,
            message: "Поле обязательно к вводу.",
          },
        })}
        size="small"
      />
    </div>
  );
};

export default TextInput;
