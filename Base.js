class Base {
    // constructor with named parameters
    constructor() {
        this.id = this.generateId();
        this.type = 'a-box';
        this.color = 'wheat';
        this.position = { x: 0, y: 0, z: 0 };
        this.rotation = { x: 0, y: 0, z: 0 };
        this.width = 6;
        this.depth = 6;
        this.height = 0.25;
        this.radius = 0;
        this.plugs = [];
    }

    /**
     * Getter and setter for the plug's.
     */

    getId() {
        return this.id;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
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

    getRotation() {
        return this.rotation;
    }

    setRotation(rotation) {
        this.rotation = rotation;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getDepth() {
        return this.depth;
    }

    setDepth(depth) {
        this.depth = depth;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getPlugs() {
        return this.plugs;
    }

    setPlugs(plugs) {
        this.plugs = plugs;
    }

    getIsPlug() {
        return this.is_plug;
    }

    setIsPlug(is_plug) {
        this.is_plug = is_plug;
    }

    /**
     * Functions
     */

    generatePlugs() {
        let plugs = [];

        let plug = new Plug();
        plug.setPosition({
            x: this.position.x,
            y: this.position.y,
            z: this.position.z + this.depth / 2
        });
        plug.setPointing('south');
        plug.setConnections([this.id]);
        plug.setAuthorizedTypes(['BASE']);
        plugs.push(plug);

        plug = new Plug();
        plug.setPosition({
            x: this.position.x,
            y: this.position.y,
            z: this.position.z - this.depth / 2
        });
        plug.setPointing('north');
        plug.setConnections([this.id]);
        plug.setAuthorizedTypes(['BASE']);
        plugs.push(plug);

        plug = new Plug();
        plug.setPosition({
            x: this.position.x + this.depth / 2,
            y: this.position.y,
            z: this.position.z
        });
        plug.setPointing('east');
        plug.setConnections([this.id]);
        plug.setAuthorizedTypes(['BASE']);
        plugs.push(plug);

        plug = new Plug();
        plug.setPosition({
            x: this.position.x - this.depth / 2,
            y: this.position.y,
            z: this.position.z
        });
        plug.setPointing('weast');
        plug.setConnections([this.id]);
        plug.setAuthorizedTypes(['BASE']);
        plugs.push(plug);

        // plug = new Plug();
        // plug.setPosition({
        //     x: this.position.x - this.depth / 4,
        //     y: this.position.y,
        //     z: this.position.z + this.depth / 4
        // });
        // plug.setPointing('north-east');
        // plug.setConnections([this.id]);
        // plug.setAuthorizedTypes(['COLUMN']);
        // plugs.push(plug);

        // plug = new Plug();
        // plug.setPosition({
        //     x: this.position.x - this.depth / 4,
        //     y: this.position.y,
        //     z: this.position.z - this.depth / 4
        // });
        // plug.setPointing('south-west');
        // plug.setConnections([this.id]);
        // plug.setAuthorizedTypes(['COLUMN']);
        // plugs.push(plug);

        // plug = new Plug();
        // plug.setPosition({
        //     x: this.position.x + this.depth / 4,
        //     y: this.position.y,
        //     z: this.position.z + this.depth / 4
        // });
        // plug.setPointing('south-east');
        // plug.setConnections([this.id]);
        // plug.setAuthorizedTypes(['COLUMN']);
        // plugs.push(plug);

        // plug = new Plug();
        // plug.setPosition({
        //     x: this.position.x + this.depth / 4,
        //     y: this.position.y,
        //     z: this.position.z - this.depth / 4
        // });
        // plug.setPointing('north-west');
        // plug.setConnections([this.id]);
        // plug.setAuthorizedTypes(['COLUMN']);
        // plugs.push(plug);

        this.plugs = plugs;
    }

    /**
     * General functions.
     */

    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }

    randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}