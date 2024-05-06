const Navbar = () => {
  return (
    <>
      <header className="bg-[#ffffff]">
        <div className="max-w-[1400px] mx-[auto] my-[0] px-[20px] py-[10px] flex items-center justify-between">
          <h1 className="text-xl">MEGA Events</h1>
          <nav className="flex items-center">
            <div>
              <span>emali@email.com</span>
              <button className="bg-[#fff] text-[red] border-[2px] border-[solid] border-[greenyellow] px-[10px] py-[6px] rounded-[4px] cursor-pointer text-[1em] ml-[10px]">Log out</button>
              <a className="text-[#333] no-underline ml-[10px]" href="">SignUp</a>
              <a className="text-[#333] no-underline ml-[10px]" href="">Login</a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
