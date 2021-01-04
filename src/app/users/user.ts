import { Profile } from "../profiles/profile";

export interface User {
    id: number,
    username: string,
    nom:string,
    prenom: string,
    email:string,
    avatar: Blob,
    profile:Profile
}
