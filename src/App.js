import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
import DefinitionCard from "./components/DefinitionCard/DefinitionCard";
import axios from "axios";

function App() {
  const [lang, setLang] = useState("en");
  const [word, setWord] = useState("hello");
  const [meanings, setMeanings] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
        );
        setMeanings(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [word, lang]);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "90vh" }}
      >
        <Header lang={lang} setLang={setLang} setWord={setWord} />
        {meanings.length !== 0 && (
          <DefinitionCard data={meanings} word={word} />
        )}
      </Container>
    </div>
  );
}

export default App;
