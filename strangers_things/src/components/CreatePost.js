import React, { useEffect, useState } from "react";
import { FetchCreatePost } from "./FetchRequests";
import { useHistory } from "react-router";
// import EditPost from "./EditPost";

const CreatePost = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState("");
  const [authorization, setAuthorization] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (window.localStorage.token) {
      let delivery = document.getElementById("willYouDeliver").value;
      setWillDeliver(delivery);
      const data = await FetchCreatePost(title, description, price);
    }
    history.push("/posts");
  };

  return (
    <>
      <h2>List new item for sale</h2>
      <form className="createPostForm" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            required
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            required
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            required
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Will Deliver?
          <select id="willYouDeliver">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Create new listing" />
      </form>
    </>
  );
};

export default CreatePost;
