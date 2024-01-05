import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';

export function DatePicker() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'text-md w-full justify-start rounded text-left font-normal shadow-none',
            !date && 'text-gray-400'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4 ' />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar mode='single' selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
