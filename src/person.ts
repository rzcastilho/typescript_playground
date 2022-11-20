interface Printable {
    print(): void;
}

interface Client {
    name: string
    age: number
}

class Person implements Printable {
    private name: string
    private document: string

    constructor(name: string, document: string) {
        this.name = name
        this.document = document
    }

    copyFromClient(client: Client) {
        this.name = client.name
    }

    setName(name: string) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
    getDocument(): string {
        return this.document
    }
    print(): void {
        console.log(`Name: ${this.name} - Document: ${this.document}`)
    }
}

const maisa = new Person("Maísa", "3386283678234")
console.log(maisa.print())
maisa.copyFromClient({"name": "Roberval", "age": 12})
console.log(maisa.print())
