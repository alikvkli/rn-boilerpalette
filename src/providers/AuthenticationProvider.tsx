import {useEffect} from "react";
import {useAppSelector} from "../hooks";

export const AuthenticationProvider = () => {
    const {login} = useAppSelector(state => state.user)
    useEffect(()=> {
        if(login){

        }else{

        }
    },[login])
}