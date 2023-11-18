const Search = () => {
  return (
    <div>
      <div className="m-6 bg-blue-500">Commute Connect</div>
      <div className="flex mb-6">
        <input type="text" placeholder="Location" className="shadow rounded w-3/4 mx-auto p-1" />
      </div>
      <div className="flex justify-around">
        <input type="text" placeholder="date" className="shadow rounded w-1/4 p-1" />
        <input type="text" placeholder="month" className="shadow rounded w-1/4 p-1" />
        <input type="text" placeholder="day" className="shadow rounded w-1/4 p-1" />
        <input type="text" placeholder="year" className="shadow rounded w-1/4 p-1" />
      </div>
    </div>
  );
};

export default Search;
