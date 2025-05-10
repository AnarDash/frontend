// frontend/components/LoanTable.js
const LoanTable = ({ loans }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Таны зээлүүд</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Хэмжээ</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Зорилго</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Дуусах хугацаа</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Төлөв</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loans.map((loan) => (
              <tr key={loan._id}>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{loan.amount}₮</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{loan.reason}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{new Date(loan.dueDate).toLocaleDateString()}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm">
                  {loan.isPaid ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Төлөгдсөн
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                      Төлөгдөөгүй
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loans.length === 0 && <p className="mt-4 text-gray-500">Зээл байхгүй байна.</p>}
      </div>
    </div>
  );
};

export default LoanTable;