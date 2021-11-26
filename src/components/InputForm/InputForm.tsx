import React, { useState } from "react";
import "./inputForm.css";

const InputForm = (props: any) => {
    const [focused, setFocused] = useState(false);
    const { errorMessage, onChange, id, ...inputProps } = props;

    console.log(inputProps);

    const handleFocus = (e: any) => {
        setFocused(true);
    };

    return (
        <div>
            <input
                className="inputForm"
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span className="errorInput">{errorMessage}</span>
        </div>
    );
};

export default InputForm;
