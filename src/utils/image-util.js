function getImageURL(name) {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
}

function getImageSkill(name) {
  return new URL(`../assets/img/skills/${name}`, import.meta.url).href;
}

export { getImageURL, getImageSkill };
