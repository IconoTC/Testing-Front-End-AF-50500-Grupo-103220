import { use } from "react";
import { AppContext } from "../../context/contest";

interface Props {
    appTitle: string;
    children: React.ReactNode;
}

export const Header: React.FC<Props> = ({ appTitle, children }) => {

    const {theme} = use(AppContext);
    return (
        <header>
            <h1>{appTitle}</h1>
            {theme === 'light' ? <p>Light theme</p> : <p>Dark theme</p>}
            {children}
        </header>
    );
};
