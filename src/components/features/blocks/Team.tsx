import Image from "next/image";
import { Linkedin, MailIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "Arsène KOFFI",
        role: "Directeur Général",
        image: "/images/home/Team.webp",
        social: {
            linkedin: "#",
            email: "arsene.koffi@merute.com"
        }
    },
    {
        name: "Jean EBA",
        role: "Ingénieur DevOps",
        image: "/images/home/Team.webp",
        social: {
            linkedin: "#",
            email: "jean.eba@merute.com"
        }
    },
    {
        name: "Ouadan KOFFI",
        role: "Chef de Projet",
        image: "/images/home/Team.webp",
        social: {
            linkedin: "#",
            email: "ouadan.koffi@merute.com"
        }
    },
    {
        name: "Sophie LAURENT",
        role: "Marketing Digital",
        image: "/images/home/Team.webp",
        social: {
            linkedin: "#",
            email: "sophie.laurent@merute.com"
        }
    },
    {
        name: "André N'DIAMOI",
        role: "Développeur",
        image: "/images/home/Team.webp",
        social: {
            linkedin: "#",
            email: "andre.ndiamoi@merute.com"
        }
    },
    {
        name: "Yannick AMOIKON",
        role: "Développeur",
        image: "/images/home/Team.webp",
        social: {
            linkedin: "#",
            email: "yannick.amoikon@merute.com"
        }
    },
    {
        name: "Abraham DIOMANDE",
        role: "Développeur",
        image: "/images/home/Team.webp",
        social: {
            linkedin: "#",
            email: "tiehoule.diomande@merute.com"
        }
    },
    {
        name: "Julie MARTIN",
        role: "Product Owner",
        image: "/images/home/Team.webp",
        social: {
            linkedin: "#",
            email: "julie.martin@merute.com"
        }
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const memberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.2
        }
    }
};


export default function Team() {
    return (
        <section className="py-24 bg-secondary dark:bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                        Notre Équipe
                    </h2>
                    <div className="w-48 h-1 bg-primary mb-4 rounded-full" />
                    <p className="text-lg text-muted-foreground">
                        Une équipe passionnée combinant expertise technique et créativité.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={memberVariants}
                            whileHover="hover"
                            className="group relative p-6 bg-secondary dark:bg-black cursor-pointer shadow-sm border-2 border-border/50 rounded-md transition-all duration-300 hover:border-primary/50"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 flex-shrink-0">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="rounded-md object-cover border-2 border-border/50"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {member.role}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 mt-4">
                                <Link
                                    href={member.social.linkedin}
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin size={18} />
                                </Link>
                                <Link
                                    href={`mailto:${member.social.email}`}
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                >
                                    <MailIcon size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}