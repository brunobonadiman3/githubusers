import { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

import {
  HeaderSection,
  HeaderTitle,
  HeaderInputContainer,
  HeaderInput,
  HeaderSearchButton,
} from "./styles";

import { context } from "../../shared";

const Header = () => {
  const ctx = useContext(context);
  const [searchValue, setSearchValue] = useState("");

  const api = {
    baseURL: "https://api.github.com/users",
    client_id: "5fc80edb64ec62be7f75",
    client_secret: "dd100ef9adbcfefea7150d2e5c2674867a9d517e",
  };
  async function getUserData() {
    try {
      const response = await axios.get(
        `${api.baseURL}/${searchValue}?client_id=${api.client_id}&client_secret=${api.client_secret}`
      );
      const repos = await axios.get(`${api.baseURL}/${searchValue}/repos`);
      const starred = await axios.get(`${api.baseURL}/${searchValue}/starred`);

      ctx.setUserData(response.data);
      ctx.setUserRepos(repos.data);
      ctx.setUserStarred(starred.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <HeaderSection>
      <HeaderTitle>
        Github Users{" "}
        <img
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          width="50"
          height="50"
          alt=""
        ></img>
      </HeaderTitle>
      <HeaderInputContainer>
        <HeaderInput
          type="text"
          placeholder="Enter Github User..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <HeaderSearchButton onClick={getUserData}>
          <FiSearch size={18} />
        </HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  );
};

export default Header;
