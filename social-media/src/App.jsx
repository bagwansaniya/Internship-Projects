import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Headers from "./components/header";
import Container from "./components/container";
import Postlist from "./components/postlist";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

import Form from "./components/form";
import { useContext, useState } from "react";
import { Postdata } from "./store/postdataprovider";


function App() {
  const {selecttab}=useContext(Postdata)

  return (
    <>
      <Container>
        <Headers />
        <div className="content">
          <Sidebar />
          {selecttab == "Home" ? <Postlist /> : <Form />}
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default App;
