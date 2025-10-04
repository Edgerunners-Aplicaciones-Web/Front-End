<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="login-container">
    <form class="login-card" @submit.prevent="onSubmit">
      <h1>Iniciar Sesión</h1>

      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input
            id="email"
            type="email"
            v-model="email"
            placeholder="tu@correo.com"
            required
        />
      </div>

      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
            id="password"
            type="password"
            v-model="password"
            placeholder="••••••••"
            required
        />
      </div>

      <button type="submit" class="btn-login">
        Ingresar
      </button>

      <p class="register-link">
        ¿No tienes cuenta? <a href="#">Regístrate</a>
      </p>
    </form>
  </div>
</template>

<style scoped>
/* === Contenedor === */
/*.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  padding: 1rem;
}
/*
/* === Tarjeta === */
.login-card {
  background: #ffffff;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.form-group{
  margin-bottom: 1rem;
  margin-right: 20px;
}

.login-card h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.7rem;
  color: #111827;
}

/* === Inputs === */
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  color: #374151;
}

.form-group input {
  width: 100%;
  padding: 0.65rem 0.8rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

/* === Botón === */
.btn-login {
  width: 100%;
  padding: 0.8rem;
  background: #6366f1;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-login:hover {
  background: #4f46e5;
}

/* === Link de registro === */
.register-link {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.register-link a {
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
