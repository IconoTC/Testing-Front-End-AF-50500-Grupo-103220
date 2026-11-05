import reactLogo from '../../../assets/react.svg';
import viteLogo from '../../../assets/vite.svg';

interface Option {
    title: string;
    href: string;
    logo: string;
    alt: string;
    className: string;
}

export const Info: React.FC = () => {
    
    const options: Option[] = [
        {
            title: 'Explore Vite',
            href: 'https://vite.dev/',
            logo: viteLogo,
            alt: 'Vite logo',
            className: 'logo'
        },
        {
            title: 'Learn more',
            href: 'https://react.dev/',
            logo: reactLogo,
            alt: 'React logo',
            className: 'button-icon'
        }
    ]

    return (
        <div className="info">
            <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#documentation-icon"></use>
            </svg>
            <h2>Documentation</h2>
            <p>Your questions, answered</p>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <a href={option.href} target="_blank" rel="noopener noreferrer">
                            <img src={option.logo} alt={option.alt} className={option.className} />
                            {option.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
