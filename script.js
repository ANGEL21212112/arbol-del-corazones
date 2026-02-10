body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(#ffb6c1, #ffe4e1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

h1 {
  color: #b30059;
}

button {
  padding: 12px 25px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  background: #ff4d88;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
}

#arbol {
  position: relative;
  width: 300px;
  height: 400px;
}

.corazon {
  position: absolute;
  font-size: 24px;
  animation: caer 1s ease-out forwards;
}

@keyframes caer {
  from {
    transform: translateY(-200px) scale(0);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
