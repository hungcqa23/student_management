import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function DatePicker({
  date,
  setDate
}: {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'text-md w-full justify-start rounded text-left font-normal shadow-none',
            !date && 'text-gray-500'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4 ' />
          {date ? format(date, 'PPP', { locale: vi }) : <span className='text-sm'>Chọn ngày</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-auto p-0'>
        <Calendar mode='single' selected={date} onSelect={setDate} initialFocus locale={vi} />
      </PopoverContent>
    </Popover>
  );
}
