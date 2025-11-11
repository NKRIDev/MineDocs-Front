import { Search } from "lucide-react";
import { Input } from "@heroui/input";
import { useState } from "react";

type Props = {
  onSearch: (string: any) => void;
  placeholder: string;
};

const SearchBar = ({ onSearch, placeholder }: Props) => {
  const [search, setSearch] = useState<string>("");

  /*
  Update and event search
   */
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;

    setSearch(newSearch);
    onSearch(newSearch);
  };

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            className="pl-10"
            placeholder={placeholder}
            type="text"
            value={search}
            onChange={handleChangeSearch}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
