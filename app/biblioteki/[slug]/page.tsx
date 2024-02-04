import { Payment, columns } from "./table/columns";
import { DataTable } from "./table/DataTable";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "a8a8edd1e3",
      amount: 200,
      status: "processing",
      email: "wer@example.com",
    },
    {
      id: "f8ass8e1e3",
      amount: 300,
      status: "success",
      email: "c@example.com",
    },
    {
      id: "f8a8edd1e3",
      amount: 300,
      status: "pending",
      email: "werwerwe@example.com",
    },
    {
      id: "f8a238e1e3",
      amount: 300,
      status: "success",
      email: "b@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
