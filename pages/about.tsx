import Container from 'components/Container';
import Industries from 'components/Industries';
import { Testimonials } from 'components/ReactBits/testimonials';
import Contact from 'components/ReactBits/WorkWithMe';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Container title="About – David Crawford">
      <div className="gap-16 flex flex-col justify-center items-start max-w-4xl mx-auto px-8 w-full">
        <Contact />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl tracking-tight font-medium leading-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl"
        >
          Testimonials
        </motion.h2>
        <Testimonials />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl tracking-tight font-medium leading-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl"
        >
          Industries
        </motion.h2>
        <Industries />
        {/* <AppPortfolio /> */}
      </div>
    </Container>
  );
}
