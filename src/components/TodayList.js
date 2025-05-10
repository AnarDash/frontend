const unpaid = new Array(4).fill({
    name: "Ирш",
    amount: "89000₮",
    address: "Баянзүрх,2-р хороо",
    due: "04.11",
  });
  
  export default function TodayList() {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">Өнөөдөр</h2>
        {unpaid.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center mb-4 p-4 bg-red-50 rounded-lg">
            <div className="px-6 mr-8">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-600">{item.amount}</div>
              <div className="text-sm text-gray-600">{item.address}</div>
            </div>
            <span className="bg-red-200 text-red-600 px-4 py-1 rounded-full">
              Төлөөгүй
            </span>
          </div>
        ))}
      </div>
    );
  }
  