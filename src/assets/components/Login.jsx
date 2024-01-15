import img1 from "../components/logo.png"
function Login() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-green-500">
        <div className="bg-white w-[500px] h-[400px] flex flex-col justify-center items-center px-[70px] text-center">
          < img className="rounded-full w-[100px] h-[100px] " src={img1}></img>
          <div className="text-align:left">Username</div>
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
          <br></br>
          <div>
            <button className="bg-gray-500 px-2 rounded-[4px]">LOGIN</button>
          </div><br></br>
          <div>
            <button className="bg-gray-500 px-2 rounded-[4px]">SIGN UP</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Login;
