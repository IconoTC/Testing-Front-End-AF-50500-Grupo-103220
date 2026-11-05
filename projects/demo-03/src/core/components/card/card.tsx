import './card.css'

interface Props {
    children: React.ReactNode  
    title?: string
    className?: string[]
}

export const Card: React.FC<Props> = ({ children, title, className }) => {
  return (
    <div 
        className={`card ${className?.join(' ') || ''}`} 
        role="region" 
        aria-label={title ? `${title} card` : "card"}>
        
            {title && <h2>{title}</h2>}
            {children}
    </div>
  )
}

