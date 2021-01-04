import { Profile } from "../profiles/profile";

export interface User {
    id: number,
    username: string,
    avatar: Blob,
    nom:string,
    prenom: string,
    email:string,
    telephone: string,
    profile:Profile,
}
