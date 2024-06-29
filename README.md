# Getting Started

<div >
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>
</div>


## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## State Update Flow Diagram
```
App Component
---------------
| Initial State: loanInputs, eligibleLoan, loanNeed
| 
| getAllValues(updatedState)
|  |
|  | Update state: setLoanInputs(updatedState)
|  | Calculate loans: updateLoanCalculations(updatedState)
|  |
|  V
| <CalculationInputsView onChange={getAllValues} />
---------------

CalculationInputsView Component
-------------------------------
| Props: onChange={getAllValues}
| 
| <FinanceInputs onChange={onChange} />
-------------------------------

FinanceInputs Component
-------------------------------
| Initial State: financialDetails
| 
| handleInputChange(name, value)
|  |
|  | Update local state: setFinancialDetails(updatedDetails)
|  | Call parent function: onChange(updatedDetails)
|  |
|  V
| <ComboInput ... onChangeInputValue={handleInputChange} />
-------------------------------

ComboInput Component
-------------------------------
| Initial State: value
| 
| handleOnChange(event)
|  |
|  | Update local state: setValue(newValue)
|  | Call parent function: onChangeInputValue(newValue)
|  |
|  V
| <input type="number" ... />
| <input type="range" ... />
-------------------------------

User Interaction
-------------------------------
| User changes value on input
| 
| ComboInput.handleOnChange(event)
|  |
|  V
| FinanceInputs.handleInputChange(name, newValue)
|  |
|  V
| FinanceInputs.onChange(updatedDetails)
|  |
|  V
| App.getAllValues(updatedState)
|  |
|  V
| State updated, App re-renders with new values
-------------------------------
````