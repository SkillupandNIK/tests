export function compter(texte) {
  return texte.split(/\W+/u).filter(Boolean).length;
}

export function normaliser(texte) {
  return texte.replace(/\s+/u, " ").trim();
}

export function dominique() {
  return <h1> hello </h1>;
}

export function parametre({ param = "Jean luc" }) {
  return <p>Je suis le meilleur {param} </p>;
}

export function splitter(props) {
  const [prenom, nom] = props.split(" ");
  console.log({ nom } + " est le nom et " + { prenom } + " est le prenom");
  return (
    <p>
      Le nom c'est {nom} et le prénom c'est {prenom}{" "}
    </p>
  );
}

export function jsxtest () {
  
}

//ReactDOM.render(<dominique />, document.getElementById("root"));
