const Login = () => {
    return (
      <div className="h-screen w-full bg-gray-100">
        <div className="max-sm:ml-6 flex max-md:flex-grow  pt-4 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3.414 13.778C2.5 14 2 15.192 2 15.192C2 15.192 5.398 15.626 6.949 17.313C8.5 19 9.071 22.263 9.071 22.263C9.071 22.263 10.47 22.698 10.485 20.849C10.5 19 9.778 17.313 9.778 17.313L13.091 14L16.701 21.704C16.701 21.704 18.08 22.23 18.04 20.365C18 18.5 16.85 10.242 16.85 10.242L19.678 7.413C19.869 7.22851 20.0214 7.00782 20.1262 6.76381C20.231 6.5198 20.2862 6.25736 20.2885 5.99181C20.2908 5.72625 20.2402 5.46289 20.1396 5.21709C20.0391 4.9713 19.8906 4.748 19.7028 4.56021C19.515 4.37243 19.2917 4.22392 19.0459 4.12336C18.8001 4.0228 18.5368 3.97219 18.2712 3.9745C18.0056 3.97681 17.7432 4.03198 17.4992 4.1368C17.2552 4.24162 17.0345 4.39398 16.85 4.585L13.947 7.488C13.947 7.488 6.148 6.09401 3.824 6.297C1.5 6.5 2.559 7.563 2.559 7.563L10.203 11.233L6.95 14.486C6.95 14.486 4.328 13.556 3.414 13.778Z" fill="#2F80ED"/>
          </svg>
          <p className="font-serif max-sm:ml-2 text-[#726c6c] md:ml-4"><a href="/">Travel Torque</a></p>
        </div>
        <div className="flex flex-col h-5/6 mt-8 w-96 px-8 self-center  rounded-xl mx-auto md:shadow-lg bg-white pt-8">
            <h1 className="text-lg font-medium text-center">Sign in</h1>
            <div className="flex flex-col justify-center  w-full">
                <p className="text-xs mb-2">Email address</p>
                <input placeholder="adamyasingh22@gmail.com" className="bg-gray-100 px-4 py-1 w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"></input>
                <p className="text-xs mt-5 mb-2">Password</p>
                <input placeholder="*******" className="bg-gray-100  px-4 py-1 w-full rounded-md"></input>
                <svg className="-mt-6 ml-72" width="17" height="17" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="eye 1">
                <g id="Group">
                <path id="Vector" d="M12.9833 10.5C12.9833 12.15 11.6499 13.4833 9.99993 13.4833C8.34993 13.4833 7.0166 12.15 7.0166 10.5C7.0166 8.85 8.34993 7.51666 9.99993 7.51666C11.6499 7.51666 12.9833 8.85 12.9833 10.5Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2" d="M9.99987 17.3916C12.9415 17.3916 15.6832 15.6583 17.5915 12.6583C18.3415 11.4833 18.3415 9.50831 17.5915 8.33331C15.6832 5.33331 12.9415 3.59998 9.99987 3.59998C7.0582 3.59998 4.31654 5.33331 2.4082 8.33331C1.6582 9.50831 1.6582 11.4833 2.4082 12.6583C4.31654 15.6583 7.0582 17.3916 9.99987 17.3916Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </g>
                </svg>
                <div className="flex justify-between mt-8 w-full">
                <div class="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                <label for="default-checkbox" class="ms-2 text-sm font-small text-black">Keep me signed in</label>
                </div>
                <div classname="">
                 <a  class="text-xs font-medium" href=''>Forget Password?</a>
                </div>
            </div>
            </div>

            <div className="pt-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-16 rounded w-full">Continue with email</button>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="border-t border-[#E0E0E0] grow" />
              <div className="px-2 py-2 self-start bg-white grow-0">
                <p className="">or use one of these options</p>
              </div>
              <div className="border-t border-[#E0E0E0] grow" />
            </div>
            <div>
               <button class="hover:bg-blue-100 text-black rounded-lg border  border-gray-900 py-2 flex justify-center items-center w-full">              
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                <p className="ml-2">Continue with Google</p>
               </button>
            </div>
            <div className="w-full mt-4">
               <button class="hover:bg-blue-900 w-full bg-[#475993] text-white rounded-lg border flex justify-center items-center py-2">              
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <g clip-path="url(#clip0_4_964)">
                <path d="M17.8048 0H3.19504C1.70664 0 0.5 1.20659 0.5 2.69504V17.3049C0.5 18.7933 1.70659 19.9999 3.19504 19.9999H10.4005L10.4128 12.853H8.55602C8.31472 12.853 8.11887 12.6579 8.11794 12.4166L8.10904 10.1129C8.10811 9.87025 8.30454 9.67308 8.54716 9.67308H10.4005V7.44709C10.4005 4.86384 11.9782 3.45724 14.2827 3.45724H16.1736C16.4155 3.45724 16.6117 3.65339 16.6117 3.89537V5.83789C16.6117 6.07978 16.4157 6.27587 16.1739 6.27602L15.0134 6.27655C13.7602 6.27655 13.5175 6.87207 13.5175 7.74602V9.67313H16.2713C16.5337 9.67313 16.7372 9.90225 16.7063 10.1628L16.4333 12.4666C16.4071 12.687 16.2202 12.8531 15.9982 12.8531H13.5298L13.5175 20H17.8049C19.2933 20 20.4999 18.7934 20.4999 17.305V2.69504C20.4998 1.20659 19.2932 0 17.8048 0Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_4_964">
                <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                </svg>
                <p className="ml-2">Continue with Facebook</p>
               </button>
            </div>
            <div className="flex justify-center item-center pt-4 text-center">
              <p>Don’t have an account?</p>
              <a class="text-[#2F80ED] pl-2" href="/register">Register</a>
            </div>
        </div>
      </div>
    )
}
export default Login; 
