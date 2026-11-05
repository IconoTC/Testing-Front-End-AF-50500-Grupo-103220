import { Socials } from "../socials/socials";

export const Footer: React.FC = () => {
    return (
        <footer className="next-steps">
            <div id="social">
                <svg className="icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#social-icon"></use>
                </svg>
                <h2>Connect with us</h2>
                <p>Join the Vite community</p>
                <Socials />
            </div>
        </footer>
    );
};
