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
          "id": 21,
          "name": "Meri Maa (First Love)",
          "username": "mom",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 22,
          "name": "Mere papa (Second Love)",
          "username": "papa",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
       
        {
          "id": 24,
          "name": "Pooja Behna (Chudail)",
          "username": "pooja",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 30,
          "name": "Raj Kutta",
          "username": "raj",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 12,
          "name": "Bade Papa",
          "username": "bade_papa",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 15,
          "name": "Guddu Chacha",
          "username": "chacha",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 16,
          "name": "Ranjana Chachi",
          "username": "chachi",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 13,
          "name": "Bhabhi",
          "username": "bhabhi",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 23,
          "name": "Pinku Bhaiya",
          "username": "pinku_bhaiya",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 25,
          "name": "Shivaansh",
          "username": "shivansh",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 33,
          "name": "Kiran Bhabhi",
          "username": "kiran",
          "email": "Lucio_Hettinger@annie.ca",
          "imgUrl": "../../Assets/images/haaye.jpg"
        },
        {
          "id": 32,
          "name": "Mummy",
          "username": "mumma",
          "email": "Lucio_Hettinger@annie.ca",
          "imgUrl": "../../Assets/images/haaye.jpg"
        },
        {
          "id": 35,
          "name": "Hari Om ",
          "username": "hariom",
          "imgUrl": "../../Assets/images/kya_kehna.jpg"
        },
        {
          "id": 36,
          "name": "Pinki Dii",
          "username": "pinki",
          "imgUrl": "../../Assets/images/kya_kehna.jpg"
        },
        {
          "id": 40,
          "name": "Pout",
          "username": "pout",
          "imgUrl": "../../Assets/images/kya_kehna.jpg"
        },
        {
          "id": 27,
          "name": "Theatre (WAR)",
          "username": "theatre",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 2,
          "name": "pad rokne ki ninja technique",
          "username": "Dhuski",
          "imgUrl": "../../Assets/images/Dhuski.jpg",
          "email": "Shanna@melissa.tv"
        },
        {
          "id": 3,
          "name": "Daatkhor Bhukkad",
          "username": "Daatkhor_bhukkhad",
          "email": "Nathan@yesenia.net",
          "imgUrl": "../../Assets/images/Daatkhor_bhukkhad.jpg"
        },
        
        {
          "id": 7,
          "name": "Maasum Bacchi",
          "username": "Maasum_bacchi",
          "imgUrl": "../../Assets/images/Maasum_bacchi.jpg"
        },
        {
          "id": 1,
          "name": "Beautiful",
          "imgUrl": '../../Assets/images/Beautiful.jpg',
          "username": "Beautiful",
          "email": "hasnewali@april.biz"
        },
       
        {
          "id": 9,
          "name": "Stylish Aurat",
          "username": "Stylish_Aurat",
          "email": "Chaim_McDermott@dana.io",
          "imgUrl": "../../Assets/images/Stylish_Aurat.jpg"
        },
        
        {
          "id": 11,
          "name": "Aunties",
          "username": "aunties",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 14,
          "name": "Bhayander Beach",
          "username": "bhayander",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 17,
          "name": "Family",
          "username": "faamily",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 18,
          "name": "Family",
          "username": "famili",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 19,
          "name": "Family",
          "username": "family",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 20,
          "name": "Holi",
          "username": "holi",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 26,
          "name": "Sonia",
          "username": "sonia",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 31,
          "name": "Faltu Pose",
          "username": "pose",
          "email": "Lucio_Hettinger@annie.ca",
          "imgUrl": "../../Assets/images/haaye.jpg"
        },
        {
          "id": 5,
          "name": "Haaye ..;)",
          "username": "haaye",
          "email": "Lucio_Hettinger@annie.ca",
          "imgUrl": "../../Assets/images/haaye.jpg"
        },
        {
          "id": 8,
          "name": "Naakti Dikhane ka style",
          "username": "naakti",
          "imgUrl": "../../Assets/images/naakti.jpg"
        },
        {
          "id": 10,
          "name": "Vampire",
          "username": "Vampire",
          "imgUrl": "../../Assets/images/Vampire.jpg"
        },
        {
          "id": 6,
          "name": "Kya Kehna ",
          "username": "kya_kehna",
          "imgUrl": "../../Assets/images/kya_kehna.jpg"
        },
        {
          "id": 34,
          "name": "First pic in viraat ",
          "username": "first",
          "imgUrl": "../../Assets/images/kya_kehna.jpg"
        },
        
        {
          "id": 37,
          "name": "Rinku",
          "username": "dd",
          "imgUrl": "../../Assets/images/kya_kehna.jpg"
        },
        {
          "id": 38,
          "name": "Smile",
          "username": "smile",
          "imgUrl": "../../Assets/images/kya_kehna.jpg"
        },
        {
          "id": 39,
          "name": "Virat Pujan",
          "username": "viratpujan",
          "imgUrl": "../../Assets/images/kya_kehna.jpg"
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
        <img src={require("./Assets/images/dp.jpg")} className="desktopPicture"/>
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
