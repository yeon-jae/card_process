import { ComponentProps, createContext, useContext } from "react";
import { createPortal } from "react-dom";
import Alert from "@shared/Alert";

type AlertProps = ComponentProps<typeof Alert>
type AlertOptions = Omit<AlertProps, 'open'>

interface AlertContextValue {
    open: (options: AlertOptions) => void
}
const Context = createContext<AlertContextValue | undefined>(undefined)
const defaultValues: AlertProps = {
    open: false,
    title: null,
    description: null,
    onButtonClick: () => { },
}
function AlertContextProvider({ children }: { children: React.ReactNode }) {
    const useState = [];
    return (
        <Context.Provider>
            {children}
            <Alert />
        </Context.Provider>
    )
}