import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
<!DOCTYPE html>
<html>
  <body>
    <h1>#001 Signup</h1>

    <div class="container">
      <h2>SignUp</h2>
      <div class="input-group">
        <div class="inset">
          <input autocomplete="off" type="text" name="name" required />
          <label class="input-label" for="name">
            <span class="input-label-content">Name</span>
          </label>
        </div>
      </div>
      <div class="input-group">
        <div class="inset">
          <input autocomplete="off" type="email" name="name" required />
          <label class="input-label" for="name">
            <span class="input-label-content">Email</span>
          </label>
        </div>
      </div>
      <div class="input-group">
        <div class="inset">
          <input autocomplete="off" type="password" name="name" required />
          <label class="input-label" for="name">
            <span class="input-label-content">Password</span>
          </label>
        </div>
      </div>
      <div class="input-group btn">
        <span>Sign up</span>
      </div>
      <a class="login-link" href="#">I'm already a member</a>
    </div>
  </body>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
  font-family: "Montserrat", sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #191919;
}
body h1 {
  margin-bottom: 45px;
}

.container {
  border-radius: 15px;
  background-color: #2c2c2c;
  width: 375px;
  padding: 60px 27px 45px 27px;
}
.container h2 {
  margin-bottom: 35px;
}
.container .input-group {
  width: 100%;
  height: 80px;
  background-color: #2c2c2c;
  margin-bottom: 35px;
  padding: 35px 10px 10px 10px;
  border-radius: 20px;
  box-shadow: -6px -6px 6px 0 rgba(72, 72, 72, 0.45), 6px 6px 6px 0 rgba(0, 0, 0, 0.4);
  transition: bottom 0.3s ease;
}
.container .input-group .inset {
  border-radius: 20px;
  box-shadow: inset -6px -6px 6px 0 rgba(72, 72, 72, 0.45), inset 6px 6px 6px 0 rgba(0, 0, 0, 0.4);
  height: 35px;
  position: relative;
}
.container .input-group .inset .input-label {
  position: absolute;
  bottom: 7px;
  left: 20px;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
}
.container .input-group .inset input {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding-left: 20px;
}
.container .input-group .inset input:focus, .container .input-group .inset input:valid {
  outline: none;
}
.container .input-group .inset input:focus + label, .container .input-group .inset input:valid + label {
  font-size: 12px;
  bottom: 40px;
}
.container .input-group.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0;
  opacity: 1;
  transform: opacity 0.3s ease-in-out;
  background: #11998e;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #38ef7d, #11998e);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.container .input-group.btn:hover {
  opacity: 0.8;
  cursor: pointer;
}
.container .login-link {
  display: inline-block;
  font-size: 0.8rem;
  text-align: center;
  opacity: 0.4;
  width: 100%;
  transition: opacity 0.3s ease;
}
.container .login-link:hover {
  color: #38ef7d;
  opacity: 1;
}
</style>

</html>



  )
}
