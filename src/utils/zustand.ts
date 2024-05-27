import { create } from "zustand";
import { IRecipeAppState } from "./interface";

export const useRecipeAppStore = create<IRecipeAppState>((set, get) => ({
    inputs: [''],
    submittedInputs: [],
    handleInputChange: ({ index, value }) => {
      const newInputs = [...get().inputs];
      newInputs[index] = value;
      set({ inputs: newInputs });
    },
    handleAddInput: () => {
      set({ inputs: [...get().inputs, ''] });
    },
    handleSubmit: () => {
      set({ submittedInputs: get().inputs });
    },
    resetInputs: () => {
      set({ inputs: [''], submittedInputs: [] });
    },
  }));