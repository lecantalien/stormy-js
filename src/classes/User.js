// class User to manager in localStorage
// more just a profile than a user 🐒
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
        let user = new User(json.nickname);
        user.setCustomStyle(json.customStyle);
        user.setLocations(json.locations);
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
        return {
            nickname: this.nickname,
            customStyle: this.customStyle,
            locations: this.locations,
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

    addLocation(location) {
        this.locations.push(location);
    }

    removeLocation(location) {
        console.log('location to remove: ', location);
        // todo review this function
        //this.locations = this.locations.filter(loc => loc.getId() !== location.getId());
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
