import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef(function InputForm(props, ref) {
    const { name, placeholder, label, type } = props
    return (
        <div className="mb-6">
            <Label htmlfor={name}>{label}</Label>
            <Input type={type} name={name} placeholder={placeholder} ref={ref} />
        </div>
    )
})


export default InputForm