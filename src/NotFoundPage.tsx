import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container d-flex vh-100 text-center">
      <div className="m-auto">
        <h1>404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
};

export { NotFoundPage };