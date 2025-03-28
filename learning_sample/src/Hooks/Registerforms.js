


import React, { createContext, useReducer, useContext } from "react";
const LocationContext = createContext();
const initialState = {
  country: "",
  state: "",
  city: "",
  name: "",
  email: "",
  password: "",
};


const locationReducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return { ...state, country: action.payload, state: "", city: "" }; 
    case "SET_STATE":
      return { ...state, state: action.payload, city: "" }; 
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const locations = {
  India: {
    states: {
      "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Thanjavur"],
      Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
    },
  },
  Australia: {
    states: {
      "New South Wales": ["Sydney", "Newcastle", "Brisbane"],
      Victoria: ["Melbourne", "Geelong", "Bendigo"],
    },
  },
  USA: {
    states: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      Texas: ["Dallas", "Houston", "Austin"],
    },
  },
};


const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, initialState);

  const getStatesAndCities = (selectedCountry) => {
    return locations[selectedCountry] || { states: {} };
  };

  const { states = {} } = getStatesAndCities(state.country);

  return (
    <LocationContext.Provider value={{ state, dispatch, states }}>
      {children}
    </LocationContext.Provider>
  );
};


const RegisterForm = () => {
  const { state, dispatch, states } = useContext(LocationContext);

 
  const handleInputChange = (type, value) => {
    dispatch({ type, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !state.name ||
      !state.email ||
      !state.password ||
      !state.country ||
      !state.state ||
      !state.city
    ) {
      alert("Please fill out all fields.");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(state)); 
    alert("Data Saved successfully!");
    dispatch({ type: "RESET" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Form</h2>

      {/* Name Input */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={state.name}
          onChange={(e) => handleInputChange("SET_NAME", e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Email Input */}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={state.email}
          onChange={(e) => handleInputChange("SET_EMAIL", e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Password Input */}
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={state.password}
          onChange={(e) => handleInputChange("SET_PASSWORD", e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>

      {/* Country Dropdown */}
      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          className="form-control"
          value={state.country}
          onChange={(e) => handleInputChange("SET_COUNTRY", e.target.value)}
          required
        >
          <option value="" disabled>
            Select Country
          </option>
          {Object.keys(locations).map((country, index) =>(
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <select
          id="state"
          className="form-control"
          value={state.state}
          onChange={(e) => handleInputChange("SET_STATE", e.target.value)}
          disabled={!state.country}
          required
        >
          <option value="" disabled>
            Select State
          </option>
          {Object.keys(states).map((stateName, index) => (
            <option key={index} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>
      </div>

      {/* City Dropdown */}
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <select
          id="city"
          className="form-control"
          value={state.city}
          onChange={(e) => handleInputChange("SET_CITY", e.target.value)}
          disabled={!state.state}
          required
        >
          <option value="" disabled>
            Select City
          </option>
          {states[state.state]?.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};


const App = () => {
  return (
    <LocationProvider>
      <div className="container">
        <RegisterForm />
      </div>
    </LocationProvider>
  );
};

export default App;