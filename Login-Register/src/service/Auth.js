import { getUserData } from "./Storage";

export const isAuthenticated = () => {
    console.log("inner is authenticate function");
    return getUserData() === null ? false : true;
};
