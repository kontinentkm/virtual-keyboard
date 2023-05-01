class createElement {
  constructor(tag, classList, attributes, textContent, innerHTML) {
    this.element = document.createElement(tag);

    if (classList) {
      this.element.classList.add(...classList);
    }

    if (attributes?.length) {
      attributes.forEach(({ prop, value }) => {
        this.element.setAttribute(prop, value);
      });
    }

    if (textContent) {
      this.element.textContent = textContent;
    }

    if (innerHTML) {
      this.element.innerHTML = innerHTML;
    }
  }

  appendTo(parent) {
    return parent.appendChild(this.element);
  }
}

const body = document.querySelector('body');
const keyboard = document.querySelector('.keyboard');


function buildKeyboardRow1() {
  const keyboard__row = new createElement('div', ['keyboard--row', 'row']).appendTo(keyboard);

  const Backquote = new createElement('div', ['keyboard--key', 'key', 'Backquote']).appendTo(keyboard__row);
  const BackquoteRus = new createElement('div', ['rus', 'hidden']).appendTo(Backquote);
  const BackquoteRusCaseDown = new createElement('span', ['caseDown', 'hidden'], null, 'ё').appendTo(BackquoteRus);
  const BackquoteRusCaseUp = new createElement('span', ['caseUp', 'hidden'], null, 'Ё').appendTo(BackquoteRus);
  const BackquoteRusCaps = new createElement('span', ['caps', 'hidden'], null, 'Ё').appendTo(BackquoteRus);
  const BackquoteRusShiftCaps = new createElement('span', ['shiftCaps', 'hidden'], null, 'ё').appendTo(BackquoteRus);
  const BackquoteEng = new createElement('div', ['eng']).appendTo(Backquote);
  const BackquoteEngCaseDown = new createElement('span', ['caseDown'], null, '`').appendTo(BackquoteEng);
  const BackquoteEngCaseUp = new createElement('span', ['caseUp', 'hidden'], null, '~').appendTo(BackquoteEng);
  const BackquoteEngCaps = new createElement('span', ['caps', 'hidden'], null, '`').appendTo(BackquoteEng);
  const BackquoteEngShiftCaps = new createElement('span', ['shiftCaps', 'hidden'], null, '~').appendTo(BackquoteEng);

  const Digit1 = new createElement('div', ['keyboard--key', 'key', 'Digit1']).appendTo(keyboard__row);
  const Digit1Rus = new createElement('div', ['rus', 'hidden']).appendTo(Digit1);
  const Digit1RusCaseDown = new createElement('span', ['caseDown', 'hidden'], null, '1').appendTo(Digit1Rus);
  const Digit1RusCaseUp = new createElement('span', ['caseUp', 'hidden'], null, '!').appendTo(Digit1Rus);
  const Digit1RusCaps = new createElement('span', ['caps', 'hidden'], null, '1').appendTo(Digit1Rus);
  const Digit1RusShiftCaps = new createElement('span', ['shiftCaps', 'hidden'], null, '!').appendTo(Digit1Rus);
  const Digit1Eng = new createElement('div', ['eng']).appendTo(Digit1);
  const Digit1EngCaseDown = new createElement('span', ['caseDown'], null, '1').appendTo(Digit1Eng);
  const Digit1EngCaseUp = new createElement('span', ['caseUp', 'hidden'], null, '!').appendTo(Digit1Eng);
  const Digit1EngCaps = new createElement('span', ['caps', 'hidden'], null, '1').appendTo(Digit1Eng);
  const Digit1EngShiftCaps = new createElement('span', ['shiftCaps', 'hidden'], null, '!').appendTo(Digit1Eng);

  const Digit2 = new createElement('div', ['keyboard--key', 'key', 'Digit2']).appendTo(keyboard__row);
  const Digit2Rus = new createElement('div', ['rus', 'hidden']).appendTo(Digit2);
  const Digit2RusCaseDown = new createElement('span', ['caseDown', 'hidden'], null, '2').appendTo(Digit2Rus);
  const Digit2RusCaseUp = new createElement('span', ['caseUp', 'hidden'], null, '"').appendTo(Digit2Rus);
  const Digit2RusCaps = new createElement('span', ['caps', 'hidden'], null, '2').appendTo(Digit2Rus);
  const Digit2RusShiftCaps = new createElement('span', ['shiftCaps', 'hidden'], null, '"').appendTo(Digit2Rus);
  const Digit2Eng = new createElement('div', ['eng']).appendTo(Digit2);
  const Digit2EngCaseDown = new createElement('span', ['caseDown'], null, '2').appendTo(Digit2Eng);
  const Digit2EngCaseUp = new createElement('span', ['caseUp', 'hidden'], null, '@').appendTo(Digit2Eng);
  const Digit2EngCaps = new createElement('span', ['caps', 'hidden'], null, '2').appendTo(Digit2Eng);
  const Digit2EngShiftCaps = new createElement('span', ['shiftCaps', 'hidden'], null, '@').appendTo(Digit2Eng);

  const Digit3 = new createElement('div', ['keyboard--key', 'key', 'Digit3']).appendTo(keyboard__row);
  const Digit3Rus = new createElement('div', ['rus', 'hidden']).appendTo(Digit3);
  const Digit3RusCaseDown = new createElement('span', ['caseDown', 'hidden'], null, '3').appendTo(Digit3Rus);
  const Digit3RusCaseUp = new createElement('span', ['caseUp', 'hidden'], null, '№').appendTo(Digit3Rus);
  const Digit3RusCaps = new createElement('span', ['caps', 'hidden'], null, '3').appendTo(Digit3Rus);
  const Digit3RusShiftCaps = new createElement('span', ['shiftCaps', 'hidden'], null, '№').appendTo(Digit3Rus);
  const Digit3Eng = new createElement('div', ['eng']).appendTo(Digit3);
  const Digit3EngCaseDown = new createElement('span', ['caseDown'], null, '3').appendTo(Digit3Eng);
  const Digit3EngCaseUp = new createElement('span', ['caseUp', 'hidden'], null, '#').appendTo(Digit3Eng);
  const Digit3EngCaps = new createElement('span', ['caps', 'hidden'], null, '3').appendTo(Digit3Eng);
  const Digit3EngShiftCaps = new createElement('span', ['shiftCaps', 'hidden'], null, '#').appendTo(Digit3Eng);

}

buildKeyboardRow1();


