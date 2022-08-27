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

    //#region get_Variable
    getId() {
        return this.id;
    }

    getType() {
        return this.type;
    }

    getColor() {
        return this.color;
    }

    getPosition() {
        return this.position;
    }

    getRotation() {
        return this.rotation;
    }

    getWidth() {
        return this.width;
    }

    getDepth() {
        return this.depth;
    }

    getHeight() {
        return this.height;
    }

    getRadius() {
        return this.radius;
    }

    getPlugs() {
        return this.plugs;
    }

    getIsPlug() {
        return this.is_plug;
    }
    //#endregion get_Variable

    //#region set_Variable
    setType(type) {
        this.type = type;
    }

    setPosition(position) {
        this.position = position;
    }

    setColor(color) {
        this.color = color;
    }

    setRotation(rotation) {
        this.rotation = rotation;
    }

    setWidth(width) {
        this.width = width;
    }

    setDepth(depth) {
        this.depth = depth;
    }

    setHeight(height) {
        this.height = height;
    }

    setPlugs(plugs) {
        this.plugs = plugs;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    setIsPlug(is_plug) {
        this.is_plug = is_plug;
    }

    //#endregion set_Variable

    //#region Functions

    generatePlugs() {
        this.plugs = [
            //#region plug for Base
            new Plug({
                x: 0,
                y: 0,
                z: this.depth / 2
            }, 'south', [this.id], ['BASE']),

            new Plug({
                x: 0,
                y: 0,
                z: -(this.depth / 2)
            }, 'north', [this.id], ['BASE']),

            new Plug({
                x: this.width / 2,
                y: 0,
                z: 0
            }, 'east', [this.id], ['BASE']),

            new Plug({
                x: -(this.width / 2),
                y: 0,
                z: 0
            }, 'weast', [this.id], ['BASE']),
            //#endregion plug for Base

            //#region plug for Pillar
            new Plug({
                x: -(this.depth / 3),
                y: 0,
                z: (this.depth / 3)
            }, 'north-east', [this.id], ['PILLAR']),

            new Plug({
                x: -(this.depth / 3),
                y: 0,
                z: -(this.depth / 3)
            }, 'north-west', [this.id], ['PILLAR']),

            new Plug({
                x: this.depth / 3,
                y: 0,
                z: this.depth / 3
            }, 'south-east', [this.id], ['PILLAR']),

            new Plug({
                x: this.depth / 3,
                y: 0,
                z: -(this.depth / 3)
            }, 'south-west', [this.id], ['PILLAR'])
            //#endregion plug for Pillar
        ];
    }

    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }

    randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    //#endregion Functions
}