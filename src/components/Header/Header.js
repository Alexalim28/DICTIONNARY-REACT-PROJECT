import React from "react";
import TextField from "@material-ui/core/TextField";
import { MenuItem } from "@material-ui/core";
import "./Header.css";
import languages from "../../data";

function Header({ lang, setLang, setWord }) {
  const handleChange = (lang) => {
    setLang(lang);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">React App Dictionnary</span>
      <div className="inputs">
        <TextField
          label="Search"
          onChange={(e) => setWord(e.target.value)}
        ></TextField>
        <TextField
          select
          value={lang}
          variant="filled"
          helperText="Please select a language"
          onChange={(e) => handleChange(e.target.value)}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.value} value={lang.label}>
              {lang.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
}

export default Header;
