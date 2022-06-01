import http from "../http-common";

// service meant to manage geocoding API calls to
// retrieve lat/lon form a given query
class GeocodingService{
    /**
     * serach a given on gouv.api
     * @see https://adresse.data.gouv.fr/api-doc/adresse
     *
     * @param query l'adresse complet the full query for the addrress (string)
     * @param type enum(housenumber|street|locality|municipality) (string)
     * @param autocomplete is autocomplete activated (boolean)
     *
     * @return Promise
     */
    searchLocation(query, type ="street", autocomplete = false){
        return http.get(`/search`,
            {
            params: {
                q: query,
                limit: 10,
                autocomplete: autocomplete,
                type: type,
            }

            });

    }
}

export default new GeocodingService();