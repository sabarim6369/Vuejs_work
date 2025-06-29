<template>
  <div class="login-container">
    <h1>Login Page</h1>
    <form class="login-form">
      <div class="form-group">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" v-model="password"/>
      </div>
      <button type="button" @click="handlesubmit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data(){
  return{

  email:"",
  password:"",
  error:{}
  }
  },
  methods:{
  handlesubmit(){
  localStorage.setItem("token","hello")
  this.$router.push("/dashboard")
  }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 24px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #555;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

button {
  margin-top: 10px;
  padding: 12px;
  font-size: 15px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #1a242f;
}
</style>
