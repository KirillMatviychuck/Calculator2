import { Dispatch, FC } from "react"
import { ActionType, CALC_ACTIONS } from "../../Types/Types"

const ClearButton: FC<ClearButtonProps> = ({ dispatch }) => {
    return (
        <div onClick={() => dispatch({ type: CALC_ACTIONS.CLEAR, payload: '' })}
            className='flex justify-center items-center h-[60px] w-[135px] m-[5px] bg-[rgb(100,113,153)] shadow-[rgb(66,78,115)_0px_4px_0px] text-white rounded-lg cursor-pointer text-3xl font-bold'
        >AC</div>
    )
}

type ClearButtonProps = {
    dispatch: Dispatch<ActionType>
}

export default ClearButton;