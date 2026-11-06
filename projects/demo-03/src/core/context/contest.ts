import { createContext } from "react";
import type { User } from "../../features/users/types/user";

export interface AppContextType  {
    theme: string;
    language: string;
    isAuthenticated: boolean;
    user: User | null;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
