import React, { Fragment } from 'react';
import styled from 'styled-components';
import './styles.css';
import Footer from './Footer';
const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1em;
  width: 305px;
  margin: auto;
  padding: 2em 0;
  @media screen and (min-width: 1300px) {
    width: calc(4 * 305px + 6em);
    margin: auto;
    grid-template-columns: repeat(4, 305px);
    grid-template-areas:
      'card1 card1 card2 card5'
      'card3 card4 card4 card5';
    gap: 2em;

    .card:nth-of-type(1) {
      grid-area: card1;
    }
    .card:nth-of-type(2) {
      grid-area: card2;
    }
    .card:nth-of-type(3) {
      grid-area: card3;
    }
    .card:nth-of-type(4) {
      grid-area: card4;
    }
    .card:nth-of-type(5) {
      grid-area: card5;
    }
    .card__container {
      font-size: 3em;
    }
  }
`;
const Card = styled.div`
  background: ${(props) => props.color_card};
  border-radius: 10px;
  padding: 2em;
  color: ${(props) => props.color_card};
  position: relative;
  z-index: -1;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  .comillas {
    position: absolute;
    right: 20px;
    top: 0.3em;
    z-index: -1;
    transform: scale(1.05);
  }
  .card__header {
    display: flex;
    align-items: center;
    column-gap: 1em;
    padding-bottom: 1.2em;
    align-content: center;
    .container-img {
      display: grid;
      justify-content: center;
      align-content: center;
      border: 3px solid ${(props) => props.border};
      border-radius: 25px;
      height: 25px;
      img {
        border-radius: 25px;
        height: 25px;
      }
    }
    .container-nickname {
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 0.2em;
      font-size: 1.05em;
      color: ${(props) =>
        props.color_card.includes('hsl(2') ? 'white' : 'hsl(219, 29%, 14%)'};
      span:nth-child(2) {
        opacity: 0.5;
        font-size: 0.9em;
      }
    }
  }
  .card__title {
    font-size: 1.49em;
    font-weight: 600;
    color: ${(props) =>
      props.color_card.includes('hsl(2') ? 'white' : 'hsl(219, 29%, 14%)'};
    padding-bottom: 1em;
  }
  .card__container {
    color: ${(props) =>
      props.color_card.includes('hsl(2') ? 'white' : 'black'};
    font-size: 0.9em;
    opacity: 0.7;
    line-height: 1.5em;
  }
  @media screen and (min-width: 1440px) {
    padding: 2.67em;
    .card__title {
      font-size: 1.859em;
      height: 90px;
    }
    .card__container {
      font-size: 1.22em;
    }
    .comillas {
      right: 95px;
      transform: scale(1.15);
      top: 0.7em;
    }
  }
`;

const data = [
  {
    name: 'Daniel Clifford',
    status: 'Verified Graduate',
    img:
      'https://uploads.codesandbox.io/uploads/user/78916d17-0682-4475-b7d4-079396ec696a/dt6B-image-daniel.jpg',
    color_card: 'hsl(263, 55%, 52%)',
    border: 'hsl(263, 49%, 59%)',
    title:
      'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    desc:
      '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”'
  },

  {
    name: 'Jonathan Walters',
    status: 'Verified Graduate',
    img:
      'https://uploads.codesandbox.io/uploads/user/78916d17-0682-4475-b7d4-079396ec696a/xeqt-image-jonathan.jpg',
    color_card: 'hsl(217, 19%, 35%)',
    border: 'white',
    title: 'The team was very supportive and kept me motivated',
    desc:
      '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”'
  },

  {
    name: 'Jeanette Harmon',
    status: 'Verified Graduate',
    img:
      'https://uploads.codesandbox.io/uploads/user/78916d17-0682-4475-b7d4-079396ec696a/Vk4B-image-jeanette.jpg',
    color_card: 'hsl(0, 0%, 100%)',
    border: 'white',
    title: 'An overall wonderful and rewarding experience',
    desc:
      '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”'
  },

  {
    name: 'Patrick Abrams',
    status: 'Verified Graduate',
    img:
      'https://uploads.codesandbox.io/uploads/user/78916d17-0682-4475-b7d4-079396ec696a/BkAy-image-patrick.jpg',
    border: 'hsl(263, 55%, 52%)',
    color_card: 'hsl(219, 29%, 14%)',
    title:
      'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
    desc:
      '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”'
  },

  {
    name: 'Kira Whittle',
    status: 'Verified Graduate',
    img:
      'https://uploads.codesandbox.io/uploads/user/78916d17-0682-4475-b7d4-079396ec696a/jvFH-image-kira.jpg',
    border: 'white',
    color_card: 'hsl(0, 0%, 100%)',
    title: 'Such a life-changing experience. Highly recommended!',
    desc:
      '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”'
  }
];

export default function App() {
  return (
    <Fragment>
      <DivGrid>
        {React.Children.toArray(
          data.map(
            (
              { name, status, img, title, desc, color_card, border, color },
              index
            ) => (
              <Card
                className="card"
                color_card={color_card}
                border={border}
                color={color}
              >
                {index === 0 ? (
                  <svg
                    width="104"
                    className="comillas"
                    height="102"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
                      fill="#A775F1"
                      fillRule="nonzero"
                    />
                  </svg>
                ) : (
                  void 0
                )}
                <div className="card__header">
                  <div className="container-img">
                    <img src={img} alt={name} />
                  </div>
                  <div className="container-nickname">
                    <span>{name}</span>
                    <span>{status}</span>
                  </div>
                </div>
                <div className="card__title">{title}</div>
                <div className="card__container">{desc}</div>
              </Card>
            )
          )
        )}
      </DivGrid>
      <Footer />
    </Fragment>
  );
}
