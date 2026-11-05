
interface Social {
    name: string;
    url: string;
    icon: string;
}

export const Socials: React.FC = () => {
    const socials: Social[] = [
        {
            name: 'GitHub',
            url: 'https://github.com/vitejs/vite',
            icon: 'github-icon',
        },
        {
            name: 'Discord',
            url: 'https://chat.vite.dev/',
            icon: 'discord-icon',
        },
        {
            name: 'X.com',
            url: 'https://x.com/vite_js',
            icon: 'x-icon',
        },
        {
            name: 'Bluesky',
            url: 'https://bsky.app/profile/vite.dev',
            icon: 'bluesky-icon',
        },
    ];

    return (
            <ul>
                {socials.map((social) => (
                    <li key={social.name}>
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="button-icon"
                                role="presentation"
                                aria-hidden="true"
                            >
                                <use href={`/icons.svg#${social.icon}`}></use>
                            </svg>
                            {social.name}
                        </a>
                    </li>
                ))}
            </ul>
    );
};
