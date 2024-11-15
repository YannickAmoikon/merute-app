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

const stats = [
  {
    value: "37+",
    label: "Clients Satisfaits",
    description: "à travers le monde"
  },
  {
    value: "15+",
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

export default function Statistics() {
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
              Nos Statistiques
            </h2>
            <div className="w-60 h-1 bg-primary mb-4 rounded-full" />
            <p className="text-lg text-muted-foreground">
              Des résultats concrets qui témoignent de notre engagement envers l'excellence.
            </p>
          </motion.div>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                    className="group relative p-6 bg-secondary dark:bg-black cursor-pointer shadow-sm border-2 border-border/50 rounded-md transition-all duration-300 hover:border-primary/50"
                >
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </h3>
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