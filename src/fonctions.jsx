export function compter(texte) {
  return texte.split(/\W+/u).filter(Boolean).length;
}

export function normaliser(texte) {
  return texte.replace(/\s+/u, " ").trim();
}

function dominique() {
  return <h1> hello </h1>;
}

export function splitter(props) {
  const [prenom, nom] = props.split(" ")
  console.log({nom} " est le nom et " {prenom} " est le prenom")
}

ReactDOM.render(<dominique />, document.getElementById("root"));
