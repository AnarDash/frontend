const loans = new Array(6).fill({
    name: "Нарангарав",
    amount: "6000₮",
    phone: "89833434",
    email: "narangaraw@gmail.com",
    district: "ХУД",
    status: "Төлсөн",
  });
  
  export default function LoanTable() {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6">
        <table className="w-full text-sm">
          <thead className="text-left text-gray-600">
            <tr>
              <th>Зээлдэгч</th>
              <th>Дүн</th>
              <th>Утасны дугаар</th>
              <th>Имэйл</th>
              <th>Хаяг</th>
              <th>Байдал</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, idx) => (
              <tr key={idx} className="border-t">
                <td>{loan.name}</td>
                <td>{loan.amount}</td>
                <td>{loan.phone}</td>
                <td>{loan.email}</td>
                <td>{loan.district}</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-lg">
                    {loan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  