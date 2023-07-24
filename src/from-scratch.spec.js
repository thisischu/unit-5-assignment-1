/** @jest-environment jsdom */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const ScoreCounter = require('score-tests');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const indexHtmlText = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe(testSuiteName, () => {
  beforeEach(() => {
    document.documentElement.innerHTML = indexHtmlText;
    jest.resetModules();

    scoreCounter.add(expect); // DO NOT TOUCH
  });

  it('has only a script tag', () => {
    document.documentElement.innerHTML = indexHtmlText;

    const body = document.querySelector('body');
    expect(body.children.length).toBe(1);

    const scriptTags = document.querySelectorAll('script');
    expect(scriptTags.length).toBe(1);

    const scriptTag = scriptTags[0];
    expect(scriptTag.src).toContain('index.js');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Script tag links to an external script and has no content', () => {
    const scriptTags = document.querySelectorAll('script');
    expect(scriptTags.length).toBe(1);

    const scriptTag = scriptTags[0];
    expect(scriptTag.src).toContain('index.js');
    expect(scriptTag.textContent).toBe('');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a script that creates an h1 with the right text', () => {
    require('./index');

    const h1 = document.querySelector('h1#main-heading');
    expect(h1.textContent).toBe('Hello World!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a script that creates an p with the right text', () => {
    require('./index');

    const p = document.querySelector('p#main-text');
    expect(p.textContent).toBe("Look, I'm some text!");

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a script that creates an p with the right class', () => {
    require('./index');

    const p = document.querySelector('p#main-text');
    expect(p.className).toBe('boring-text');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  afterAll(scoreCounter.export);
});
