import { Dispatch, FC } from "react"
import { ActionType, CALC_ACTIONS } from "../../Types/Types"

const EvaluateButton: FC<EvaluateButtonProps> = ({ dispatch }) => {
    return (
        <div onClick={() => dispatch({ type: CALC_ACTIONS.EVALUATE, payload: '' })}
            className='flex justify-center items-center h-[60px] w-[135px] m-[5px] bg-[rgb(209,63,48)] shadow-[rgb(144,34,25)_0px_4px_0px] text-white rounded-lg cursor-pointer text-3xl font-bold'>
            =
        </div>
    )
}

type EvaluateButtonProps = {
    dispatch: Dispatch<ActionType>
}

export default EvaluateButton;