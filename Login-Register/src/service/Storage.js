export const storeUserData = (data) => {
  localStorage.setItem("idToken", data);
};


export const getUserData = () => {
  console.log("innet get user data from storage.js file");
  localStorage.getItem("idToken")
}