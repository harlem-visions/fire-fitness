import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <main>
            <header>
                <nav>
                    <div class="logo">
                        <img src="assets/favicon.ico" alt="Fire Fitness Logo" />
                    </div>
                    <ul class="nav-links">
                        <li><a href="#home">Dashboard</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <div class="container">
                <div class="top-container">
                    <h1>Hello, Stranger</h1>
                    <div class="button-container">
                        <button>Add Meal</button>
                        <button>Add Workout</button>
                    </div>
                </div>
                <div class="main-card"></div>
                <div class="side-cards">
                    <div class="card"></div>
                <div class="card"></div>
                </div>
            </div>
            <script src="" async defer></script>
        </main>
    );
  }
}

export default Home;