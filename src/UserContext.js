import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  state = {
    selectionsMovies:{},
    // check: false
  }
//   checkValue(){
//       this.setState({
//           check:!this.state.check
//       })
//   }
  // Method to update state
  setUser = selectionsMovies => {
    this.setState(prevState =>  ({ selectionsMovies }))
  }

  render() {
    const { children } = this.props
    const { selectionsMovies } = this.state
    const { setUser} = this

    return (
      <UserContext.Provider
        value={{
        selectionsMovies,
        setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext

export { UserProvider }
