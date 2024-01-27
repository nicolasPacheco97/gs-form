interface Props {
    text: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: "submit" | "reset" | "button" | undefined
    disabled: boolean
}

function PrimaryButton ({ text, onClick, type, disabled }: Props) {
    return <>
        <button 
        className="font-bold text-white bg-[#17a54d] rounded-3xl py-3 w-[160px] disabled:bg-gray-400" 
        onClick={onClick} 
        disabled={disabled}
        type={type}>
            {text}
        </button>
    </>
}

export default PrimaryButton