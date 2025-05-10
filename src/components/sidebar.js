"use client";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white  flex flex-col">
      <div className="h-screen w-full shadow-2xl rounded-tr-[10vw] flex flex-col items-center justify-between">
        <img onClick={() => router.push("/homepage")} src="/image/LogoPurple.png" className="mr-28 mt-8"></img>
        <img
            
            src="/image/image.png"
            alt="Logo"
            className="h-[14%] w-auto cursor-pointer"
          />
        <div className="h-[10%] w-full flex flex-col items-center">
          <div className="text-lg font-bold text-black">Delguur</div>
          <div className="text-sm text-black">XV/1,2p xopoo</div>
          <div className="mt-1 text-xs font-mono text-white mt-5 bg-purple-600 py-1 px-4 rounded-xl ">3786797</div>
        </div>
      {/* Content Section */}
        <div className="w-full h-[55%] bg-gradient-to-t from-purple-800 to-purple-500 shadow-2xl rounded-tr-[10vw] flex flex-col ">
          <div className="h-[10%] w-full"></div>
          <div className="h-[40%] w-full ">
            <button className=" hover:bg-gray-200 w-[70%] h-[20%] rounded-r-full text-white hover:text-black text-start px-4">Хувийн мэдээлэл</button>
            <button className=" hover:bg-gray-200 w-[70%] h-[20%] rounded-r-full text-white hover:text-black text-start px-4">Түүх</button>
            <button className=" hover:bg-gray-200 w-[70%] h-[20%] rounded-r-full text-white hover:text-black text-start px-4">Холбоо барих</button>
            <button className=" hover:bg-gray-200 w-[70%] h-[20%] rounded-r-full text-white hover:text-black text-start px-4">Тусламж</button>
          </div>
          <div className="h-[50%] w-full">
          <button className=" hover:bg-gray-200 w-[70%] h-[20%] rounded-r-full text-white hover:text-black ">Хувийн мэдээлэл</button>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Sidebar;