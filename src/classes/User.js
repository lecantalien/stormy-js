// class User to manager in localStorage
// more just a profile than a user 🐒
import {Location} from "@/classes/Location";
export class User {
    constructor(nickname,
                customStyle = undefined,
                locations = []
    ) {
        this.nickname = nickname;
        this.customStyle = customStyle;
        this.locations = locations;
        this.id = this.generateGuid();
        this.profilePicture = undefined;
    }

    // create object from json
    static fromObject(json) {
        let inputLocations = [];
        if (Array.isArray(json.locations)) {
            json.locations.forEach(loc => {
                inputLocations.push(Location.fromObject(loc));
            });
        }

        let user = new User(json.nickname);
        user.setCustomStyle(json.customStyle);
        user.setLocations(inputLocations);
        user.id = json.id;
        user.profilePicture = json.profilePicture;
        return user;
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
        let outputLocations = [];
        this.locations.forEach(loc => {
            outputLocations.push(loc.toObject_());
        });

        return {
            nickname: this.nickname,
            customStyle: this.customStyle,
            locations: outputLocations,
            id: this.id,
            profilePicture: this.profilePicture,
        };
    }

    getProfilePicture() {
        return this.profilePicture;
    }

    setProfilePicture(profilePicture) {
        this.profilePicture = profilePicture;
    }

    getLocations() {
        return this.locations;
    }

    hasLocation(location) {
        return this.locations.some(loc => loc.getId() === location.getId());
    }

    addLocation(location) {
        if (!this.hasLocation(location))
            this.locations.push(location);
    }

    removeLocation(location) {
        this.locations = this.locations.filter(loc => loc.getId() === location.getId());
    }

    setLocations(locations) {
        this.locations = locations;
    }

    getCustomStyle() {
        return this.customStyle;
    }

    setCustomStyle(customStyle) {
        this.customStyle = customStyle;
    }

    getNickname() {
        return this.nickname;
    }

    setNickname(nickname) {
        this.nickname = nickname;
    }
}
