import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-e24c2.firebaseio.com/"
})

export default instance;