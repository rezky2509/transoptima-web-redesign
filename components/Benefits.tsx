import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export default function Benefits() {
    return (
        <section className="benefits">
            <div className="benefit-col benefit-left">
                <h2>Layanan Sewa Kendaraan</h2>
                <p style={{ marginTop: '1rem', color: '#022205' }}>Sewa kendaraan andal untuk mitra penngemudi dengan harga kompetitif dan dukungan 24 jam.</p>
            </div>
            <div className="benefit-col benefit-right">
                <ul className="benefit-list">
                    {/* <li className="benefit-item"><span className="check-dot"></span>Here</li> */}
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="benefit-item">Dukungan Darurat 24 Jam</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-sm">
                                    Tim kami siap membantu Anda kapan saja dalam situasi darurat di jalan.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="benefit-item">Pilihan Kendaraan Beragam</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-sm">
                                    Berbagai merek kendaraan untuk memenuhi kebutuhan Anda sebagai mitra driver.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="benefit-item">Asuransi Komprehensif</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-sm">
                                    Lindungi diri Anda dengan asuransi lengkap selama masa sewa kendaraan.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </ul>
            </div>
        </section>
    );
}
