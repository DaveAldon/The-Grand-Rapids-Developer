import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import Skills from 'components/Skills';
import Industries from 'components/Industries';
import BioCard from 'components/BioCard';
import AppPortfolio from 'components/AppPortfolio';
import PeriodicTable from 'components/periodicTable/periodicTable';

export default function About() {
  return (
    <Container title="About – David Crawford">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <BioCard />
        <Skills />
        <Industries />
        <AppPortfolio />
      </div>
    </Container>
  );
}
