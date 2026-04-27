import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="footer-col">
                <div className="footer-logo">Rezky<span className="text-lime">.</span></div>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>© Rezky Dwiafian</p>
            </div>
            <div className="footer-col">
                {/* <Link href="#" className="footer-link">Driver Support</Link>
                <Link href="#" className="footer-link">Insurance Policy</Link>
                <Link href="#" className="footer-link">Terms of Service</Link> */}
            </div>
        </footer>
    );
}
