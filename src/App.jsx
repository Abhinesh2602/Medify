import DetailPage from "./DetailPage/DetailPage.jsx";
import Home from "./HomePage/Home";
import MyBookingPage from "./MyBookingPage/MyBookingPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <DetailPage />,
  },
  {
    path: "/my-bookings",
    element: <MyBookingPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
