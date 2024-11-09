import Image from "next/image";
import { Linkedin, MailIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const teamMembers = [
    {
      name: "Thomas Martin",
      role: "Développeur Frontend",
      image: "/images/home/Team.webp",
      social: {
        linkedin: "#",
        email: "thomas@merute.com"
      }
    },
    {
      name: "Marie Dubois",
      role: "UX Designer",
      image: "/images/home/Team.webp",
      social: {
        linkedin: "#",
        email: "marie@merute.com"
      }
    },
    {
      name: "Lucas Bernard",
      role: "Chef de Projet",
      image: "/images/home/Team.webp",
      social: {
        linkedin: "#",
        email: "lucas@merute.com"
      }
    },
    {
      name: "Sophie Laurent",
      role: "Marketing Digital",
      image: "/images/home/Team.webp",
      social: {
        linkedin: "#",
        email: "sophie@merute.com"
      }
    },
    {
      name: "Alexandre Dubois",
      role: "DevOps Engineer",
      image: "/images/home/Team.webp",
      social: {
        linkedin: "#",
        email: "alexandre@merute.com"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Data Analyst",
      image: "/images/home/Team.webp",
      social: {
        linkedin: "#",
        email: "emma@merute.com"
      }
    },
    {
      name: "Nicolas Chen",
      role: "Backend Developer",
      image: "/images/home/Team.webp",
      social: {
        linkedin: "#",
        email: "nicolas@merute.com"
      }
    },
    {
      name: "Julie Martin",
      role: "Product Owner",
      image: "/images/home/Team.webp",
      social: {
        linkedin: "#",
        email: "julie@merute.com"
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
    y: -5,
    transition: {
      duration: 0.2
    }
  }
};

export default function Team() {
	return  <section className="py-12">
    <div className="container mx-auto">
    <motion.div 
      className="flex flex-col w-full mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-foreground mb-2">
        Notre Équipe
      </h2>
      <div className="w-48 h-1 bg-primary mb-4 rounded-full"></div>
      <p className="lg:w-2/3 text-muted-foreground text-lg">
        Une équipe passionnée qui combine expertise technique et créativité 
        pour donner vie à vos projets digitaux.
      </p>
    </motion.div>

    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
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
          className="group bg-card rounded-lg p-5 border border-border/50"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full transition-all duration-300" />
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-md object-cover border  duration-300"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                {member.role}
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-3">
            <Link 
              href={member.social.linkedin}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} />
            </Link>
            <Link 
              href={`mailto:${member.social.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <MailIcon size={22} />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
    </div>
  </section>
}
