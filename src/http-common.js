import axios from "axios";

export default axios.create({
    baseURL: "https://api-adresse.data.gouv.fr",
    headers: {
        "Content-type": "application/json",
    }
});

// this.results = response?.data?.features;
// if(this.results !== null && this.results !== undefined && this.results.length > 0){
//      return;
// }
// throw new Error('rien a faire ici');