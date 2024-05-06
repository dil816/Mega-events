const SideNavbar = () => {
  return (
    <>
      <div className="flex-[5%] bg-gray-200 p-[20px]">
        <div className="grid  [@media_screen_and(max-width:700px)]:flex-col">
          <a
            className="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
            href="#"
          >
            Events
          </a>
          <a
            className=" my-[10px] inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
            href="#"
          >
            Users
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
