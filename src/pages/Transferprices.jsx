export default function Transferprices() {
    const tableData = [
        ["Ao nammao pier - Railay beach ( Krabi )", "2,599 THB", "2,999 THB", "3,199 THB"],
        ["Ao nang Beach ( Krabi )", "2,499 THB", "2,999 THB", "3,199 THB"],
        ["Donsak Pier ( Suratthani )", "4,999 THB", "5,199 THB	", "5,499 THB"],
        ["Had Yao ( Krabi )", "3,199 THB", "3,499 THB", "3,699 THB"],
        ["Ao nammao pier - Railay beach ( Krabi )", "2,599 THB", "2,999 THB", "3,199 THB"],
        ["Ao nang Beach ( Krabi )", "2,499 THB", "2,999 THB", "3,199 THB"],
        ["Donsak Pier ( Suratthani )", "4,999 THB", "5,199 THB	", "5,499 THB"],
        ["Had Yao ( Krabi )", "3,199 THB", "3,499 THB", "3,699 THB"],
    ];
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div className="mb-10 flex h-44 w-full flex-col items-end justify-end bg-[url('/img/bg7.avif')] bg-cover bg-center bg-no-repeat lg:h-60 box-shadow">
                <h1 className="mb-2 mr-10 rounded-md p-2 text-2xl font-bold uppercase text-slate-200 backdrop-blur-sm lg:text-4xl z-0">
                    {" "}
                    Transferprices
                </h1>
            </div>
            <table className="table-auto w-full max-w-4xl border-collapse border border-gray-300 text-center animate-fadeIn">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 font-bold text-sm lg:text-base">
                        <th>Destination</th>
                        <th>Standard Car</th>
                        <th>Luxury SUV</th>
                        <th>Family Van</th>
                    </tr>
                </thead>
                <tbody className="lg:text-base text-sm">
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
