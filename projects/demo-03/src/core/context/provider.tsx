import { AppContext, type AppContextType } from "./contest";

export const AppContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

    const contextValue: AppContextType = {
        theme: "light",
        language: "es",
        isAuthenticated: false,
        user: null,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};