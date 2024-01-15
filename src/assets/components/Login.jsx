function Login() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-green-500">
        <div className="bg-white w-[500px] h-[400px] flex flex-col justify-center items-center px-[70px] text-center">
          <div className="rounded-full w-[100px] h-[100px] bg-rose-700"></div>
          Username
          <input
            className="px-[10px] border-2 mb-6"
            placeholder="username"
          ></input>
          Password
          <input
            className="px-[10px] border-2"
            type="password"
            placeholder="password"
          ></input>
        </div>
      </div>
    </>
  );
}

export default Login;
