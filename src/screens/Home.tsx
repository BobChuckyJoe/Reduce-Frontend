import GraphPreview from "components/GraphPreview";
import Navbar from "components/Navbar";
import TrashCounter from "components/TrashCounter";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <div>
      <Navbar />
      <GraphPreview />
      <TrashCounter amount={7} icon={<p className="text-white">water</p>} />
    </div>
  );
};

export default Home;
