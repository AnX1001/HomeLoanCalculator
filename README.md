# Boliglånskalkulator

This project is bootstraped by create-react-app.
 
![alt text](./src/Frontend/Design/Images/userInterface.png)

 `npm start`

Runs the app in the development mode. \
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


## CSS 

To ensure consistent CSS, I have installed Stylelint. It enforces a set of standard rules, along with custom rules defined in the .stylelintrc.json file. 

```bash
npm run lint:css
```