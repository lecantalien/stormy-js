import axios from "axios";

export default axios.create({
    baseURL: "https://api-adresse.data.gouv.fr",
    headers: {
        "Content-type": "application/json",
    }
});