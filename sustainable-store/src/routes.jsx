import { createBrowserRouter } from 'react-router-dom';

// Temporary placeholder component
const PlaceholderPage = ({ title }) => (
  <div className="container" style={{ padding: '2rem' }}>
    <h1>{title}</h1>
    <p>This page is coming soon...</p>
    <a href="/" className="btn btn-primary">Back to Home</a>
  </div>
);

// Home component inline for now
const Home = () => (
  <div className="container" style={{ padding: '2rem' }}>
    <h1>🌱 Sustainable Home Goods Store</h1>
    <p>Welcome to your eco-friendly shopping destination!</p>
    <div className="card" style={{ marginTop: '2rem' }}>
      <h2>Coming Soon:</h2>
      <ul>
        <li>🛒 Product Categories</li>
        <li>🌍 Carbon Footprint Calculator</li>
        <li>📝 Eco-Living Blog</li>
        <li>♻️ Sustainability Metrics</li>
      </ul>
    </div>
    
    <div style={{ marginTop: '2rem' }}>
      <h3>Test Navigation:</h3>
      <nav>
        <a href="/category/kitchen" className="btn btn-primary" style={{marginRight: '1rem'}}>Kitchen Products</a>
        <a href="/cart" className="btn btn-secondary" style={{marginRight: '1rem'}}>Cart</a>
        <a href="/blog" className="btn btn-secondary">Blog</a>
      </nav>
    </div>
  </div>
);

// Create router configuration
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:categoryName",
    element: <PlaceholderPage title="Product Category" />,
  },
  {
    path: "/product/:productId",
    element: <PlaceholderPage title="Product Detail" />,
  },
  {
    path: "/cart",
    element: <PlaceholderPage title="Shopping Cart" />,
  },
  {
    path: "/checkout",
    element: <PlaceholderPage title="Checkout" />,
  },
  {
    path: "/login",
    element: <PlaceholderPage title="Login" />,
  },
  {
    path: "/register",
    element: <PlaceholderPage title="Register" />,
  },
  {
    path: "/profile",
    element: <PlaceholderPage title="Profile" />,
  },
  {
    path: "/orders",
    element: <PlaceholderPage title="Order History" />,
  },
  {
    path: "/blog",
    element: <PlaceholderPage title="Eco-Living Blog" />,
  },
  {
    path: "/blog/:postId",
    element: <PlaceholderPage title="Blog Post" />,
  },
  {
    path: "/about",
    element: <PlaceholderPage title="About Us" />,
  },
  {
    path: "/carbon-footprint",
    element: <PlaceholderPage title="Carbon Footprint Calculator" />,
  },
  {
    path: "/contact",
    element: <PlaceholderPage title="Contact Us" />,
  },
]);

export default router;