import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default App;
