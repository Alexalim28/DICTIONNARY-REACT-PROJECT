import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import "./DefinitionCard.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowY: "scroll",
    border: "5px solid #cccc",
    borderRadius: "5px",
    maxHeight: "450px",
    minHeight: "450px",
    padding: 20,
    backgroundColor: "#9fa4a9",
  },
  msg: {
    fontSize: "3rem",
    color: "darkred",
  },
});

function DefinitionCard({ data, word }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {word === "" ? (
        <span className={classes.msg}>Type a word in the search bar</span>
      ) : (
        data.data.map((word) =>
          word.meanings.map((meaning) =>
            meaning.definitions.map((def) => (
              <Card
                variant="outlined"
                key={def.definition}
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#56494c",
                  color: "#fff",
                }}
              >
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    <b>Definition:</b> {def.definition}
                  </Typography>
                  <hr />
                  <Typography variant="body1" gutterBottom>
                    <b>Example:</b> {def.example}
                  </Typography>
                  {def.synonyms.length === 0 ? (
                    <Typography variant="body1">
                      No synonyms available
                    </Typography>
                  ) : (
                    <span>
                      <b>Synonyms: </b>
                      {def.synonyms.map((s) => `${s}, `)}
                    </span>
                  )}
                </CardContent>
              </Card>
            ))
          )
        )
      )}
    </div>
  );
}

export default DefinitionCard;
