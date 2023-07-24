const getMainHeadingText = () => {
  const main = document.querySelector('#main-heading');
      if (main) {
        console.log(main.textContent);
      }
};

const getAllMainText = () => {
  const mainText = document.querySelectorAll('.main-text');
      let str = '';

      mainText.forEach((element, index) => {
        str += element.textContent;
        if (index < mainText.length - 1) {
          str += ',';
        }
      });

      console.log(str);
};


const setSubtitleText = () => {
};

const modifyDivClassList = () => {
};

const addH2 = () => {
};

const removeOldInfo = () => {
};

const makeAlphabet = () => {
};

const makeBio = () => {
};

const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

main();
