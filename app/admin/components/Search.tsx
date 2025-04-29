import { Input } from "@/components/ui/input";
import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { products } from "@/constant";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const Search = () => {
  return (
    <div className="relative">
      <div className="relative flex items-center w-80">
        <Input
          className="rounded-full pl-10 text-2xl h-12"
          placeholder="Search"
        />
        <SearchIcon strokeWidth={1.5} className="absolute left-2" />
      </div>
      <div className="absolute p-1 mt-3 border left-[-24] w-96 hidden">
        <ul>
            {
                products.map((item, index)=>{
                    return(
                        <li key={item.id} className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-gray-50">
                            <div className="">
                                <Image src={item.image} alt={item.name} width={50} height={50} />
                            </div>
                            <div className="">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <div className="flex items-center gap-2">
                                <Badge variant="outline">{item.id}</Badge>
                                <p>{item.price}</p>
                                <p>{item.stock}</p>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    </div>
  );
};

export default Search;
