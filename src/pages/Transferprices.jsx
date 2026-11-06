import { useSearchParams } from "react-router-dom";
import PageLayout from "#components/layout/PageLayout";
import { routesAndPrices } from "#data/referenceTransferPrices";
import { referenceVehicles } from "#data/referenceVehicles";

const { currency, tables } = routesAndPrices;
const tablesByOrigin = new Map(tables.map((table) => [table.origin, table]));
const amounts = new Intl.NumberFormat("en", { style: "currency", currency, currencyDisplay: "code", maximumFractionDigits: 0 });

export default function Transferprices() {
    const [params, setParams] = useSearchParams();
    const table = tablesByOrigin.get(params.get("from")) ?? tables[0];

    return (
        <PageLayout title="Check Price">
            <p className="rounded bg-amber-50 p-4 text-sm">
                Reference rates from Krabi Best Transfer for comparison. Lanta Private Transfer rates and availability are pending confirmation.
                Entries with an unconfirmed amount need a quote.
            </p>
            <label className="grid max-w-lg gap-1 font-semibold">
                Pickup location
                <select
                    value={table.origin}
                    onChange={(event) => setParams({ from: event.target.value })}
                    className="w-full min-w-0 rounded border border-gray-300 bg-white p-2 font-normal"
                >
                    {tables.map(({ origin }) => <option key={origin} value={origin}>{origin}</option>)}
                </select>
            </label>
            <table className="w-full table-fixed border-collapse text-xs wrap-anywhere sm:text-sm">
                <caption className="pb-3 text-left text-lg font-semibold">{table.origin}</caption>
                <thead className="bg-slate-800 text-white">
                    <tr>
                        <th scope="col" className="w-[38%] p-2 text-left sm:p-3">Destination</th>
                        {referenceVehicles.map(({ type, passengers }) => (
                            <th key={type} scope="col" className="p-2 sm:p-3">{type}<br />{passengers.split(" in rate table")[0]} pax</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {table.routes.map(({ destination, prices }, index) => (
                        <tr key={index} className="border-b border-gray-200 even:bg-slate-100">
                            <th scope="row" className="p-2 text-left font-medium sm:p-3">{destination}</th>
                            {prices.map((price, position) => (
                                <td key={referenceVehicles[position].type} className="p-2 text-center sm:p-3">
                                    {price > 0 ? amounts.format(price) : "Unconfirmed"}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </PageLayout>
    );
}
