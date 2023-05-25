import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Archivo CSS personalizado para Login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para hacer la verificación del usuario
  };

  return (
    <div className="container">

      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="logo d-flex align-items-center w-auto">                 
                  <span className="d-none d-lg-block">Scryptum</span>
                </a>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p className="text-center small">Enter your username & password to login</p>
                  </div>
                  <Form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                    <div className="col-12">
                      <FormGroup className="form-group">
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <Input className="form-control" type="email" name="email" id="email" placeholder="Ingrese su correo electrónico" value={email} onChange={handleEmailChange} required />
                        </div>
                      </FormGroup>
                    </div>
                    <div class="col-12">
                      <FormGroup className="form-group">
                        <Input type="password" name="password" id="password" placeholder="Ingrese su contraseña" value={password} onChange={handlePasswordChange} required />
                      </FormGroup>
                    </div>
                    
                    <Button className="btn btn-primary w-100" color="primary" type="submit">Ingresar</Button>
                    <div className="col-12">
                      <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
