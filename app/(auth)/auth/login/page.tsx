"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { pb } from "@/lib/pocketpase";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "burak@gmail.com",
      password: "burak.88bb",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      let postData = {
        email: data.email,
        password: data.password,
      };
      const record = await pb
        .collection("users")
        .authWithPassword(data.email, data.password);
      toast({
        variant: "success",
        title: "Login Successfully",
        duration: 2000,
      });
      router.push("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Error",
        duration: 5000,
      });
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-4/5 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="dark:bg-white text-black"
                  placeholder="example@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="validationError" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="dark:bg-white text-black"
                  placeholder="**********"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage className="validationError" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-20">
          {isLoading ? <Loader2 size={24} className="animate-spin" /> : "Login"}
        </Button>
      </form>
      <div className="mt-8">
        <FormDescription>
          Don't have an account?{" "}
          <Link href="/auth/register">
            <FormLabel className="text-red-500 font-bold">
              {" "}
              Register now{" "}
            </FormLabel>
          </Link>
        </FormDescription>
      </div>
    </Form>
  );
}

export default LoginPage;
