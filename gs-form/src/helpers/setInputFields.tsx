import InputText from "../components/Misc/InputText/InputText";
import { Field } from "../utils/types.d";

export function setInputFields (
    input: Field,
    handleChangeFields: {
        [x: string]: {
            value: string | null;
            isRequired: boolean;
            isDisabled: boolean;
        };
    },
    setHandleChangeFields: React.Dispatch<React.SetStateAction<{
        [x: string]: {
            value: string | null;
            isRequired: boolean;
            isDisabled: boolean;
        };
    }>>
) {
    return <>
        <InputText 
        key={input.id}
        id={input.id}
        type={input.type}
        placeholder={input.placeholder}
        value={handleChangeFields[input.id].value}
        disabled={input.isDisabled}
        required={input.isRequired}
        onChange={(e) => setHandleChangeFields({
            ...handleChangeFields, 
            [e.target.id]: { 
                ...handleChangeFields[e.target.id], value: e.target.value
            }
        })}
        >
        </InputText>
    </>
} 