import { Link } from 'react-router';
import type { MenuOption } from '../../types/menu.option';
import './menu.css';


interface Props {
    menuOptions: MenuOption[];
}

export const Menu: React.FC<Props> = ({ menuOptions }) => {
    return (
        <nav aria-label="Main menu">
            <ul>
                {menuOptions.map(option => (
                    <li key={option.path}>
                        <Link to={option.path}>{option.label}</Link>
                        {/* <a href={option.path}>{option.label}</a> */}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
