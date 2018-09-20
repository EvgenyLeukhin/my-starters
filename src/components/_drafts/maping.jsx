// =========================== MAPING COMPONENTS  =========================== ->
import dataJSON from './part_to/data.json';
// How much data in JSON - so much <li> will be render
// { "headerLinks": [ {"name": "Home",    "href": "#"},
//                    {"name": "Product", "href": "#" },
//                    {"name": "Team",    "href": "#"},
//                    {"name": "About",   "href": "#"} ] }

const someComponent = (props) => {
  return (
    <ul className="main-menu">
      {
        dataJSON.headerLinks.map((item, index) => { // without index will be warning
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })
      }
    </ul>
  );
};



// props use (datajson load in App)
const someComponent = (props) => {
  return (
    <ul className="main-menu">
      {
        props.src.map((item, index) => { // without index will be warning
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })
      }
    </ul>
  );
};
// =========================== MAPING COMPONENTS  =========================== -<
