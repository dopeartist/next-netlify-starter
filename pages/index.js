import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
   <!DOCTYPE html>
<html>
<div class="container">
  <div class="loader">
    <div class="rocket">
      <i class="fas fa-rocket"></i>
      <i class="fas fa-cloud" style="--i:0"></i>
      <i class="fas fa-cloud" style="--i:1"></i>
      <i class="fas fa-cloud" style="--i:2"></i>
      <i class="fas fa-cloud" style="--i:3"></i>
    </div>
    <span>
      <i></i>
    </span>
  </div>
</div>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #eaeef0;
}

.loader {
  position: relative;
  display: flex;
}

.loader span {
  position: relative;
  width: 250px;
  height: 250px;
  background-color: #eaeef0;
  border: 6px solid #eaeef0;
  border-radius: 50%;
  box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
    8px 8px 25px rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.loader span::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.5),
    inset -5px -5px 15px rgba(255, 255, 255, 1);
}

.loader span::after {
  content: "";
  position: absolute;
  inset: 40px;
  background: #eaeef0;
  border: 3px solid #eaeef0;
  border-radius: 50%;
  box-shadow: -8px -8px 25px rgba(255, 255, 255, 1),
    8px 8px 25px rgba(0, 0, 0, 0.25), inset 3px 3px 10px rgba(0, 0, 0, 0.15),
    inset -1px -1px 15px rgba(255, 255, 255, 1);
}

.loader span i {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(#42abff, #ff4f8b, #ffeb3b);
  animation: animateLoader 1s linear infinite;
}

@keyframes animateLoader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rocket {
  position: absolute;
  inset: 50px;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
}

.rocket .fa-rocket {
  position: absolute;
  top: 35%;
  color: #ff518c;
  font-size: 3.5em;
  -webkit-text-stroke: 2px #000;
  animation: animateRocket 0.2s linear infinite;
}

@keyframes animateRocket {
  0%,
  100% {
    transform: translate(0, 0) rotate(-45deg);
  }
  50% {
    transform: translate(0, 3px) rotate(-45deg);
  }
}

.rocket .fa-cloud {
  position: absolute;
  top: calc(45px * var(--i));
  left: calc(40px * var(--i));
  font-size: 2em;
  color: #fff;
  -webkit-text-stroke: 2px #000;
  animation: animateCloud 1.5s linear infinite;
  animation-delay: calc(-0.5s * var(--i));
}

@keyframes animateCloud {
  0% {
    transform: translateY(calc(-35 * 5px));
  }
  100% {
    transform: translateY(calc(35 * 5px));
  }
}

</style>




  )
}
