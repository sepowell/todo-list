const elementFactory = (type, text) => {
  const createElement = () => {
    let main = document.createElement(type);
    main.innerText = text;
    return main;
  }
  
  return { createElement };
}


function initalizeWebsite() {


  const siteWrapper = document.getElementById('site-wrapper');

  const test = elementFactory('div', 'testing hellooooo');

  siteWrapper.appendChild(test.createElement());

}

export { initalizeWebsite };