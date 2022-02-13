import React, { Component } from 'react'

export default class register extends Component {
    state = {
        user: '',
        contact: '',
        email: '',
        pass: ''
    }

    handleButton = (u) => {
      u.preventDefault();
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

