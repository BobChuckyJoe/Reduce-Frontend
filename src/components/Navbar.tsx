const Bar = () => <div className="w-10 h-2 bg-white" />;

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <div className="z-10 sticky top-0 bg-blue w-full h-20 flex flex-row justify-between items-center px-5">
      <div className="flex flex-col justify-between space-y-2">
        <Bar /> <Bar /> <Bar />
      </div>
      <h2 className="text-white font-extrabold text-3xl">My Stats</h2>
    </div>
  );
};

export default Navbar;
