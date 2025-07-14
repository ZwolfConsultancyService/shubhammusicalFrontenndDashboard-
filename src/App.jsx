// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashbord from "./Dashbord";
// // import Home from "./Home";
// import AddProductForm from "./AddProductForm";
// import Orders from "./Orders";
// import DashbordProduct from "./Orders";
// // import Logout from "./Logout";

// function App() {
//   return (
//     <Router>
//       <Routes>
        
//         <Route path="/" element={<Dashbord />}>
//           {/* Nested routes inside Dashboard */}
// {/*           
//           <Route path="home" element={<Home />} /> */}
//           <Route path="/products" element={<DashbordProduct />} />

//           <Route path="/orders" element={<Orders />} />
//           {/* <Route path="/products" element={<DashbordProduct />} /> */}

//           {/* <Route path="logout" element={<Logout />} /> */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbord from "./dasboard/Dashbord";
import AddProductForm from "./dasboard/AddProductForm";
import Orders from "./dasboard/Orders";
import DashbordProduct from "./dasboard/DashbordProduct"; 
import User from "./dasboard/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashbord />}>
          {/* Nested Routes */}
          <Route path="products" element={<DashbordProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="/users" element={<User />} />
          {/* <Route path="addproduct" element={<AddProductForm />} />  */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
