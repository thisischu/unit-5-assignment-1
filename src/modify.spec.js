/** @jest-environment jsdom */
/* eslint-disable global-require */
const path = require('path');
const ScoreCounter = require('score-tests');

const testSuiteName = 'Modify Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const generateRandomTextString = () => Math.random().toString(36).substring(7).repeat(3);
const randomHeadingText = generateRandomTextString();
const randomText1 = generateRandomTextString();
const randomText2 = generateRandomTextString();
const randomText3 = generateRandomTextString();
const randomOldInfo = generateRandomTextString();
const numLetters = Math.floor(Math.random() * 26) || 1;

const randomExistingClass = generateRandomTextString();

const htmlSnippet = `<body>
  <h1 id="main-heading">${randomHeadingText}</h1>
  <h2 id="subtitle"></h2>
  <p class="main-text">${randomText1}</p>
  <p class="main-text">${randomText2}</p>
  <p class="main-text">${randomText3}</p>
  <p>some other text that isn't important</p>

  <div id="modify-classes" class="bad-class ${randomExistingClass}"></div>

  <ol data-num-letters=${numLetters} id="alphabet"></ol>
  <div id="my-bio"></div>
  <p id="old-info">${randomOldInfo}</p>
</body>`;

describe(testSuiteName, () => {
  let log;
  beforeEach(() => {
    document.documentElement.innerHTML = htmlSnippet;
    log = jest.spyOn(window.console, 'log').mockImplementation(() => {});
    jest.resetModules();
    require('./modify');

    scoreCounter.add(expect); // DO NOT TOUCH
  });

  it('reads and logs the main heading text', () => {
    expect(log).toHaveBeenCalledWith(randomHeadingText);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('reads and logs the main text together in a comma separated string', () => {
    expect(log).toHaveBeenCalledWith(`${randomText1},${randomText2},${randomText3}`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('updates the subtitle', () => {
    const h2 = document.querySelector('#subtitle');
    expect(h2.textContent).toEqual('This is a subtitle!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('should add an h1 to the body', async () => {
    const h2 = document.querySelector('#h2-test');
    expect(h2.textContent).toBe('Another one!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('removes the old info', () => {
    const oldInfo = document.querySelector('#old-info');
    expect(oldInfo).toBeNull();
    expect(document.body.innerHTML).not.toContain(randomOldInfo);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('should remove the bad-class and add the new-class', () => {
    const div = document.querySelector('#modify-classes');
    expect(div.classList.contains('bad-class')).toBe(false);
    expect(div.classList.contains('new-class')).toBe(true);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('reads the data attribute correctly to add the number of li elements', () => {
    const alphabetList = document.querySelector('#alphabet');
    expect(alphabetList.children.length).toBe(numLetters);

    for (let i = 0; i < numLetters; i++) {
      const letterInfoEl = alphabetList.children[i];
      expect(letterInfoEl.matches('li')).toBeTruthy();
    }

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Alphabet li elements have the right text content', () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetList = document.querySelector('#alphabet');

    for (let i = 0; i < numLetters; i++) {
      const letterInfoEl = alphabetList.children[i];
      expect(letterInfoEl.textContent).toBe(`${alphabet[i]} is letter #${i + 1} in the alphabet`);
    }

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Add the bio content to the page', () => {
    const bioEl = document.querySelector('#my-bio');
    expect(bioEl.innerHTML).toBe(`
    <h2 id="bio-heading">About Me</h2>
    <p>My name is Zo and I like learn cool new things</p>
    <h3 id="hobby-heading">My Hobbies</h3>
    <ul>
      <li>Running</li>
      <li>Reading</li>
      <li>Writing</li>
    </ul>`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  afterAll(scoreCounter.export);
});
