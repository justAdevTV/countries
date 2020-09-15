import {
  _Countries,
  _Navbar,
  _SearchBar,
  _SelectBox,
  _CountryCards,
} from "./countries.styles";

// Template for country list
function Countries({ navbar, searchBar, selectBox, countryCards }) {
  return (
    <_Countries>
      <_Navbar>{navbar}</_Navbar>
      <_SearchBar>{searchBar}</_SearchBar>
      <_SelectBox>{selectBox}</_SelectBox>
      <_CountryCards>{countryCards}</_CountryCards>
    </_Countries>
  );
}

export default Countries;
