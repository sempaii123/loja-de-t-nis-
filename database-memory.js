import { randomUUID } from "crypto"


export class DatabaseMemory{
    #loja_de_tenis = new Map()

list(search){
    return Array.from(this.#loja_de_tenis.entries()).map((livroArray) => {
        const id = livroArray[0]

        const data = livroArray[1]

        return{
            id,
            ...data,
        }

        
        })
        .filter(lola_de_tenis => {
            if (search){
            return loja_de_tenis.titulo.includes(search)
            }
            return true
    })
}

    create(livrloja_de_tenis){
        const loja_de_tenisId = randomUUID()
        this.#loja_de_tenis.set(loja_de_tenisId, loja_de_tenis)
    }
    
    update(id, loja_de_tenis){
        this.#loja_de_tenis.set(id, loja_de_tenis)
    }

    delete(id, loja_de_tenis){
        this.#loja_de_tenis.delete(id, loja_de_tenis)
    }
}