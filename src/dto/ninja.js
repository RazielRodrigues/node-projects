class DtoNinja {

    constructor({name, jutsu, value}) {

        if (!name){
            throw new Error('name is required');
        }

        if (!jutsu){
            throw new Error('jutsu is required');
        }

        if (!value){
            throw new Error('value is required');
        }

        this.name = name;
        this.jutsu = jutsu
        this.value = value
    }

    getName() {
        return this.name
        }

    getJutsu() {
        return this.jutsu
        }

    getValue() {
        return this.value
    }

}

module.exports = DtoNinja;