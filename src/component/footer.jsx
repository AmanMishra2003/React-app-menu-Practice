export default function Footer({isOpen}){
    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()}. We're Currently {isOpen?'Open':'Close'}
        </footer>
    )
}