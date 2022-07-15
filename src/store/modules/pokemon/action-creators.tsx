import { Dispatch } from "react";
import { Action } from "./action";
import getPokemonApi from "../../../services/api";

export const getPokemon = (valor: string | number) => {
    return (dispath: Dispatch<Action>) => {

        getPokemonApi(valor).then((response: any) => {

            dispath({
                type: 'getPokemon',
                payload: response
            })
        })


    }
}
