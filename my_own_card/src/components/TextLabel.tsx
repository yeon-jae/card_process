import { InputHTMLAttributes } from "react";

interface TextLabel extends InputHTMLAttributes<HTMLInputElement>{
    label?:React.ReactNode
    hasError?: boolean
    helpMessage?:React.ReactNode

}