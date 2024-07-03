import { Dispatch, FC } from "react"
import { ActionType, CALC_ACTIONS } from "../../Types/Types"

const DigitButton: FC<DigitButtonPros> = ({ digit, dispatch }) => {
    return (
        <div onClick={() => dispatch({ type: CALC_ACTIONS.ADD_DIGIT, payload: digit })}
            className='flex justify-center items-center h-[60px] w-[60px] m-[5px] bg-[rgb(234,227,219)] shadow-[0px_4px_0px_rgb(182,163,153)] text-[rgb(70,75,94)] rounded-lg cursor-pointer text-3xl font-bold'>
            {digit}
        </div>
    )
}

type DigitButtonPros = {
    digit: string
    dispatch: Dispatch<ActionType>
}

export default DigitButton;