// frontend/components/Chart.js
export default function Chart({ total, paid, unpaid }) {
  const maxLoans = Math.max(total, paid, unpaid, 5); // Adjust 5 based on your expected max
  const getHeight = (count) => (count / maxLoans) * 100 + '%';

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Ажиглалт</h2>
      <div className="h-36 bg-gray-100 rounded-md mb-4 relative overflow-hidden">
        {/* Background lines */}
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gray-200"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gray-200"></div>

        {/* Data bars */}
        <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-around p-4">
          <div className={`bg-purple-400 h-[${getHeight(total)}] w-12 rounded-md`}></div>
          <div className={`bg-green-400 h-[${getHeight(paid)}] w-12 rounded-md`}></div>
          <div className={`bg-red-400 h-[${getHeight(unpaid)}] w-12 rounded-md`}></div>
        </div>

        {/* X-axis labels */}
        <div className="w-full absolute bottom-0 left-0 flex justify-around  text-sm text-gray-500">
          <span>Нийт</span>
          <span>Төлөгдсөн</span>
          <span>Төлөгдөөгүй</span>
        </div>
      </div>
      <div className="flex justify-around text-center text-sm text-gray-600">
        <div>
          <strong className="text-purple-600 text-xl">{total}</strong>
          <p className="mt-1">Нийт зээл</p>
        </div>
        <div>
          <strong className="text-green-600 text-xl">{paid}</strong>
          <p className="mt-1">Төлөгдсөн</p>
        </div>
        <div>
          <strong className="text-red-600 text-xl">{unpaid}</strong>
          <p className="mt-1">Төлөгдөөгүй</p>
        </div>
      </div>
    </div>
  );
}