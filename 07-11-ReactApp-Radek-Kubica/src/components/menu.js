import React from 'react';


class HomePage extends React.Component {
  render() {
    return (
      <div class="menu">
        <button>
          <a href="/overview.html">
            <i class="fas fa-chart-bar"></i>
            Overview
          </a>
        </button>

        <button>
          <a href="/form.html">
            <i class="fas fa-chart-bar"></i>
            Add payment
          </a>
        </button>
      </div>
    );
  }
}

export default HomePage;
