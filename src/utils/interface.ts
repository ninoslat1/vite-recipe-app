import { TInputComponent } from "./type";

export interface IRecipeAppState {
    inputs: string[]
    submittedInputs: string[]
    handleInputChange: (input: TInputComponent) => void
    handleAddInput: () => void
    handleSubmit: () => void
    resetInputs: () => void
  }

export interface TActionsSpeedDial {
    icon: JSX.Element
    name: string
    action: () => void
}