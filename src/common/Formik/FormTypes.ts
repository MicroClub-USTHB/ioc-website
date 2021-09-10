import React from "react";

export interface ErrorProps {
    errorMessage: string;
    className?: string;
}

export interface FormControlProps {
    control: "email" | "password" | "text";
    name: string;
    label?: string;
    placeholder?: string;
    label_className?: string;
    field_className?: string;
    error_className?: string;
    ErrorComponent?: React.FC<ErrorProps>;
}

export interface InputProps {
    name: string;
    label?: string;
    placeholder?: string;
    label_className?: string;
    field_className?: string;
    error_className?: string;
    ErrorComponent?: React.FC<ErrorProps>;
}
