import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TimeSelector = ({
    date,
    onChange
  }: {
      date: Date,
      onChange: (date: Date) => void
  }) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const period = hour >= 12 ? "pm" : "am";
    const hour12 = hour % 12 || 12;

    const updateTime = (newHour12: number, newMinute: number, newPeriod: "am" | "pm") => {
      const newDate = new Date(date);
      const newHour24 = newPeriod === "am" ? 
        (newHour12 === 12 ? 0 : newHour12) : 
        (newHour12 === 12 ? 12 : newHour12 + 12);
      
      newDate.setHours(newHour24);
      newDate.setMinutes(newMinute);
      onChange(newDate);
    };

  return (
    <div className="flex gap-2 items-center">
      <Select
        value={String(hour12)}
        onValueChange={(value) => 
          updateTime(parseInt(value), minute, period)
        }
      >
        <SelectTrigger className="w-20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((h) => (
            <SelectItem key={h} value={String(h)}>
              {h}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <span>:</span>
      
      <Select
        value={String(minute)}
        onValueChange={(value) => 
          updateTime(hour12, parseInt(value), period)
        }
      >
        <SelectTrigger className="w-20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {["00",15,30,45].map((m) => (
            <SelectItem key={m} value={String(m)}>
              {m}
            </SelectItem>
          ))
          
          }
        </SelectContent>
      </Select>
      
      <Select
        value={period}
        onValueChange={(value: "am" | "pm") => 
          updateTime(hour12, minute, value)
        }
      >
        <SelectTrigger className="w-20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="am">AM</SelectItem>
          <SelectItem value="pm">PM</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
