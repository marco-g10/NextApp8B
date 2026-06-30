import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

//Solo es para indicar (tipar) el dispatch y el selector, este archivo es necesario solo por ts
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:  TypedUseSelectorHook<RootState> = useSelector