import { Dispatch, FC } from "react"
import { ActionType, CALC_ACTIONS } from "../../Types/Types"

const DeleteButton: FC<DeleteButtonProps> = ({ dispatch }) => {
    return (
        <div onClick={() => dispatch({ type: CALC_ACTIONS.DELETE_DIGIT, payload: '' })}
            className='flex justify-center items-center h-[60px] w-[60px] m-[5px] bg-[rgb(100,113,153)] shadow-[rgb(66,78,115)_0px_4px_0px] text-white rounded-lg cursor-pointer text-lg font-bold'
        >DEL</div>
    )
}

type DeleteButtonProps = {
    dispatch: Dispatch<ActionType>
}

export default DeleteButton;