import React, { useState } from 'react';
import M from 'materialize-css';

const WizardForm = () => {
  const [step, setStep] = useState(1);
  const [formData1, setFormData1] = useState({
    campo1: '',
    campo2: ''
  });
  const [formData2, setFormData2] = useState({
    campo3: '',
    campo4: ''
  });
  const [formData3, setFormData3] = useState({
    campo5: '',
    campo6: ''
  });
  const [formData4, setFormData4] = useState({
    campo7: '',
    campo8: ''
  });

  const handleChange1 = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  };

  const handleChange2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };

  const handleChange3 = (e) => {
    setFormData3({ ...formData3, [e.target.name]: e.target.value });
  };

  const handleChange4 = (e) => {
    setFormData4({ ...formData4, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos de todos los formularios
    console.log({
      formData1,
      formData2,
      formData3,
      formData4
    });
    M.toast({ html: 'Datos enviados correctamente', classes: 'rounded' });
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <ul className="stepper horizontal" id="horizontal">
            <li className={`step ${step === 1 ? 'active' : ''}`}>
              <div className="step-title waves-effect" onClick={() => setStep(1)}>Paso 1</div>
              <div className="step-content">
                <form onSubmit={nextStep}>
                  <div className="input-field">
                    <input
                      id="campo1"
                      type="text"
                      className="validate"
                      name="campo1"
                      value={formData1.campo1}
                      onChange={handleChange1}
                    />
                    <label htmlFor="campo1">Campo 1</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="campo2"
                      type="text"
                      className="validate"
                      name="campo2"
                      value={formData1.campo2}
                      onChange={handleChange1}
                    />
                    <label htmlFor="campo2">Campo 2</label>
                  </div>
                  <button className="btn waves-effect waves-light" type="submit">
                    Siguiente
                  </button>
                </form>
              </div>
            </li>
            <li className={`step ${step === 2 ? 'active' : ''}`}>
              <div className="step-title waves-effect" onClick={() => setStep(2)}>Paso 2</div>
              <div className="step-content">
                <form onSubmit={nextStep}>
                  <div className="input-field">
                    <input
                      id="campo3"
                      type="text"
                      className="validate"
                      name="campo3"
                      value={formData2.campo3}
                      onChange={handleChange2}
                    />
                    <label htmlFor="campo3">Campo 3</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="campo4"
                      type="text"
                      className="validate"
                      name="campo4"
                      value={formData2.campo4}
                      onChange={handleChange2}
                    />
                    <label htmlFor="campo4">Campo 4</label>
                  </div>
                  <div>
                    <button className="btn waves-effect waves-light" type="button" onClick={prevStep}>
                      Anterior
                    </button>
                    <button className="btn waves-effect waves-light" type="submit">
                      Siguiente
                    </button>
                  </div>
                </form>
              </div>
            </li>
            <li className={`step ${step === 3 ? 'active' : ''}`}>
              <div className="step-title waves-effect" onClick={() => setStep(3)}>Paso 3</div>
              <div className="step-content">
                <form onSubmit={nextStep}>
                  <div className="input-field">
                    <input
                      id="campo5"
                      type="text"
                      className="validate"
                      name="campo5"
                      value={formData3.campo5}
                      onChange={handleChange3}
                    />
                    <label htmlFor="campo5">Campo 5</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="campo6"
                      type="text"
                      className="validate"
                      name="campo6"
                      value={formData3.campo6}
                      onChange={handleChange3}
                    />
                    <label htmlFor="campo6">Campo 6</label>
                  </div>
                  <div>
                    <button className="btn waves-effect waves-light" type="button" onClick={prevStep}>
                      Anterior
                    </button>
                    <button className="btn waves-effect waves-light" type="submit">
                      Siguiente
                    </button>
                  </div>
                </form>
              </div>
            </li>
            <li className={`step ${step === 4 ? 'active' : ''}`}>
              <div className="step-title waves-effect" onClick={() => setStep(4)}>Paso 4</div>
              <div className="step-content">
                <form onSubmit={handleSubmit}>
                  <div className="input-field">
                    <input
                      id="campo7"
                      type="text"
                      className="validate"
                      name="campo7"
                      value={formData4.campo7}
                      onChange={handleChange4}
                    />
                    <label htmlFor="campo7">Campo 7</label>
                  </div>
                  <div className="input-field">
                    <input
                      id="campo8"
                      type="text"
                      className="validate"
                      name="campo8"
                      value={formData4.campo8}
                      onChange={handleChange4}
                    />
                    <label htmlFor="campo8">Campo 8</label>
                  </div>
                  <div>
                    <button className="btn waves-effect waves-light" type="button" onClick={prevStep}>
                      Anterior
                    </button>
                    <button className="btn waves-effect waves-light" type="submit">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WizardForm;
