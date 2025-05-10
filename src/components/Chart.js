export default function Chart() {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">Ажилгaлт</h2>
        <div className="h-64 bg-purple-600 rounded-lg mb-4"></div>
        <div className="flex justify-between text-xs text-gray-600">
          <div>
            <strong>6</strong> Зээл төлөгдөөгүй байна
          </div>
          <div>
            <strong>1</strong> Зээлийн хугацаа хэтрэх гэж байна
          </div>
          <div>
            <strong>1</strong> Зээлийн хугацаа хэтэрсэн
          </div>
        </div>
      </div>
    );
  }
  