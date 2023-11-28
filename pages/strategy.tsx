import Container from 'components/Container';
import PeriodicTable from 'components/periodicTable/periodicTable';

export default function Strategy() {
  return (
    <Container title="My Strategy">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-center">
          <PeriodicTable />
        </div>
      </div>
    </Container>
  );
}
