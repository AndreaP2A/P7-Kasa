import React from "react";

// ROUTER
import AppRouter from "./routes/router";

//LAYOUTS
import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
