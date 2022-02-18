import React, { Component } from 'react'

const ShowError = ({errors}) => {
  return (
    <div class="fst-italic text-danger"> {
      errors.map((errors, i) => <div key={i}>{errors}</div>)
    }
      
    </div>
  )
}

export default class register extends Component {
    state = {
        user: '',
        contact: '',
        email: '',
        pass: '',
        error: []
    }

    

    handleButton = (u) => {
      u.preventDefault();
      const {user, contact, email, pass} = this.state;

      let message = [];

      if (user.length === 0) {
        message = [...message, 'Please enter your username.']
      }

      if (contact.length === 0) {
        message = [...message, 'Please enter your contact.']
      }

      if (email.length === 0) {
        message = [...message, 'Please enter your email.']
      }

      if (pass.length === 0) {
        message = [...message, 'Please enter your password.']
      }

      const Re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (!Re.test(String(email).toLowerCase())) {
        message =[...message, 'Wrong email.']
      }

      if (pass.length < 6) {
        message = [...message, 'Password is too short']
      }

      if (message.length > 0) {
        this.setState({
          errors: message
        })
      } else {
        alert('user: ' + this.state.user + 
        ' | Contact: ' +
        this.state.contact + 
        ' | Email: ' +
        this.state.email + 
        ' | Password: ' +
        this.state.pass);
        this.setState({
          user: '',
          contact: '',
          email: '',
          pass: ''
        })
        this.setState({
          errors: []
        })
      }
    }

  render() {
    return (
      
      <div class="container d-flex flex-column">
		<div class="row">
			<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
				<div class="d-table-cell align-middle">
					<div class="text-center mt-4">
						<h1 class="h2">Get started</h1>
						<p class="lead">Start creating the best possible user experience for you customers.</p>
					</div>

					<div class="card card-body m-sm-4">
          {
            this.state.errors && <ShowError errors={this.state.errors} /> 
          }
						<form onSubmit={this.handleButton}>
							<div class="mb-3">
              <label class="form-label">Username</label>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                  name="user" 
                  maxLength={10}
                  onChange={u => this.setState({user: u.target.value})} />
                </div>
                
							</div>
							<div class="mb-3">
								<label class="form-label">Contact</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">+62</span>
                  <input type="number" class="form-control" placeholder="831xxx" aria-label="Username" aria-describedby="basic-addon1" 
                  name="contact" 
                  onChange={u => this.setState({contact: u.target.value})} />
                </div>
							</div>
              
							<div class="mb-3">
								<label class="form-label">Email</label>
                
								<div class="input-group">
                  <input type="email" class="form-control" placeholder="email@example.com" aria-label="Username" aria-describedby="basic-addon1"
                  name="email" 
                  onChange={u => this.setState({email: u.target.value})} />
                </div>
                
							</div>
              
							<div class="mb-3">
								<label class="form-label">Password</label>
								<div class="input-group">
                  <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"
                  name="pass" 
                  onChange={u => this.setState({pass: u.target.value})} />
                </div>
							</div>
							<button class="text-center mt-3 btn-primary" type="submit">Sign up</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    
    )
  }
}

