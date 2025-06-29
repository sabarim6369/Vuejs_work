<template>
  <div class="signup-container">
    <h1>Signup Page</h1>
    <form class="signup-form">
      <div class="form-group">
        <label>Name:</label>
        <input type="text" v-model="name" placeholder="Enter your name" />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label>Email:</label>
        <input type="email" v-model="email" placeholder="Enter your email" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label>Password:</label>
        <input
          type="password"
         v-model="password"
          placeholder="Enter your password"
        />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>

      <button type="button" @click="handleSubmit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: {},
    };
  },
 methods: {
  handleSubmit() {
    this.errors = {};

    // Name validation
    if (!this.name) {
      this.errors.name = "Name is required";
    } else if (this.name.length < 6) {
      this.errors.name = "Name must be at least 6 characters";
    }

    // Email validation
    if (!this.email) {
      this.errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(this.email)) {
      this.errors.email = "Email format is invalid";
    }

    // Password validation
    if (!this.password) {
      this.errors.password = "Password is required";
    } else if (this.password.length < 6) {
      this.errors.password = "Password must be at least 6 characters";
    }

    // If no errors, show success
    if (Object.keys(this.errors).length === 0) {
      alert("Signup successful! 🎉");
      // Reset form if needed
      this.name = "";
      this.email = "";
      this.password = "";
      this.$router.push("/login")
    }
  },
}

  }

</script>

<style scoped>
.signup-container {
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

.signup-form {
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

.error {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>
