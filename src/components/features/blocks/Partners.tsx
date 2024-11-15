import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
    {
        name: "Orange CI",
        logo: "https://www.annuaireci.com/Content/UserFiles/Ivory%20Coast/Upload/LOGO%20ORANGE.png",
    },
    {
        name: "MTN CI",
        logo: "https://www.mtn.ci/wp-content/uploads/2023/05/MTN-CI.jpg",
    },
    {
        name: "MOOV Africa CI",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO90yUKP5HlFWwUQp2iqCEDYMSns8aabJDwQ&s",
    },
    {
        name: "WAVE Mobile Money CI",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyG7P_ElGLq8IRKmG8cFSWBMkAeSZFxafnyg&s",
    },
    {
        name: "FARAFINA KANU",
        logo: "https://www.emploi.ci/sites/emploi.ci/files/styles/medium/public/logo/ffk_-_farafinah_kanu.jpg?itok=VOL3GQjH",
    },
    {
        name: "SILS TECHONOLOGY",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSuQ8Vo1gY-K53r60kbJoL6uPUENlV7d97ug&s",
    },
];

export default function Partners() {
    return (
        <section className="py-24 bg-secondary dark:bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                        Nos Partenaires
                    </h2>
                    <div className="w-60 h-1 bg-primary mb-4 rounded-full" />
                    <p className="text-lg text-muted-foreground">
                        Ils nous font confiance pour leurs projets digitaux.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary dark:from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary dark:from-black to-transparent z-10" />

                    <div className="overflow-hidden">
                        <div className="flex animate-scroll gap-6 pb-4">
                            {[...Array(3)].map((_, groupIndex) => (
                                <div key={groupIndex} className="flex gap-6 shrink-0">
                                    {partners.map((partner, index) => (
                                        <div
                                            key={`${groupIndex}-${index}`}
                                            className="relative p-6 bg-secondary dark:bg-black/50 shadow-sm border-2 border-border/50 rounded-md flex-shrink-0"
                                            style={{ width: '220px' }}
                                        >
                                            <div className="flex flex-col items-center justify-center h-[140px]">
                                                <div className="relative w-[120px] h-[80px]">
                                                    <Image
                                                        src={partner.logo}
                                                        alt={partner.name}
                                                        fill
                                                        className="object-contain"
                                                        unoptimized
                                                    />
                                                </div>
                                                <h3 className="text-sm font-medium text-foreground text-center mt-4">
                                                    {partner.name}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}