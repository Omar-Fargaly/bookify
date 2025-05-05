import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

const ReviewForm = ({ bookId, bookTitle }) => {
  const { setReviews } = useUserContext();
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating < 1 || rating > 5) {
      alert("Please select a rating between 1 and 5 stars.");
      return;
    }
    setReviews(prev => [...prev, { bookId, bookTitle, rating, text }]);
    setRating(0);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 md:flex-row md:items-center">
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border border-gray-300 rounded-md p-2 text-sm w-24"
      >
        <option value="0" disabled>Select stars</option>
        {[1, 2, 3, 4, 5].map((s) => (
          <option key={s} value={s}>{`${s} Star${s > 1 ? "s" : ""}`}</option>
        ))}
      </select>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your review..."
        className="flex-1 border border-gray-300 rounded-md p-2 text-sm"
      />

      <button
        type="submit"
        className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
