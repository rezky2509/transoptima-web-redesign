"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { X, ArrowRight } from "lucide-react";
import { ReactEventHandler } from "react";
import { FleetsOfCars } from "./FleetOfCars/ListOfCars";

interface CarDetailProps {
    car: FleetsOfCars;
    children: React.ReactNode;
}

export default function CarDetailDialog({ car, children }: CarDetailProps) {
    return (

        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent
                onEscapeKeyDown={(e) => e.preventDefault()}
                style={{ display: 'flex', gap: 0 }}
                className="max-w-[680px] p-0 overflow-hidden border-none bg-white flex-col sm:flex-row"
            >
                {/* Left Strip */}
                <div
                    style={{ width: '48px', minWidth: '48px' }}
                    className="hidden sm:flex bg-lime border-r border-[#E5E5E5] flex-col items-center justify-end py-10 shrink-0"
                >
                </div>

                {/* Mobile Header (Lime strip on top) */}
                <DialogTitle className="sm:hidden w-full bg-lime border-b border-[#E5E5E5] px-5 py-4 flex items-center justify-between">
                </DialogTitle>


                {/* Main Content */}
                <div
                    style={{ padding: '40px' }}
                    className="flex-1 flex flex-col gap-8 min-w-0 overflow-y-auto"
                >
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-2">
                            <DialogTitle className="text-5xl sm:text-[20px] font-bold leading-tight tracking-tight text-black m-0">
                                {car.brand} {car.modelName}
                            </DialogTitle>
                            <h3 className="text-sm text-[#666666] font-normal m-0">
                                {car.yearOfMake}
                            </h3>
                        </div>
                        <DialogClose className="p-2 -m-2 bg-transparent border-none hover:bg-transparent shadow-none h-auto w-auto">
                            <X className="w-6 h-6 text-black stroke-[1.5]" />
                        </DialogClose>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px]">
                        <div className="bg-white p-5 flex flex-col gap-2">
                            <span className="text-[12px] text-[#666666] uppercase tracking-[0.5px]">Jarak tempuh</span>
                            <span className="text-lg font-normal text-black flex items-baseline gap-1">
                                {car.range}
                            </span>
                        </div>
                        <div className="bg-white p-5 flex flex-col gap-2">
                            <span className="text-[12px] text-[#666666] uppercase tracking-[0.5px]">Kapasitas</span>
                            <span className="text-lg font-normal text-black flex items-baseline gap-1">
                                {car.passengerCapacity} <span className="text-[12px] text-[#666666]">Orang</span>
                            </span>
                        </div>
                        <div className="bg-white p-5 flex flex-col gap-2 col-span-2">
                            <span className="text-[12px] text-center text-[#666666] uppercase tracking-[0.5px]">Tipe Mesin</span>
                            <span className="text-lg font-normal text-black flex items-baseline pt-2">
                                {car.engineType}
                            </span>
                        </div>
                    </div>

                    <DialogDescription className="text-sm leading-[1.5] text-[#666666] max-w-[480px] m-0">
                        {car.description}
                    </DialogDescription>

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-end pt-2 border-t border-[#E5E5E5] gap-5 sm:gap-0 mt-auto">
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-[#666666]">Hubungi kami untuk mendapatkan penawaran terbaik</span>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
