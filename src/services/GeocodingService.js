import http from "../http-common";

//  Service meant to manage geocoding API calls to
//  retrieve lat/lon from a given query
class GeocodingService {
    /**
     * Search a given query on gouv.api
     * @see https://adresse.data.gouv.fr/api-doc/adresse
     *
     * @param query the full query for the address (String)
     * @param type enum(housenumber|street|locality|municipality) (String)
     * @param autocomplete is autocomplete activated (Boolean)
     *
     * @return Promise
     */
    searchLocation(query, type = "street", autocomplete = false) {
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