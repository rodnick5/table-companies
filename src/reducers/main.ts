import { createSlice } from "@reduxjs/toolkit";

export type RowType = {
  company: string;
  name: string;
  additional: string;
  street: string;
  postalCode: string;
  country: string;
  iban: string;
  bic: string;
  bankName: string;
  fax: string;
  email: string;
  birthday: string;
};

export type IState = {
  rows: RowType[];
};

const initialState = {
  rows: [
    {
      company: "company1",
      name: "name",
      additional: "additional",
      street: "street",
      postalCode: "postalCode",
      country: "country",
      iban: "ibhhjjan",
      bic: "bic",
      bankName: "bankName",
      fax: "faxrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
      email: "emaiddddddddddddddddl",
      birthday: "birthday",
    },
    {
      company: "company2",
      name: "name",
      additional: "additional",
      street: "street",
      postalCode: "postalCode",
      country: "country",
      iban: "ibfddfakkkn",
      bic: "bic",
      bankName: "bankName",
      fax: "fax",
      email: "email",
      birthday: "birthday",
    },
    {
      company: "company3",
      name: "name",
      additional: "additional",
      street: "street",
      postalCode: "postalCode",
      country: "country",
      iban: "ibfddfffffan",
      bic: "bic",
      bankName: "bankName",
      fax: "fax",
      email: "email",
      birthday: "birthday",
    },
    {
      company: "company4",
      name: "name",
      additional: "additional",
      street: "street",
      postalCode: "postalCode",
      country: "country",
      iban: "ibfddaaaafan",
      bic: "bic",
      bankName: "bankName",
      fax: "fax",
      email: "email",
      birthday: "birthday",
    },
  ],
} as IState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addRow(state, action) {
      state.rows.push(action.payload);
    },
    deleteRow(state, action){
      let index = state.rows.findIndex(item => item.iban === action.payload)
      state.rows.splice(index, 1)
    }
  },
});

const { actions, reducer } = mainSlice;
export default reducer;
export const { addRow, deleteRow } = actions;
