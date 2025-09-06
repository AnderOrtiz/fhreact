import { heroes, type Hero, Owner } from "../data/heroes.data";

const getHeroById = (id: number): Hero | never => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    if(!hero){
            throw new Error(`No existe un héroe con el id ${id}`)
    }

    return hero;
}
console.log(getHeroById(1));


export const getHeroesByOwner = (owner:Owner):Hero[] => {
    const hero = heroes.filter((hero) => hero.owner === owner)
    return hero
}

// export const getHeroesByOwnerSimplified = (owner:Owner):Hero[] => 
//     heroes.filter((hero) => hero.owner === owner);