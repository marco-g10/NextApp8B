"use client"

import { Provider } from "react-redux"
import { store } from "./store"

interface Props {
    children: React.ReactNode
}

//Solo para indicar qque el Provider engloba a la aplicacion (es necesario este archivo por ser ts)
const ReduxProvider = ({children} : Props) => {  
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;