import Title from './Title';
import Info from './Info';
import tick from './Image/tick.png';
import hospital from './Image/hospital.png';
import scissor from './Image/Scissors.png';
import heart from './Image/heart.png';
import disable from './Image/disable.png';
import tooth from './Image/tooth.png';
import stethoscope from './Image/stethoscope .png';

let data = {
  BasicValue: {
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
        paragraph: `VND 3 million/ day, max. of VND 100 million`
      },

      {
        img: scissor,
        heading: 'Surgery costs',
        paragraph: `VND 50 million/ year`
      },

      {
        img: heart,
        heading: 'Money in case of death',
        paragraph: `Max. of VND 100 million`
      },

      {
        img: disable,
        heading: `Money in case total disability`,
        paragraph: `Max. of VND 100 million`
      },

      {
        img: disable,
        heading: `Money in case of partial disability`,
        paragraph: `Max. of VND 50 million`
      },

      {
        img: stethoscope,
        heading: `Doctor visit costs`,
        paragraph: `VND 3 million / year`
      }
    ]
  },

  SuperiorValue: {
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
        paragraph: `VND 3 million/ day, max. of VND 100 million`
      },

      {
        img: scissor,
        heading: 'Surgery costs',
        paragraph: `VND 50 million/ year`
      },

      {
        img: heart,
        heading: 'Money in case of death',
        paragraph: `Max. of VND 100 million`
      },

      {
        img: disable,
        heading: `Money in case total disability`,
        paragraph: `Max. of VND 100 million`
      },

      {
        img: disable,
        heading: `Money in case of partial disability`,
        paragraph: `Max. of VND 50 million`
      },

      {
        img: stethoscope,
        heading: `Doctor visit costs`,
        paragraph: `VND 3 million / year`
      },

      {
        img: tooth,
        heading: `Dentist visit costs`,
        paragraph: `VND 2 million / year`
      }
    ]
  }
};

export default data;
