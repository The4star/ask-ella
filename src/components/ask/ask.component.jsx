import React, { Component } from 'react'; 

class Ask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      topic: 'Event Management',
      email: '',
      phone: '',
      hideTopicOptions: true
    }
  }

  componentDidMount = () => {
    this.setInitialInputWidth()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.topic !== this.state.topic) {
      this.resizeSelector()
    }
  }

   // set initial widths of all the inputs
   setInitialInputWidth = () => {
    const inputs = document.querySelectorAll('.ask-input')
    inputs.forEach(input => {
      if (input.placeholder === "phone number") {
        input.setAttribute('size', input.getAttribute('placeholder').length)
      } else {
       input.setAttribute('size', input.getAttribute('placeholder').length - 2)
      }
      
    })
   }

  handleChange = (e) => {
    const input = e.target
    const { name, value, placeholder } = e.target
    this.setState({ [name]: value})
    this.resizeInput(input, value, placeholder)
  }

  resizeInput = (input, value, placeholder) => {
     if (value < 1 ) {
      input.setAttribute('size', placeholder.length - 1)
    } else {
      return input.setAttribute('size', value.length + 0.2)
    }
  }

  resizeSelector = () => {
    const input = document.querySelector('[name=topic]')
    const { placeholder, value } = input
    if (value < 1 ) {
     input.setAttribute('size', placeholder.length - 1)
   } else {
     return input.setAttribute('size', value.length + 0.2)
   }
 }

 renderOptions = (selectOptions) => {
  return (
    <>
    <div className="opaque-background" onClick={() => this.setState({hideTopicOptions: true})}></div>
      <div className="topic-options">
        <h3>Please Select</h3>
        {
          selectOptions.map((selectOption, i) => {
          return <p key={i} onClick={() => this.setState({hideTopicOptions:true, topic: selectOption})} value={selectOption}>{selectOption}</p>
          })
        }
      </div>
    </>
  ) 
  
}

  render() {

    const {
      name,
      topic,
      email,
      phone,
      hideTopicOptions
    } = this.state

    const selectOptions = ["Event Management", "Cast Management", "Band Management", "Airbnb Management", "Fur mum advice", "Coaching"]
    return (
      <div className="ask-section">
        <div className="ask-content-wrapper">
          <div className="header">
            <h2>
              Ask <span>Ella</span>
            </h2>
          </div>
          <form name="Contact Form" method="POST" data-netlify="true" action="/thankyou">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="inputs">
              <label className="ask-label" for="name">Hey, my name is</label> 
              <input className="ask-input" value={ name } onChange={ this.handleChange } maxlength="30" autocomplete="off" type="text" name="name" placeholder="full name"></input>
              <label className="ask-label" for="topic">and I'd like to start a conversation about</label>
              <input className="ask-input topic" value = { topic } onClick={() => this.setState({ hideTopicOptions: false})} type="text" placeholder="a Sitecore Upgrade" name="topic"></input>
              {
                hideTopicOptions === false &&
                this.renderOptions(selectOptions)
              }
              <label className="ask-label" for="email">. My Email Address is</label>
              <input className="ask-input" value={ email } onChange={ this.handleChange } maxlength="50" autocomplete="off" type="email" name="email" placeholder="email address"></input>
              <label className="ask-label" for="phone">and my phone number is</label>            
              <input className="ask-input" value={ phone } onChange={ this.handleChange } maxlength="10" autocomplete="off" type="text" name="phone" placeholder="phone number"></input>
              <span className="ask-fullstop">.</span>
            </div>
            <div className="cta">
                <button className="rect-button red submit" type="submit">
                  Ask Ella
                </button>
            </div>
          </form> 
        </div>
      </div>
    )
  }
  
}

export default Ask;