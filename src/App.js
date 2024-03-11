import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import './styles.css'
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import { store } from "./store";
import HabitWeekPage from "./pages/HabitWeekPage";
import HabitDetailPage from "./pages/HabitDetailPage";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <HabitWeekPage />
        },
        {
          path: "/Habit-Detail/:day",
          element: < HabitDetailPage/>
        },


      ]
    }
  ]);
  return (

    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

    </div>

  );
};

export default App;
