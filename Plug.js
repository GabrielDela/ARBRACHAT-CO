class Plug {
    constructor() {
        this.id = this.generateId();
        this.type = 'a-box';
        this.color = 'red';
        this.pointing = 'none';
        this.position = { x: 0, y: 0, z: 0 };
        this.rotation = { x: 0, y: 0, z: 0 };
        this.width = 0.40;
        this.depth = 0.40;
        this.height = 0.40;
        this.radius = 0;
        this.connections = [];
        this.authorized_types = [];
    }

    /**
     * Getter and setter for the plug's.
     */

    getId() {
        return this.id;
    }

    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }

    getPosition() {
        return this.position;
    }
    setPosition(position) {
        this.position = position;
    }

    getConnections() {
        return this.connections;
    }
    setConnections(connections) {
        this.connections = connections;
    }

    getAuthorizedTypes() {
        return this.authorized_types;
    }
    setAuthorizedTypes(authorized_types) {
        this.authorized_types = authorized_types;
    }

    getPointing() {
        return this.pointing;
    }
    setPointing(pointing) {
        this.pointing = pointing;
    }

    isVisible() {
        return (this.connections.length == 2);
    }

    /**
     * General functions.
     */

    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
}