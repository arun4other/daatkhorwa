import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters:[
        {
          "id": 1,
          "name": "Beautiful",
          "imgUrl": '../../Assets/images/Beautiful.jpg',
          "username": "Beautiful",
          "email": "hasnewali@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "pad rokne ki ninja technique",
          "username": "Dhuski",
          "imgUrl": "../../Assets/images/Dhuski.jpg",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Daatkhor Bhukkad",
          "username": "Daatkhor_bhukkhad",
          "email": "Nathan@yesenia.net",
          "imgUrl": "../../Assets/images/Daatkhor_bhukkhad.jpg",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "id": 4,
          "name": "Darawani Aurat",
          "username": "Darawani_Aurat",
          "imgUrl": "../../Assets/images/Darawani_Aurat.jpg",
          "email": "Julianne.OConner@kory.org",
          "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "phone": "493-170-9623 x156",
          "website": "kale.biz",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "id": 5,
          "name": "Haaye ..;)",
          "username": "haaye",
          "email": "Lucio_Hettinger@annie.ca",
          "imgUrl": "../../Assets/images/haaye.jpg",
          "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
              "lat": "-31.8129",
              "lng": "62.5342"
            }
          },
          "phone": "(254)954-1289",
          "website": "demarco.info",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "id": 6,
          "name": "Kya Kehna ",
          "username": "kya_kehna",
          "email": "Karley_Dach@jasper.info",
          "imgUrl": "../../Assets/images/kya_kehna.jpg",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "id": 7,
          "name": "Maasum Bacchi",
          "username": "Maasum_bacchi",
          "imgUrl": "../../Assets/images/Maasum_bacchi.jpg",
          "email": "Telly.Hoeger@billy.biz",
          "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
              "lat": "24.8918",
              "lng": "21.8984"
            }
          },
          "phone": "210.067.6132",
          "website": "elvis.io",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
        {
          "id": 8,
          "name": "Naakti Dikhane ka style",
          "username": "naakti",
          "imgUrl": "../../Assets/images/naakti.jpg",
          "email": "Sherwood@rosamond.me",
          "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
              "lat": "-14.3990",
              "lng": "-120.7677"
            }
          },
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        },
        {
          "id": 9,
          "name": "Stylish Aurat",
          "username": "Stylish_Aurat",
          "email": "Chaim_McDermott@dana.io",
          "imgUrl": "../../Assets/images/Stylish_Aurat.jpg",
          "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
              "lat": "24.6463",
              "lng": "-168.8889"
            }
          },
          "phone": "(775)976-6794 x41206",
          "website": "conrad.com",
          "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
          }
        },
        {
          "id": 10,
          "name": "Vampire",
          "username": "Vampire",
          "imgUrl": "../../Assets/images/Vampire.jpg",
          "email": "Rey.Padberg@karina.biz",
          "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
              "lat": "-38.2386",
              "lng": "57.2232"
            }
          },
          "phone": "024-648-3804",
          "website": "ambrose.net",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
          }
        }
      ],
      searchField: ""
    };
  }
  
  // componentDidMount(){
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(response => response.json())
  //   .then(users => this.setState({monsters:users}));
    
    
  //   // this.setState({
  //   //   monsters: this.state.monsters.map(el => (el.name === 'Chelsey Dietrich' ? {...el.name, text} : el))
  //   // });
  //   // const id = 'Chelsey Dietrich';

  //   // this.setState(prevState => ({       monsters: prevState.monsters.map(el => (el.name === id ? { ...el.name, text } : el.name)) }))

  // }

  render(){
    // var id=8,title = "Arun Mishra";
    var { data } = this.state;
    
    const { monsters, searchField} = this.state;
    const newSearchedFields = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    // var index = monsters.findIndex(obj => obj.id === 8);
    // console.log(index);
    // monsters[index].name = title;
    // this.setState({monsters:monsters});

    return(
      <div className = "App">
        <h3>Happy Birthday Diksha (Monster)</h3>
        <SearchBox placeHolder="search monster"
          handleChange = {e => {this.setState({searchField:e.target.value})}}
        />
        <CardList monsters = {newSearchedFields}/>
      </div>
    )
  }
  
  // constructor(){// This is to show how the click can change the name using setState method that is provided by the component class from the react.
  //   super();
  //   this.state={
  //    monster:[
  //      {
  //        name: "Arun",
  //        id: "a1"
  //      },{
  //       name: "Kailash",
  //       id: "a2"
  //     },{
  //       name: "Omkar",
  //       id: "a3"
  //     },{
  //       name: "Manish",
  //       id: "a4"
  //     }
  //    ]      
  //   };
  // }

  // render(){
  //   return(
  //     <div className = "App">
  //       {//this braces inside our div allows us to modify the things as we want in our javascript function and sttle
  //         this.state.monster.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
  //       }
  //     </div>
  //   );
  // }

  // render(){// This is to show how the click can change the name using setState method that is provided by the component class from the react.
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           {this.state.string}
  //         </p>
  //         <button onClick= {()=> {this.setState({string: "Hello Jhingur"})}}>Change Name</button>
  //       </header>
  //     </div>
  //   );
  // }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
