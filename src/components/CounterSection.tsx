import TrashCounter from "components/TrashCounter";

interface CounterSectionProps {}

const CounterSection = (props: CounterSectionProps) => {
  return (
    <div>
      <TrashCounter amount={7} icon={<p className="text-white">water</p>} />
    </div>
  );
};

export default CounterSection;
