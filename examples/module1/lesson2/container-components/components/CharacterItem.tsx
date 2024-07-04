import { Character } from '../types/Character';

type CharacterItemProps = {
    character: Character;
}

export const CharacterItem = ( { character }: CharacterItemProps) => (
    <li key={character.id} className="flex flex-col items-center">
        <h3>{character.name}</h3>
        <img src={character.image} alt={character.name} />
    </li>
);