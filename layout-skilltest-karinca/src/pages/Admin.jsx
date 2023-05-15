import React from "react";
import Layout from "../Layout";
import { OidcSecure } from "@axa-fr/react-oidc";
import { getUsers } from "../service/axios";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getUsers()
      .then((json) => {
        setUsers(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);
  return (
    <OidcSecure>
      <Layout>
        <SearchBar users={users} setSearchResults={setSearchResults} />{" "}
      </Layout>
    </OidcSecure>
  );
};

export default Admin;
