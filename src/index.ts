const message: string = "(Webpack Typescript Template) index.ts: Hello World";

function appendToBody(messageToAppend: string): void {
  const div: HTMLDivElement = document.createElement("div");
  div.innerHTML = messageToAppend;
  document.body.appendChild(div);
}

console.log(message);
appendToBody(message);
