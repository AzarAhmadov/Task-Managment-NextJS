"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Container from "@/common/Container/Container";
import { FormSchema } from "@/schemas/schemas";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useToggle from "@/hooks/useToggle";
import FormTop from "@/components/Form/FormTop";

const Register = () => {
  const [isShow, toggleShow] = useToggle();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Container>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-gradient-to-r rounded-[20px] flex flex-col items-center justify-center from-slate-100 to-slate-200 p-5 h-[calc(100vh_-_135px)]"
        >
          <div
            className="max-w-[450px] space-y-5 rounded-lg w-full py-10 px-8 bg-white shadow-md"
            space-y-6
          >
            <FormTop
              title="Register for an Account"
              description="Create an account. Already have an account?"
              linkText="Login here!"
              href="/login"
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <>
                      <Input
                        type={isShow ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />
                      <button
                        onClick={toggleShow}
                        type="button"
                        className="absolute top-[36px] right-4 z-20"
                      >
                        {isShow ? <FaRegEyeSlash /> : <FaRegEye />}
                      </button>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">
              Register Now
            </Button>
          </div>
        </form>
      </Form>
    </Container>
  );
};

export default Register;
