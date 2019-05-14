import axios from 'axios'
import {
  history
} from '../../history'
export const userservice = {
  signin,
  signup
}

async function signin(email, pwd) {
  return await axios.get('http://localhost:4200/api/users')
    .then((res) => {
      console.log(res.data)
      console.log(email, pwd)
      const data = res.data.map((ele, ind) => {
        if (ele.user_email === email && ele.user_pwd === pwd) {
          localStorage.setItem("currentUser", JSON.stringify(ele));
          return true
        } else {
          return false;
        }
      });
      const isLoggedIn = data.filter((item) => {
        if (item === true) {
          return item
        }
        return false
      })
      return isLoggedIn
    });
}



async function signup(user_type, name, email, mobile, pwd) {
  return await axios.post('http://localhost:4200/api/user', {
      user_type: user_type,
      user_name: name,
      user_email: email,
      user_mobile: mobile,
      user_pwd: pwd,
    })
    .then((res) => {
        console.log(res);
        return res.data;
      }

    )
}