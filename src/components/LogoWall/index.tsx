import LogoWall from './logoWall';
import reactbits from "../../assets/logos/reactbits-icon.svg";

const logoImgs = [
    { imgUrl: '/logos/react.svg', altText: 'React' },
    { imgUrl: '/logos/typescript.svg', altText: 'TypeScript' },
    { imgUrl: '/logos/tailwindcss.svg', altText: 'Tailwind CSS' },
    { imgUrl: '/logos/nodejs.svg', altText: 'Node.js' },
    { imgUrl: '/logos/express.svg', altText: 'Express.js' },
    { imgUrl: '/logos/mongodb.svg', altText: 'MongoDB' },
];

export default function Logos() {
    return (
        <div 
            style={{ height: '600px', width: '90%', position: 'relative' }}>
            <LogoWall
                items={logoImgs}
                direction='vertical'
                pauseOnHover={false}
                size='clamp(8rem, 1rem + 1vmin, 25rem)'
                duration='60s'
                bgColor='#ffffff'
                bgAccentColor='#ffffff'
            />
        </div>
    )
}

