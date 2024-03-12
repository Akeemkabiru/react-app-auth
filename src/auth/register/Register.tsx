import { loginProps } from "../login/Login";

export default function Register({ onClick }: loginProps) {
  return (
    <main className="h-screen w-screen bg-slate-100 flex flex-col justify-center items-center">
      <form className="flex flex-row gap-2 bg-blue-300 p-4 items-center">
        <div className="flex flex-col gap-4">
          <label htmlFor="email">Email:</label>
          <label htmlFor="password">Password:</label>
          <label htmlFor="usernmae">Username:</label>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-sm p-1 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="rounded-sm p-1 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="rounded-sm p-1 focus:outline-none"
          />
        </div>
      </form>
      <div className="mt-4">
        <span className="mr-4">Do not have account before?</span>
        <button onClick={onClick}>Login</button>
      </div>
    </main>
  );
}