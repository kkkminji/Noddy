import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  position: relative;
  margin: 0px 30px 20px 30px;
  font-family: 'Special Elite', cursive;
  font-size: 4em;
  color: #fff;
  text-transform: uppercase;
  overflow: hidden;

  &::before,
  &::after {
    content: attr(data-content);
    position: absolute;
    left: -2px;
    top: 0;
    color: #fff;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
  }

  &::before {
    text-shadow: 3px 0 #00f;
    animation: noise-anim-2 3s infinite linear alternate-reverse;
  }

  &::after {
    text-shadow: -3px 0 #f00;
    animation: noise-anim-2 3s infinite linear alternate-reverse;
  }

  @keyframes noise-anim-2 {
    0% {
      clip: rect(77px, 9999px, 22px, 0);
    }
    5% {
      clip: rect(70px, 9999px, 31px, 0);
    }
    10% {
      clip: rect(37px, 9999px, 45px, 0);
    }
    15% {
      clip: rect(43px, 9999px, 29px, 0);
    }
    20% {
      clip: rect(41px, 9999px, 44px, 0);
    }
    25% {
      clip: rect(9px, 9999px, 79px, 0);
    }
    30% {
      clip: rect(91px, 9999px, 12px, 0);
    }
    35% {
      clip: rect(48px, 9999px, 74px, 0);
    }
    40% {
      clip: rect(30px, 9999px, 69px, 0);
    }
    45% {
      clip: rect(31px, 9999px, 93px, 0);
    }
    50% {
      clip: rect(91px, 9999px, 52px, 0);
    }
    55% {
      clip: rect(55px, 9999px, 62px, 0);
    }
    60% {
      clip: rect(21px, 9999px, 71px, 0);
    }
    65% {
      clip: rect(29px, 9999px, 52px, 0);
    }
    70% {
      clip: rect(33px, 9999px, 81px, 0);
    }
    75% {
      clip: rect(44px, 9999px, 3px, 0);
    }
    80% {
      clip: rect(71px, 9999px, 47px, 0);
    }
    85% {
      clip: rect(77px, 9999px, 76px, 0);
    }
    90% {
      clip: rect(43px, 9999px, 48px, 0);
    }
    95% {
      clip: rect(13px, 9999px, 80px, 0);
    }
    100% {
      clip: rect(15px, 9999px, 11px, 0);
    }
  }

  @keyframes noise-anim {
    0% {
      clip: rect(40px, 9999px, 198px, 0);
    }
    5% {
      clip: rect(111px, 9999px, 135px, 0);
    }
    10% {
      clip: rect(134px, 9999px, 92px, 0);
    }
    15% {
      clip: rect(156px, 9999px, 171px, 0);
    }
    20% {
      clip: rect(92px, 9999px, 73px, 0);
    }
    25% {
      clip: rect(200px, 9999px, 108px, 0);
    }
    30% {
      clip: rect(147px, 9999px, 48px, 0);
    }
    35% {
      clip: rect(136px, 9999px, 189px, 0);
    }
    40% {
      clip: rect(12px, 9999px, 116px, 0);
    }
    45% {
      clip: rect(74px, 9999px, 4px, 0);
    }
    50% {
      clip: rect(25px, 9999px, 97px, 0);
    }
    55% {
      clip: rect(40px, 9999px, 39px, 0);
    }
    60% {
      clip: rect(73px, 9999px, 123px, 0);
    }
    65% {
      clip: rect(58px, 9999px, 36px, 0);
    }
    70% {
      clip: rect(154px, 9999px, 8px, 0);
    }
    75% {
      clip: rect(115px, 9999px, 96px, 0);
    }
    80% {
      clip: rect(50px, 9999px, 195px, 0);
    }
    85% {
      clip: rect(71px, 9999px, 154px, 0);
    }
    90% {
      clip: rect(49px, 9999px, 84px, 0);
    }
    95% {
      clip: rect(73px, 9999px, 180px, 0);
    }
    100% {
      clip: rect(113px, 9999px, 117px, 0);
    }
  }
`;

export const Form = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 0 15px;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  animation: blink 1.5s infinite;
  border: none;
  outline-color: #fff;

  @keyframes blink {
    0% {
      box-shadow: 0 0 10px rgba(50, 400, 200, 0.7),
        0 0 20px rgba(50, 400, 200, 0.7), 0 0 30px rgba(50, 400, 200, 0.7);
    }
    50% {
      box-shadow: none; /* 깜빡임 없음 */
    }
    100% {
      box-shadow: 0 0 10px rgba(50, 400, 200, 0.7),
        0 0 20px rgba(50, 400, 200, 0.7), 0 0 30px rgba(50, 400, 200, 0.7);
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 5px;
  border: none;
  background: none;
`;

export const IconColor = styled.svg`
  fill: '#bbc0c9';
  margin: '15px 0px 15px 0px';

  &:hover {
    color: rgb(52, 16, 255);
    filter: drop-shadow(0 0 2px rgba(52, 16, 255, 0.7))
      drop-shadow(0 0 5px rgba(52, 16, 255, 0.7))
      drop-shadow(0 0 15px rgba(52, 16, 255, 0.7));
  }
`;
