import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import "./App.min.css";
import { AppContext } from "./reducers";
const ProductListView = lazy(() => import("./views/product/List"));
//const Header = lazy(() => import("./components/Header"));
//const TopMenu = lazy(() => import("./components/TopMenu"));
// const SignInView = lazy(() => import("./views/account/SignIn"));
// const SignUpView = lazy(() => import("./views/account/SignUp"));
// const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
// const OrdersView = lazy(() => import("./views/account/Orders"));
// const WishlistView = lazy(() => import("./views/account/Wishlist"));
// const NotificationView = lazy(() => import("./views/account/Notification"));
// const MyProfileView = lazy(() => import("./views/account/MyProfile"));

// const ProductDetailView = lazy(() => import("./views/product/Detail"));
// const StarZoneView = lazy(() => import("./views/product/StarZone"));
// const CartView = lazy(() => import("./views/cart/Cart"));
// const CheckoutView = lazy(() => import("./views/cart/Checkout"));
// const InvoiceView = lazy(() => import("./views/cart/Invoice"));
// const DocumentationView = lazy(() => import("./views/Documentation"));
// const NotFoundView = lazy(() => import("./views/pages/404"));
// const InternalServerErrorView = lazy(() => import("./views/pages/500"));
// const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
// const SupportView = lazy(() => import("./views/pages/Support"));
// const BlogView = lazy(() => import("./views/blog/Blog"));
// const BlogDetailView = lazy(() => import("./views/blog/Detail"));

function App() {
  const [cart, setCart] = useState({});
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log({ cart });
  }, [cart]);
  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          cart,
          user,
          addToCart: (newItem) => setCart((val) => ({ ...val, newItem })),
          removeFromCart: (removeVal) => {},
          updateUser: (user) => setUser(user),
        }}
      >
        <TopMenu />
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <Routes>
            <Route exact path="/" element={<ProductListView />} />
            {/* <Route exact path="/account/signin" element={<SignInView/>} />
            <Route exact path="/account/signup" element={<SignUpView/>} />
            <Route
              exact
              path="/account/forgotpassword"
              element={<ForgotPasswordView/>}
            />
            <Route exact path="/account/profile" element={<MyProfileView/>} />
            <Route exact path="/account/orders" element={<OrdersView/>} />
            <Route exact path="/account/wishlist" element={<WishlistView/>} />
            <Route
              exact
              path="/account/notification"
              element={<NotificationView/>}
            />
            <Route exact path="/category" element={<ProductListView/>} />
            <Route exact path="/product/detail" element={<ProductDetailView/>} />
            <Route exact path="/star/zone" element={<StarZoneView/>} />
            <Route exact path="/cart" element={<CartView/>} />
            <Route exact path="/checkout" element={<CheckoutView />} />
            <Route exact path="/invoice" element={<InvoiceView />} />
            <Route exact path="/documentation" element={<DocumentationView/>} />
            <Route exact path="/contact-us" element={<ContactUsView/>} />
            <Route exact path="/support" element={<SupportView/>} />
            <Route exact path="/blog" element={<BlogView/>} />
            <Route exact path="/blog/detail" element={<BlogDetailView/>} />
            <Route exact path="/500" element={<InternalServerErrorView/>} />
            <Route path="*" element={<NotFoundView/>} /> */}
          </Routes>
        </Suspense>
        <Footer />
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
