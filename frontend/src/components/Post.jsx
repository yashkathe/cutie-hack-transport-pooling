

const Post = () => {
  return (
    <div>
      <h2>Create a New Post</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            required
          />
        </div>

        <div>
          <label htmlFor="travelDate">Travel Date:</label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            required
          />
        </div>

        <div>
          <label htmlFor="source">Source:</label>
          <input
            type="text"
            id="source"
            name="source"
          />
        </div>

        <div>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            name="destination"
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Post;
