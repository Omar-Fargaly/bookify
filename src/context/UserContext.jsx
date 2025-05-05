import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser] = useState({
        username: "jane_reader23",
        email: "jane.reader23@example.com",
        tier: "Platinum",
        id: 101,
        avatar: "https://i.pravatar.cc/150?img=47", // optional: for UI
        joined: "2022-03-15",
      });
      
      const [rentals] = useState([
        {
          id: 1,
          title: "Atomic Habits",
          author: "James Clear",
          rentedOn: "2024-04-12",
          canReview: true,
        },
        {
          id: 2,
          title: "Clean Code",
          author: "Robert C. Martin",
          rentedOn: "2024-03-08",
          canReview: true,
        },
        {
          id: 3,
          title: "The Pragmatic Programmer",
          author: "Andrew Hunt & David Thomas",
          rentedOn: "2024-02-21",
          canReview: false, // maybe expired or already reviewed
        },
        {
          id: 4,
          title: "Deep Work",
          author: "Cal Newport",
          rentedOn: "2024-01-17",
          canReview: true,
        },
        {
          id: 5,
          title: "You Don't Know JS Yet",
          author: "Kyle Simpson",
          rentedOn: "2023-12-01",
          canReview: false,
        },
      ]);
      

  const [reviews, setReviews] = useState([]);

  return (
    <UserContext.Provider value={{ currentUser, rentals, reviews, setReviews }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
