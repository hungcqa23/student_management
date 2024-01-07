import { Payment, columns } from './columns';
import { DataTable } from './data-table';

const data: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com'
  },
  {
    id: '728ed52c',
    amount: 100,
    status: 'pending',
    email: 'm@example.com'
  },
  {
    id: '728ed52e',
    amount: 100,
    status: 'pending',
    email: 'm@example.com'
  }
];

export default function DemoPage() {
  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
