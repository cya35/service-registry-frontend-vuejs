class Service {

    name;
    location;
    description;
    status;
    constructor(name, location, description, status) {
        this.name = name;
        this.location = location;
        this.description = description;
        this.status = status;

    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name
    }

    getLocation() {
        return this.location;
    }
    setLocation(location) {
        this.location = location
    }

    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }

    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }



}