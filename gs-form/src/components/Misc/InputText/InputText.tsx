interface Props {
    id: string,
    placeholder: string,
    value: string | null,
    required: boolean,
    disabled: boolean,
    onChange: React.ChangeEventHandler<HTMLInputElement>
    type: string
}

function InputText ({
    placeholder,
    value,
    required,
    disabled,
    onChange,
    id,
    type
}: Props){
    return <>
        <input 
        key={id}
        id={id}
        type={type}
        placeholder={placeholder} 
        value={value ? value :  ''}
        required={required}
        disabled={disabled}
        onChange={onChange}
        className={`
        bg-white border-solid border-[#e6e6e6] border-2 rounded-md 
        font-light p-2 text-center w-[240px] outline-none disabled:bg-gray-100
        `}
        ></input>
    </>
}

export default InputText