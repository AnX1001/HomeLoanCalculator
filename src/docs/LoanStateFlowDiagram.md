### State Flow

1. **App Component**

   - **Initial State**: `loanInputs`, `eligibleLoan`, `loanNeed`.
   - **Function**: `getAllValues(updatedState)` updates state and calculates loans.
   - **Child Component**: `<CalculationInputsView onChange={getAllValues} />`.

2. **CalculationInputsView Component**

   - **Props**: `onChange` (calls `getAllValues`).
   - **Child Component**: `<FinanceInputs onChange={onChange} />`.

3. **FinanceInputs Component**

   - **Local State**: `financialDetails`.
   - **Function**: `handleInputChange(name, value)` updates local state and calls `onChange(updatedDetails)`.
   - **Child Component**: `<ComboInput ... onChangeInputValue={handleInputChange} />`.

4. **ComboInput Component**

   - **Local State**: `value`.
   - **Function**: `handleOnChange(event)` updates local state and calls `onChangeInputValue(newValue)`.
   - **UI**: `<input type="number" />`, `<input type="range" />`.

5. **User Interaction Flow**
   - User changes input → `ComboInput.handleOnChange` →
   - `FinanceInputs.handleInputChange` →
   - `App.getAllValues` →
   - State updates, triggering re-render with new values.
