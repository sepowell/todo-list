function initalizeWebsite() {
  const siteWrapper = document.getElementById('site-wrapper');

  const testElement = document.createElement('p');
  testElement.innerText = "testing!!!";

  siteWrapper.appendChild(testElement);

}

export { initalizeWebsite };