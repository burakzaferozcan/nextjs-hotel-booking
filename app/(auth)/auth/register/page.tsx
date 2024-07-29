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
import { pb } from "@/lib/pocketpase";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  passwordConfirm: z.string().min(2, {
    message: "Password confirm must be at least 2 characters.",
  }),
});

function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      let postData = {
        name: data.name,
        username: data.username,
        email: data.email,
        emailVisibility: true,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      };
      const record = await pb.collection("users").create(postData);
      toast({
        variant: "success",
        title: "Registration Successful",
        duration: 5000,
      });
      router.push("/auth/login");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration Error",
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="dark:bg-white text-black"
                  placeholder="example"
                  {...field}
                />
              </FormControl>
              <FormMessage className="validationError" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className="dark:bg-white text-black"
                  placeholder="example888"
                  {...field}
                />
              </FormControl>
              <FormMessage className="validationError" />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Confirm</FormLabel>
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
          {isLoading ? (
            <Loader2 size={24} className="animate-spin" />
          ) : (
            "Register"
          )}
        </Button>
      </form>
      <div className="mt-8">
        <FormDescription>
          Allready account?{" "}
          <Link href="/auth/login">
            <FormLabel className="text-red-500 font-bold">
              {" "}
              Login Now{" "}
            </FormLabel>
          </Link>
        </FormDescription>
      </div>
    </Form>
  );
}

export default RegisterPage;
