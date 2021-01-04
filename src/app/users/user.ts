import { Profile } from "../profiles/profile";

export interface User {
    id: number,
    username: string,
    password: string,
    avatar: Blob,
    nom:string,
    prenom: string,
    email:string,
    profile:Profile,
    statut: boolean
}
