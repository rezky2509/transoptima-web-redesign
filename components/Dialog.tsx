'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    car: {
        brand: string;
        modelName: string;
        yearOfMake: number;
        imageSrc: string;
        engineType: string;
    } | null;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, car }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'flex' });
            gsap.fromTo(
                contentRef.current,
                { scale: 0.9, opacity: 0, y: 20 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' }
            );
        } else {
            document.body.style.overflow = 'auto';
            gsap.to(contentRef.current, { scale: 0.9, opacity: 0, y: 20, duration: 0.2 });
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, display: 'none' });
        }
    }, [isOpen]);

    if (!car && !isOpen) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[1000] hidden items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <div
                ref={contentRef}
                className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-zinc-900"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>

                <div className="flex flex-col md:flex-row">
                    <div className="relative h-64 w-full bg-zinc-50 p-8 md:h-auto md:w-1/2 dark:bg-zinc-800/50">
                        {car && (
                            <Image
                                src={car.imageSrc}
                                alt={car.modelName}
                                fill
                                className="object-contain p-4"
                            />
                        )}
                    </div>

                    <div className="flex flex-col p-8 md:w-1/2 md:p-10">
                        <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[#6BE31F]">
                            {car?.engineType}
                        </span>
                        <h2 className="mb-1 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                            {car?.brand} {car?.modelName}
                        </h2>
                        <p className="mb-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                            Year of Make: {car?.yearOfMake}
                        </p>

                        <div className="mb-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6BE31F]/10 text-[#6BE31F]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                                </div>
                                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Asuransi Komersial Terjamin</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6BE31F]/10 text-[#6BE31F]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                </div>
                                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Respon Persetujuan Cepat</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6BE31F]/10 text-[#6BE31F]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                                </div>
                                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Perawatan Rutin Gratis</span>
                            </div>
                        </div>

                        <button className="mt-auto w-full rounded-full bg-[#6BE31F] py-4 text-sm font-bold uppercase tracking-widest text-[#022205] transition-all hover:scale-[1.02] hover:bg-[#5cd01b] active:scale-[0.98]">
                            Daftar Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
