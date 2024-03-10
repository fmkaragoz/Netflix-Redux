import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <Link to={"/"}>
        <img
          className=" max-w-[200px] "
          src="/Netflix-Logo.svg"
          alt="Netflix"
        />
      </Link>
    </header>
  );
};

export default Header;
