import hospital from './Image/hospital.png';
import scissor from './Image/Scissors.png';
import heart from './Image/heart.png';
import disable from './Image/disable.png';
import tooth from './Image/tooth.png';
import stethoscope from './Image/stethoscope .png';
import arrow from './Image/greenArrow.png';

let data = {
  BasicValue: {
    question:
      'We have 3 policies for you to choose from - which best suits your needs?',
    description: [
      { paragraph: 'What you pay', heading: 'VND 800 ngan' },
      { paragraph: 'Protection amount', heading: 'VND 80 trieu' },
      { paragraph: 'Insurer', heading: 'Bao Minh Corporation' },
      { paragraph: 'Amount of time you are covered', heading: '1 year' }
    ],
    info: [
      {
        img: hospital,
        heading: 'Hospital costs',
        paragraph: `VND 2 million/ day, max. of VND 80 million`
      },

      {
        img: scissor,
        heading: 'Surgery costs',
        paragraph: `VND 40 million/ year`
      },

      {
        img: heart,
        heading: 'Money in case of death',
        paragraph: `Max. of VND 80 million`
      },

      {
        img: disable,
        heading: `Money in case total disability`,
        paragraph: `Max. of VND 80 million`
      }
    ]
  },

  AdvanceValue: {
    question:
      'We think this policy might suit you best-through do choose another if you prefer that',
    description: [
      { paragraph: 'What you pay', heading: 'VND 1.1 trieu' },
      { paragraph: 'Protection amount', heading: 'VND 100 trieu' },
      { paragraph: 'Insurer', heading: 'Bao Minh Corporation' },
      { paragraph: 'Amount of time you are covered', heading: '1 year' }
    ],
    info: [
      {
        img: hospital,
        heading: 'Hospital costs',
        paragraph: `VND 3 million/ day, max. of VND 100 million`,
        arrow: arrow
      },

      {
        img: scissor,
        heading: 'Surgery costs',
        paragraph: `VND 50 million/ year`,
        arrow: arrow
      },

      {
        img: heart,
        heading: 'Money in case of death',
        paragraph: `Max. of VND 100 million`
      },

      {
        img: disable,
        heading: `Money in case total disability`,
        paragraph: `Max. of VND 100 million`,
        arrow: arrow
      },

      {
        img: disable,
        heading: `Money in case of partial disability`,
        paragraph: `Max. of VND 50 million`,
        arrow: arrow
      },

      {
        img: stethoscope,
        heading: `Doctor visit costs`,
        paragraph: `VND 3 million / year`,
        arrow: arrow
      }
    ]
  },

  SuperiorValue: {
    question:
      'We have 3 policies for you to choose from - which best suits your needs?',
    description: [
      { paragraph: 'What you pay', heading: 'VND 1.2 trieu' },
      { paragraph: 'Protection amount', heading: 'VND 120 trieu' },
      { paragraph: 'Insurer', heading: 'Bao Minh Corporation' },
      { paragraph: 'Amount of time you are covered', heading: '1 year' }
    ],
    info: [
      {
        img: hospital,
        heading: 'Hospital costs',
        paragraph: `VND 4 million/ day, max. of VND 100 million`,
        arrow: arrow
      },

      {
        img: scissor,
        heading: 'Surgery costs',
        paragraph: `VND 60 million/ year`,
        arrow: arrow
      },

      {
        img: heart,
        heading: 'Money in case of death',
        paragraph: `Max. of VND 100 million`
      },

      {
        img: disable,
        heading: `Money in case total disability`,
        paragraph: `Max. of VND 100 million`,
        arrow: arrow
      },

      {
        img: disable,
        heading: `Money in case of partial disability`,
        paragraph: `Max. of VND 50 million`,
        arrow: arrow
      },

      {
        img: stethoscope,
        heading: `Doctor visit costs`,
        paragraph: `VND 3 million / year`,
        arrow: arrow
      },

      {
        img: tooth,
        heading: `Dentist visit costs`,
        paragraph: `VND 2 million / year`,
        arrow: arrow
      }
    ]
  }
};

export default data;
