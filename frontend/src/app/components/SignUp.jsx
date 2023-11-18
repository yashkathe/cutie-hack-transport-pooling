import Link from 'next/link';

const SignUp = () => {
  return (
    <div>
      <div className="rounded border p-4">
        <div>
          <div className='text-red-500 font-bold text-xl'>CommuteConnect</div>
          <div className='text-green-500 font-bold text-xl'>Sign Up</div>
        </div>
        <div className="mt-4">
          <div className="flex items-center mb-2">
            <div className="inline mr-2">Username:</div>
            <input type="text" placeholder="username" className="shadow rounded w-3/4 p-2" />
          </div>
          <div className="flex items-center mb-2">
            <div className="inline mr-2">Password:</div>
            <input type="password" placeholder="password" className="shadow rounded w-3/4 p-2" />
          </div>
          <Link className='text-blue-500' href="/">
            Back to Main Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
