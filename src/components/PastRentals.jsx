import React from "react";
import { useUserContext } from "../context/UserContext";
import ReviewForm from "./ReviewForm";

const PastRentals = () => {
  const { rentals, reviews } = useUserContext();

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">📚 Your Past Rentals</h3>
      <div className="space-y-6">
        {rentals.map((book) => (
          <div key={book.id} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h4 className="text-lg font-bold text-indigo-700">{book.title}</h4>
            
            <ReviewForm bookId={book.id} bookTitle={book.title} />

            <ul className="mt-4 space-y-2 text-gray-600">
              {reviews.filter((r) => r.bookId === book.id).map((r, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-yellow-500">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                  <span className="italic">{r.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastRentals;
