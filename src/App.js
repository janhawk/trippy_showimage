import React from 'react';


class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    cities: [],
  }
}

  componentDidMount() {
    const url = "http://localhost:3001/api/home";
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log('data', data);
      const cities = data.cities;
      console.log(cities);
      this.setState({
        cities
      })
    });
  }


  render() {
    return(
      <div>
        Test
        {this.state.cities.map((city) => {
          console.log("city", city)
          return (
            <div>
              <img src ={'http://localhost:3001' + city .source}/>
              <p>
                {city.name}
              </p>
            </div>
          );
        })}
        
      </div>
    )
  }
}
export default App;