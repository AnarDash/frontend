// components/Sidebar.tsx
"use client";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black border-r border-purple-600 flex flex-col">
      {/* Header Section */}
      <div className="p-4 border-b border-purple-600">
        <div className="text-lg font-bold text-purple-400">Delguur</div>
        <div className="text-sm text-purple-300">XV/1,2p xopoo</div>
        <div className="mt-1 text-xs font-mono text-purple-200">3786797</div>
      </div>

      {/* Content Section */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Main Section */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-purple-400 uppercase mb-2">
          Нүүр
          </h2>
          <div className="space-y-1">
            <div className="text-purple-200 hover:bg-purple-900 px-2 py-1 rounded cursor-pointer transition-colors">
            Хувийн мэдээлэл
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-t border-purple-600" />

        {/* Settings Section */}
        <div className="mb-2">
          <h2 className="text-sm font-medium text-purple-400 uppercase mb-2">
            Тохиргоо
          </h2>
          <div className="space-y-1">
          
            </div>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;