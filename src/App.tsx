import { useReducer } from 'react'
import './App.css'
import DigitButton from './components/DigitButton/DigitButton'
import { ActionType, CALC_ACTIONS, InitialState } from './Types/Types'
import ClearButton from './components/ClearButton/ClearButton'
import DeleteButton from './components/DeleteButton.tsx/DeleteButton'
import OperationButton from './components/OperationButton/OperationButton'
import EvaluateButton from './components/EvaluateButton/EvaluateButton'

const reducer = (state: InitialState, action: ActionType): InitialState => {
  const evaluate = (): string => {
    switch (state.operation) {
      case '+':
        return String(+state.previousValue + +state.currentValue)
      case '-':
        return String(+state.previousValue - +state.currentValue)
      case '*':
        return String(+state.previousValue * +state.currentValue)
      case '÷':
        return String(+state.previousValue / +state.currentValue)
      default:
        return ''
    }
  }

  const { type, payload } = action
  switch (type) {
    case CALC_ACTIONS.ADD_DIGIT:
      if (state.alreadyEvaluated) {
        return {
          ...state,
          currentValue: payload,
          alreadyEvaluated: false
        }
      }
      if (state.currentValue && payload === '.' && state.currentValue.includes('.')) {
        return state
      }
      if (!state.currentValue && payload === '.') {
        return {
          ...state,
          currentValue: `0${payload}`
        }
      }
      if (state.currentValue === '0') {
        return {
          ...state,
          currentValue: payload
        }
      }
      return {
        ...state,
        currentValue: `${state.currentValue ? state.currentValue : ''}${payload}`
      }

      break;
    case CALC_ACTIONS.CLEAR:
      return {
        ...state,
        currentValue: '',
        previousValue: '',
        operation: ''
      }
    case CALC_ACTIONS.DELETE_DIGIT:
      return {
        ...state,
        currentValue: `${state.currentValue.slice(0, -1)}`
      }
    case CALC_ACTIONS.OPERATION:
      if (!state.currentValue && !state.previousValue) {
        return state
      }
      if (state.previousValue && !state.currentValue) {
        return {
          ...state,
          operation: payload
        }
      }
      if (state.previousValue) {
        return {
          ...state,
          previousValue: evaluate(),
          currentValue: '',
          operation: payload
        }
      }
      return {
        ...state,
        previousValue: `${state.currentValue}`,
        operation: payload,
        currentValue: ''
      }

    case CALC_ACTIONS.EVALUATE:
      return {
        ...state,
        currentValue: evaluate(),
        previousValue: '',
        operation: '',
        alreadyEvaluated: true
      }
    default:
      return state
  }
  return state
}

function App() {
  const [{ currentValue, previousValue, operation }, dispatch] = useReducer(reducer, {} as InitialState)


  return (
    <div className='flex justify-center items-center h-screen w-full bg-[rgb(59,70,100)] font-sans'>
      <div className='flex flex-col justify-between items-center h-[670px] w-[380px] border-2 border-slate-600 rounded-xl'>
        <section className='flex items-center h-[12%] w-[90%] mt-[20px] text-white text-3xl font-medium'>
          <div>calc</div>
        </section>
        <section className='flex flex-col justify-center items-end h-[12%] w-[90%] bg-slate-900 box-border p-6 rounded-lg text-white text-xl font-medium'>
          <div className='text-gray-600'>{previousValue} {operation}</div>
          <div >{currentValue}</div>
        </section>
        <section className='flex justify-around items-center flex-wrap h-[420px] w-[90%] mb-[20px] bg-slate-800 rounded-xl box-border p-[20px]'>
          <DigitButton digit='1' dispatch={dispatch} />
          <DigitButton digit='2' dispatch={dispatch} />
          <DigitButton digit='3' dispatch={dispatch} />
          <DeleteButton dispatch={dispatch} />
          <DigitButton digit='4' dispatch={dispatch} />
          <DigitButton digit='5' dispatch={dispatch} />
          <DigitButton digit='6' dispatch={dispatch} />
          <OperationButton operation='+' dispatch={dispatch} />
          <DigitButton digit='7' dispatch={dispatch} />
          <DigitButton digit='8' dispatch={dispatch} />
          <DigitButton digit='9' dispatch={dispatch} />
          <OperationButton operation='-' dispatch={dispatch} />
          <DigitButton digit='.' dispatch={dispatch} />
          <DigitButton digit='0' dispatch={dispatch} />
          <OperationButton operation='÷' dispatch={dispatch} />
          <OperationButton operation='*' dispatch={dispatch} />
          <ClearButton dispatch={dispatch} />
          <EvaluateButton dispatch={dispatch} />
        </section>
      </div>
    </div>
  )
}




export default App
