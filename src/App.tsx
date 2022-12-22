import React, { useState } from "react";
import { useKeycloak } from "@react-keycloak/web";

function App() {
  const { initialized, keycloak } = useKeycloak();
  const [getName,setName] = useState<string | undefined>('')
  const [getEmail,setEmail] = useState<string | undefined>('')
  const [getFirstName,setFirstName] = useState<string | undefined>('')
  const [getLastName,setLastName] = useState<string | undefined>('')

  if (!initialized) {
    <div>Loding...</div>;
  }

  if (keycloak.authenticated) {
    keycloak.loadUserProfile().then((info) => {
      setName(info.username)
      setEmail(info.email)
      setFirstName(info.firstName)
      setLastName(info.lastName)
      console.log(info);
    });
}else{
  console.log("Não authenticated.")
}

  return (
    <>
      <h1 style={{textAlign:'center'}}>Welcome</h1>

      <div style={{textAlign:'center'}}>
        <h4>Name : {getFirstName} {getLastName}</h4>
        <h4>Username : {getName}</h4>
        <h4>Email : {getEmail}</h4>
      <button
        onClick={() => {
          keycloak.logout();
        }}
      >
        Logout
      </button>
      </div>

    </>
  );
}

export default App;
