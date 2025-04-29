import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { notification } from "@/constant";
import {
  AlertCircle,
  Bell,
  Box,
  ChevronDown,
  CreditCard,
  PackageCheck,
  UserPlus,
} from "lucide-react";
import Search from "./Search";

const Navbar = () => {

  const iconMap: Record<string, any> = {
    Box,
    PackageCheck,
    UserPlus,
    AlertCircle,
    CreditCard,
  };

  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <div className="">
        <h2 className="text-2xl font-semibold">Good Evening, Mayur!</h2>
        <p className="font-semibold text-gray-500">
          Here’s what’s happening with your store today
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="">
          <Search />
        </div>
        <div className="m-0">
          <Popover>
            <PopoverTrigger className="bg-gray-500 p-2 rounded-full">
              <Bell size={20} className="" />
            </PopoverTrigger>
            <PopoverContent className="w-[450px] mt-3 mr-3 overflow-hidden ">
              <div className="flex items-center justify-between p-2">
                <h3 className="text-lg font-semibold">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notification.map((item, index) => {
                  const Icon = iconMap[item.icon] || Box; // fallback to Box if icon not found

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-3 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <div className="icon rounded-full p-2 bg-gray-200">
                        <Icon size={20} />
                      </div>

                      <div className="flex-1 text-start">
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                        <p className="text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>

                      <div className="text-end min-w-fit">
                        <p className="text-xs text-gray-400">
                          {item.timestamp}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-center gap-2 p-2 rounded-4xl">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-start">
                <h3 className="text-sm font-semibold">Mayur Kamble</h3>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <div className="">
                <ChevronDown size={20} strokeWidth={1.5} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-3">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
