import Link from 'next/link';

export default function CTA() {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2>Ayo Bergabung Sekarang</h2>
                {/* <p>Applications take less than 5 minutes. Pick up your car as soon as tomorrow.</p> */}
                <Link href="http://wa.me/6287769722437" target='_blank' className="btn btn-lime" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem' }}>Registrasi Sekarang</Link>
            </div>
        </section>
    );
}
