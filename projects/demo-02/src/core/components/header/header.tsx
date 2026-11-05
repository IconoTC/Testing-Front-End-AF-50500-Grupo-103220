interface Props {
    appTitle: string;
    children: React.ReactNode;
}

export const Header: React.FC<Props> = ({ appTitle, children }) => {
    return (
        <header>
            <h1>{appTitle}</h1>
            {children}
        </header>
    );
};
