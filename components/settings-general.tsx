"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User, Building2, Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});
export default function SettingsGeneral() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="relative">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            placeholder="shadcn"
                            className="pl-8"
                            {...field}
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Update</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="institution" className="text-sm font-medium">
            Institution
          </label>
          <div className="relative">
            <Building2 className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="institution"
              placeholder="Wilfrid Laurier University"
              className="pl-8"
            />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="elementary221b@gmail.com"
            className="pl-8"
          />
        </div>
      </div>
      <div>
        <Button
          variant="secondary"
          className="bg-purple-500 hover:bg-purple-600 text-white"
        >
          Change Password
        </Button>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Change Avatar</label>
        <p className="text-xs text-muted-foreground">
          Select an avatar that suits you best
        </p>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button variant="outline">Change Avatar</Button>
        </div>
      </div>
    </div>
  );
}
