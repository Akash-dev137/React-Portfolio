import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./ContactForm.css"

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email").min(1, "email is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type LoginForm = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(schema) });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-3 bg-[red] w-full p-5 md:p-10 rounded-3xl justify-center">
      <h2>Contact Form</h2>
      <div>
      <input type="text" placeholder="Name" {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>

      <input type="email" placeholder="Email" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
      <textarea placeholder="Write Your Messages..." id="" {...register("message")}></textarea>
      {errors.message && <p>{errors.message.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
