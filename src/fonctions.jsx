export function compter(texte) {
  return texte.split(/\W+/u).filter(Boolean).length;
}

export function normaliser(texte) {
  return texte.replace(/\s+/u, " ").trim();
}

function dominique() {
  return <h1> hello </h1>;
}

ReactDOM.render(<dominique />, document.getElementById("root"));
