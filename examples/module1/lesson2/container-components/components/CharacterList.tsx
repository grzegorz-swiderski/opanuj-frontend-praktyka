import { CharacterItem } from './CharacterItem.tsx';
import { Character } from '../types/Character';

type CharacterListProps = {
  characters: Character[];
}

export const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => (
        <CharacterItem character={character} />
      ))}
    </ol>
  );
};
