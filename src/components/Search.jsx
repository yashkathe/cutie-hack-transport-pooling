import Link from 'next/link';
const Search = () => {
  return (
    <div className="h-full p-8 text-center bg-gray-800">
      <div className="m-6 text-red-500 font-bold text-xl">Commute Connect</div>
      <div className="flex mb-6">
        <input type="text" placeholder="Location" className="shadow rounded w-3/4 mx-auto p-1" />
      </div>
      <div className="flex justify-around mb-8">
        <input type="text" placeholder="date" className="shadow rounded w-1/4 p-1" />
        <input type="text" placeholder="month" className="shadow rounded w-1/4 p-1" />
        <input type="text" placeholder="day" className="shadow rounded w-1/4 p-1" />
        <input type="text" placeholder="year" className="shadow rounded w-1/4 p-1" />
      </div>
      <div className="flex justify-around shadow rounded">
        <div className="border px-12 bg-white-0 text-green-500">User</div>
        <div className="border px-12 bg-white-0  text-red-500">Time</div>
        <Link className='border px-12 bg-white-0  text-purple-500' href="/chatpage">
            Chat
          </Link>
      </div>
    </div>
  );
};

export default Search;
