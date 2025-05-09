type SearchTitleProps = {
  title?: string
}

export const SearchTitle = ({ title = 'Rick and Morty'}: SearchTitleProps) => {
  return <h1 className="text-2xl">Wyszukiwarka postaci {title}</h1>;
}

