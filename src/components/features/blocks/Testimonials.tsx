import { motion } from "framer-motion";

const statsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const statItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

const stats = [
  {
    value: "1.7K",
    label: "Clients Satisfaits",
    description: "à travers le monde"
  },
  {
    value: "140+",
    label: "Projets Réalisés",
    description: "depuis notre création"
  },
  {
    value: "97%",
    label: "Taux de Satisfaction",
    description: "de nos clients"
  },
  {
    value: "24/7",
    label: "Support Client",
    description: "à votre écoute"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col w-full mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Nos Statistiques
          </h2>
          <div className="w-60 h-1 bg-primary mb-4 rounded-full"></div>
          <p className="lg:w-2/3 text-muted-foreground text-lg">
            Des résultats concrets qui témoignent de notre engagement envers l'excellence.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={statItemVariants}
              whileHover="hover"
              className="bg-card p-6 rounded-lg border border-border/50"
            >
              <motion.h3 
                className="text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}