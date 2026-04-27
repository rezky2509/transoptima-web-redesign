import Link from 'next/link';
import TextType from './TextType';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-col-1">
                {/* <h1>Drive for<br /><span className="text-lime">The Giants.</span></h1> */}
                <h1 style={{ marginTop: '2rem', fontSize: '50px' }}>Sewa Kendaraan Terpercaya dan Fleksibel</h1>
                <p style={{ marginTop: '2rem', maxWidth: '400px', color: '#aaa' }}>
                    Bergabunglah dengan kami untuk meningkatkan penghasilan Anda sebagai mitra pengemudi</p>
                <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
                    <Link href="http://wa.me/6287769722437" target='_blank' className="btn btn-lime">Gabung Sekarang</Link>
                </div>
            </div>

            <div className="hero-col-3">
                <div className="brief-description-block">
                    <span className="label-title">Harga Kompetitif</span>
                    <div className="description-details">Harga Sewa Yang Sudah Termasuk Asuransi Komersial Khusus Pengemudi Online</div>
                </div>
                <div className="brief-description-block">
                    <span className="label-title">Official Partner GoJek</span>
                    <div className="description-details">Dukungan Operasional dan Skema yang Menarik</div>
                </div>
                <div className="brief-description-block">
                    <span className="label-title">Pilihan Fleksibel</span>
                    <div className="description-details">Kendaraan Berkualitas</div>
                </div>
            </div>
        </section >
    );
}
