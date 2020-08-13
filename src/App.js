import React from 'react';

class App extends React.Component {
    constructor(){
      super();
      this.state={
          name: "Image",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sequi eligendi omnis maiores ipsa veritatis officia ut ex explicabo suscipit?",
          url: "https://miro.medium.com/max/4000/1*QqfEHlLdVVZIaytTsupcbw.jpeg",
          prevUrl: "https://miro.medium.com/max/4000/1*QqfEHlLdVVZIaytTsupcbw.jpeg",
          prevName: "Image",
          prevDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sequi eligendi omnis maiores ipsa veritatis officia ut ex explicabo suscipit?",
          data: []
      }
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
      fetch("https://api.unsplash.com/photos/?client_id=sIgb8YVi9SyPB6qZLNeCyleKsRl4yZ9uBc5gsW6LSXE")
            .then(res => res.json())
            .then(data => this.setState({ data }));
    }

    handleClick(event){
      event.preventDefault()
      const previousImg = this.state.url
      const previousName = this.state.name
      const previousDesc = this.state.desc
      this.setState({
        prevUrl: previousImg,
        prevName: previousName,
        prevDesc: previousDesc
      })
      const randNum = Math.floor(Math.random() * this.state.data.length)
      console.log(randNum)
      const randImg = this.state.data[randNum].urls.regular
      const imgDesc = this.state.data[randNum].description
      const imgName = this.state.data[randNum].user.username
      this.setState({
          url: randImg,
          name: imgName,
          desc: imgDesc
      })
    }

    render(){
      return (
        <div className="content">
            <h1 className="content__text">Click Generate to get a random image.</h1>
            <p className="content__para">The images refresh every 5 minutes, so don't worry if you're seeing the same ones.</p>
            <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Generate</button>

            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                <div className="card">
                  <h5 className="card-time">Previous Image</h5>
                  <img className="card-img-top" src={this.state.prevUrl} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">{this.state.prevName}</h5>
                    <p className="card-text">{this.state.prevDesc == null ? "This photo does not have a description" : this.state.prevDesc}</p>
                  </div>
                </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <h5 className="card-time">Current Image</h5>
                    <img className="card-img-top" src={this.state.url} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">{this.state.name}</h5>
                      <p className="card-text">{this.state.desc == null ? "This photo does not have a description" : this.state.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
      )
    }
}

export default App;

/*
<div className="image">
                <img className="image__img" src={this.state.url}></img>
                <h3 className="image_title">{this.state.name}</h3>
                <p className="image_desc">{this.state.desc == null ? "This photo does not have a description" : this.state.desc}</p>
            </div>

            */
