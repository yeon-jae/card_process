import { FocusEventHandler, forwardRef, InputHTMLAttributes, useState } from "react";
import Input from "./Input";
import Text from "./Text";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode
    hasError?: boolean
    helpMessage?: React.ReactNode

}
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    function TextField({ label, hasError, onFocus, onBlur, ...props }, ref) {
        const [focused, setFocused] = useState(false)
        const labelColor = hasError ? 'red' : focused ? 'blue' : 'grey'
        const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
            setFocused(true)
            onFocus?.(event)

        }
        const handleBlur = () => {
            setFocused(false)

        }

        return (
            <div>
                {label ? <Text typography="t7" color={labelColor} display="inline-block"
                    style={{ marginBottom: 6 }}>{label}</Text> : null}

                <Input ref={ref} aria-invalid={hasError} onFocus={handleFocus} onBlur={handleBlur}{...props} />
            </div>
        )

    }
)
export default TextField;