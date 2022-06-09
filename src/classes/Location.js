export class Location {
    constructor(range, label, latitude,
                longitude, data = undefined) {
        this.data = data;
        this.range = range;
        this.label = label;
        this.latitude = latitude;
        this.longitude = longitude;
        this.id = this.generateGuid();
    }

    // create object from json
    static fromObject(json) {
        let location = new Location(json.range, json.label,
            json.latitude, json.longitude, json.data);
        location.id = json.id;
        return location;
    }

    getId() {
        return this.id;
    }

    // transform object User into a

    generateGuid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    // js vanilla object to use in localStorage
    toObject_() {
        return {
            id: this.id,
            range: this.range,
            label: this.label,
            latitude: this.latitude,
            longitude: this.longitude,
            data: this.data,
        };
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getRange() {
        return this.range;
    }

    setRange(range) {
        this.range = range;
    }

    getLabel() {
        return this.label;
    }

    setLabel(label) {
        this.label = label;
    }

    getLatitude() {
        return this.latitude;
    }

    setLatitude(latitude) {
        this.latitude = latitude;
    }

    getLongitude() {
        return this.longitude;
    }

    setLongitude(longitude) {
        this.longitude = longitude;
    }
}