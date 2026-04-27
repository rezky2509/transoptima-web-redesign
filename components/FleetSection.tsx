import Link from 'next/link';
import ListOfCars from './FleetOfCars/ListOfCars';
import Image from 'next/image';
import CarDetailDialog from './CarDetailDialog';
import { Button } from "@/components/ui/button";

export default function FleetSection() {
    return (
        <section className="fleet" id="fleet">
            <div className="container">
                <div className="section-header">
                    <h2>Armada Kenderaan</h2>
                    <p className="text-deep">Melaju Lebih Hijau: Inovasi Armada Berbasis <span className='text-lime'>Elektrik.</span></p>
                </div>

                <div className="fleet-grid">
                    {ListOfCars.map((car) => {
                        return (
                            <div key={car.id} className="fleet-card">
                                <span className="car-badge">{car.engineType}</span>
                                <h3 className="car-name">{car.brand} {car.modelName}</h3>
                                <div className="car-visual">
                                    <Image
                                        src={car.imageSrc}
                                        // fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        width={500}
                                        height={500}
                                        alt={car.modelName}
                                    />
                                </div>
                                {car.comingSoon ?
                                    <span className="car-badge">Coming Soon</span>
                                    :
                                    <CarDetailDialog car={car}>
                                        <Button className='text-lime' style={{ marginTop: '1.5rem', width: '100%' }}>Lihat detil sewa {car.modelName}</Button>
                                    </CarDetailDialog>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
