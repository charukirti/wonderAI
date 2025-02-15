import { ReactNode } from "react"

interface FormLabelProps {
    children: ReactNode
}
 
export default function FormLabel({children}: FormLabelProps) {
    return (
        <label className="text-sm md:text-xl font-inter font-medium text-left">
            {children}
        </label>
    )
}

