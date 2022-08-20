class DtoVillage {

    constructor({name, jutsu, value}) {
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