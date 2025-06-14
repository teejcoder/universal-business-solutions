'use client'
import React, { useState } from 'react'
import  { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
import { toast } from 'sonner'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar } from '../ui/calendar'
import { CalendarIcon, Loader } from 'lucide-react'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { TimeSelector } from './time-selector'
import { PopoverClose } from '@radix-ui/react-popover'
import axios from 'axios'

type Props = {}

const formSchema = z.object({
  name: z.string().min(2, 
    {message:"Enter your Full Name"}
  ).max(50),
  phone: z.string()
      .min(10, "Phone number must be 10 digits")
      .max(10, "Phone number is too long")
      .regex(/^[0-9+\-\s()]*$/, "Invalid phone number format"),
  email: z.string().email("Invalid email address"),
  datetime: z.date().refine((date) => {
    const now = new Date();
    return date > now;
  },
  {
    message: "Booking must be in the future"
  }
),
  message: z.string()
})

export default function BookingForm({}: Props) {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        phone: "",
        email:  "",
        datetime: new Date(),
        message: "",
      },
    })
 
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (loading) return; // Prevent multiple submissions

    // Additonal datetime validation:
    const now = new Date();
    if (values.datetime <= now){
      toast.error("Please select a time in the future.")
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('/api/bookings', values)
      toast.success("Booking has been made!")
      console.log(values, response)
      form.reset();
    }
    catch(err) {
      console.error('error in booking-form Mongo API connection', err)
      toast.error("There was an error making the booking. Please try again.")
    }
    finally {
      setLoading(false);
      form.reset();
    }
  }
  
  return (
    <div className="w-full max-w-md mx-auto px-4 my-6 overflow-hidden">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Jill Jillson" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number*</FormLabel>
                <FormControl>
                  <Input placeholder="0412345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input placeholder="hello@..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="datetime"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date and Time*</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP 'at' h:mm a")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent 
                    className="w-auto max-w-[95vw]" 
                    align="start" 
                    alignOffset={0} 
                    side="bottom" 
                    sideOffset={8} 
                    avoidCollisions={true}
                  >
                    <div className="max-h-[80vh] overflow-auto">
                      <Calendar
                        className='flex items-center justify-center'
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          if (date) {
                            const currentTime = field.value || new Date();
                            date.setHours(currentTime.getHours());
                            date.setMinutes(currentTime.getMinutes());
                            field.onChange(date)
                          }
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                      <div className="border-t border-border p-3 space-y-3">
                        <div className="font-medium text-sm mb-2">Select Time</div>
                        <TimeSelector date={field.value} onChange={field.onChange} />
                        <PopoverClose asChild>
                          <Button 
                            variant="default" 
                            size="lg"
                            type="button"
                            className='w-full'
                          >
                            Done
                          </Button>
                        </PopoverClose>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us what you're looking for"
                    className=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className='w-full'
            disabled={loading}
          >
            {loading ? (
              <>
                Processing ... <Loader className='ml-2 h-4 w-4 animate-spin' />
              </>
            ) : (
              "Book Now"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}