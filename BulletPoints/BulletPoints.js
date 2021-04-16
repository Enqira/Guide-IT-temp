import React, { useState, useRef } from 'react';
// import React from 'react';
import './BulletPoints.styles.css';
import PropTypes from 'prop-types';

import hyfLogo from '../../assets/images/hyf.png';
import rediLogo from '../../assets/images/redi-logo.png';

export default function BulletPoints({ title }) {
  const [firstStyle, setFirstStyle] = useState('none');
  const [secondStyle, setSecondStyle] = useState('none');
  const [thirdStyle, setThirdStyle] = useState('none');
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();

  const array = [
    {
      jobTitle: 'Full stack developer',
      branch: 'Full stack development',
      school: 'HYF school',
      webSite: 'https://www.hackyourfuture.dk/',
      logoPath: hyfLogo,
      links: ['https://www.youtube.com/watch?v=Omyx49oyuG0'],
      skills: {
        title: 'Full stack developer needs to have a following skill set:',
        ts: {
          title: '-Technical skills',
          skills:
            '(HTML/CSS;Javascript;Git;Backend Languages:C#,Python,Ruby;Web Architecture;Databases)',
        },
        ss: {
          title: '-Soft skills',
          skills: '(critical thinking, detailed analysis, creativity)',
        },
      },
    },
    {
      jobTitle: 'Data analyst',
      branch: 'Data analysis',
      school: 'ReDI school',
      webSite: 'https://www.redi-school.org/',
      logoPath: rediLogo,
      links: ['https://www.youtube.com/watch?v=Omyx49oyuG0'],
      skills: {
        title: 'Data analyst needs to have a following skill set:',
        ts: {
          title: '-Technical skills',
          skills:
            '(high level of mathematical ability;the ability to analyze, model and interpret data;accuracy and attention to detail)',
        },
        ss: {
          title: '-Soft skills',
          skills: '(critical thinking, communication and teamwork)',
        },
      },
    },
    {
      jobTitle: 'UX designer',
      branch: 'UX design',
      school: 'ReDI school',
      webSite: 'https://www.redi-school.org/',
      logoPath: rediLogo,
      links: [
        'https://www.youtube.com/watch?v=Omyx49oyuG0',
        'https://www.youtube.com/watch?v=Omyx49oyuG0',
      ],
      skills: {
        title: 'UX designers need to have a very diverse skill set:',
        ts: {
          title: '-Technical and design skills',
          skills: '(wireframing, prototyping, interpreting data)',
        },
        ss: {
          title: '-Soft skills',
          skills: '(adaptability, communication, empathy and teamwork)',
        },
      },
    },
  ];
  let result = [];
  const selectedObject = array.filter(
    (item) => item.branch.toLowerCase() === title.toLowerCase(),
  );
  if (selectedObject.length >= 1) {
    [result] = selectedObject;
  } else {
    [result] = array;
  }

  const { jobTitle, branch, school, logoPath, links, skills, webSite } = result;

  const handleFirstClick = () => {
    setFirstStyle(firstStyle === 'none' ? 'block' : 'none');
    setSecondStyle('none');
    setThirdStyle('none');
  };
  const handleSecondClick = () => {
    setSecondStyle(secondStyle === 'none' ? 'block' : 'none');
    setFirstStyle('none');
    setThirdStyle('none');
  };
  const handleThirdClick = () => {
    setThirdStyle(thirdStyle === 'none' ? 'block' : 'none');
    setFirstStyle('none');
    setSecondStyle('none');
  };

  return (
    <ul className="container">
      <li>
        <div className="bullet-point">
          <div className="left-triangle" />
          <div
            className="title"
            role="button"
            tabIndex={0}
            onClick={() => handleFirstClick(firstRef)}
            onKeyDown={() => handleFirstClick(firstRef)}
          >{`Become a ${jobTitle}`}</div>
        </div>

        <div
          className="description"
          ref={firstRef}
          style={{ display: firstStyle }}
        >
          <p>{`${school} offers a course where you can learn basics of ${branch}.`}</p>
          <div className="description-click-here">
            <p>Click here:</p>
            <div>
              <a href={webSite} target="_blank" rel="noopener noreferrer">
                <img src={logoPath} alt={`${school} logo`} />
              </a>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div className="bullet-point">
          <div className="left-triangle" />
          <div
            className="title"
            role="button"
            tabIndex={0}
            onClick={() => handleSecondClick(secondRef)}
            onKeyDown={() => handleSecondClick(secondRef)}
          >{`A day in the life of a ${jobTitle}`}</div>
        </div>
        <div
          className="description"
          ref={secondRef}
          style={{ display: secondStyle }}
        >
          <p>{`Interested in finding our what a ${jobTitle} does and how it looks like to be one?`}</p>

          <div className="links-container">
            {links.map((link) => (
              <a href={link}>{link}</a>
            ))}
          </div>
        </div>
      </li>

      <li>
        <div className="bullet-point">
          <div className="left-triangle" />
          <div
            className="title"
            role="button"
            tabIndex={0}
            onClick={() => handleThirdClick(thirdRef)}
            onKeyDown={() => handleThirdClick(thirdRef)}
          >
            Skills needed
          </div>
        </div>
        <div
          className="skills-container"
          ref={thirdRef}
          style={{ display: thirdStyle }}
        >
          <ul>
            <li>
              <p>{`${skills.title}`}</p>
            </li>
            <li>
              <b>{skills.ts.title}</b>
              <p>{skills.ts.skills}</p>
            </li>
            <li>
              <b>{skills.ss.title}</b>
              <p>{skills.ss.skills}</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}

BulletPoints.propTypes = {
  title: PropTypes.string.isRequired,
};

// import React, { useState, useRef } from 'react';
// // import React from 'react';
// import './BulletPoints.styles.css';
// import PropTypes from 'prop-types';

// import hyfLogo from '../../assets/images/hyf.png';

// export default function BulletPoints({ title }) {
//   const [firstStyle, setFirstStyle] = useState('none');
//   const firstRef = useRef();
//   const secondRef = useRef();
//   const array = [
//     {
//       jobTitle: 'Full stack developer',
//       branch: 'Full stack development',
//       school: 'HYF school',
//       logoPath: hyfLogo,
//     },
//     {
//       jobTitle: 'Data analyst',
//       branch: 'Data analysis',
//       school: 'ReDI school',
//       logoPath: hyfLogo,
//     },
//     {
//       jobTitle: 'UX designer',
//       branch: 'UX design',
//       school: 'ReDI school',
//       logoPath: hyfLogo,
//     },
//   ];
//   let result = [];
//   const selectedObject = array.filter(
//     (item) => item.branch.toLowerCase() === title.toLowerCase(),
//   );
//   if (selectedObject[0] === undefined) {
//     result = [];
//   } else {
//     [result] = selectedObject;
//   }
//   console.log(result);
//   const { jobTitle, branch, school, logoPath } = result;

//   const handleFirstClick = () => {
//     console.log('clicked' + ' ' + firstRef.current.style.display);
//     // firstStyle === 'none' ? setFirstStyle('block' : "none")
//     setFirstStyle(firstStyle === 'none' ? 'block' : 'none');
//   };
//   const handleSecondClick = () => {
//     setSecondStyle(firstStyle === 'none' ? 'block' : 'none');
//   };

//   return (
//     <ul>
//       <li>
//         <div className="bullet-point">
//           <div className="left-triangle" />
//           <div
//             className="title"
//             role="button"
//             tabIndex={0}
//             onClick={() => handleFirstClick(firstRef)}
//             onKeyDown={() => handleFirstClick(firstRef)}
//           >{`Become a ${jobTitle}`}</div>
//         </div>

//         <div
//           className="description"
//           ref={firstRef}
//           style={{ display: firstStyle }}
//         >
//           <p>{`${school} offers a course where you can learn basics of ${branch}.`}</p>
//           <div className="description-click-here">
//             <p>Click here:</p>
//             <div>
//               <img src={logoPath} alt={`${school} logo`} />
//             </div>
//           </div>
//         </div>
//       </li>

//       <li>
//         <div className="bullet-point">
//           <div className="left-triangle" />
//           <div
//             className="title"
//             role="button"
//             tabIndex={0}
//             onClick={() => handleSecondClick(firstRef)}
//             onKeyDown={() => handleSecondClick(firstRef)}
//           >{`A day in the life of a ${jobTitle}`}</div>
//         </div>
//         <div
//           className="description"
//           ref={secondRef}
//           style={{ display: firstStyle }}
//         >
//           <p>{`Interested in finding our what a ${jobTitle} does and how it looks like to be one?`}</p>
//           <div className="description-click-here">
//             <p>Click here:</p>
//             <div>
//               <img src={logoPath} alt={`${school} logo`} />
//             </div>
//           </div>
//         </div>
//       </li>

//       <li>
//         <div className="bullet-point">
//           <div className="left-triangle" />
//           <div className="title">Skills needed</div>
//         </div>
//       </li>
//     </ul>
//   );
// }

// BulletPoints.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// // BulletPoints.defaultProps = {
// //   id: 1,
// // };
