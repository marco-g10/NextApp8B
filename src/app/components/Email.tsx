'use client'
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { changeEmail } from "../redux/userSlice";

export function Email() {
    const email = useAppSelector((state) => state.user.email);  //obtenemos la informacion guardad en nuestro redux
    const dispatch = useAppDispatch();

    return(
        <input
        type="email"
        value={email}
        onChange={(event) => dispatch(changeEmail(event.target.value))}
         />
    )
}